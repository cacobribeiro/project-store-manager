# Boas vindas ao repositório do projeto Store Manager!

Você já usa o GitHub diariamente para desenvolver os exercícios, certo? Agora, para desenvolver os projetos, você deverá seguir as instruções a seguir. Fique atento a cada passo, e se tiver qualquer dúvida, nos envie por Slack! #vqv 🚀

Aqui você vai encontrar os detalhes de como estruturar o desenvolvimento do seu projeto a partir deste repositório, utilizando uma branch específica e um Pull Request para colocar seus códigos.

---

## Instruções para entregar seu projeto:

### ANTES DE COMEÇAR A DESENVOLVER:

1. Clone o repositório
  * `git clone https://github.com:tryber/sd-0x-store-manager.git`.
  * Entre na pasta do repositório que você acabou de clonar:
    * `cd sd-0x-store-manager`

2. Instale as dependências [**Caso existam**]
  * `npm install`

3. Crie uma branch a partir da branch `master`
  * Verifique que você está na branch `master`
    * Exemplo: `git branch`
  * Se não estiver, mude para a branch `master`
    * Exemplo: `git checkout master`
  * Agora crie uma branch à qual você vai submeter os `commits` do seu projeto
    * Você deve criar uma branch no seguinte formato: `nome-de-usuario-nome-do-projeto`
    * Exemplo: `git checkout -b joaozinho-sd-0x-store-manager`

4. Adicione as mudanças ao _stage_ do Git e faça um `commit`
  * Verifique que as mudanças ainda não estão no _stage_
    * Exemplo: `git status` (deve aparecer listada a pasta _joaozinho_ em vermelho)
  * Adicione o novo arquivo ao _stage_ do Git
      * Exemplo:
        * `git add .` (adicionando todas as mudanças - _que estavam em vermelho_ - ao stage do Git)
        * `git status` (deve aparecer listado o arquivo _joaozinho/README.md_ em verde)
  * Faça o `commit` inicial
      * Exemplo:
        * `git commit -m 'iniciando o projeto x'` (fazendo o primeiro commit)
        * `git status` (deve aparecer uma mensagem tipo _nothing to commit_ )

5. Adicione a sua branch com o novo `commit` ao repositório remoto
  * Usando o exemplo anterior: `git push -u origin joaozinho-sd-0x-store-manager`

