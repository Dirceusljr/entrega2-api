  

<p  align="center">

<a  href="https://github.com/LibraryLoops">

<img  alt="Feito pela LibraryLoops"  src="https://img.shields.io/badge/feito%20por-Library Loops-%237519C1">

</a>

  

<a  href="https://github.com/LibraryLoops/entrega2-api/commits/main">

<img  alt="GitHub last commit"  src="https://img.shields.io/github/last-commit/LibraryLoops/entrega2-api">

</a>

  

</p>

<h1  align="center">

<img  alt="Banner do projeto"  title="#Entrega 2 - Desenvolvendo a API"  src="https://i.ibb.co/6DMDWxV/Frame-1.png"  />

</h1>

  

<h4  align="center">

🚧 Library Loops - API 🚀 em desenvolvimento 🚧

</h4>

  

<p  align="center">

• <a  href="#-sobre-o-projeto">Sobre</a>

• <a  href="#-entregas-do-projeto">Entregas do Projeto</a>

• <a  href="#-como-executar-o-projeto">Como executar</a>

• <a  href="#-endpoints">Endpoints</a>

• <a  href="#-tecnologias">Tecnologias</a>

• <a  href="#-autores">Autores</a>

</p>

  
  

## 💻 Sobre o projeto

  

Esse projeto faz parte da entrega 2 - Desenvolvimento da API da equipe Library Loops do Bootcamp de desenvolvimento Fullstack do Avanti/Atlântico.

  

Ele servirá como o backend da aplicação para as operações necessárias de gestão de troca de livros e dos usuários.

  

---
  

## 📑 Entregas do projeto

  

- Implementar uma API utilizando Node.js e Express;

- Configurar Prisma ORM para interagir com o banco de dados PostgreSQL;

- Desenvolver endpoints para as operações CRUD (Create, Read, Update, Delete) necessárias para a gestão de usuários e livros;

- Implementar autenticação segura usando JWT (JSON Web Token);

  
  

---

  

## 🚀 Como executar o projeto

  
  

### Pré-requisitos

  

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:

[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/).

Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

  

#### 🎲 Rodando o Backend (API)

  

```bash

  

# Clone este repositório

$  git  clone  git@github.com:LibraryLoops/entrega2-api.git

  

# Acesse a pasta do projeto no terminal/cmd

$  cd  entrega2-api

  

# Instale as dependências

$  npm  install

  

# Crie um arquivo .env de acordo com as variáveis de ambiente que estão no arquivo .env.example

  

# Migração a migração do banco de dados

$  npm run prisma:migrate

  

# Execute a aplicação

$  npm  run  dev

  

# O servidor inciará na porta:3000 - acesse http://localhost:3000

  

```

<p  align="center">

<a  href="https://github.com/Dirceusljr/entrega2-api/blob/dev/Insomnia_Entrega2-API.json"  target="_blank"><img  src="https://insomnia.rest/images/run.svg"  alt="Run in Insomnia"></a>

</p>

  
  

---

## 📚 Endpoints

  

A API expõe os seguintes *endpoints* a partir da *base URL*  `localhost:3000`:

### Endpoints de  `/auth`

-   `POST /auth/login`  - Realiza o login de um usuário.

### Endpoints de  `/usuarios`

-   `POST /usuarios`  - Cria um novo usuário.
-   `GET /usuarios`  - Obtém todos os usuários.
-   `GET /usuarios/:id`  - Obtém um usuário por ID.
-   `GET /usuarios/:usuarioId/livros`  - Obtém os livros de um usuário por ID.
-   `POST /usuarios/:usuarioId/livros`  - Cadastra um livro para um usuário.
-   `PUT /usuarios/:id`  - Atualiza um usuário por ID.
-   `PUT /usuarios/:usuarioId/livros/:id`  - Atualiza um livro de um usuário por ID.
-   `DELETE /usuarios/:id`  - Exclui um usuário por ID.
-   `DELETE /usuarios/:usuarioId/livros/:id`  - Exclui um livro de um usuário por ID.

### Endpoints de  `/livros`

