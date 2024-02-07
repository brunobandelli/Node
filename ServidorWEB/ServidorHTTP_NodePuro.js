/*
De forma simples:

•http é o módulo do Node.js que é necessario para chamar o metodo para criar o servidor HTTP
•O método createServer() recebe uma função de retorno ( ()=>{} ) de chamada que será executada sempre que uma solicitação HTTP for recebida pelo servidor. 
•Esta função de retorno de chamada ( (req, res) => {} ) tem dois parâmetros,
 req (a solicitação HTTP recebida, Dados enviados pelo usuario) e res (o objeto de resposta HTTP que será enviado de volta para o cliente, Resposta que vai ser enviada para o usuario).
•Dentro da função de retorno de chamada, chamamos res.end() para enviar uma resposta de volta ao cliente. 
 Este método finaliza a resposta e envia o conteúdo especificado de volta para o cliente. 
 No nosso caso, estamos enviando a string "Teste" como conteúdo da resposta.
•.listen(3000);: Depois de criar o servidor, chamamos o método listen() para fazer o servidor escutar em uma porta específica. 
 Neste caso, estamos fazendo o servidor escutar na porta 3000. 
 Isso significa que o servidor estará disponível em http://localhost:3000.
além disso o Listem pode:
Aceitar conexões em um endereço IP específico: 
O método listen() também permite especificar um endereço IP no qual o servidor deve escutar por conexões. 
Por padrão, o servidor escuta em todas as interfaces de rede disponíveis (0.0.0.0), 
mas você pode especificar um endereço IP específico passando-o como o segundo argumento para o método. 
Por exemplo:
server.listen(3000, '127.0.0.1') 
fará com que o servidor escute por conexões apenas no endereço IP 127.0.0.1.
Manipular eventos de escuta: 
O método listen() retorna um objeto do servidor, que emite um evento 'listening' quando começa a escutar por conexões. 
Você pode usar esse evento para executar ações específicas quando o servidor começa a aceitar conexões.
Por exemplo: 
server.listen(3000, '127.0.0.1', () => {
  console.log('Servidor está escutando na porta 3000');
});
*/

const http = require('http')

http.createServer((req, res)=>{
    res.end("Teste")
}).listen(3000);

console.log("Servidor rodando")

/*
Outro exemplo:
O método res.writeHead() é usado para configurar o cabeçalho da resposta HTTP que será enviada de volta para o cliente. 
Ele aceita dois parâmetros: 
•Status Code: O primeiro parâmetro é o código de status HTTP, que indica o resultado da solicitação. 
Por exemplo, um código de status 200 indica que a solicitação foi bem-sucedida, 
enquanto um código 404 indica que a página não foi encontrada. 
•Headers: O segundo parâmetro é um objeto que contém os cabeçalhos HTTP adicionais que você deseja enviar junto com a resposta.
Eles são enviados antes do corpo da resposta e consistem em pares chave-valor que especificam detalhes sobre o conteúdo, 
formato, codificação, cookies, e muito mais. 
Exemplo:
Content-Type: Este cabeçalho especifica o tipo de mídia do conteúdo da resposta. 
Por exemplo, text/html para HTML, application/json para JSON, image/jpeg para imagens JPEG, etc. 
No exemplo dado, 'text/plain' indica que o conteúdo da resposta é texto simples.
Também tem, Cache-Control, Set-Cookie, Location, Content-Encoding, Last-Modified.
Esses são apenas alguns exemplos de cabeçalhos comuns. 
Existem muitos outros cabeçalhos HTTP, e cada um tem seu próprio propósito e uso específico. 
O uso correto dos cabeçalhos é importante para garantir a interoperabilidade e o desempenho adequado das comunicações HTTP.
*/

const http2 = require('http')

http.createServer((req,res)=>{
    res.writeHead(200,{
        'Content-Type':'text/html'
    });
    res.write('<h1>Teste2</h1>');
    res.end()
}).listen(1337)


/*
Rotas

*/

const http3 = require('http');
const porta = 3001
const host = '127.0.0.1'

const servidor = http3.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    if(req.url=='/'){
        res.write('<h1>Seja Bem vindo</h1>')
    }else if(req.url=='/canal'){
        res.write('<h1>Bruno Café Com Code</h1>')
    }
    else if(req.url=='/canal/node'){
        res.write('<h1>Curso de Node</h1>')
    }
    res.end()
})

servidor.listen(porta,host,()=>{console.log('Servidor 3 rodando')})


/*
O objeto req (abreviação de "request" ou "requisição") representa a requisição HTTP recebida pelo servidor Node.js. 
Ele contém várias propriedades que fornecem informações sobre a requisição, permitindo que você acesse o método HTTP, 
o URL, os cabeçalhos da requisição e muito mais. 

Alguns dos principais membros de req incluem:

req.url: Contém o caminho da URL solicitada pelo cliente.

req.method: Representa o método HTTP da requisição (por exemplo, GET, POST, etc.).

req.headers: Um objeto contendo os cabeçalhos da requisição HTTP.

req.params: Se você estiver usando roteamento com parâmetros, este objeto conterá os parâmetros da URL.

req.query: Um objeto contendo os parâmetros de consulta (query parameters) da URL, se houver.

req.body: O corpo da requisição, se houver. Este membro está disponível somente quando você está usando middleware para fazer o parsing do corpo da requisição, 
como body-parser.

Estes são apenas alguns exemplos das propriedades mais comuns de req. Dependendo do middleware e da configuração do seu servidor, 
pode haver mais propriedades disponíveis em req. Por exemplo, se você estiver usando autenticação com JWT, 
pode haver uma propriedade req.user que contém as informações do usuário autenticado.

Você pode acessar essas propriedades para obter informações sobre a requisição e tomar decisões sobre como responder a ela.
*/


/*
Parametros de entrada
*/

const http4 = require('http')
const url = require('url')
const porta2 = 3002
const host2 = '127.0.0.2'

const servidor2 = http4.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(req.url);
    const p=url.parse(req.url,true).query
    res.write('<br/>'+p.nome)
    res.write('<br/>'+p.curso)
    res.end()
})

servidor2.listen(porta2,()=>{console.log('Servidor 4 rodando')})

// POR NA URL: http://localhost:3002/?nome=Bruno&curso=Code