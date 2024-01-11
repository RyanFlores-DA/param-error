const MissingParamError = require('./missing-param-error')

class ParamError {
    constructor() {}

    verify(endpoint, params) {
        const requiredParamsConfig = require('./params.json');
        const requiredParams = requiredParamsConfig[endpoint] || [];
        for (const query of requiredParams) {
            if (!params[query]) {
                throw new MissingParamError(query);
            }
        }
    }
}

module.exports = ParamError;
