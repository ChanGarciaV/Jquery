$(() => {
    let errores =[];

    $('#btn-send').click((event) => {
        alert('si entra');
        validaCampos();
        event.preventDefault(); // que no se vaya a hacer lo esperado (comportamiento default (navegacion de la liga))
    });

    // iniciamos la validadcion de datos
    function validaCampos() {

        let name = $("#name").val();
        let mail = $("#mail").val();
        let msg = $("#msg").val();
        // if( $("#name").val())
        //     alert('hay nombre');
        // else
        //     alert('no hay nombre')
        // if (!$('#name').val())
        //     alert('hay nombre');
        // if (!$('#name').val())
        //     alert('hay nombre');
        // if (!$('#name').val())
        //     alert('hay nombre');

        errores = [];

        $("#frmEjemplo input, #frmEjemplo textarea").each( function(){
            if(!$(this).val())
                agregaError($(this).attr("name"));

        });

        // if (name.length == 0)
        //     agregaError('nombre');
        // if (mail.length == 0)
        //     agregaError('correo');
        // if (msg.length == 0)
        //     agregaError('mensaje');

        $('#errores').empty();
        errores.forEach((errorText) => {
            let newError = `<li class ="error"> ${errorText} </li>`;
            $("#errores").append(newError);

        });
        if (errores.length == 0)
            alert('Mensjae enviado');

           $(".error").css({"color":"red","background-color":"yellow"});

    }

    function agregaError(campo){
        errores.push(`Falta agregar el ${campo}`);
    }

 

});


