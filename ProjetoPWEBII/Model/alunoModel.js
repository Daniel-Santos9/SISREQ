function Aluno(){};
function Aluno.prototype = { 

	var matricula;
	var dtnasc;
	var naturalidade;
	var nmae;
	var npai;
	var curso;
	var periodo;
	var turno;
	var justificar;

	function Aluno(matricula,dtnasc,naturalidade,nmae,npai,curso,periodo,turno,justificar){
		this.protocolo = protocolo;
		this.requerente = requerente;
		this.matricula = matricula;
		this.dtnasc = dtnasc;
		this.naturalidade = naturalidade;
		this.nmae = nmae;
		this.npai = npai;
		this.curso = curso;
		this.periodo = periodo;
		this.turno = turno;
		this.telefone = telefone;
		this.email = email;
		this.requerer = requerer;
		this.especificar = especificar;
		this.justificar = justificar;
		this.data = data;
		
	};

	    this.getProtocolo = function () {
       		return protocolo;
    	};
    	this.getRequerente = function(){
    		return requerente;
    	};
    	this.getMatricula = function(){
    		return matricula;
    	};
    	this.getDtnasc = function(){
    		return dtnasc;
    	};
    	this.getNaturalidade = function(){
    		return naturalidade;
    	};
    	this.getNmae = function(){
    		return nmae;
    	};
    	this.getNpai = function(){
    		return npai;
    	};
    	this.getCurso = function(){
    		return Curso;
    	};
    	this.getPeriodo = function(){
    		return periodo;
    	};
    	this.getTurno = function(){
    		return turno;
    	};
    	this.getTelefone = function(){
    		return telefone;
    	};
    	this.getEmail = function(){
    		return email;
    	};
    	this.getRequerer = function(){
    		return Requerer;
    	};
    	this.getEspecificar = function(){
    		return especificar;
    	};
    	this.getJustificar = function(){
    		return justificar;
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
    	this.setMatricula = function(matricula){
    	   this.matricula = matricula;
    	};
    	this.setDtnasc = function(dtnasc){
    	   this.dtnasc = dtnasc;
    	};
    	this.setNaturalidade = function(naturalidade){
    	   this.naturalidade = naturalidade;
    	};
    	this.setNmae = function(nmae){
    	   this.nmae = nmae;
    	};
    	this.set = function(){
    	   this.npai = npai;
    	};
    	this.setCurso = function(curso){
    	   this.curso = curso;
    	};
    	this.setPeriodo = function(periodo){
    	   this.periodo = periodo;
    	};
    	this.setTurno = function(turno){
    	   this.turno = turno;
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
    	this.setJustificar = function(justificar){
    	   this.justificar = justificar;
    	};
   		this.setData = function(data){
    	   this.data = data;
    	};


}