-   `GET /livros`  - Obtém todos os livros.
-   `GET /livros/:id`  - Obtém um livro por ID.
-   `POST /livros`  - Cria um novo livro.
-   `PUT /livros/:id`  - Atualiza um livro por ID.
-   `DELETE /livros/:id`  - Exclui um livro por ID.

### Endpoints  de  `/cargos`

-  `GET /cargos`  -  Obtém  todos  os  livros.
-  `GET /cargos/:id`  -  Obtém  um  livro  por  ID.
-  `POST /cargos`  -  Cria  um  novo  livro.
-  `PUT /cargos/:id`  -  Atualiza  um  livro  por  ID.
-  `DELETE /cargos/:id`  -  Exclui  um  livro  por  ID.

### Endpoints  de  `/troca-pedidos`

-  `GET /troca-pedidos`  -  Obtém  todos  os  livros.
-  `GET /troca-pedidos/:id`  -  Obtém  um  livro  por  ID.
-  `POST /troca-pedidos`  -  Cria  um  novo  livro.
-  `PUT /troca-pedidos/:id`  -  Atualiza  um  livro  por  ID.
-  `DELETE /troca-pedidos/:id`  -  Exclui  um  livro  por  ID.

### Endpoints  de  `/avaliacao-livros`

-  `GET /avaliacao-livros`  -  Obtém  todos  os  livros.
-  `GET /avaliacao-livros/:id`  -  Obtém  um  livro  por  ID.
-  `POST /avaliacao-livros`  -  Cria  um  novo  livro.
-  `PUT /avaliacao-livros/:id`  -  Atualiza  um  livro  por  ID.
-  `DELETE /avaliacao-livros/:id`  -  Exclui  um  livro  por  ID.

### Endpoints  de  `/livros-desejados`

-  `GET /livros-desejados`  -  Obtém  todos  os  livros.
-  `GET /livros-desejados/:id`  -  Obtém  um  livro  por  ID.
-  `POST /livros-desejados`  -  Cria  um  novo  livro.
-  `PUT /livros-desejados/:id`  -  Atualiza  um  livro  por  ID.
-  `DELETE /livros-desejados/:id`  -  Exclui  um  livro  por  ID.

### Endpoints  de  `/reputacao-usuarios`

-  `GET /reputacao-usuarios`  -  Obtém  todos  os  livros.
-  `GET /reputacao-usuarios/:id`  -  Obtém  um  livro  por  ID.
-  `POST /reputacao-usuarios`  -  Cria  um  novo  livro.
-  `PUT /reputacao-usuarios/:id`  -  Atualiza  um  livro  por  ID.
-  `DELETE /reputacao-usuarios/:id`  -  Exclui  um  livro  por  ID.

### Endpoints  de  `/usuario-cargos`

-  `GET /usuario-cargos`  -  Obtém  todos  os  livros.
-  `GET /usuario-cargos/:id`  -  Obtém  um  livro  por  ID.
-  `POST /usuario-cargos`  -  Cria  um  novo  livro.
-  `PUT /usuario-cargos/:id`  -  Atualiza  um  livro  por  ID.
-  `DELETE /usuario-cargos/:id`  -  Exclui  um  livro  por  ID.

### Paginação - Parâmetros de Query 

-   `limite`  (opcional): Número de itens por página. Valor padrão é  `5`.
-   `pagina`  (opcional): Número da página a ser retornada. Valor padrão é  `1`.
-   `ordenacao`  (opcional): Campo e ordem de ordenação no formato  `campo:ordem`. Valor padrão é  `id:asc`.

#### Exemplo de Uso

    GET /endpoint?limite=10&pagina=2&ordenacao=nome:desc



---
  

## 🛠 Tecnologias

  

As seguintes ferramentas foram usadas na construção do projeto:

  
  

#### **API** ([NodeJS](https://nodejs.org/en/) )

  

