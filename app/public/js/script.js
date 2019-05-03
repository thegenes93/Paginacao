$(document).ready(function () {
    $.get("/listar", function (dados) {
     
        let pagina =0
        let tamanhoPagina = 5
        
      
    function paginar() {
     
            $('table > tbody > tr').remove();
            var tbody = $('table > tbody');
            for (var i = pagina * tamanhoPagina; i < dados.length && i < (pagina + 1) * tamanhoPagina; i++) {
                tbody.append(
                    $('<tr>')
                        .append($('<td>').append(dados[i].id))
                        .append($('<td>').append(dados[i].name))
                        .append($('<td>').append(dados[i].email))
                        .append($('<td>').append(dados[i].categoryId))
                        
                )
            }
            $('#numeracao').text('Página ' + (pagina + 1) + ' de ' + Math.ceil(dados.length / tamanhoPagina));
    
       
    }

    function ajustarBotoes() {
        $('#proximo').prop('disabled', dados.length <= tamanhoPagina || pagina > dados.length / tamanhoPagina - 1);
        $('#anterior').prop('disabled', dados.length <= tamanhoPagina || pagina == 0);
    }



    $('#proximo').click(function () {
        if (pagina < dados.length / tamanhoPagina - 1) {
            pagina++;
            paginar();
            ajustarBotoes();
        }
    });
    $('#anterior').click(function () {
        if (pagina > 0) {
            pagina--;
            paginar();
            ajustarBotoes();
        }
    });
    paginar();
    ajustarBotoes();


});
});







