import express from 'express'
import cookieParser from "cookie-parser";
const app = express()
// Middlewares
app.use(express.json())
// adding cookieParser to middleware stack
app.use(cookieParser());
app.use('/', ()=>
"hello các bạn đến vùng đất tự trị của TruongPham")

// Handle error when not match route 
app.use((req, res, next) =>{
    const error = new Error('Not found!')
    error.status = 500
    next(error)
})

export default app