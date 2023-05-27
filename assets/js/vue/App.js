
const { createApp } = Vue

createApp({
    data() {
        return {
            products: [],

        }
    },

    created: function () {
        fetch("https://sheetdb.io/api/v1/vdsf4vsmjlvsj")
            .then((respuesta) => respuesta.json()) //captura la promesa y la pedimos en formato json
            .then((g2ecom) => this.products = g2ecom) // capturo los datos del array y los asigno a la lista vacia 'products'
            .catch((e) => console.log(e));
    }

}).mount('#app')