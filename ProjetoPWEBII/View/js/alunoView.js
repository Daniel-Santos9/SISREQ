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
		text:"FORMULÁRIO DO ALUNO: "
	}).addClass("panel-heading").appendTo('#painel');

	$('<div>',{
		id: "p-body"
	}).addClass("panel-body").appendTo('#painel');

	$('<form>',{
		id:"formAluno",
		name:"formAluno",
		method:"POST"
	}).addClass("form-horizontal col-md-10 col-md-offset-1").appendTo('#p-body');

	// CAMPOS DO FORMULÁRIO

	$('<div>',{
		id:"campo1"
	}).addClass("form-group col-md-6").appendTo('#formAluno');

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
	}).addClass("form-group col-md-6 ").appendTo('#formAluno');

	$('<label>',{
		for: "matricula",
		text:"Matricula: "
	}).addClass("control-label").appendTo('#campo2');

	$('<input>',{
		type:"text",
		id: "matricula",
		name:"matricula"
	}).addClass("form-control").appendTo('#campo2');

	$('<div>',{
		id:"campo3"
	}).addClass("form-group col-md-6").appendTo('#formAluno');

	$('<label>',{
		for: "dtnasc",
		text:"Data de Nascimento: "
	}).addClass("control-label").appendTo('#campo3');

	$('<input>',{
		type:"date",
		id: "dtnasc",
		name:"dtnasc"
	}).addClass("form-control").appendTo('#campo3');

	$('<div>',{
		id:"campo4"
	}).addClass("form-group col-md-6 ").appendTo('#formAluno');

	$('<label>',{
		for: "naturalidade",
		text:"Naturalidade: "
	}).addClass("control-label").appendTo('#campo4');

	$('<input>',{
		type:"text",
		id: "naturalidade",
		name:"naturalidade"
	}).addClass("form-control").appendTo('#campo4');

	$('<div>',{
		id:"campo5"
	}).addClass("form-group col-md-6").appendTo('#formAluno');

	$('<label>',{
		for: "nmae",
		text:"Nome da mãe: "
	}).addClass("control-label").appendTo('#campo5');

	$('<input>',{
		type:"text",
		id: "nmae",
		name:"nmae"
	}).addClass("form-control").appendTo('#campo5');

	$('<div>',{
		id:"campo6"
	}).addClass("form-group col-md-6 ").appendTo('#formAluno');

	$('<label>',{
		for: "npai",
		text:"Nome do pai: "
	}).addClass("control-label").appendTo('#campo6');

	$('<input>',{
		type:"text",
		id: "npai",
		name:"npai"
	}).addClass("form-control").appendTo('#campo6');

	$('<div>',{
		id:"campo7"
	}).addClass("form-group col-md-6").appendTo('#formAluno');

	$('<label>',{
		for: "curso",
		text:"Curso: "
	}).addClass("control-label").appendTo('#campo7');

	$('<select>',{
		id: "curso",
		name:"curso"
	}).addClass("form-control").appendTo('#campo7');

	var cursos = [
		'Selecione um curso',
		'Sistemas de Informação',
		'Licenciatura em Matemática',
		'Mecatrônica',
		'Técnico Mecânica',
		'Técnico Eletrôtécnica',
		'Integrado Mecânica',
		'Integrado Informática',
		'Integrado Eletrotécnica',
		'Licenciatura em Física'
	];
	cursos.forEach(function (item) {
		$('#curso').append('<option>' + item + '</option>');
	})

	$('<div>',{
		id:"campo8"
	}).addClass("form-group col-md-6").appendTo('#formAluno');

	$('<label>',{
		for: "periodo",
		text:"Período: "
	}).addClass("control-label").appendTo('#campo8');

	$('<input>',{
		type:"text",
		id: "periodo",
		name:"periodo"
	}).addClass("form-control").appendTo('#campo8');

	$('<div>',{
		id:"campo9"
	}).addClass("form-group col-md-6").appendTo('#formAluno');

	$('<label>',{
		for: "turno",
		text:"Turno: "
	}).addClass("control-label").appendTo('#campo9');

	$('<select>',{
		id: "turno",
		name:"turno"
	}).addClass("form-control").appendTo('#campo9');

	var turnos = [
		'Selecione um turno',
		'MANHÃ',
		'TARDE',
		'NOITE'
	];
	turnos.forEach(function (item) {
		$('#turno').append('<option>' + item + '</option>');
	}) // função que preenche o select de turno

	$('<div>',{
		id:"campo10"
	}).addClass("form-group col-md-6 ").appendTo('#formAluno');

	$('<label>',{
		for: "tel",
		text:"Telefone: "
	}).addClass("control-label").appendTo('#campo10');

	$('<input>',{
		type:"tel",
		id: "tel",
		name:"tel"
	}).addClass("form-control").appendTo('#campo10');

	$('<div>',{
		id:"campo11"
	}).addClass("form-group col-md-6").appendTo('#formAluno');

	$('<label>',{
		for: "email",
		text:"E-mail: "
	}).addClass("control-label").appendTo('#campo11');

	$('<input>',{
		type:"email",
		id: "email",
		name:"email"
	}).addClass("form-control").appendTo('#campo11');

	$('<div>',{
		id:"campo12"
	}).addClass("form-group col-md-6 ").appendTo('#formAluno');

	$('<label>',{
		for: "requerer",
		text:"Requerer: "
	}).addClass("control-label").appendTo('#campo12');

	$('<select>',{
		id: "requerer",
		name:"requerer"
	}).addClass("form-control").appendTo('#campo12');

	var options = [
		'Selecione um tipo',
		'2° Via',
		'Aproveitamento de Disciplina',
		'Matrícula fora do prazo',
		'Cancelamento da matrícula',
		'Colação de grau/ colação especial',
		'Declaração',
		'Diploma',
		'Histórico escolar',
		'Reabertura de matrícula',
		'Segunda chamada',
		'Reingresso',
		'Trancamento de disciplina',
		'Trancamento de matrícula',
		'Transferência para outra instituição',
		'Validação de conhecimento',
		'Reajuste',
		'Recorreção de prova',
		'Auxílio - Transporte',
		'Auxílio - Moradia',
		'Auxílio - Óculos',
		'Auxílio - Pais e Mães',
		'Outros (especificar)'
	];
	options.forEach(function (item) {
		$('#requerer').append('<option>' + item + '</option>');
	})

	$('<div>',{
		id:"campo13"
	}).addClass("form-group col-md-6").appendTo('#formAluno');

	$('<label>',{
		for: "especificar",
		text:"Especificar: "
	}).addClass("control-label").appendTo('#campo13');

	$('<textarea>',{
		id: "especificar",
		name:"especificar"
	}).addClass("form-control").appendTo('#campo13');

	$('<div>',{
		id:"campo14"
	}).addClass("form-group col-md-6").appendTo('#formAluno');

	$('<label>',{
		for: "justificar",
		text:"Justificar: "
	}).addClass("control-label").appendTo('#campo14');

	$('<textarea>',{
		id: "justificar",
		name:"justificar"
	}).addClass("form-control").appendTo('#campo14');

	$('<div>',{
		id:"btn"
	}).addClass("form-group col-md-10").appendTo('#formAluno');

	$('<button>',{
		type: "button",
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