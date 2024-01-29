const {constants} = require('../constants')

const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.VALIDATION_ERROR:
            res.json({title:"Validation failed" ,message: err.message, stackTrace: err.stack});
            break;
        case constants.NOT_FOUND:
            res.json({title:"NotFound" ,message: err.message, stackTrace: err.stack});
            break
        case constants.FORBIDDEN:
            res.json({title:"request forbidden" ,message: err.message, stackTrace: err.stack});
        case constants.UNAUTHORIZED:
            res.json({title:"Unauthorized user" ,message: err.message, stackTrace: err.stack});
        case constants.INTERNAL_SERVER_ERROR:
            res.json({title:"Internal Server Error" ,message: err.message, stackTrace: err.stack});
        default:
            console.log("No error found, OK!!!");
            break;
    }
}

module.exports = errorHandler;