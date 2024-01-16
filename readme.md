  ParamError - Biblioteca NPM para Verificação de Erros de Parâmetros

ParamError - Biblioteca NPM para Verificação de Erros de Parâmetros
===================================================================

Descrição
---------

O `param-error` é uma biblioteca JavaScript projetada para verificar erros de parâmetros em solicitações de API. Ele utiliza um arquivo de configuração JSON (`params.json`) para definir os parâmetros obrigatórios para diferentes endpoints.

Instalação
----------

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado em seu ambiente antes de seguir as etapas abaixo.

Instale a biblioteca `param-error` via npm:

    npm install param-error

Uso
---

### Configuração do Arquivo JSON (`params.json`)

O arquivo `params.json` na raiz do projeto define os parâmetros obrigatórios para cada endpoint. Aqui está um exemplo:

    {
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
    }

### Utilizando a Biblioteca `param-error` em seu Código

Instancie a classe `ParamError` da seguinte maneira:

    const ParamError = require('param-error');
    
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
    }

Estrutura do Projeto
--------------------

*   **`param-error.js`**: Implementação da classe `ParamError`.
*   **`missing-param-error.js`**: Implementação da classe `MissingParamError`.
*   **`params.json`**: Arquivo de configuração para parâmetros obrigatórios.

Contribuição
------------

Contribuições são bem-vindas! Sinta-se à vontade para abrir problemas ou enviar solicitações de pull.

Licença
-------

Este projeto está licenciado sob a [Licença MIT](LICENSE).