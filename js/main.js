$(document).ready(function(){

    $('#frmTarefas').on('submit', function(e){
        e.preventDefault();

        const strTarefa = $('#txtTarefa').val();
        const novoItem = $(`<li class="normal">${strTarefa}</li>`);

        $(novoItem).appendTo('ul');
        $('#txtTarefa').val('');
    })

    $('ul').on('click', '.normal',function(){
        $(this).removeClass('normal');
        $(this).addClass('marcado');
    })
})