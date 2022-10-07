const jwt = require('jsonwebtoken')

const verifyToken = async (req,res,next) => {
    const headers = await req.headers
    // console.log(headers)
    const token = headers['token']
    if (token) {
        try {
            const accessToken = await token.split(" ")[1]
            await jwt.verify(accessToken, process.env.JWT_ACCESS_KEY, (err,user) => {
                if (err)
                {
                    res.json("Your token is expired!")
                    next(err)
                }
                else {
                    next()
                }
            })
            // next()
        } catch(err) {
            console.log(err)
            next(err)
        }
    } else {
        console.log("You are not authenticated")
    }
}

module.exports = {
    verifyToken
}