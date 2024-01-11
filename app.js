class Main{
    constructor(){

    }
    async 
}

for (const query of requiredParams) {
    if (!req.body[query]) {
        throw new MissingParamError(query);
    }
}