import app from "./app.js";
const PORT = 3001; // nào rảnh thì set env

app.listen(PORT, ()=>{
    console.log('running at port:', PORT)
})