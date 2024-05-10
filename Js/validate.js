//Seu JavaScript de validação aqui<!DOCTYPE html>
const camposDoFormulario = document.querySelectorAll("[required]");

camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificaCampo());
   

})

