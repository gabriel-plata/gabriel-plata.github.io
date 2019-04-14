$( document ).ready(function() {
    function exibeIem(e){
        $(this).find('conteudo-1').show();
        alert("teste");
    }

    $('#item-1-conteudo').on('click', exibeItem);

});