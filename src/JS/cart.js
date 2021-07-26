class Usuario{
    constructor(nome,cpf,email,endereco,senha,produtos){
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.endereco = endereco;
        this.senha = senha;
        this.produtos = produtos;
    }
    addToCart(product){
        produtos.push(product)
    }
    clearCart(){
        produtos.length = 0
    }
}

let produtos = []
let cont1 = 0
let cont2 = 0
let cont3 = 0

let userLogged = localStorage.getItem('userlogged');
userLogged = JSON.parse(userLogged);

let usuario = localStorage.getItem(`${userLogged.cpf}`)
usuario = JSON.parse(usuario)

if(usuario.produtos != 0){
    produtos = usuario.produtos    
}


let user = new Usuario(usuario.nome, usuario.cpf, usuario.email, usuario.endereco, usuario.senha, produtos)  

function adicionarProd(click_id){
    const nome = document.getElementById(`nomeProd${click_id}`).innerText;
    const cor = document.getElementById(`corProd${click_id}`).innerText;
    let preco = document.getElementById(`precoProd${click_id}`).innerText;
    const marca = document.getElementById(`marcaProd${click_id}`).innerText;
    let mensagem = document.getElementById(`qtd-prod-${click_id}`)
    let contador = 0

    preco = preco.replace('R$','');
    preco = preco.replace(',','.');
    preco = parseFloat(preco);
    const data = {nome, cor, preco, marca};

    user.addToCart(data)

    switch(parseInt(click_id)){
        case 1: 
            cont1 +=1
            contador = cont1
        break;
        case 2:
            cont2 += 1
            contador = cont2
        break;
        default:
            cont3 += 1
            contador = cont3
    }

    mensagem.innerHTML = `<span>Quantidade Adicionada: ${contador}</span>`
}

function finalizar(){ 
    let mensagem = document.getElementById('final')

    if(cont1 == 0 && cont2 == 0 && cont3 == 0){
        mensagem.innerHTML = `<span>Insira algum item para finalizar o carrinho</span>`
        return
    }

    localStorage.setItem(`${user.cpf}`, JSON.stringify(user));
    cont1 = 0;
    cont2 = 0;
    cont3 = 0
    mensagem.innerHTML = `<span>Carrinho finalizado</span>`
    setTimeout(() => window.location.reload(),1000)
}

function limpar(){
    user.clearCart()
    localStorage.setItem(`${user.cpf}`, JSON.stringify(user));
    let mensagem = document.getElementById('final')
    mensagem.innerHTML = `<span>Carrinho limpo</span>`
    setTimeout(() => window.location.reload(),1000)
}