import express from "express";
import dotenv from "dotenv"
import connectDB from "./utlis/connectDB.js";
import authRouter from "./routes/auth.route.js";
import cookieParser from "cookie-parser";
import cors from "cors"
import userRouter from "./routes/user.routes.js";
import notesRouter from "./routes/generate.routes.js";
dotenv.config()

const app = express()

app.use(cors(
    {
        origin: 'https://exam-notes-ai-client-o2o0.onrender.com',
        credentials: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    }
))

app.use(express.json())
app.use(cookieParser())
const port = process.env.PORT || 3000
app.get('/', (req, res) => {
    res.json({ message: 'Hello World!' })
})

//routes   
app.use('/api/auth', authRouter)
app.use('/api/user', userRouter)
app.use('/api/notes', notesRouter)

app.listen(port, () => {
    connectDB()
    console.log(`Example app listening on port ${port}`)
})
