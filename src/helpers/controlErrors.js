
// CONTROLAR QUE EL PASWORD CONTENGA 8 CARACTERES Y UNA MAYUSCULA
export const controlPassword = (data) =>{
    const regex = /^(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
     return regex.test(data);
    // si cumple retorna True, si no False
  }

// CONTROL DE QUE 2 PASSWORS SEAN IGUALES
export const controlDePasswords = (password, repPassword) =>{
      if (password === repPassword) {
        return true;
      }else{
        return false;
      }
    // si cumple retorna True, si no False
  }

  //VALIDAR QUE EL EMAIL CUENTE CON LAS CONDISIONES DE UN MAIL
  export const controlEmail = (data) =>{
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
     return regex.test(data);
    // si cumple retorna True, si no False
  }  

  