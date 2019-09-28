const express = require('express')
const app = express()
const multer = require('multer')
const upload = multer({dest: "images/"})

const path = require('path')

app.get('/', function (req,res){
    res.sendFile(path.resolve('index.html'))
})

app.post('/', upload.single('image') , function (req,res){
    console.log(req.file)
    console.log(req.body.username)
    res.status(200)
})


app.listen(3005, ()=>{
    console.log('server is runing on 3005')
})