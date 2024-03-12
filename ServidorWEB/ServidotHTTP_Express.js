/*
O Express é um framework web minimalista e flexível para Node.js, usado principalmente para construir aplicativos web e APIs. 
Ele fornece uma camada fina de recursos essenciais para facilitar a criação rápida e eficiente de aplicativos web.

Algumas das características do Express incluem:

Roteamento simplificado: 
O Express simplifica o roteamento de URLs para diferentes partes do seu aplicativo, 
tornando mais fácil definir como o aplicativo responde a solicitações HTTP em diferentes caminhos.

Middleware: 
O Express utiliza um sistema de middleware que permite executar funções intermediárias durante o ciclo de vida de uma solicitação HTTP.
Isso é útil para realizar tarefas como autenticação, registro de logs, compressão de dados e muito mais.

Gerenciamento de requisições e respostas: 
Com o Express, você pode manipular solicitações HTTP (como GET, POST, DELETE, etc.) e 
enviar respostas de maneira fácil e eficiente.

Integração com diversos templates de view: 
Express suporta uma variedade de engines de template como Pug, EJS, Handlebars, 
entre outros, permitindo que você renderize páginas HTML de maneira dinâmica.

Suporte para aplicativos RESTful: 
O Express é comumente usado para criar APIs RESTful, 
tornando a criação e o consumo de serviços web muito mais simples.

Extensibilidade:
O Express é altamente extensível, 
permitindo que você adicione facilmente funcionalidades extras através de middleware ou plugins.
*/

//Iniciando de forma simples um servidor pelo express

// Importa o módulo Express
const express = require('express');

// Cria uma instância do aplicativo Express
const app = express();


// Define o aplicativo para ouvir na porta 4000
app.listen(4000, function(erro) {
    if(erro){
        console.log("Ocorreu um erro!")
    }else{
        console.log("Servidor iniciado com sucesso!")
    }
});





/*----------------------------------------------------------------------------------------------------------------------------*/

/*Rotas*/

//Exemplo 01: Criando Rotas



// Importa o módulo Express
const express1 = require('express');

// Cria uma instância do aplicativo Express
const app1 = express1();

// Define uma rota para a página inicial ('/')
app1.get('/', function(req, res) {
    // Retorna uma resposta com a mensagem "Olá, mundo!"
    res.send('Olá, mundo!'); // OBS: Você só pode enviar resposta uma unica vêz na mesma rota, e não pode deixar de enviar, se não trava o servidor.
});

// Define o aplicativo para ouvir na porta 3000
app1.listen(3000, function() {
    // Imprime uma mensagem no console quando o servidor está ouvindo
    console.log('Servidor iniciado em http://localhost:3000');
});


/*----------------------------------------------------------------------------------------------------------------------------*/

//Exemplo 02: Rotas com parametros  -- FAZEEEEEEER EXPLICAÇÃO


// Importa o módulo Express
const express2 = require('express');

// Cria uma instância do aplicativo Express
const app2 = express2();

// Define a porta para o valor da variável de ambiente 'porta' ou 3000 se não estiver definida
const porta = process.env.porta;

// Define uma rota para a página inicial ('/')
app2.get('/', (req, res) => {
    // Envia uma resposta de texto "Seja bem vindo" para o cliente que fez a solicitação
    res.send('Seja bem vindo');
});

// Define uma rota para '/canal' com parametro obrigatório e passa esse parametro pro html
app2.get('/canal/:nome', (req, res) => {
    // Envia uma resposta JSON com o objeto {canal: req.params.nome} para o cliente que fez a solicitação
    res.json({ canal: req.params.nome }); //recebendo o parametro da rota 
});
// OBS: eu posso passar quantos parametros que eu quiser, por exemplo: '/canal/:nome/:proprietario'

// Define uma rota para '/opcional' com parametro NÃO obrigatório e passa esse parametro pro html
app2.get('/opcional/:nome?', (req, res) => {
    // Envia uma resposta JSON com o objeto {opcional: req.params.nome || "ok"} para o cliente que fez a solicitação
    res.json({ opcional: req.params.nome || "ok"}); //recebendo o parametro da rota 
});
// OBS: eu posso passar quantos parametros que eu quiser.


// Inicia o servidor Express e o faz escutar na porta definida
app2.listen(porta || 3001, () => {
    // Imprime uma mensagem no console quando o servidor está ouvindo
    console.log('Servidor iniciado em http://localhost:3001');
});

/*----------------------------------------------------------------------------------------------------------------------------*/

//Exemplo 03: Query params
/*os query params são parametros completamente dinamicos e opcionais*/

const express3 = require('express')

const app3 = express3()

app3.get('/canal/youtube', (req,res) => {
    var canal = req.query["canal"]
    if(canal){
        res.send(canal)
    }else{
        res.send("Nenhum canal fornecido!")
    }
})

app3.listen(3002,()=>{
    console.log('Servidor iniciado em http://localhost:3002');
})

//Como acessar: http://localhost:3002/canal/youtube?canal=exemplo

/*
Parâmetros de Consulta (query params):
São pares de chave-valor opcionais que vêm após o caminho da URL e são separados por "?", e as várias partes são separadas por "&".
Eles fornecem uma maneira de enviar dados adicionais para o servidor além da própria URL.
Acessados através do objeto req.query.
Úteis para filtrar, ordenar ou paginar resultados, ou para fornecer dados adicionais que não são parte do identificador do recurso.
*/

/*----------------------------------------------------------------------------------------------------------------------------*/

//Exemplo 04: Params
/*os parâmetros são frequentemente usados para capturar valores dinâmicos em URLs.*/

const express4 = require('express')

const app4 = express4()

app4.get('/:novoCanal', (req,res) => {
    var canal = req.params.novoCanal
    if(canal){
        res.send(canal)
    }else{
        res.send("Nenhum canal fornecido!")
    }
})

app4.listen(3003,()=>{
    console.log('Servidor iniciado em http://localhost:3003');
})

//Como acessar: http://localhost:3003/exemplo

/*
Parâmetros de Rota (params):
São partes da própria URL que correspondem a segmentos específicos definidos na rota.
Eles são definidos na própria rota usando ":" seguido pelo nome do parâmetro.
Capturam valores dinâmicos de segmentos de URL.
Acessados através do objeto req.params.
Úteis para identificar recursos específicos em uma aplicação RESTful, como IDs de usuário em /users/:userId.
*/

/*
Em resumo, os parâmetros de rota são usados para identificar recursos específicos na própria URL, 
enquanto os parâmetros de consulta são usados para enviar dados adicionais para o servidor além da própria URL. 
Ambos são úteis em diferentes contextos e podem ser usados juntos para construir APIs robustas e flexíveis.
*/