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
	// Checa por um email valido e senha > 1 caracter
	if (/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i.test(document.getElementById('email').value) && document.getElementById('senha').value) {
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

function enterPaginaLogin() {
	var usuario = document.getElementById('email');
	var senha = document.getElementById('senha');
	
	if (!usuario.value || !senha.value) {
		mostrar('error-box');
		mostrar('error-email');
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
	else{
		mostrar('confirmation_cadastro');
		ocultar('container_cadastro')
	}

}
//setTimeout ("voltar()", 20000);*/
function mostrar(paginaname){
	document.getElementById( paginaname ).style.display = 'block'
}
function ocultar (paginaname) {
	document.getElementById( paginaname ).style.display = 'none';
}
