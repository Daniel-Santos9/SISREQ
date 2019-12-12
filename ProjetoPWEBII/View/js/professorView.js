$(function() {
	$('<div>',{
		id: "cont"
	}).addClass("container").appendTo('#content');

	$('<div>',{
		id: "row"
	}).addClass("row").appendTo('#cont');

	$('<div>',{
		id: "col"
	}).addClass("col-md-8 col-md-offset-2").appendTo('#row');

	$('<div>',{
		id: "painel"
	}).addClass("panel panel-default").appendTo('#col');

	$('<div>',{
		id: "cabecalho",
		text:"FORMULÁRIO DO PROFESSOR: "
	}).addClass("panel-heading").appendTo('#painel');

	$('<div>',{
		id: "p-body"
	}).addClass("panel-body").appendTo('#painel');

	$('<form>',{
		id:"formProf",
		name:"formProf",
		method:"POST"
	}).addClass("form-horizontal col-md-10 col-md-offset-1").appendTo('#p-body');

	// CAMPOS DO FORMULÁRIO

	$('<div>',{
		id:"campo1"
	}).addClass("form-group col-md-6").appendTo('#formProf');

	$('<label>',{
		for: "requerente",
		text:"Requerente: "
	}).addClass("control-label").appendTo('#campo1');

	$('<input>',{
		type:"text",
		id: "requerente",
		name:"requerente"
	}).addClass("form-control").appendTo('#campo1');

	$('<div>',{
		id:"campo2"
	}).addClass("form-group col-md-6 pull-right").appendTo('#formProf');

	$('<label>',{
		for: "siape",
		text:"Matricula SIAPE: "
	}).addClass("control-label").appendTo('#campo2');

	$('<input>',{
		type:"text",
		id: "siape",
		name:"siape"
	}).addClass("form-control").appendTo('#campo2');


	$('<div>',{
		id:"campo3"
	}).addClass("form-group col-md-6").appendTo('#formProf');

	$('<label>',{
		for: "lotacao",
		text:"Lotação/Setor: "
	}).addClass("control-label").appendTo('#campo3');

	$('<input>',{
		type:"text",
		id: "lotacao",
		name:"lotacao"
	}).addClass("form-control").appendTo('#campo3');


	$('<div>',{
		id:"campo4"
	}).addClass("form-group col-md-6 pull-right").appendTo('#formProf');

	$('<label>',{
		for: "cargo",
		text:"Cargo/Função: "
	}).addClass("control-label").appendTo('#campo4');

	$('<input>',{
		type:"text",
		id: "cargo",
		name:"cargo"
	}).addClass("form-control").appendTo('#campo4');

	
	$('<div>',{
		id:"campo5"
	}).addClass("form-group col-md-6").appendTo('#formProf');

	$('<label>',{
		for: "situacao",
		text:"Situação: "
	}).addClass("control-label").appendTo('#campo5');

	$('<select>',{
		id: "situacao",
		name:"situacao"
	}).addClass("form-control").appendTo('#campo5');

	var situacoes = [
		'Selecione uma opção',
		'Ativo',
		'Professor Substituto',
		'Aposentado',
		'Beneficiário de Pensão',
		'Pensão Alimento',
		'Outros'
	];
	situacoes.forEach(function (item) {
		$('#situacao').append('<option>' + item + '</option>');
	})

	$('<div>',{
		id:"campo6"
	}).addClass("form-group col-md-6 pull-right").appendTo('#formProf');

	$('<label>',{
		for: "outros",
		text:"Outros:"
	}).addClass("control-label").appendTo('#campo6');

	$('<input>',{
		type:"outros",
		id: "outros",
		name:"outros"
	}).addClass("form-control").appendTo('#campo6');


	$('<div>',{
		id:"campo7"
	}).addClass("form-group col-md-6 pull-right").appendTo('#formProf');

	$('<label>',{
		for: "tel",
		text:"Telefone: "
	}).addClass("control-label").appendTo('#campo7');

	$('<input>',{
		type:"tel",
		id: "tel",
		name:"tel"
	}).addClass("form-control").appendTo('#campo7');

	$('<div>',{
		id:"campo8"
	}).addClass("form-group col-md-6").appendTo('#formProf');

	$('<label>',{
		for: "email",
		text:"E-mail: "
	}).addClass("control-label").appendTo('#campo8');

	$('<input>',{
		type:"email",
		id: "email",
		name:"email"
	}).addClass("form-control").appendTo('#campo8');


	$('<div>',{
		id:"campo9"
	}).addClass("form-group col-md-6 pull-right").appendTo('#formProf');

	$('<label>',{
		for: "requerer",
		text:"Requerer: "
	}).addClass("control-label").appendTo('#campo9');

	$('<select>',{
		id: "requerer",
		name:"requerer"
	}).addClass("form-control").appendTo('#campo9');

	var options = [
		'Selecione um tipo',
		'Abono de Permanência',
		'Adicional de Insalubridade/Periculosidade',
		'Alteração de Carga Horaria(Especificar)',
		'Alteração de Férias',
		'Aposentadoria',
		'Atualizaçao Cadastral',
		'Averbações de Tempo de Serviço',
		'Colaboração Técnica',
		'Exercício Provisório',
		'Exoneração do Cargo',
		'Incentivo a Qualificação(Administrativo)',
		'Licença(Especificar)',
		'Progressão por Capacitação(Administrativo)',
		'Redistribuição',
		'Retribuição por Titulação(Docente)',
		'Outros (Especificar)'
	];
	options.forEach(function (item) {
		$('#requerer').append('<option>' + item + '</option>');
	})


	$('<div>',{
		id:"campo10"
	}).addClass("form-group col-md-6").appendTo('#formProf');

	$('<label>',{
		for: "especificar",
		text:"Especificar: "
	}).addClass("control-label").appendTo('#campo10');

	$('<textarea>',{
		id: "especificar",
		name:"especificar"
	}).addClass("form-control").appendTo('#campo10');


	$('<div>',{
		id:"btn"
	}).addClass("form-group col-md-10").appendTo('#formProf');

	$('<button>',{
		type:"submit",
		name:"solicitar",
		text:"Solicitar requerimento",
		id:"solicitar",
		click: function(){
			validar();
		}

	}).addClass("control-label btn btn-primary col-md-5").appendTo('#btn');

	$('<button>',{
		type:"reset",
		name:"cancelar",
		text:"Cancelar requerimento",
		id:"cancelar"
	}).addClass("control-label btn btn-danger col-md-5 col-md-offset-1").appendTo('#btn');


});