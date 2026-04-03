<?php
// Ativar logs de erro para depuração
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: application/json; charset=UTF-8');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Verifica se a requisição é POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Método não permitido']);
    exit;
}

// Função para sanitizar dados
function sanitize($data) {
    if (!isset($data)) return '';
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data, ENT_QUOTES, 'UTF-8');
    return $data;
}

// Recebe e sanitiza os dados do formulário
$name = isset($_POST['name']) ? sanitize($_POST['name']) : '';
$email = isset($_POST['email']) ? sanitize($_POST['email']) : '';
$subject = isset($_POST['subject']) ? sanitize($_POST['subject']) : '';
$message = isset($_POST['message']) ? sanitize($_POST['message']) : '';

// Validação básica dos campos obrigatórios
if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    echo json_encode(['success' => false, 'message' => 'Todos os campos são obrigatórios.']);
    exit;
}

// Validação de email
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['success' => false, 'message' => 'Email inválido.']);
    exit;
}

// Validação de tamanho da mensagem
if (strlen($message) > 2000) {
    echo json_encode(['success' => false, 'message' => 'Mensagem muito longa (máximo 2000 caracteres).']);
    exit;
}

// Log dos dados para debug (remover em produção)
error_log("Dados recebidos: " . json_encode([
    'name' => $name,
    'email' => $email,
    'subject' => $subject,
    'message_length' => strlen($message)
]));

// Configuração do email
$to = "contato@teranex.inf.br";
$email_subject = $name . " - " . $subject;

$email_body = "Novo contato recebido no site TeraNex:\n\n";
$email_body .= "Nome: " . $name . "\n";
$email_body .= "Email: " . $email . "\n";
$email_body .= "Assunto: " . $subject . "\n";
$email_body .= "Mensagem:\n" . $message . "\n";
$email_body .= "\nEnviado em: " . date('d/m/Y H:i:s') . "\n";
$email_body .= "IP do usuário: " . $_SERVER['REMOTE_ADDR'] . "\n";

$headers = "From: TeraNex Site <noreply@teranex.inf.br>\r\n";
$headers .= "Reply-To: " . $email . "\r\n";
$headers .= "X-Mailer: PHP/" . phpversion() . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

// Tenta enviar o email
try {
    $mailSent = mail($to, $email_subject, $email_body, $headers);
    
    if ($mailSent) {
        echo json_encode([
            'success' => true, 
            'message' => 'Mensagem enviada com sucesso!'
        ]);
    } else {
        // Log do erro
        $lastError = error_get_last();
        error_log("Erro no mail(): " . ($lastError ? $lastError['message'] : 'Unknown error'));
        
        echo json_encode([
            'success' => false, 
            'message' => 'Erro ao enviar email. Verifique as configurações do servidor.'
        ]);
    }
} catch (Exception $e) {
    error_log("Exceção no envio: " . $e->getMessage());
    echo json_encode([
        'success' => false, 
        'message' => 'Erro interno do servidor.'
    ]);
}
?>
