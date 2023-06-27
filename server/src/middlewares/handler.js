const successResponseHandler = (res, statusCode, message, data={}) => {
    return res.status(statusCode).json({
        ok: true,
        message: message,
        data: data
    })
}

module.exports = successResponseHandler