// main.js
const ParamError = require('./param-error');

function testParamError() {
    const paramErrorInstance = new ParamError();

    try {
        const endpoint = 'vendas';
        const params = {
            "data_inicio": "x",
        "data_fim": "y",
        "adq_id":"z"
        }
        paramErrorInstance.verify(endpoint, params);
        console.log('Parâmetros válidos');
    } catch (error) {
        if (error instanceof require('./missing-param-error')) {
            console.error(`Erro de parâmetro ausente: ${error.message}`);
        } else {
            console.error('Erro desconhecido:', error.message);
        }
    }
}

testParamError();