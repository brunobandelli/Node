const express = require('express')
const app=express()
const porta = process.env.porta

app.get('/',(req,res)=>{
    res.send('Seja bem vindo')
})
app.get('/canal',(req,res)=>{
    res.json({canal:'Café com code'})
})

app.listen(porta || 3000, ()=>{console.log('Servidor rodando')})