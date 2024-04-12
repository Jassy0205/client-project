import { ENV } from "../utils/constants"; 

export class User{
    base_api = ENV.BASE_API;

    async signUp (data) {
        console.log(data);
        const url = `${this.base_api}/${ENV.API_ROUTES.REGISTER}`;
        console.log(url);
        console.log(ENV.API_ROUTES)

        const response = await fetch(url, {
            method: "POST", 
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json"},
        });

        console.log(response);
        return response
    };

    async signIn(data) {
        console.log(data);
        const url = `${this.base_api}/${ENV.API_ROUTES.LOGIN}`; // URL para iniciar sesión
        console.log(url);
        console.log(ENV.API_ROUTES);
    
        try {
          const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(data),
            headers: { "Content-Type": "application/json" },
          });

          console.log(response);
          return response; 
          
        } catch (error) {
          console.error("Error en la solicitud de inicio de sesión:", error);
          throw error; 
        }
    };
}