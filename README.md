# Gama Academy - Hiring Coders
## Desafio 2

Projeto para simulação de uma página simples de um sistema e-commerce, com cadastro de usuário, login e um carrinho de produtos 

## Arquitetura de componentes

`|src -> assets: arquivos de imagem utilizados`
`|src -> CSS: arquivos de estilização CSS`
`|src -> JS: arquivos contendo as lógicas do sistema`
`|src -> entrada.html: página de cadastro de novos usuários e login`
`|src -> produtos.html: página com os produtos disponíveis a serem adicionados no carrinho`

## Funcionalidades

Na página inical, existem dois formulários: um para novos usuários se cadastrarem no sistema e um para que os usuários já cadastrado façam seu login. 

Os dados dos usuários ficam armazenados no localStorage do navegador e são feitas verificações como se um mesmo usuário tenta se cadastrar duas vezes, se um usuário não cadastrado tenta realizar um login e se os campos dos formulários não forem preenchidos corretamente. 

Se o login for feito com sucesso, o usuário é redirecionado para a página de produtos, onde ele terá as opções de produtos disponíveis para serem adicionados ao seu carrinho. 

Ao entrar na página de produtos é verificado se o usuário não possue produtos em seu carrinho (parametro produtos da classe) e é criada uma classe usuário para o usuário que fez o login (armazena-se separadamente o CPF desse usuário para depois buscar todas as suas informações no localStorage). 

A classe conta com uma operação de addToCart() e uma de clearCart() que adicionam itens no seu carrinho e limpam todo o seu carrinho, respectivamente. Cada produto conta com um botão de Adicionar ao carrinho (que aciona a operação addToCart da classe) e é mostrado em tela quantos itens daquele produto foram adicionados. Além disso, cada produto possui um nome, preço, cor e fabricante cujos valores são pegos diretamente do HTML.

Em seguida o usuário pode finalizar seu carrinho clicando no botão "Finalizar Carrinho" (que limpa todos os dados da tela e envia a classe atualizada para o localStorage) ou limpar seu carrinho pelo botçao "Limpar carrinho", que remove todos os itens armazenados para aquela classe 

Veja o projeto online [clique aqui](https://simulador-sistema-inventario.netlify.app/)

## Luiz Guilherme de Vasconcelos Moreira