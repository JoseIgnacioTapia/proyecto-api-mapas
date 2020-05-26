class UI {
    constructor() {

        // instanciar la API
        this.api = new API();

        // Crear los markers con layerGoups
        this.markers = new L.LayerGroup();

         // Iniciar el mapa
         this.mapa = this.inicializarMapa();

    }

    inicializarMapa() {
         // Inicializar y obtener la propiedad del mapa
         const map = L.map('mapa').setView([19.447667, -99.147741], 12);
         const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
         L.tileLayer(
             'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
             attribution: '&copy; ' + enlaceMapa + ' Contributors',
             maxZoom: 18,
             }).addTo(map);
         return map;

    }

    mostrarEstablecimientos() {
        this.api.obtenerDatos()
            .then(datos => {
                const resultado = datos.respuestJSON.results;

                // ejecutar la función para mostrar los pines
                this.mostrarPines(resultado);
            })
    }

    mostrarPines(datos) {
        // Limpiar los markers
        this.markers.clearLayers();

        // recorrer los establecimientos
        datos.forEach(dato => {
            // destructuring
            const {latitude, longitude, calle, regular, premium} = dato;

            // Crear Popup
            const opcionesPopUp = L.popup()
                .setContent(`<p>Calle: ${calle}</p>
                             <p><b>Regular:</b> $ ${regular}</p>
                             <p><b>Premium:</b> $ ${premium}</p>   
                `);

            // agregar el PIN
            const marker= new L.marker([
                parseFloat(latitude),
                parseFloat(longitude)
            ]).bindPopup(opcionesPopUp);

            this.markers.addLayer(marker);
        });
        this.markers.addTo(this.mapa);
    }

    // buscador
    obtenerSugerencias(busqueda) {
        this.api.obtenerDatos()
            .then(datos => {
                // obtener los datos
                const resultados = datos.respuestJSON.results;

                // Enviar el JSON y la búsqueda para el filtrado
                this.filtrarSugerencias(resultados, busqueda);
            });
    }

    // filtra las sugerencias en base al input
    filtrarSugerencias(resultado, busqueda) {
        // filtrar con .custom-file-control

        // mostrar los pines
    }
}
