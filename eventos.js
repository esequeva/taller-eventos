document.addEventListener("DOMContentLoaded", function(){
    const divSaludo = document.querySelector("div");

    divSaludo.addEventListener("dblclick", function(event){
        event.stopPropagation();
        alert("Hola, soy el div con doble click");

});
});