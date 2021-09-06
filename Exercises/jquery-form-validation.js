$(() => {
  
      $('#btn-send').click((event)=>{
       // alert('Google');
       validateData();
        event.preventDefault(); // que no se vaya a hacer lo esperado (comportamiento default (navegacion de la liga))
      });
  
  });

  function validateData(){
      let name = $("#name").val();
      let mail = $("#mail").val();
      let msg = $("msg").val();

      if(msjBool(name,"Name") && msjBool(mail,"Email")&& msjBool(msg,"Message"))
      {
          alert("Mensaje enviado");
      }
    
      
    }
    function msjBool(txt,name){
        if(txt != ""){
            return true;
        }else{
            alert("Favor de llenar el campo: " + name);
            return false;
        }
    }
  