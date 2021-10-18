<p align="center">
  <a href="" rel="noopener">
 <img src="https://user-images.githubusercontent.com/63686057/137713822-24c6911c-597a-4157-a16e-ba8e0f156d3a.png" alt="Logo do Projeto"></a>
</p>

<h3 align="center">CountryFinder</h3>

---

<p align="center"> Projeto realizado utilizando a API da Softplan e as ferramentas do React/Apollo. Dentro do tempo limite previamente combinado. (48 horas)
    <br> 
</p>

## 🔥 OBSERVAÇÕES:

A imagem referente a bandeira dos países está sendo retornada com problema da API, então decidi optar por colocar uma imagem fixa no lugar da bandeira. Também tentei dar deploy no projeto mas devido ao fato da API não usar "https", retorna um erro de mixed content em qualquer serviço de hospedagem que reforce SSL. Impossibilitando seu deploy de forma efetiva.

## 📝 Índice

- [Sobre](#sobre)
- [Primeiros Passos](#primeiros_passos)
- [Feito Com](#feito_com)
- [Autores](#autores)

## 🧐 Sobre <a name = "sobre"></a>

Neste projeto foi utilizado o Apollo Client para manejar os dois tipos de estados:

### Do lado do cliente

O apollo disponibiliza a possibilidade de manejar estados que só são relevantes para o cliente: um booleano que identifica se o usuário está logado ou não, uma configuração que indica se o usuário escolheu um tema escuro e etc. No geral essa configuração tem como objetivo substituir o uso do Context API na aplicação, permitindo que tanto o estado do lado do cliente, quanto do servidor sejam acessados através da API do apollo. No caso dessa aplicação foi utilizado no lado do cliente um estado de **isLoggedIn** para identificar se o usuário realizou o login com sucesso ou não, utilizando rotas privadas para limitar o acesso.

### Do lado do servidor

O apollo disponibiliza a possibilidade de manejar estados que tem a ver com lado do servidor. O que possibilita manter um cache, afim de evitar diversas requisições para o mesmo resource. Na aplicação todas requisições foram feitas utilizando o Apollo.

Foi feita a listagem de todos os países e também foi aplicado paginação na hora de exibir as informações na página principal. A aplicação também permite que o usuário acesse a página de detalhes de cada país, onde é exibido mais informações referente ao país que ele clicou. O usuário pode pesquisar por países e alterar as informações através de um formulário feito para modificar as informações no lado do cliente.

### LOGIN PARA TESTES:

```
Email: john@gmail.com
Password: 123456
```

## 🏁 Primeiros Passos <a name = "primeiros_passos"></a>

Estas intruçōes te darão uma cópia funcional do projeto na sua máquina local para desenvolvimento e testes.

### Pré-requisitos

### Instalação

Para rodar o app basta clonar o projeto e executar

```
NPM INSTALL
```

```
NPM START
```

Outras dúvidas podem ser sanadas pelo repositório do [Create React App.](https://github.com/facebook/create-react-app)

## ⛏️ Feito Com <a name = "feito_com"></a>

- [ReactJs](https://reactjs.org) - Web Framework
- [Apollo](https://www.apollographql.com/) - Apollo Client

## ✍️ Autores <a name = "autores"></a>

- [@ThiagoAndradedev1](https://github.com/ThiagoAndradedev1) - Ideia & Trabalho inicial
