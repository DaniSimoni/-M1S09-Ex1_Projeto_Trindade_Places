/* Contexto:
O projeto Trindade Places é uma iniciativa importante da prefeitura de Trindade para fornecer informações precisas e atualizadas sobre as instituições que prestam serviços públicos na cidade. Através da API desenvolvida em Node.js, os usuários poderão pesquisar, criar, atualizar e excluir informações sobre essas instituições, como nome do lugar e localização.

A escolha das tecnologias express e sequelize para o desenvolvimento do projeto permite uma implementação eficiente e escalável da API, enquanto a integração com o banco de dados garante que os dados sejam armazenados de forma segura e facilmente acessíveis para consulta e atualização.

O principal objetivo do projeto é fornecer uma base de dados confiável para a cidade de Trindade, visando melhorar a gestão dos serviços públicos e aumentar a transparência das informações sobre as instituições públicas.

Com a API desenvolvida, a prefeitura poderá fornecer aos cidadãos uma fonte confiável e atualizada de informações sobre os serviços públicos disponíveis na cidade, contribuindo para uma melhor qualidade de vida para a população.

Projeto:
Para iniciar um novo projeto Node.js + Express e contribuir para o desenvolvimento da API do projeto Trindade Places, siga os seguintes passos:

Certifique-se de ter o Node.js instalado em sua máquina.
Abra um terminal e crie uma nova pasta para o seu projeto.
Navegue até a pasta criada e inicialize o npm com o comando "npm init".
Instale o Express utilizando o comando "npm install express".
Crie um arquivo chamado "index.js" na raiz do seu projeto.
Abra o arquivo "index.js" e importe o Express com o comando "const express = require('express')".
Inicie o servidor Express e defina a porta 3333


const express = require('express');
const app = express();

app.listen(3000, () => {
    console.log('SERVIDOR ON!')
}); */