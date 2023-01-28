function buscar(){
    const url = " https://jsonplaceholder.typicode.com/users";
    let id= document.getElementById('txtId').value

    axios.get(url).then((res)=>{mostrarDatos(res.data)}).catch((err)=>{console.log("Ocurrió un error" + err)});

    function mostrarDatos(data){
        let txtNombre = document.getElementById('txtNombre');
        let txtNombreUsuario = document.getElementById('txtNombreUsuario');
        let txtEmail = document.getElementById('txtEmail');
        let txtCalle = document.getElementById('txtCalle');
        let txtNumero = document.getElementById('txtNumero');
        let txtCiudad = document.getElementById('txtCiudad');

        for(let item of data){
            if(id == item.id){
                txtNombre.value = item.name;
                txtNombreUsuario.value = item.username;
                txtEmail.value = item.email;
                txtCalle.value = item.address.street;
                txtNumero.value = item.address.suite;
                txtCiudad.value = item.address.city;
                break;
            }
        }
    }

}
const btnBuscar = document.getElementById('btnBuscar');
btnBuscar.addEventListener('click',function(){buscar()});