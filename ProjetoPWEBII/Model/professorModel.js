function Professor(){};

function Professor.prototype = {

    var siape;
	var lotacao;
	var cargo;
	var situacao;
	var casePensionista;

	function Professor(siape,lotacao,cargo,situacao,casePensionista){
		this.siape = siape;
		this.lotacao = lotacao;
		this.cargo = cargo;
		this.situacao = situacao;
		this.casePensionista = casePensionista;
	
	};
	
    this.getSiape = function(){
    	return siape;
    };
    this.getLotacao = function(){
    	return lotacao;
    };
    this.getCargo = function(){
    	return cargo;
    };
    this.getSituacao = function(){
    	return situacao;
    };
    this.getCasePensionista = function(){
    	return casePensionista;
    };
    this.setSiape = function(siape){
    	this.siape = siape;
    };
    this.setLotacao = function(lotacao){
    	this.lotacao = lotacao;
    };
    this.setCargo = function(cargo){
    	this.cargo = cargo;
    };
    this.setSituacao = function(situacao){
    	this.situacao = situacao;
    };
    this.setCasePensionista = function(casePensionista){
    	this.casePensionista = casePensionista;
    };
}