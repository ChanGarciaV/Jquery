// busca todos los elementos div que tengan la clase poem-stanza y subrayalos
// con arrow functions se usan para indicar que en el actual documento aplicar dichos cambios
$(() =>{
    $('div.poem-stanza').addClass('highlight');
    $('.author').addClass('highlight');
    $('#paragraph1').css('color','red').css('background-color','yellow').slideUp(5000).slideDown(2000);
   // $('p').css('color','red').css('background-color','yellow').slideUp(5000).slideDown(2000);
});