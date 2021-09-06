// This is the custom JavaScript file referenced by index.html. You will notice
// that this file is currently empty. By adding code to this empty file and
// then viewing index.html in a browser, you can experiment with the example
// page or follow along with the examples in the book.
//
// See README.txt for more information.

// $(() => {
//     $('#selected-plays > li') // todos los hijos de selected-play li se les aplicara este cambio
//     .addClass('horizontal'); // el cambio es agregar una clase horizontal
//     });

$(() => {//:eq(2) es un equal selector indica que solo se lo aplica al elemento 2 y no a los tres elementos(0,1,2)
    $('#selected-plays > li').addClass('horizontal'); //el operador > que hace que solo se aplique a los  li inmediatos
    $('#selected-plays li:not(.horizontal)').addClass('sub-level'); // toos los list que no sean horizontales 
    $('#selected-plays li:not(.sub-level):eq(0)').addClass('big-letter'); // toos los list que no sean horizontales
    $('a[href^="mailto:"]')
        .addClass('mailto');

    $('a[href^="mailto:"]') // principio ligar hancore
        .addClass('mailto'); // si el atributo href comienta con mito:
    $('a[href$=".pdf"]') // $final
        .addClass('pdflink'); // si el atributo href, termina con .pdf
    $('a[href^="http"][href*="henry"]') // si el atributo href comienza hre y 
        .addClass('henrylink'); // en cualquier lugar tiene los caracteres henry con coma se cumple uno y otro 'a[href^="http"],[href*="henry"]'
    //$('td:nth-child(1)').css('color','red'); // el primer hijo del padre recibira el cambio el primer td
    $('tr:nth-child(1)').css('color', 'red'); // el primer hijo del padre recibira el cambio el primer td
    // el nth.child le aplica a todos los hijos del primero, segundo, etc child ( el primer td de cada tr)
    // $('tr:eq(0)').css('color','red'); // este modifica solo el primer elemento
    //  $('tr:even').addClass('alt'); // lo aplica a las numeros par un cambio le agrega la clase alt
    $('tr:odd').addClass('alt'); // lo aplica para los nones nota: lo numera apartir del 0 el cero es considerado par
    //  $('tr').filter(':odd').addClass('highlight'); // esta es otra forma de aplicar lo de arriba
    //   $('td:contains(Henry)') .addClass('highlight');

    $('td:contains(Henry)')
        // .nextAll() //.nextAll().addBack()
        // .addClass('highlight')
        // de aqui para abajo hace lo mismo que el de arriba
        .parent() // Select its parent
        .find('td:eq(1)') // Find the 2nd descendant cell
        .addClass('highlight') // Add the "highlight" class
        .end() // Return to the parent of the cell containing "Henry"
        .find('td:eq(2)') // Find the 3rd descendant cell
        .addClass('highlight'); // Add the "highlight" class

    const eachText = [];
    $('td') // lo que define que lo hara sobre el td es este punto 'td'
        .each((i, td) => { // para cada td la variable td puede ser gato
            console.log(`Valor de i : ${i}`);
            if (td.textContent.startsWith('H')) { // lo meto a una condicion if que el contexto inicia con H
                eachText.push(td.textContent);
            }
        });
    console.log('each', eachText);
    // ["Hamlet", "Henry IV, Part I", "History", "Henry V", "History"]
    $('td:nth-child(3)') // lo que define que lo hara sobre el td es este punto 'td'
    .each((i, td) => { // para cada td la variable td puede ser gato
        console.log(`Valor de i : ${i}`);
        if (td.textContent.startsWith('16')){ // lo meto a una condicion if que el contexto inicia con H
            td.setAttribute('class','los-de-1600');
        }
        if (td.textContent.startsWith('15')){ // lo meto a una condicion if que el contexto inicia con H
            td.setAttribute('class','los-de-1500');
        }
        
    });
   // $('td:nth-child(3)').css('color', 'yellow'); // el primer hijo del padre recibira el cambio el primer td
});

