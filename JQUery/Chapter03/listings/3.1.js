
$(() => {
  // hiden

  // $('#switcher h3')
  //   .click(function () {
  //     $(this)
  //       .siblings('button')
  //       .toggleClass('hidden');
  //   });
  // modificamos el hidden en lugar de que sea en el h3 lo haga en todo el div que se llama switcher
  // $('#switcher')
  //   .click(() => {
  //     $('#switcher button')
  //       .toggleClass('hidden');
  //   });

 

  $('#switcher-narrow')
    .on('click', () => {
      $('body')
        .addClass('narrow')
        .removeClass('large');

      // $('#switcher-button')
      // .removeClass('selected');
      // $('#switcher-narrow')
      // .addClass('selected');

    });

  $('#switcher-large')
    .on('click', () => {
      $('body')
        .removeClass('narrow')
        .addClass('large');

      // $('#switcher-button')
      // .removeClass('selected');
      // $('#switcher-large')
      // .addClass('selected');
    });

  $('#switcher-default').addClass('selected')
    .on('click', () => {
      $('body')
        .removeClass('narrow')
        .removeClass('large');

      // $('#switcher-button')
      // .removeClass('selected');
      // $('#switcher-default').addClass('selected');
    });

  // (object sender, EnentArgs args) C#
  $('#switcher button')
    .on('click', (event) => { // Si se resuelve con arrow function this no es valido no trae el id del boton
      const element_id = event.target.id; // hay que leer el target.id del evento
    //  event.stopPropagation(); // este stop propagetion ayuda a que ahora no nos esconda los botones
      // ya que modificamos el hidden
      $('#switcher button')
        .removeClass('selected');
      //  $(`#${element_id}`).addClass('selected');
      $(event.target).addClass('selected');
    });

  $('#switcher h3')
    .hover((event) => {
      $(event.target).addClass('hover');
    }, (event) => {
      $(event.target).removeClass('hover');
    });

    $('#switcher') // aqui esta la etiqueta del div
    .click(function (event) {
      if (event.target == this) { // con este if se resuelve el problema que solo para esto ocurra si el click es exactamente
        $(this) // sobre el div
          .children('button')
          .toggleClass('hidden');
      }

    });

    $('#linkGoogle').click((event)=>{
      alert('Google');
      event.preventDefault(); // que no se vaya a hacer lo esperado (comportamiento default (navegacion de la liga))
    });

});


