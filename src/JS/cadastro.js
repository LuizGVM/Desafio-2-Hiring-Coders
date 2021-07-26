const cadastro = document.getElementById('form-one')
const inputNomeCadastro = document.getElementById('inputNomeCadastro');
const inputCpfCadastro = document.getElementById('inputCpfCadastro');
const inputEmailCadastro = document.getElementById('inputEmailCadastro');
const inputEnderecoCadastro = document.getElementById('inputEnderecoCadastro');
const inputSenhaCadastro = document.getElementById('inputSenhaCadastro');
const entrada = document.getElementById('form-two')
const inputCpfEntrada = document.getElementById('inputCpfEntrada');
const inputSenhaEntrada = document.getElementById('inputSenhaEntrada');

cadastro.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = inputNomeCadastro.value;
    let cpf = inputCpfCadastro.value;
    let email = inputEmailCadastro.value;
    let endereco = inputEnderecoCadastro.value;
    let senha = inputSenhaCadastro.value;
    let data = {nome,cpf,email,endereco,senha}
    let local = localStorage.getItem(`${cpf}`);
    local = JSON.parse(local);
    if (nome == 0 || email == 0 || cpf == 0 || endereco == 0 || senha == 0){
        let message = document.getElementById('cadastro-msg')
        message.innerHTML = `<p>Preencha todos os campos</p>`
    }
    else{
        localStorage.setItem(`${cpf}`, JSON.stringify(data));
        let message = document.getElementById('cadastro-msg')
        message.innerHTML = `<p>Cadastro realizado com sucesso!</p>`
        inputNomeCadastro.value = null;
        inputCpfCadastro.value = null;
        inputEmailCadastro.value = null;
        inputEnderecoCadastro.value = null;
        inputSenhaCadastro.value = null;
    }
    if(local.cpf === cpf || local.email === email || local.nome === nome){
        let message = document.getElementById('cadastro-msg')
        message.innerHTML = `<p>Usuário já cadastrado</p>`
    }
    inputNomeCadastro.value = null;
    inputCpfCadastro.value = null;
    inputEmailCadastro.value = null;
    inputEnderecoCadastro.value = null;
    inputSenhaCadastro.value = null;
})

entrada.addEventListener('submit', (e) => {
    e.preventDefault();
    let cpf= inputCpfEntrada.value; 
    let senha = inputSenhaEntrada.value;
    let data = {cpf}
    let local = localStorage.getItem(`${cpf}`)
    local = JSON.parse(local);
    if (cpf == 0 || senha == 0){
        let message = document.getElementById('login-msg')
        message.innerHTML = `<p>Insira CPF e/ou senha</p>`
    }
    else if (local == null || local == undefined || local == 0){
        let message = document.getElementById('login-msg')
        message.innerHTML = `<p>Usuário não cadastrado</p>`
    }
    else if(local.cpf != cpf || local.senha!= senha){
        let message = document.getElementById('login-msg')
        message.innerHTML = `<p>Usuário e/ou senha incorretos</p>`
    }
    if(local.cpf === cpf && local.senha === senha){
        localStorage.setItem('userlogged', JSON.stringify(data));
        inputCpfEntrada.value = null;
        inputSenhaEntrada.value = null;
        location.href = "produtos.html"
    }
    inputCpfEntrada.value = null;
    inputSenhaEntrada.value = null;
})