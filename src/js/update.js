// function cargarElementos() {
//     var args = location.search.substr(1).split('&');
//     // lee los argumentos pasados a este formulario
//     var parts = []
//     for (let i = 0; i < args.length; ++i) {
//         parts[i] = args[i].split('=');
//     }
//     console.log(args)
//     document.getElementById("txtId").value = parts[0][1]
//     document.getElementById("txtNombre").value = parts[1][1]
//     document.getElementById("txtPrecio").value = parts[2][1]
//     document.getElementById("txtStock").value = parts[3][1]

//     location.reload();
// }

// function cargarElementos(producto) {
//     var editElemento = []
//     const url = 'http://localhost:5000/producto/' + producto;
//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             this.editElemento = data;
//         })
//         .catch(err => {
//             this.errored = true
//     })

//     location.reload();
// }

// if (document.getElementById("update")) {
//     const update = new Vue({
//         el: "#update",
//         data: {
//             editElemento: [],
//             errored: false,
//             loading: true
//         },
//         created() {
//             // var url = 'http://localhost:5000/productos'
//             // this.fetchData(url)
//             // this.cargarElementos(this.editElemento)
//         },
//         methods: {
//             // fetchData(url) {
//             //     fetch(url)
//             //         .then(response => response.json())
//             //         .then(data => {
//             //             this.productos = data;
//             //             this.loading = false;
//             //         })
//             //         .catch(err => {
//             //             this.errored = true
//             //         })
//             // },

//             cargarElementos(producto) {
//                 const url = 'http://localhost:5000/productos/' + producto;
//                 fetch(url)
//                     .then(response => response.json())
//                     .then(data => {
//                         this.editElemento = data;
//                     })
//                     .catch(err => {
//                         this.errored = true
//                 })

//                 console.log(this.editElemento)
//             }
//         }
//     })
// }

var args = location.search.substr(1).split('&');
// lee los argumentos pasados a este formulario
var parts = []
for (let i = 0; i < args.length; ++i) {
    parts[i] = args[i].split('=');
}
console.log(args)
document.getElementById("txtId").value = parts[0][1]
document.getElementById("txtNombre").value = parts[1][1]
document.getElementById("txtPrecio").value = parts[2][1]
document.getElementById("txtStock").value = parts[3][1]

function modificar() {
    let id = document.getElementById("txtId").value
    let n = document.getElementById("txtNombre").value
    let p = parseFloat(document.getElementById("txtPrecio").value)
    let s = parseInt(document.getElementById("txtStock").value)
    let producto = {
        nombre: n,
        precio: p,
        stock: s
    }
    let url = "http://localhost:5000/productos/" + id
    var options = {
        body: JSON.stringify(producto),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow'
    }
    fetch(url, options)
        .then(function () {
            console.log("modificado")
            alert("Registro modificado")
            // Handle response we get from the API
        })
        .catch(err => {
            //this.errored = true
            console.error(err);
            alert("Error al Modificar")
        })
}
