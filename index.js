let conteudo = '#home';
let itemConteudo = "#home-menu-opcao-1";
const show = {"display" : "block"};
const hide = {"display" : "none"};

handlersMenu(conteudo,itemConteudo);

function handlersMenu(conteudo,itemConteudo){
  
    $('.area-item-menu').on("click", function(){
        let idClicado = "#" + $(this).attr("id").replace(/(\w+)-(\w+)-(\w+)/, '$3');
        if(idClicado != conteudo){
            $(conteudo).css(hide);
            $(idClicado).css(show);
            conteudo = idClicado;
        }
    });

    $('.home-item-menu-text').on("click", function(){
        let idClicado = "#" + $(this).closest('div').attr("id");
        if(idClicado != itemConteudo){
            let regex = /(\W)(\w+)-(\w+)-(\w+)-(\w+)/;
            let anterior = itemConteudo.replace(regex, '$1$2-conteudo-$4-$5');
            let novo =  anterior.replace(regex, '$1$2-$3-$4-' + idClicado.replace(regex, '$5'));
            $(anterior).css(hide);
            $(novo).css(show);
            itemConteudo = idClicado;
        }
    });
}