
function verFilmes() {
    let res = $('#res').val();
        $.ajax({
            type: 'GET',
            url:  'http://localhost:3000/filmes/'+res,
            success: function(dados) {
                 
                $('#ti').text(dados.titulo);
                $('#di').text(dados.diretor);
                $('#da').text(dados.data);
                $('#du').text(dados.duracao);
                $('#id').text(dados.idioma);

            },
            error: function(dados) {

                $('#aqui').html('erro')

            }
        });    

}




function adicionaFilmes() {
    let tit = $('#tit').val();
    let dir = $('#dir').val();
    let dat = $('#dat').val();
    let dur = $('#dur').val();
    let idi = $('#idi').val();
    $.ajax({
        type: 'POST',
        url:  'http://localhost:3000/add',
        data: JSON.stringify(
            {
                titulo: tit,
                diretor: dir,
                datal: dat,
                duracao: dur,
                idioma: idi

            }

        ),
        contentType: 'application/json',
        success: function(dados) {
            
            $('#titulo').text(dados.dadosEnviados.titulo);
            $('#diretor').text(dados.dadosEnviados.diretor);
            $('#data').text(dados.dadosEnviados.datal);
            $('#duracao').text(dados.dadosEnviados.duracao);
            $('#idioma').text(dados.dadosEnviados.idioma);

        },
        error: function(dados) {

            $('#aqui').html('erro')

        }
    });
  

}


function verFil() {
    

    $.ajax({
        type: 'GET',
        url:  'http://localhost:3000/filmes',
        success: function(dados) {
           
            for (let i of dados.filmes){
                    
                    $('#todosfilmes').append("<p>"+"Título: "+i.titulo+"</p>");
                    $('#todosfilmes').append("<p>"+"Diretor: "+i.diretor+"</p>");
                    $('#todosfilmes').append("<p>"+"Data de Lançamento: "+i.dataDelancamento+"</p>");
                    $('#todosfilmes').append("<p>"+"Duração: "+i.duracao+"</p>");
                    $('#todosfilmes').append("<p>"+"Idioma: "+i.idioma+"</p>");
              
            }
           
            

        },
        error: function(dados) {

            $('#aqui').html('erro')

        }
    });

}

function quantidadeFil() {
    

    $.ajax({
        type: 'GET',
        url:  'http://localhost:3000/quantidade',
        success: function(dados) {
               
            $('#quantidade').text(dados.tamanho);

        },
        error: function(dados) {

            $('#aqui').html('erro')

        }
    });

}






