# Sistema de Contato - TeraNex

## 📧 Implementação do Formulário de Contato

Este sistema permite o envio de mensagens através do formulário de contato do site TeraNex, processando os dados via PHP e enviando emails com respostas JSON estruturadas.

### 📁 Arquivos Criados

1. **`send_contact.php`** - Script PHP melhorado que processa o formulário com JSON
2. **`test_contact.html`** - Arquivo de teste atualizado para JSON
3. **`Contact.jsx`** - Formulário React modificado para integração com JSON

### 🔧 Funcionalidades Implementadas

- ✅ **Validação Avançada**: Campos obrigatórios, email e tamanho da mensagem
- ✅ **Sanitização Robusta**: Proteção contra XSS com ENT_QUOTES
- ✅ **Resposta JSON**: Comunicação estruturada frontend/backend
- ✅ **CORS Habilitado**: Suporte para requisições cross-origin
- ✅ **Logs de Debug**: Registro detalhado de dados e erros
- ✅ **Tratamento de Exceções**: Captura e log de erros PHP
- ✅ **Interface Responsiva**: Estados de sucesso, erro e carregamento
- ✅ **Validação de Tamanho**: Limite de 2000 caracteres na mensagem

### 📋 Campos do Formulário

- **Nome Completo** (obrigatório)
- **Email** (obrigatório, com validação robusta)
- **Assunto** (obrigatório, seleção)
- **Mensagem** (obrigatório, máximo 2000 caracteres)

### 📧 Configuração do Email

**Destinatário:** `contato@teranex.inf.br`  
**Formato do Assunto:** `[Nome do Remetente] - [Assunto Selecionado]`  
**Headers:** `TeraNex Site <noreply@teranex.inf.br>`

### 🚀 Como Testar

#### Método 1: Arquivo de Teste
1. Acesse: `/public/test_contact.html` em servidor PHP
2. Preencha o formulário
3. Clique em "Enviar Mensagem"
4. Observe resposta JSON no console e interface

#### Método 2: Formulário Principal
1. Execute a aplicação React: `npm run dev`
2. Vá para a página de Contato
3. Preencha e envie o formulário
4. Observe os estados de feedback

### ⚙️ Configuração do Servidor

#### Requisitos
- PHP 7.4 ou superior
- Servidor web (Apache/Nginx)
- Função `mail()` habilitada no PHP

#### Headers HTTP Implementados
```php
Content-Type: application/json; charset=UTF-8
Access-Control-Allow-Origin: *
Access-Control-Allow-Methods: POST, GET, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

### 🔍 Validações Implementadas

1. **Campos Obrigatórios:** Verifica preenchimento completo
2. **Email:** Validação robusta com `filter_var()`
3. **Sanitização:** `htmlspecialchars()` com `ENT_QUOTES` e UTF-8
4. **Tamanho:** Limite de 2000 caracteres na mensagem
5. **Método:** Aceita apenas POST (com suporte OPTIONS para CORS)
6. **Logs:** Registro detalhado de dados recebidos

### 🛠️ Estrutura da Mensagem Email

```
Assunto: [Nome] - [Assunto Selecionado]

Novo contato recebido no site TeraNex:

Nome: [Nome do usuário]
Email: [Email do usuário]
Assunto: [Assunto selecionado]
Mensagem:
[Mensagem completa]

Enviado em: [Data/Hora]
IP do usuário: [Endereço IP]
```

### 📄 Formato de Resposta JSON

#### Sucesso
```json
{
  "success": true,
  "message": "Mensagem enviada com sucesso!"
}
```

#### Erro
```json
{
  "success": false,
  "message": "Descrição do erro específico"
}
```

### 🐛 Solução de Problemas

#### Erro: "Método não permitido"
- Verifique se está usando POST
- Confirme suporte a OPTIONS para CORS

#### Erro: "Erro ao enviar email"
- Verifique configuração do servidor de email
- Confirme que a função mail() está habilitada
- Analise logs de erro PHP

#### Erro: "Email inválido"
- Use formato válido: `usuario@dominio.com`
- Evite caracteres especiais malformados

#### Erro: "Mensagem muito longa"
- Limite: 2000 caracteres máximo
- Mensagens mais longas precisam ser resumidas

### 📝 Logs de Depuração

O PHP agora registra automaticamente:
```php
// Dados recebidos
error_log("Dados recebidos: " . json_encode([...]));

// Erros de mail()
error_log("Erro no mail(): " . error_get_last()['message']);

// Exceções
error_log("Exceção no envio: " . $e->getMessage());
```

### 🔒 Segurança

- **Sanitização**: `htmlspecialchars()` com `ENT_QUOTES` e UTF-8
- **Validação**: Tipos de dados e formatos
- **CORS**: Headers apropriados para cross-origin
- **Logs**: Registro para auditoria sem exposição de dados sensíveis
- **Método**: Restrição a POST com preflight support

### 📞 Suporte e Monitoramento

Em caso de problemas:
1. **Verificar Logs**: Analise logs PHP para detalhes
2. **Testar Arquivo**: Use `test_contact.html` para isolamento
3. **Validar Email**: Confirme configuração mail() no servidor
4. **Debug CORS**: Verifique headers se há problemas cross-origin
5. **Console Browser**: Observe requisições e respostas JSON

---

**Status:** ✅ Implementado, Testado e Melhorado  
**Data:** 28/12/2024  
**Versão:** 2.0 (JSON + Melhorias)
