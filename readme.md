<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ParamError - Biblioteca NPM para Verificação de Erros de Parâmetros</title>
</head>

<body>

    <h1>ParamError - Biblioteca NPM para Verificação de Erros de Parâmetros</h1>

    <h2>Descrição</h2>
    <p>O <code>param-error</code> é uma biblioteca JavaScript projetada para verificar erros de parâmetros em solicitações de API. Ele utiliza um arquivo de configuração JSON (<code>params.json</code>) para definir os parâmetros obrigatórios para diferentes endpoints.</p>

    <h2>Instalação</h2>
    <p>Certifique-se de ter o <a href="https://nodejs.org/">Node.js</a> instalado em seu ambiente antes de seguir as etapas abaixo.</p>

    <p>Instale a biblioteca <code>param-error</code> via npm:</p>

    <pre><code>npm install param-error</code></pre>

    <h2>Uso</h2>

    <h3>Configuração do Arquivo JSON (<code>params.json</code>)</h3>
    <p>O arquivo <code>params.json</code> na raiz do projeto define os parâmetros obrigatórios para cada endpoint. Aqui está um exemplo:</p>

    <pre><code>{
    "vendas": [
        "data_inicio",
        "data_fim",
        "adq_id"
    ],
    "recebimentos": [
        "data_inicio",
        "data_fim",
        "status_id"
    ]
}</code></pre>

    <h3>Utilizando a Biblioteca <code>param-error</code> em seu Código</h3>
    <p>Instancie a classe <code>ParamError</code> da seguinte maneira:</p>

    <pre><code>const ParamError = require('param-error');

// ...

const paramErrorInstance = new ParamError();
try {
    paramErrorInstance.verify('vendas', {
        "data_inicio": "2024-01-01",
        "data_fim": "2024-01-31",
        "adq_id": 123
    });
    // Se nenhum erro for lançado, os parâmetros estão corretos.
    console.log("Parâmetros válidos.");
} catch (error) {
    // Trate o erro aqui, se necessário.
    console.error(error.message);
}</code></pre>

    <h2>Estrutura do Projeto</h2>
    <ul>
        <li><strong><code>param-error.js</code></strong>: Implementação da classe <code>ParamError</code>.</li>
        <li><strong><code>missing-param-error.js</code></strong>: Implementação da classe <code>MissingParamError</code>.</li>
        <li><strong><code>params.json</code></strong>: Arquivo de configuração para parâmetros obrigatórios.</li>
    </ul>

    <h2>Contribuição</h2>
    <p>Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas ou enviar solicitações de pull.</p>

    <h2>Licença</h2>
    <p>Este projeto está licenciado sob a <a href="LICENSE">Licença MIT</a>.</p>

</body>

</html>
