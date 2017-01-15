//var tipsMessages = $('#tips').add("div").addClass("donMsg-container").appendTo("paper-dialog-scrollable");

//function(data) {}

/* Funcao Teste para gerar mensagens #1 Funcionando, porem nao scrolla
$(document).ready(function(){
    $('#butto').click(function(){
        $("#ctnair").clone().appendTo($("#tips"));
    });
});
*/


$(function() {
    //Funcao Teste para gerar mensagens #2 Funcionando
    $('#butto').click(function() {
        var scrollable = $('#roda');
        var inner = $('#tips');
        
        var atBottom = Math.abs(inner.offset().top) + scrollable.height() + scrollable.offset().top >= inner.outerHeight();
        
        inner.append($("#ctnair").clone().appendTo($("#tips")));
        
        if ( atBottom ) {
          scrollable.animate({ scrollTop: inner.outerHeight() });
        }
    });
});
