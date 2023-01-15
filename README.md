------------------------------Comandos para executar uma aplicação-----------------
1º Abre o cmd do windowns
2º Encontro a pasta do projeto
3º Entre dentro dela e execute
4º node index.js
5º abre seu navegador e informe dentro dele o seguintes caminho: http://localhost:3000/curso/2
Obs: Nesse caso foi a porta 3000 porque eu define esse porta no meu programa.Tambem definir o caminho /curso/


---------------------------Instalando a biblioteca para atualizar sempre nossa página, sem precisar sair e atualizar novamente-----
Dentro da pasta do projeto no cmd irá executar
yarn add nodemon -D

Depois dentro da pasta irá executar esse comando para ativar essa atualização automática
nodemon index.js

Execute esse comando para instaar mais uma biblioteca
yarn add  nodemon -D

Depois dentro do arquivo package.json você irá colocar esse linhas de código

  "scripts": {
    "dev": "nodemon index.js"
  },

depois irá entrar novamente no cmd e executar esse comando para ativar a atualização automatica
yarn dev




------------------Oque é um middlewares------------------
O middleware é um software que diferentes aplicações usam para se comunicar umas com as outras. Ele oferece funcionalidade para conectar
aplicações de modo inteligente e eficiente, para que você possa inovar mais rapidamente.
