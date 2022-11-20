<template>
    <div>
        <h1>Login</h1>

        <button class="btn btn-primary" @click="login">Login</button>

        <button class="btn btn-primary" @click="mostrarEmpleados">Mostrar Empleados</button>


        <table>
            


        </table>

    </div>
</template>


<script>
import empleadosService from '../services/empleadosService.js'

const service = new empleadosService();


export default {

    name: "LoginComponent",

    data() {
        return {

            datos: {
                userName: "Rey",
                password: "7839"
            },

            empleados: []  
            
        }
    },

    mounted() {
      this.comprobarLogin();
    },

   

    methods: {
        login() {
            service.validarUsuario(this.datos).then((response) => {
                console.log(response);
            })
        },

        comprobarLogin() {
            if(service.getToken() != null) {
                console.log("Ya hay un token");
            }else{
                console.log("No hay token");
            }
        },

        mostrarEmpleados() {
            service.getEmpleados().then((response) => {
                this.empleados = response.data;
            })
        }
    }
}


</script>