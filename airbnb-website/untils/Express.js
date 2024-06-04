class ExpressError extends Error{
    constructor(StatusCode,message){
        super();
        this.statusCode=statusCode
        this.message=message
    }
}

module.export=ExpressError
