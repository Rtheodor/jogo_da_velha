var rodada = 1;
var matriz_jogo = Array(3);

$(document).ready(function(){
    
    $('#btn_iniciar_jogo').click(function(){

        //valida a digitação dos player

        if($('#enter_player_one').val() == ''){

            alert('Qual o nome do player one?');
            return false;

        }
        if($('#enter_player_two').val() == ''){

            alert('Qual o nome do player two?');
            return false;

        }

        //exibir apelidos
        $('#jogador_one').html($('#enter_player_one').val());
        $('#jogador_two').html($('#enter_player_two').val());

        //selecionando hide ou show
        $('#pagina_inicial').hide();
        $('#palco_jogo').show();
    });

    $('.jogada').click(function(){
        
        var id_campo_clicado = this.id;
        jogada(id_campo_clicado);
    });

    function jogada(id){
        var icone = '';
        var ponto = 0;

        if((rodada % 2) == 1){
            icone = 'url("imagens/marcacao_1.png")';
            ponto = -1;
        }else{
            icone = 'url("imagens/marcacao_2.png")';
            ponto = 1;;
        }
       
        rodada ++;

        $('#'+id).css('background-image',icone);
    }

});