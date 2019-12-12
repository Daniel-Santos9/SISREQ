<?php
include "connectdb.php";
$data=json_decode(file_get_contents("php://input"));

$btnName=$dbhandle->real_escape_string($data->btnName);
if($btnName=='Cadastrar'){

$id=$dbhandle->real_escape_string($data->id);
$nome=$dbhandle->real_escape_string($data->nome);
$peso=$dbhandle->real_escape_string($data->peso);
$altura=$dbhandle->real_escape_string($data->altura);
$idade=$dbhandle->real_escape_string($data->idade);
$email=$dbhandle->real_escape_string($data->email);
$logradouro=$dbhandle->real_escape_string($data->logradouro);
$bairro=$dbhandle->real_escape_string($data->bairro);
$numero=$dbhandle->real_escape_string($data->numero);
$cep=$dbhandle->real_escape_string($data->cep);
$login=$dbhandle->real_escape_string($data->login);
$senha=$dbhandle->real_escape_string($data->senha);


$query="INSERT INTO aluno (id,nome,peso,altura,idade,email,logradouro,bairro,numero,cep,login,senha) VALUES($id,'".$nome."','".$peso."','".$altura."','".$idade."','".$email."','".$logradouro."','".$bairro."','".$numero."','".$cep."','".$login."','".$senha."')";

$dbhandle->query($query);
	}

	else {
		
		$id=$dbhandle->real_escape_string($data->id);
        $nome=$dbhandle->real_escape_string($data->nome);
        $idade=$dbhandle->real_escape_string($data->idade);
        $peso=$dbhandle->real_escape_string($data->peso);
        $altura=$dbhandle->real_escape_string($data->altura);
        $email=$dbhandle->real_escape_string($data->email);
       	$query="UPDATE aluno_treino_exerc SET nome = '".$nome."', idade = '".$idade."', peso = '".$peso."', altura = '".$altura."', email = '".$email."' WHERE id=$id ";
       	$dbhandle->query($query);

		

	}

?>