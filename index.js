let conteudo = '#home';
let itemConteudo = "#home-menu-opcao-1";
const show = {"display" : "block"};
const hide = {"display" : "none"};
const shadowTextItemHome = $('.home-item-menu-text').css("text-shadow");
const shadowBoxItemHome = $('.home-item-menu-text').css("box-shadow");
const shadowBoxItemHomeHover = $("#shadows-item-home-hover").css("box-shadow");
const shadowTextItemHomeHover = $("#shadows-item-home-hover").css("text-shadow");
const shadowBoxItemMenu = $('.area-item-menu').css("box-shadow");
const shadowBoxItemMenuHover = $("#shadows-item-menu-hover").css("box-shadow");
const bgColorItemMenu = $('.area-item-menu').css("background-color");
const bgColorItemMenuHover = $('').css("background-color");


handlersMenu(conteudo,itemConteudo);


function handlersMenu(conteudo,itemConteudo){

    $('.home-item-menu-text').on("mouseover", function(){
        $(this).css({"text-shadow" : shadowTextItemHomeHover});
        $(this).css({"box-shadow" : shadowBoxItemHomeHover});
    });
    
    $('.home-item-menu-text').on("mouseleave", function(){
        $(this).css({"text-shadow" : shadowTextItemHome});
        $(this).css({"box-shadow" : shadowBoxItemHome});
    });
    
    $('.area-item-menu').on("mouseover", function(){
        $(this).css({"background-color": bgColorItemMenuHover});
        $(this).css({"box-shadow" : shadowBoxItemMenuHover});
    });
    
    $('.area-item-menu').on("mouseleave", function(){
        $(this).css({"background-color": bgColorItemMenu});
        $(this).css({"box-shadow" : shadowBoxItemMenu});
    });
    
    $('.area-item-menu').on("click", function(){
        let idClicado = $(this).attr("id");
        if(idClicado == "opcao-menu-1" && conteudo != "#home"){
            $(conteudo).css(hide);
            $("#home").css(show);
            conteudo = "#home";
        }else if(idClicado == "opcao-menu-2" && conteudo != "#projetos"){
            $(conteudo).css(hide);
            $("#projetos").css(show);
            conteudo = "#projetos";
        }else if(idClicado == "opcao-menu-3" && conteudo != "#certificados"){
            $(conteudo).css(hide);
            $("#certificados").css(show);
            conteudo = "#certificados";
        }else if(idClicado == "opcao-menu-4" && conteudo != "#curriculo"){
            $(conteudo).css(hide);
            $("#curriculo").css(show);
            conteudo = "#curriculo";
        }else if(idClicado == "opcao-menu-5" && conteudo != "#contato"){
            $(conteudo).css(hide);
            $("#contato").css(show);
            conteudo = "#contato";
        }
    });
}