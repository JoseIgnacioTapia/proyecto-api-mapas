class API {

    async obtenerDatos() {
        // obtener los datos desde la api
        const datos = await fetch('https://api.datos.gob.mx/v1/precio.gasolina.publico');

        // retornar datos como json
        const respuestJSON = await datos.json();

        return {
            respuestJSON
        }
    }

}
