$('#filmesadicionado').hide();
$('#verfilmes').hide();
$('#addfilmes').hide();
$('#todosfilmes').hide();
$('#quantidadefilmes').hide();


function mostraQuantidadeFilmes() {
    $('#quantidadefilmes').show('fast');
    $('#botoes').hide('fast');

}

function mostraTodosFilmes() {
    $('#todosfilmes').show('fast');
    $('#botoes').hide('fast');

}

function mostraVerFilmes() {
    $('#verfilmes').show('fast');
    $('#botoes').hide('fast');

}

function mostraAddFilmes() {
    $('#addfilmes').show('fast');
    $('#botoes').hide('fast');

}

function mostraFilmesAdicionado() {
    $('#filmesadicionado').show('fast');
    $('#botoes').hide('fast');
    $('#addfilmes').hide('fast');

}

function sairFilmesAdicionado() {
    $('#filmesadicionado').hide('fast');
    $('#addfilmes').show('fast');
}

function sairVerFilmes() {
    $('#verfilmes').hide('fast');
    $('#botoes').show('fast');
}

function sairAddFilmes() {
    $('#addfilmes').hide('fast');
    $('#botoes').show('fast');
}

function sairTodosFilmes() {
    $('#todosfilmes').hide('fast');
    $('#botoes').show('fast');
    $('#todosfilmes').remove('<p>')
}

function sairQuantidadeFilmes() {
    $('#quantidadefilmes').hide('fast');
    $('#botoes').show('fast');
}