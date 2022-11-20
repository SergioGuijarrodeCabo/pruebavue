import axios from "axios";
export default class EmpleadosService {
    constructor() {
        this.url = "https://localhost:44396/api/empleados";
    }

    async validarUsuario(datos) {
    
      return new Promise(function(resolve) {

      var request = "auth/login";
      var token ="";
      var empleadosAuth = "https://apiempleadoscoreoauth.azurewebsites.net/";
      var url = empleadosAuth + request;
      axios.post(url, datos).then(response => {

        token = response.data;
        console.log(token);
        localStorage.setItem("token", token);
        resolve(token);
      });
    });
    }


    async getToken() {
        var token = localStorage.getItem("token");
        return token;
    }


    async getEmpleados() {
      
         var empleadosAuth = "https://apiempleadoscoreoauth.azurewebsites.net/";
        var request= "api/empleados";  
        var url = empleadosAuth + request;
       const headers = {'Authorization': 'Bearer ' + localStorage.getItem("token")};
 

       



        return new Promise(function(resolve) {
            axios.get(url, { headers: headers }).then(response => {
                resolve(response.data);
            });
        });
 

/* 
        return new Promise(function(resolve) {
            axios.get(url, { 'headers': { 'Authorization': 'Bearer '+localStorage.getItem("token") } }).then(response => {
                resolve(response.data);
            });
        }); */




    }













}

