<?php
/**
 * Backend para Formulário de Contato - Teranex (Versão de Teste)
 *
 * Esta versão simula o envio de email para teste local.
 * Em produção, você precisará configurar um servidor de email real.
 */

// --- CONFIGURAÇÃO DE CORS ---
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type, Authorization");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

header('Content-Type: application/json');

// --- PROCESSAMENTO DO FORMULÁRIO ---

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['status' => 'erro', 'mensagem' => 'Método não permitido.']);
    exit;
}

$input = file_get_contents('php://input');
$data = json_decode($input, true);

if (
    !isset($data['nome']) || empty(trim($data['nome'])) ||
    !isset($data['email']) || !filter_var($data['email'], FILTER_VALIDATE_EMAIL) ||
    !isset($data['descricao']) || empty(trim($data['descricao']))
) {
    http_response_code(400);
    echo json_encode(['status' => 'erro', 'mensagem' => 'Dados inválidos. Por favor, preencha todos os campos obrigatórios corretamente.']);
    exit;
}

$nome = htmlspecialchars(strip_tags(trim($data['nome'])));
$email = filter_var(trim($data['email']), FILTER_SANITIZE_EMAIL);
$telefone = isset($data['telefone']) ? htmlspecialchars(strip_tags(trim($data['telefone']))) : 'Não informado';
$descricao = htmlspecialchars(strip_tags(trim($data['descricao'])));

// --- SIMULAÇÃO DE ENVIO DE EMAIL (PARA TESTE) ---
$destinatario = "contato@teranex.inf.br";
$assunto = "Novo Contato do Site - " . $nome;

$corpo_email = "Você recebeu uma nova mensagem do formulário de contato do site Teranex.\n\n" .
               "------------------------------------------------------\n" .
               "Nome: " . $nome . "\n" .
               "E-mail: " . $email . "\n" .
               "Telefone: " . $telefone . "\n\n" .
               "Mensagem:\n" .
               $descricao . "\n" .
               "------------------------------------------------------\n";

// Simular envio (em produção, use mail() ou uma biblioteca como PHPMailer)
$email_enviado = true; // Simulação para teste

// Salvar em arquivo de log para verificação
$log_file = 'emails_recebidos.log';
$log_entry = date('Y-m-d H:i:s') . " - Email simulado enviado para: $destinatario\n";
$log_entry .= "Assunto: $assunto\n";
$log_entry .= "Conteúdo:\n$corpo_email\n";
$log_entry .= "----------------------------------------\n";
file_put_contents($log_file, $log_entry, FILE_APPEND);

if ($email_enviado) {
    http_response_code(200);
    echo json_encode([
        'status' => 'sucesso',
        'mensagem' => '✅ SUCESSO! Mensagem enviada com sucesso! (Modo de teste - verifique o arquivo emails_recebidos.log)',
        'debug' => [
            'destinatario' => $destinatario,
            'assunto' => $assunto,
            'log_file' => $log_file
        ]
    ]);
} else {
    http_response_code(500);
    echo json_encode([
        'status' => 'erro',
        'mensagem' => '❌ ERRO: Não foi possível enviar a mensagem. (Modo de teste)',
        'debug' => 'Verifique a configuração do servidor de email'
    ]);
}
?>
