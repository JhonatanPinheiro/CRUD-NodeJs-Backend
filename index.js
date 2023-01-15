const { json } = require('express');
const express = require('express');

//console.log(express)
const server = express();

server.use(express.json());

//Query params = ?nome=NodeJS
//Route Params = /curso/2
//Request Body = {nome: 'Nodejs', tipo: 'Backend' }


//CRUD//Create//Read//Update//Delete



const cursos = ['Node JS', 'JavaScript', 'React Native'];


//Criando o novo middlewares - Esse middleware ele é global
server.use((req, res, next) => {

    console.log(`Requisição de chamada!${req.url}`);

    return next();

});



//Criando uma função para verificar se os dados do meu backend onde o arquivo Json de propriedade name seja alterado por outro atributo que não seja com o nome respectivo name 
// Isso imitirá um error de 400 informando que nome do curso é obrigatório
function checkCurso(req, res, next) {
    if (!req.body.name) {
        return res.status(400).json({ error: "Nome do curso é obrigatório" });
    }

    return next();

}

function checkIndexCurso(req, res, next) {
    const curso = cursos[req.params.index];

    if (!curso) {
        return res.status(400).json({ erro: "O usuário não existe" });
    }

    req.curso = curso;

    return next();


}





//Pegando as informações de todos os cursos que está no array  (GET - READ)
server.get('/cursos',(req, res) => {
    return res.json(cursos);
});

//Estou esperando que ele acesse essa rota: localhost:3000/curso/2


//Pegando as informações do curso desejado!   (GET - READ)
server.get('/cursos/:index', checkIndexCurso,(req, res) => {
    //console.log('Acessou a rota1');
    const { index } = req.params;

    //return res.send('Hellow World');
    //return res.json({curso: `Aprendendo ${id}`});
    //return res.json(cursos[index]);
    return res.json(req.curso);
});


//Criando um novo curso (POST - CREATE)
server.post('/cursos', checkCurso, (req, res) => {
    const { name } = req.body;
    cursos.push(name);

    return res.json(cursos);
});


//Atualizando um curso (UPDATE)
server.put('/cursos/:index', checkCurso, checkIndexCurso, (req, res) => {
    const { index } = req.params;
    const { name } = req.body;

    cursos[index] = name;

    return res.json(cursos);
});


//Excluindo um curso do Array
server.delete('/cursos/:index',checkIndexCurso, (req, res) => {
    const { index } = req.params;

    cursos.splice(index, 1)

    return res.json(cursos);
    //return res.json({message: "Curso deletado com sucesso"});
    //return res.json(cursos[index]);
});


server.listen(3000);


