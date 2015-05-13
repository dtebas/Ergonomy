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
