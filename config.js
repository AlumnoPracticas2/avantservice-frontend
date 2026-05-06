// Configuración de la API — cambia BASE_URL al desplegar en producción
var AVANTSERVICE_CONFIG = (function () {
    var isLocal = location.hostname === 'localhost' || location.hostname === '127.0.0.1' || location.hostname === '127.0.0.1';
    var BASE_URL = isLocal ? 'http://localhost:3000' : 'https://avantelite-backend-production.up.railway.app';
    return {

        BASE_URL: BASE_URL,
        API_BLOG: BASE_URL + '/api/blog',
        API_CONTACT: BASE_URL + '/contacto',
        API_TRACK: BASE_URL + '/api/track',
        API_BUDGET: BASE_URL + '/api/presupuesto',
        API_SERVICIOS: BASE_URL + '/api/servicios',
    };
})();