6. Crie um novo `Pull Request` _(PR)_
  * Vá até a página de _Pull Requests_ do [repositório no GitHub](https://github.com/tryber/sd-0x-store-manager/pulls)
  * Clique no botão verde _"New pull request"_
  * Clique na caixa de seleção _"Compare"_ e escolha a sua branch **com atenção**
  * Clique no botão verde _"Create pull request"_
  * Adicione uma descrição para o _Pull Request_ e clique no botão verde _"Create pull request"_
  * **Não se preocupe em preencher mais nada por enquanto!**
  * Volte até a [página de _Pull Requests_ do repositório](https://github.com/tryber/sd-0x-store-manager/pulls) e confira que o seu _Pull Request_ está criado

---

# Entregáveis

Para entregar o seu projeto você deverá criar um Pull Request neste repositório.

Lembre-se que você pode consultar nosso conteúdo sobre [Git & GitHub](https://course.betrybe.com/intro/git/) sempre que precisar!

---

## O que deverá ser desenvolvido

Você vai desenvolver sua primeira API utilizando a arquitetura MSC!

A API a ser construída trata-se de um sistema de gerenciamento de vendas, onde será possível criar, visualizar, deletar e atualizar produtos e vendas.

---

## Desenvolvimento

Você vai desenvolver todas as camadas da API (Models, Service caso necessário, e Controllers).

Através dessa aplicação, será possível realizar as operações básicas que se pode fazer em um determinado banco de dados: Criação, Leitura, Atualização e Exclusão (ou `CRUD`, pros mais íntimos 😜).

Você deve utilizar o banco MongoDB para a gestão de dados. Além disso, a API deve ser RESTful.

⚠️ **Dicas Importantes** ⚠️:

- Deve ser possível que o usuário, independente de cadastramento ou login, possa adicionar, ler, deletar e atualizar produtos no seu estoque. O usuário deve poder também enviar vendas para o sistema. Essas vendas devem validar se o produto em questão existe. Deve, também, ser possível ler, deletar e atualizar vendas.

- Para **todos os endpoints** garanta que:
  - Caso o recurso não seja encontrado, sua API retorne o status HTTP adequado com o body `{ message: '<recurso> não encontrado' }`
  - Em caso de erro, sua API retorne o status HTTP adequado com o body `{ error: { message: <mensagem de erro>, code: <código do erro> } }`
    - O código do erro deve ser determinado por você e deve seguir o mesmo padrão para toda a aplicação. Por exemplo: `'not_found'`, `'invalid_data'` e afins
  - Em caso de dados inválidos, sua API retorne o status HTTP adequado, com o body `{ error: { message: 'Dados inválidos', code: <código do erro> } }`.
  - Todos os retornos de erro devem seguir o mesmo formato. Para erros que requerem dados adicionais (por exemplo, para informar quais campos estão incorretos) utilize a propriedade `data` dentro do objeto `error`.
  - Para gerar os objetos de erro personalizados, você pode utilizar uma biblioteca de erros, como o [`boom`](https://www.npmjs.com/package/@hapi/boom).

- Você pode utilizar middlewares e objetos de erro personalizados para que não tenha que repetir a lógica de tratamento de erro em vários lugares. Não se esqueça também do [express-rescue](https://www.npmjs.com/package/express-rescue), ele pode facilitar muito o trabalho de tratar erros

- Quando estiver na dúvida sobre qual status HTTP utilizar, você pode consultar sites como o [httpstatuses.com](https://httpstatuses.com/), [restapitutorial.com](https://www.restapitutorial.com/httpstatuscodes.html) ou a [documentação sobre o assunto no MDN](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status). Com o tempo, você vai lembrar com facilidade o significado dos códigos mais comuns.

- Para realizar a validação dos dados, você pode utilizar middlewares como [`Joi`](https://www.npmjs.com/package/@hapi/joi) ou o [`Expresso Validator`](https://www.npmjs.com/package/@expresso/validator). Caso prefira, você também pode realizar a validação de forma manual.

---

### Data de Entrega

O projeto tem até a seguinte data: `DD/MM/YYYY - 14:00h`. Para ser entregue a avaliação final.

---

## Requisitos Obrigatórios:

### 💡Veja o exemplo a seguir de como o projeto pode se parecer depois de pronto. Lembre-se que você pode ~~e deve~~ ir além para deixar o projeto com a sua cara e impressionar à todos e a todas!

## ⚠️ Leia-os atentamente e siga à risca o que for pedido. ⚠️

###  Todos os seus endpoints devem estar no padrão REST

- Use os verbos HTTP adequados para cada operação.

- Agrupe e padronize suas URL em cada recurso.

- Garanta que seus endpoints sempre retornem uma resposta, havendo sucesso nas operações ou não.

- Retorne os códigos de status corretos (recurso criado, erro de validação, autorização, etc).

## ⚠️ Leia-os atentamente e siga à risca o que for pedido. ⚠️

Há um arquivo `index.js` no repositório. Não remova, nele, o seguinte trecho de código:

```javascript
app.get('/', (request, response) => {
  response.send();
});
```
Isso está configurado para o avaliador funcionar.

### Conexão com o Banco:

A conexão do banco local devera conter os seguintes parâmetros:

```javascript
const MONGO_DB_URL = 'mongodb://localhost:27017/StoreManager';
const DB_NAME = 'StoreManager';
```

Para o avaliador funcionar altere a conexão do banco para:

```javascript
const MONGO_DB_URL = 'mongodb://mongodb:27017/StoreManager';
const DB_NAME = 'StoreManager';
```

 ###  Tabelas
O banco terá duas tabelas: produtos e vendas 

A tabela de produtos deverá ter o seguinte nome: `products`

Os campos da tabela `products` terão esse formato:

```json
{ "name" : "Produto Silva", "quantity" : 10 }
```

A resposta do insert deve retornar após a criação é essa:

```json
{ "_id" : ObjectId("5f43cbf4c45ff5104986e81d"), "name" : "Produto Silva", "quantity" : 10 }
```
(O _id será gerado automaticamente)

A tabela de vendas deverá ter o seguinte nome: `sales`

Os campos da tabela `sales` terão esse formato:

```json
{ "itensSold" : [ { "productId" : "5f43cbf4c45ff5104986e81d", "quantity" : 2 } ] }
```

A resposta do insert deve retornar após a criação é essa:
```json
{ "_id" : ObjectId("5f43cc53c45ff5104986e81e"), "itensSold" : [ { "productId" : "5f43cbf4c45ff5104986e81d", "quantity" : 2 } ] }
```
(O _id será gerado automaticamente)

### 1 - Crie um endpoint para o cadastro de produtos

- O endpoint deve ser acessível através do caminho (`/products`);

- Os produtos enviados devem ser salvos em uma **collection** do MongoDB;

- O endpoint deve receber a seguinte estrutura:

```json
{
  "name": "product_name",
  "quantity": "product_quantity",
}
```

O retorno da API de um produto cadastrado com sucesso deverá ser:

```json
{
  "_id": "5f43a7ca92d58904914656b6",
  "name": "Produto do Batista",
  "quantity": 100
}
```

### Requisição de Cadastro de Produtos:

O projeto deve rodar na porta `http://localhost/3000`

![Criar produtos](./public/criarProdutos.png)

## Validações importantes:

- `name` deve ser uma _string_ com mais de 5 caracteres e deve ser único;

- `quantity` deve ser um número inteiro maior que 0;

- Cada produto deve ter um id que seja único e gerado no momento em que o recurso for criado. Você pode utilizar o ID gerado pelo MongoDB

- A resposta do endpoint em caso de sucesso deve ser o produto criado.


### Além disso,as seguintes verificações serão feitas:

**[Será validado que não é possível criar um produto com o nome menor que 5 caracteres]**

Se o produto tiver o nome menor que cinco caracteres o resultado retornado deverá ser conforme exibido abaixo, com um status http `422`:


![Nome menor que 5](./public/nomeMenorQue5.png)
(As contrabarras `\` estão escapando as aspas de dentro da string)

**[Será validado que não é possível criar um produto com o mesmo nome de outro já existente]**

Se o produto tiver o mesmo nome o resultado retornado deverá ser conforme exibido abaixo, com status http `422`:

![Mesmo nome](./public/mesmonome.png)

**[Será validado que não é possível criar um produto com quantidade menor que zero]**

Se o produto tiver uma quantidade menor que zero o resultado retornado deverá ser conforme exibido abaixo, com status http `422`:

![Menor que 0](./public/menorque0.png)
(As contrabarras `\` estão escapando as aspas de dentro da string)

**[Será validado que não é possível criar um produto com quantidade igual a zero]**

Se o produto tiver uma quantidade igual a zero o resultado retornado deverá ser conforme exibido abaixo, com status http `422`:

![Igual a zero](./public/igualazero.png)
(As contrabarras `\` estão escapando as aspas de dentro da string)

**[Será validado que não é possível criar um produto com uma string no campo quantidade]**

Se o produto tiver uma quantidade com o valor em string o resultado retornado deverá ser conforme exibido abaixo, com status http `422`:

![Quantidade como string](./public/quantidadecomostring.png)
(As contrabarras `\` estão escapando as aspas de dentro da string)

**[Será validado que é possível criar um produto com sucesso]**

Se o produto for cadastrado com sucesso o resultado retornado deverá ser conforme exibido abaixo, com status http `201`:

![Criar produtos](./public/criarProdutos.png)

### 2 - Crie um endpoint para listar os produtos

- O endpoint deve ser acessível através do caminho (`/products`) ou (`/products/:id`);

- Através do caminho `/products`, todos os produtos devem ser retornados;

- Através do caminho `/products/:id`, apenas o produto com o `id` presente na URL deve ser retornado;

### Além disso,as seguintes verificações serão feitas:

**[Será validado que todos produtos estão sendo retornados]**

Se a lista retornar com sucesso, o resultado retornado deverá ser conforme exibido abaixo, com status http `200`:

![Lista de produtos](./public/listadeprodutos.png)

**[Será validado que é possível listar um determinado produto]**

Se a lista retornar com sucesso, o resultado retornado deverá ser conforme exibido abaixo, com status http `200`:

![Listar um produto](./public/produtoespecifico.png)

**[Será validado que não é possível listar um produto que não existe]**

Se a lista retornar com falha, o resultado retornado deverá ser conforme exibido abaixo, com status http `422`:

![Produto não existe](./public/produtonaoexiste.png)

### 3 - Crie um endpoint para atualizar um produto

- O endpoint deve ser acessível através do caminho (`/products/:id`);

- O corpo da requisição deve seguir a mesma estrutura do método responsável por adicionar um produto;

- Apenas o produto com o `id` presente na URL deve ser atualizado;

### Além disso,as seguintes verificações serão feitas:

**[Será validado que não é possível atualizar um produto com o nome menor que 5 caracteres]**

Se o produto tiver o nome menor que cinco caracteres, o resultado retornado deverá ser conforme exibido abaixo, com status `422`:

![Atualizar com nome menor que cinco](./public/atualizarcomnomemenorque5.png)
(As contrabarras `\` estão escapando as aspas de dentro da string)

**[Será validado que não é possível atualizar um produto com quantidade menor que zero]**

Se o produto tiver o quantidade menor que zero, o resultado retornado deverá ser conforme exibido abaixo, com status http `422`:

![Atualizar menor que zero](./public/atualizarmenorque0.png)
(As contrabarras `\` estão escapando as aspas de dentro da string)

**[Será validado que não é possível atualizar um produto com quantidade igual a zero]**

Se o produto tiver o quantidade igual a zero, o resultado mostrado deverá ser conforme exibido abaixo, com status http `422`:

![Atualizar igual a zero](./public/atualizarigual0.png)
(As contrabarras `\` estão escapando as aspas de dentro da string)

**[Será validado que não é possível atualizar um produto com uma string no campo quantidade]**

Se o produto tiver o quantidade como string, o resultado retornado deverá ser conforme exibido abaixo, com status http `422`:

![Atualizar com string](./public/atualizarcomostring.png)
(As contrabarras `\` estão escapando as aspas de dentro da string)

**[Será validado que é possível atualizar um produto com sucesso]**

Se o produto atualizado com sucesso, o resultado mostrretornadoado deverá ser conforme exibido abaixo, com status http `200`:

![Atualizado com sucesso](./public/atualizarcomsucesso.png)

### 4 - Crie um endpoint para deletar um produto

- O endpoint deve ser acessível através do caminho (`/products/:id`);

- Apenas o produto com o `id` presente na URL deve ser deletado;

### Além disso,as seguintes verificações serão feitas:

**[Será validado que não é possível deletar um produto com sucesso]**

Se o produto deletado com sucesso, o resultado retornado deverá ser conforme exibido abaixo, com status http `200`:

![Deletar um produto](./public/deletarumproduto.png)

**[Será validado que não é possível deletar um produto que não existe]**

Se o produto não for deletado com sucesso, o resultado retornado deverá ser esse e com status http `422`:

![Deletar um produto que não existe](./public/deletarumprodutoquenaoexiste.png)

### 5 - Crie um endpoint para cadastrar vendas

- O endpoint deve ser acessível através do caminho (`/sales`);

- As vendas enviadas devem ser salvas em uma `collection` do MongoDB;

- Deve ser possível cadastrar a venda de vários produtos através da uma mesma requisição;

- O endpoint deve receber a seguinte estrutura:

```json
[
  {
  "productId": "product_id",
  "quantity": "product_quantity",
  },
  ...
]
```

O retorno de uma venda cadastrada com sucesso deverá ser:

```json
{
  "_id": "5f43ba333200020b101fe4a0",
  "itensSold": [
    {
      "productId": "5f43ba273200020b101fe49f",
      "quantity": 2
    }
  ]
}
```

- O `productId` devem ser igual ao `id` de um produto anteriormente cadastrado;

- `quantity` deve ser um número inteiro maior que 0;

- Cada venda deve ter um id que seja único e gerado no momento em que o recurso for criado;

- A resposta do endpoint em caso de sucesso deve ser a(s) venda(s) criada(s).

### Além disso,as seguintes verificações serão feitas:

**[Será validado que não é possível cadastrar vendas com quantidade menor que zero]**

Se a venda tiver uma quantidade menor que zero, o resultado retornado deverá ser conforme exibido abaixo, com status http `422`:

![Vendas menor que zero](./public/comprasmenorquezero.png)

**[Será validado que não é possível cadastrar vendas com quantidade igual a zero]**

Se a venda tiver uma quantidade igual a zero, o resultado retornado deverá ser conforme exibido abaixo, com status http `422`:

![Vendas igual a zero](./public/comprasigualazero.png)

**[Será validado que não é possível cadastrar vendas com uma string no campo quantidade]**

Se a venda tiver uma quantidade com valor, o resultado retornado deverá ser conforme exibido abaixo, com status http `422`:

![Vendas com string](./public/comprascomstring.png)

**[Será validado que é possível criar uma venda com sucesso]**

Se a venda foi feita com sucesso, o resultado retornado deverá ser conforme exibido abaixo, com status http `200`:

![Cadastro de venda com sucesso](./public/cadastrodevendacomsucesso.png)

**[Será validado que é possível criar várias vendas com sucesso]**

Se as vendas foi feita com sucesso, o resultado retornado deverá ser conforme exibido abaixo, com status http `200`:

![Cadastrar varias compras](./public/variascompras.png)

### 6 - Crie um endpoint para listar as vendas

- O endpoint deve ser acessível através do caminho (`/sales`) ou (`/sales/:id`);

- Através do caminho `/sales`, todas as vendas devem ser retornadas;

- Através do caminho `/sales/:id`, apenas a venda com o `id` presente na URL deve ser retornada;

### Além disso,as seguintes verificações serão feitas:

**[Será validado que todas as vendas estão sendo retornadas]**

Se todas vendas estão sendo listadas, o resultado retornado deverá ser conforme exibido abaixo, com status http `200`:

![Listar todas as vendas](./public/todasvendas.png)

**[Será validado que é possível listar uma determinada vendas]**

Se a venda esta sendo listada, o resultado retornado deverá ser conforme exibido abaixo, com status http `200`:

![Listar uma venda](./public/listaumavenda.png)


### 7 - Crie um endpoint para atualizar uma venda

- O endpoint deve ser acessível através do caminho (`/sales/:id`);

- O corpo da requisição deve receber a seguinte estrutura:

```json
	[
	  {
	    "productId": "5f3ff849d94d4a17da707008",
      "quantity": 3
	  }
	]
```

- `quantity` deve ser um número inteiro maior que 0;

- Apenas a venda com o `id` presente na URL deve ser atualizada;

### Além disso,as seguintes verificações serão feitas:

**[Será validado que não é possível atualizar vendas com quantidade menor que zero]**

Se a venda tiver uma quantidade menor que zero, o resultado retornado deverá ser conforme exibido abaixo, com status http `422`:

![Atualizar venda menor que zero](./public/atualizarvendamenorquezero.png)

**[Será validado que não é possível atualizar vendas com quantidade igual a zero]**

Se a venda tiver uma quantidade igual a zero, o resultado retornado deverá ser conforme exibido abaixo, com status http `422`:

![Atualizar venda igual zero](./public/atualizarvendaigualzero.png)

**[Será validado que não é possível atualizar vendas com uma string no campo quantidade]**

Se a venda tiver uma quantidade do tipo string, o resultado retornado deverá ser conforme exibido abaixo, com status http `422`:

![Atualizar venda com string](./public/atualizarvendacomstring.png)

**[Será validado que é possível atualizar uma vendas com sucesso]**

Se a venda for atualizada com sucesso, o resultado retornado deverá ser conforme exibido abaixo, com status http `200`:

![Atualizar uma venda com sucesso](./public/atualizarvendacomsucesso.png)

### 8 - Crie um endpoint para deletar uma venda

- O endpoint deve ser acessível através do caminho (`/sales/:id`);

- Apenas a venda com o `id` presente na URL deve ser deletado;

### Além disso,as seguintes verificações serão feitas:

**[Será validado que é possível deletar uma venda com sucesso]**

Se a venda foi deletada sucesso, o resultado retornado deverá ser conforme exibido abaixo, com status http `200` e será verificado depois que a venda não existe e deverar retornar http `404`:

![Deletar uma venda com sucesso](./public/deletarumavendacomsucesso.png)

**[Será validado que não é possível deletar uma venda que não existe]**

Se a venda não foi deletada sucesso, o resultado retornado deverá ser conforme exibido abaixo, com status http `422`:

![Deletar uma venda que não existe](./public/deletarumavendaquenaoexiste.png)

## Bônus

### 9 - Atualize a quantidade de produtos

- Ao realizar uma venda, atualizá-la ou deletá-la, você deve também atualizar a quantidade do produto em questão presente na `collection` responsável pelos produtos;

- Por exemplo: suponha que haja um produto chamado _Bola de Futebol_ e a sua propriedade `quantity` tenha o valor _10_. Caso seja feita uma venda com _8_ unidades desse produto, a quantidade do produto deve ser atualizada para _2_ , pois 10 - 8 = 2;

### Além disso,as seguintes verificações serão feitas:

**[Será validado que é possível a quantidade do produto atualize ao fazer uma compra]**

Ao fazer uma determinada venda, a quantidade do produto deverá ser atualizada.

**[Será validado que é possível a quantidade do produto atualize ao deletar uma compra]**

Ao fazer deletar uma determinada venda, a quantidade do produto deverá ser atualizada para a quantidade que tinha antes de ter feito essa venda.

### 10 - Valide a quantidade de produtos

- Um produto nunca deve ter a quantidade em estoque menor que 0;

- Quando uma venda for realizada, garanta que a quantidade sendo vendida está disponível no estoque

### Além disso,as seguintes verificações serão feitas:

**[Será validado que o estoque do produto nunca fique com a quantidade menor que zero]**

Um produto não poderá ficar com a quantidade menor que zero, o resultado retornado deverá ser conforme exibido abaixo, com status http `404`:

![Compra maior que a quantidade](./public/compramaiorqueaquantidade.png)

---

### DURANTE O DESENVOLVIMENTO

* Faça `commits` das alterações que você fizer no código regularmente

* Lembre-se de sempre após um (ou alguns) `commits` atualizar o repositório remoto

* Os comandos que você utilizará com mais frequência são:
  1. `git status` _(para verificar o que está em vermelho - fora do stage - e o que está em verde - no stage)_
  2. `git add` _(para adicionar arquivos ao stage do Git)_
  3. `git commit` _(para criar um commit com os arquivos que estão no stage do Git)_
  4. `git push -u nome-da-branch` _(para enviar o commit para o repositório remoto na primeira vez que fizer o `push` de uma nova branch)_
  5. `git push` _(para enviar o commit para o repositório remoto após o passo anterior)_

---

### DEPOIS DE TERMINAR O DESENVOLVIMENTO (OPCIONAL)

Para sinalizar que o seu projeto está pronto para o _"Code Review"_ dos seus colegas, faça o seguinte:

* Vá até a página **DO SEU** _Pull Request_, adicione a label de _"code-review"_ e marque seus colegas:

  * No menu à direita, clique no _link_ **"Labels"** e escolha a _label_ **code-review**;

  * No menu à direita, clique no _link_ **"Assignees"** e escolha **o seu usuário**;

  * No menu à direita, clique no _link_ **"Reviewers"** e digite `students`, selecione o time `tryber/students-sd-0x`.

Caso tenha alguma dúvida, [aqui tem um video explicativo](https://vimeo.com/362189205).

---

### REVISANDO UM PULL REQUEST

Use o conteúdo sobre [Code Review](https://course.betrybe.com/real-life-engineer/code-review/) para te ajudar a revisar os _Pull Requests_.

#VQV
