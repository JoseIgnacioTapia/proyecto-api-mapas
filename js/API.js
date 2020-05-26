class API {

    async obtenerDatos() {

        const total = 1000;
        // obtener los datos desde la api
        const datos = await fetch(`https://api.datos.gob.mx/v1/precio.gasolina.publico?pageSize=${total}`);

        // retornar datos como json
        const respuestJSON = await datos.json();

        return {
            respuestJSON
        }
    }

}
