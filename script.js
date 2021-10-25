function validaCampos(){
	
	let err = false;

	//verificar Nome
	if (document.getElementById("Nome").value.length == 0){
		err = true;
		document.getElementById("Nome").classList.add('required');
	} else {
		document.getElementById("Nome").classList.remove('required');
	}

	//verificar cpf
	if (document.getElementById("cpf").value.length == 0){
		err = true;
		document.getElementById("cpf").classList.add('required');
	} else {
		document.getElementById("cpf").classList.remove('required');
	}


	//verificar endereco
	if (document.getElementById("endereco").value.length == 0){
		err = true;
		document.getElementById("endereco").classList.add('required');
	} else {
		document.getElementById("endereco").classList.remove('required');
	}


	//verificar numero
	if (document.getElementById("num").value.length == 0){
		err = true;
		document.getElementById("num").classList.add('required');
	} else {
		document.getElementById("num").classList.remove('required');
	}

	//verificar telefone celular
	if (document.getElementById("tel_cel").value.length == 0){
		err = true;
		document.getElementById("tel_cel").classList.add('required');
	} else {
		document.getElementById("tel_cel").classList.remove('required');
	}

	//validar campo sexo
	if (!document.getElementById("sexo").checked){
		err = true;
		document.getElementById("lblSexo").classList.add('required')
	} else {
		document.getElementById("lblSexo").classList.remove('required');
	}

	if (err) {
		alert("Por favor, preencher os campos obrigatórios");
	} else {
		alert("Cadastro realizado");
		document.getElementById("form1").submit();
	}
	
}







