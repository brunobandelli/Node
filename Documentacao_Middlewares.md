Middleware é uma função que age no meio da requisição entre a comunicação do usuario e da rota.

Essa função pode realizar várias tarefas, como validar a requisição, modificar dados, realizar operações adicionais e, em seguida, decidir se a requisição deve continuar com a resposta da requisição ou não.
req -> next -> res

por exemplo:
function meuMiddleware(req, res, next) {
    console.log('Middleware executado!');
    next(); // Chama o próximo middleware na pilha
}

app.use(meuMiddleware);

O middleware é uma função que recebe três parâmetros: req (o objeto de solicitação), res (o objeto de resposta) e next (uma função que deve ser chamada para passar a solicitação para o próximo middleware na pilha). Dentro do middleware, pode-se realizar várias operações, como validar a solicitação, fazer log de informações, modificar objetos de solicitação e resposta, entre outros.

const express = require('express');
const app = express();

// Middleware de exemplo
function meuMiddleware(req, res, next) {
    console.log('Este é um middleware!');
    next(); // Chama a próxima middleware no ciclo de requisição-resposta
}

// Aplicando o middleware a todas as rotas
app.use(meuMiddleware);

// Rota de exemplo
app.get('/', (req, res) => {
    res.send('Olá, mundo!');
});

app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});


Ou um exemplo simples de como você pode encadear vários middlewares( pilha de middlewares )

const express = require('express');
const app = express();

// Middleware 1
function middleware1(req, res, next) {
    console.log('Middleware 1 executado!');
    next(); // Passa para o próximo middleware
}

// Middleware 2
function middleware2(req, res, next) {
    console.log('Middleware 2 executado!');
    next(); // Passa para o próximo middleware
}

// Middleware 3
function middleware3(req, res, next) {
    console.log('Middleware 3 executado!');
    next(); // Passa para o próximo middleware
}

// Rota final
app.get('/', (req, res) => {
    res.send('Rota final alcançada!');
});

// Aplicando os middlewares
app.use(middleware1);
app.use(middleware2);
app.use(middleware3);

// Iniciando o servidor
app.listen(3000, () => {
    console.log('Servidor iniciado na porta 3000');
});




function adminAuth(req, res, next){
    if(req.session.user != undefined){
        next()
    }else{
        res.redirect("/")
    }
}