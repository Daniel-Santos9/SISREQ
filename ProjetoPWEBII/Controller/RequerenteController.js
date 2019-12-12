$(function() {
	var valor;
    function include(caminho) {
        var script = document.createElement("script");
        script.src = caminho;
        document.head.appendChild(script);
    }

    function gerarForm(){
        valor = $("#opt option:selected").val();
        on_of(valor);
        if( valor != -1){
            if(valor == 0){
                //alert(valor);
                include("js/alunoView.js");
            }
            else{
                include("js/professorView.js");
            }
        }
    }

    function on_of(value){
        if(value != -1){
            $("#gerar").hide();
            $("#agoravai").css({"display":"inline"})
            $("#opt").prop("disabled",true);
        }
    }

	$("#gerar").on("click", function(){
        gerarForm();
	});

    $("#agoravai").on("click", function(){
        document.location.reload(true);
        $("#agoravai").css({"display":"none"})
    });

    //////////////////////////// validação

    window.validar = function (){

        var requerente = Vnome("#requerente");
        var naturalidade = Vnome("#naturalidade");
        var npai = Vnome("#npai");
        var nmae = Vnome("#nmae");
        var mat = Vnumero("#matricula") ;
        var tel = Vnumero("#tel");
        var email = Vemail("#email");
        if((requerente && naturalidade && npai && nmae && mat && tel && email) 
            == true){

            $('#formAluno').submit();

        }
        else{
            Alert("informações erradas");
        }
  
    };

    $('#formProf').on("submit",function(){
        var requerente = "#requerente";
        var siape = "#siape";
        var lotacao = "#lotacao";
        var cargo = "#cargo";
        var tel = "#tel";
        var email = "#email";

        Vnome(requerente);
        Vnumero(siape);
        Vnome(lotacao);
        Vnome(cargo);
        Vnumero(tel);
        Vemail(email);
    });

    function Vnome(txt){
        var nome = $(txt).val();
        var er= /[0-9]/;
        var teste = er.test(nome);

        if(nome != "" && teste == false){
            alert("Deu certo");
            return true;
        }else{
            alert("Campos invalidos ou Vazio");
            return false;
        }
    }

    function Vnumero(num){
        var mat = $(num).val();
        //alert(mat);
        var er = /[a-zA-Z]/;
        var teste = er.test(mat);
        //alert(teste);

        if((mat != "" && teste == false)){
            alert("deu certo");
            return true;
        }
        else{
            alert("Campos invalidos ou Vazio");
            return false;
        }
    }

    function Vemail(email){
        var email = $(email).val();
        var er = /^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/;
        var teste = er.test(email);
        if(email != "" && teste == true){
            alert("deu certo");
            return true;
        }else{
            alert("Campos invalidos ou Vazio");
            return false;
        }
    }       

     function createAluno(){
        Aluno.prototype = new Requerente();
        aluno = new Aluno();

        aluno.setRequerente($("#requerente").val());
        aluno.setMatricula($("#matricula").val());
        aluno.setDtnasc($("#dtnasc").val());
        aluno.setNaturalidade($("#naturalidade").val());
        aluno.setNmae($("#nmae").val());
        aluno.setNpai($("#npai").val());
        aluno.setCurso($("#curso").val());
        aluno.setPeriodo($("#periodo").val());
        aluno.setTurno($("#turno").val());
        aluno.setTelefone($("#tel").val());
        aluno.setEmail($("#email").val());
        aluno.setRequerer($("#requerer").val());
        aluno.setEspecificar($("#especificar").val());
        aluno.setJustificar($("#justificar").val());
        //adicionar funcao que paga a data do sistema 
        //aluno.setData($().val());
     }

     function createProf(){
        Professor.prototype = new Requerente();
        professor = new Professor();

        professor.setRequerente($("#requerente").val());
        professor.setSiape($("#siape").val());
        professor.setLotacao($("#lotacao").val());
        professor.setCargo($("#cargo").val());
        professor.setSituacao($("#situacao").val());
        professor.setTelefone($("#tel").val());
        professor.setEmail($("#email").val());
        professor.setRequerer($("#requerer").val());
        professor.setEspecificar($("#especificar").val());
        //adicionar funcao que paga a data do sistema 
        //professor.setData($().val());

     }

});