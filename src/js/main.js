if (document.getElementById("app")) {
    const app = new Vue({
        el: "#app",
        data: {
            productos: [],
            editElemento: [],
            errored: false,
            loading: true,
            modificando: false,
            editando: false
        },
        created() {
            var url = 'http://localhost:5000/productos'
            this.fetchData(url)
        },
        methods: {
            fetchData(url) {
                fetch(url)
                    .then(response => response.json())
                    .then(data => {
                        this.productos = data;
                        this.loading = false;
                    })
                    .catch(err => {
                        this.errored = true
                    })
            },
            eliminar(producto) {
                const url = 'http://localhost:5000/producto/' + producto;
                var options = {
                    method: 'DELETE',
                }
                fetch(url, options)
                    .then(res => res.text()) // or res.json()
                    .then(res => {
                        location.reload();
                    })
            },

            // cargarElementos(producto) {
            //     const url = 'http://localhost:5000/productos/' + producto;
            //     fetch(url)
            //         console.log("entre a fetch")
            //         .then(
            //             response => {
            //                 response.json();
                            
            //         })
            //         console.log("cargue response")
            //         .then(data => {
            //             this.editElemento = data;
            //             this.editando = true;
                        
            //         })
            //         console.log("cargue data / change editando")
            //         .catch(err => {
            //             this.errored = true
            //     })

            //     console.log(this.editElemento)
            // }

            // cargarElementos(producto) {
            //     const url = 'http://localhost:5000/productos/' + producto;
            //     fetch(url)
            //         .then(response => response.json())
            //         .then(data => {
            //             this.editElemento = data;
            //             this.editando = true;  
            //         })
            //         .catch(err => {
            //             this.errored = true
            //     })

            //     console.log(this.editElemento)
            // }
        }
    })
}
