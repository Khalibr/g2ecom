


const { createApp } = Vue

createApp({
    data() {
        return {
        products: [],    

        }
    },

    created: function(){
        fetch("https://sheetdb.io/api/v1/vdsf4vsmjlvsj")
            .then((respuesta) => respuesta.json())
            .then((g2ecom) => this.products = g2ecom)
            .catch((e) => console.log(e));
    }

}).mount('#app')