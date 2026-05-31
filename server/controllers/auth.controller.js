import UserModel from "../models/user.model.js"
import { getToken } from "../utils/token.js"


export const googleAuth = async (req, res) => {
    try {
        const { name, email } = req.body
        let user = await UserModel.findOne({ email })
        if (!user) {
            user = await UserModel.create({ name, email })
        }
        let token = await getToken(user._id)

        // ❌ Remove res.cookie entirely
        // ✅ Just return token in response
        return res.status(200).json({ user, token })
    } catch (error) {
        return res.status(500).json({ message: `googleSignup Error ${error}` })
    }
}

export const logOut = async (req, res) => {
    try {
        await res.clearCookie("token")
        return res.status(200).json({ message: "LogOut Successfully" })
    } catch (error) {
        return res.status(500).json({ message: `Logout Error  ${error}` })
    }
}