import Direccion from "./direccion";
import Restaurante from "./restaurante";
import Fecha from "./fecha";
import Tiempo from "./tiempo";
import Cliente from "./cliente";
import Pedido from "./pedido";
import ClienteFrecuente from "./clienteFrecuente";

class main{
    constructor(){
        let datosRestaurante = {
            nombre: "Restaurante Karmaland",
            telefono: 3121616699,
            direccion: new Direccion("Av. De la Paz", 555, "SN", "Esmeralda", 28099, "Colima", "Colima")
        };

        this._restaurante = new Restaurante(datosRestaurante);
        
        /*---------------------PEDIDOS---------------------*/
        
        let datosPedidos1 = {
            fecha: new Fecha(23,03,2020),
            hora: new Tiempo(10,50,"PM"),
            cliente: new Cliente("Kenia", new Direccion("Esther Cardenas",1208, "SN","Punta Diamante", 28979, "Colima", "Villa de Alvarez")),
            numeroPedido: 1
        }

        this._pedido1 = new Pedido(datosPedidos1);

        this._pedido2 = new Pedido({
            fecha: new Fecha(22,03,2020),
            hora: new Tiempo(5,30, "PM"),
            Cliente: new Cliente("Wigetta", new Direccion("Apocalipsis", 4, "SN", "Minecraft", 777, "Andorra", "Andorra")),
            numeroPedido: 2
        })

        this._pedido3 = new Pedido({
            fecha: new Fecha(21,03,2020),
            hora: new Tiempo(10,25,"AM"),
            cliente: new Cliente("Choko", new Direccion("Jumping Time", 69, "SN", "Zentralia", 28018, "Colima", "Colima")),
            numeroPedido: 3
        })

        /*---------------------CLIENTE FRECUENTE---------------------*/

        let clienteFrecuente = new ClienteFrecuente({
            numeroCliente: 1,
            fechaResgistro: new Fecha(15,02,2012),
            nombre: "Kenia",
            direccion: new Direccion("Esther Cardenas",1208, "SN","Punta Diamante", 28979, "Colima", "Villa de Alvarez"),
            telefono: 3141618781
        });

        /*---------------------CLIENTE FRECUENTE---------------------*/



    }

}