-  **[Express](https://expressjs.com/)**

-  **[JWT](https://jwt.io/)**

-  **[Prisma](https://www.prisma.io/)**

-  **[PostgreSQL](https://www.postgresql.org/)**

-  **[dotENV](https://github.com/motdotla/dotenv)**

-  **[Bcrypt](https://github.com/kelektiv/node.bcrypt.js)**

-  **[Celebrate](https://github.com/arb/celebrate)**

-  **[Joi](https://github.com/hapijs/joi)**   

#### **Utilitários**

- Editor: **[Visual Studio Code](https://code.visualstudio.com/)**
- Markdown: **[StackEdit](https://stackedit.io/)**, **[Markdown Emoji](https://gist.github.com/rxaviers/7360908)**

- Teste de API: **[Insomnia](https://insomnia.rest/)**


---

## 🦸 Autores

  

<a  href="https://github.com/Dirceusljr">

<img  style="border-radius: 50%;"  src="https://avatars.githubusercontent.com/u/141691213?v=4"  width="100px;"  alt=""/>
<br  />
<sub><b>Dirceu dos Santos</b></sub></a>  <a  href="https://github.com/Dirceusljr"  title="Github">🏊</a>
<br />
<br />

[![Linkedin Badge](https://img.shields.io/badge/-Dirceu-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/tgmarinho/)](https://www.linkedin.com/in/dirceusljr/)
[![Github Badge](https://img.shields.io/badge/-Dirceusljr-000000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/Dirceusljr)](https://github.com/Dirceusljr)
[![Gmail Badge](https://img.shields.io/badge/-dirceusljr@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:dirceusljr@gmail.com@gmail.com)](mailto:dirceusljr@gmail.com)


<a  href="https://github.com/alexandrosousadev">

<img  style="border-radius: 50%;"  src="https://avatars.githubusercontent.com/u/106404030?v=4"  width="100px;"  alt=""/>
<br  />
<sub><b>Alexandro Sousa</b></sub></a>  <a  href="https://github.com/alexandrosousadev"  title="Github">🚀</a>
<br />
<br />

[![Linkedin Badge](https://img.shields.io/badge/-Alexandro-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/alexandrosousa009/)](https://www.linkedin.com/in/alexandrosousa009/)
[![Github Badge](https://img.shields.io/badge/-Alexandro-000000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/alexandrosousadev)](https://github.com/alexandrosousadev)
[![Gmail Badge](https://img.shields.io/badge/-alexandrosousa01@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:alexandrosousa01@gmail.com@gmail.com)](mailto:alexandrosousa01@gmail.com)


<a href="https://github.com/heloisacativo">

<img  style="border-radius: 50%;"  src="https://avatars.githubusercontent.com/u/118030725?v=4"  width="100px;"  alt=""/>
<br />
<sub><b>Heloisa Cativo</b><sub></a> <a  href="https://github.com/heloisacativo" <title="Github">🐭</a>
<br />
<br />

[![Linkedin Badge](https://img.shields.io/badge/Heloisa-blue?style=flat-square&logo=Linkedin&logoColor=logoColor%3Dwhite&link=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fhelenacativo%2F)](https://www.linkedin.com/in/helenacativo/)
[![Github Badge](https://img.shields.io/badge/heloisacativo-000000?style=flat-square&logo=GitHub&logoColor=logoColor%3Dwhite&link=https%3A%2F%2Fgithub.com%2Fheloisacativo)](https://github.com/heloisacativo)
[![Gmail Badge](https://img.shields.io/badge/heloisacativo%40gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto%3Aheloisacativo%40gmail.com)](mailto:heloisacativo@gmail.com)
<br />
<br />

<a  href="https://github.com/THIAGOFELIPEFEI">

<img  style="border-radius: 50%;"  src="https://avatars.githubusercontent.com/u/104990579?v=4"  width="100px;"  alt=""/>
<br  />
<sub><b>Thiago Batista</b></sub></a>  <a  href="https://github.com/THIAGOFELIPEFEI"  title="Github">🚀</a>
<br />
<br />

[![Linkedin Badge](https://img.shields.io/badge/-ThiagoBatista-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/thiago-ff-batista/)](https://www.linkedin.com/in/thiago-ff-batista/)
[![Github Badge](https://img.shields.io/badge/-ThiagoBatista-000000?style=flat-square&logo=Github&logoColor=white&link=https://github.com/THIAGOFELIPEFEI)](https://github.com/THIAGOFELIPEFEI)
[![Gmail Badge](https://img.shields.io/badge/-thiagodexterpes@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:thiagodexterpes@gmail.com@gmail.com)](mailto:thiagodexterpes@gmail.com)

---