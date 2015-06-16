function pegarLogin() {
	return !!(document.cookie.indexOf("login") >= 0);
}

function logar() {
	document.cookie = 'login=1;';
	location.href = 'index.html';
}

function deslogar() {
	document.cookie = 'login=0;expires=Thu, 01 Jan 1970 00:00:01 GMT';
	location.href = 'index.html';
}

function login() {
	if (document.getElementById('email').value == 'admin@admin.com' && document.getElementById('senha').value == '123') {
		logar();
	}
	else {
		location.href=("login.html#erro");
	}
	return false;
}

function enterLogin(e) {
	if (e.keyCode == 13) {
		login();
	}
}
function limpar(){
	var nome = document.getElementById('nome');
	nome.value = "";
	var sobrenome = document.getElementById('sobrenome');
	sobrenome.value = "";
	var email = document.getElementById('email');
	email.value = "";
	var pass = document.getElementById('senha');
	pass.value = "";
	var pass2 = document.getElementById('senhaconf');
	pass2.value = ""; 
}


function voltar() {
	var pagina="index.html"
	if(confirm("Desejavoltar para página inicial?"))
		location.href=pagina
} 

function mensagemErroCadastro(){
	var nome = document.getElementById('nome');
	var sobrenome = document.getElementById('sobrenome');
	var email = document.getElementById('email');
	var pass = document.getElementById('senha');
	var pass2 = document.getElementById('senhaconf');
	var mensagem = "";
	if(nome.value == "")
		mensagem += "'Nome' é obrigatório.";
	if(sobrenome.value == "")
		mensagem += "\n'Sobrenome' é obrigatório.";
	if(email.value == "")
		mensagem += "\n'E-mail' é obrigatório.";
	if(pass.value == "")
		mensagem += "\n'Senha' é obrigatória";
	if(pass2.value == "")
		mensagem += "\n'Confirmação da senha' é obrigatória";
	
	if(mensagem != "")
		alert(mensagem);
	else
		mostrar();
}
//setTimeout ("voltar()", 20000);*/
function mostrar(){
	document.getElementById('confirmation_cadastro').style.display = 'block'
	document.getElementById('container_cadastro').style.display ='none';
}
