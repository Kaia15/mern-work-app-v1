const jwt = require('jsonwebtoken')

const generateToken = (type, user) => {
    switch(type) {
        case "accessToken": 
        const accessToken = jwt.sign({
            id: user._id,
        },
        process.env.JWT_ACCESS_KEY, {
            expiresIn: "30m"
        })
        return accessToken;
        case "refreshToken":
        const refreshToken = jwt.sign({
            id: user._id,
        },
        process.env.JWT_REFRESH_KEY, {
            expiresIn: "30d"
        })
        return refreshToken
    }
}

module.exports = {
    generateToken
}