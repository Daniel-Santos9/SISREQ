function Requerente() {};
function Requerente.prototype = {
	var protocolo;
	var requerente;
	var telefone;
	var email;
	var requerer;
	var especificar;
	var data;

	function Requerete(protocolo,requerente,telefone,email,requerer,especificar,data){
		this.protocolo = protocolo;
		this.requerente = requerente;
		this.telefone = telefone;
		this.email = email;
		this.requerer = requerer;
		this.especificar = especificar;
		this.data = data;	 
	}

	this.getProtocolo = function () {
       	return protocolo;
    };
	this.getRequerente = function(){
    	return Requerente;
    };
    this.getTelefone = function(){
    	return telefone;
    };
    this.getEmail = function(){
    	return email;
    };
    this.getRequerer = function(){
    	return requerer;
    };
    this.getEspecificar = function(){
    	return especificar;
    };
    this.getData = function(){
    	return data;
    };
 	this.setProtocolo = function(protocolo){
    	this.protocolo = protocolo;
    };
    this.setRequerente = function(requerente){
    	this.requerente = requerente;
    };
    this.setTelefone = function(telefone){
    	this.telefone = telefone;
    };
    this.setEmail = function(email){
    	this.email = email;
    };
    this.setRequerer = function(requerer){
    	this.requerer = requerer;
    };
    this.setEspecificar = function(especificar){
    	this.especificar = especificar;
    };
    this.setData = function(data){
    	this.data = data;
    };
}