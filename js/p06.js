function buscar(){
    const url = " https://jsonplaceholder.typicode.com/users";
    let id= document.getElementById('txtId').value

    axios.get(url).then((res)=>{mostrarDatos(res.data)}).catch((err)=>{alert("Ocurrió un error: " + err)});

    function mostrarDatos(data){
        for(let item of data){
            if(id == item.id){
                document.querySelector("#txtNombre").value = item.name;
                document.querySelector("#txtNombreUsuario").value =item.username;
                document.querySelector("#txtEmail").value = item.email;
                document.querySelector("#txtCalle").value = item.address.street;
                document.querySelector("#txtNumero").value = item.address.suite;
                document.querySelector("#txtCiudad").value = item.address.city;
                return;
            }
        }
        document.querySelector("#txtNombre").value = "";
        document.querySelector("#txtNombreUsuario").value = "";
        document.querySelector("#txtEmail").value = "";
        document.querySelector("#txtCalle").value = "";
        document.querySelector("#txtNumero").value = "";
        document.querySelector("#txtCiudad").value = "";
        alert("No se encontró el usuario")
    }

}
const btnBuscar = document.getElementById('btnBuscar');
btnBuscar.addEventListener('click',function(){buscar()});