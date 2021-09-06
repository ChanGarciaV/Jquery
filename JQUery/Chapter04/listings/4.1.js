$(() => {
  $('#switcher-large')
    .click(() => {

    });

  // 
  const $firstPara = $('p')
    .eq(1)
    .hide();
  // .fadeOut(1000);


  // $('a.more') // el selector puede ser por ID o por clase
  //   .click((e) => { // funcion flecha
  //     e.preventDefault();
  //     if ($firstPara.is(':hidden')) {
  //       $firstPara.fadeIn('slow');
  //       $(e.target).text('read less');
  //     } else {
  //       $firstPara.fadeOut('slow');
  //       $(e.target).text('read more');
  //     }
  //   });


  // otra forma de hacer el toogle

  $('a.more')
    .click((e) => {
      e.preventDefault();
      $firstPara.slideToggle('slow');
      $(e.target)
        .text(
          $(e.target).text() === 'read more' ?
            'read less' : 'read more'
        );
    });

  /*
        e.preventDefault();
        $('p')
          .eq(1)
          .slideDown('slow');
          //.fadeIn(5000);
        //  .show('slow');
        $(e.target) // esto es equivalente al this en las funciones arrow
          .hide();
              });
  */



});
