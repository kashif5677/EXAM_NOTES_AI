import jwt from "jsonwebtoken"

const isAuth = async (req, res, next) => {
    try {

        let { token } = req.cookies

        if (!token) {
            return res.status(401).json({ message: "unauthorized" })
        }

        let verifyToken = jwt.verify(token, process.env.JWT_SECRET)
        if (!verifyToken) {
            return res.status(401).json({ message: " server unauthorized" })
        }
        req.userId = verifyToken.userId
        next()
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export default isAuth