const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {
    ui.mostrarEstablecimientos();
})

//Habilitar búsqueda de establecimientos
const buscador = document.querySelector('#buscar input');
buscador.addEventListener('input', () => {
    if (buscador.nodeValue.length > 5) {
        // buscar en la api
        ui.obtenerSuerencias(buscador.value);
    }
});
