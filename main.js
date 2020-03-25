import Direccion from "./direccion.js";
import Restaurante from "./restaurante.js";
import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import Cliente from "./cliente.js";
import Pedido from "./pedido.js";
import ClienteFrecuente from "./clienteFrecuente.js";
import ElementoPedido from "./elementoPedido.js";
import Precio from "./precio.js";
import Producto from "./producto.js";

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
            fecha: new Fecha(23,3,2020),
            hora: new Tiempo(10,50,"PM"),
            cliente: new Cliente("Kenia", new Direccion("Esther Cardenas",1208, "SN","Punta Diamante", 28979, "Colima", "Villa de Alvarez")),
            numeroPedido: 1
        }

        this._pedido1 = new Pedido(datosPedidos1);

        this._pedido2 = new Pedido({
            fecha: new Fecha(22,3,2020),
            hora: new Tiempo(5,30, "PM"),
            Cliente: new Cliente("Wigetta", new Direccion("Apocalipsis", 4, "SN", "Minecraft", 777, "Andorra", "Andorra")),
            numeroPedido: 2
        })

        this._pedido3 = new Pedido({
            fecha: new Fecha(21,3,2020),
            hora: new Tiempo(10,25,"AM"),
            cliente: new Cliente("Choko", new Direccion("Jumping Time", 69, "SN", "Zentralia", 28018, "Colima", "Colima")),
            numeroPedido: 3
        })

        /*---------------------CLIENTE FRECUENTE---------------------*/

        this._clienteFrecuente = new ClienteFrecuente({
            numeroCliente: 1,
            fechaResgistro: new Fecha(15,2,2020),
            nombre: "Kenia",
            direccion: new Direccion("Esther Cardenas",1208, "SN","Punta Diamante", 28979, "Colima", "Villa de Alvarez"),
            telefono: 3141618781
        });

    }

    testRestaurante(){
        let producto1  = new Producto("Clericot", 25);
        let producto2  = new Producto("Refresco", 18);
        let producto3  = new Producto("Pizza familiar", 50);

        this._restaurante.registrarProductos(producto1);
        this._restaurante.registrarProductos(producto2);
        this._restaurante.registrarProductos(producto3);
        this._restaurante.listarProductos();

        console.log(this._restaurante.registrarPedido(this._pedido1));
        console.log(this._restaurante.registrarPedido(this._pedido2));
        console.log(this._restaurante.registrarPedido(this._pedido3));
        this._restaurante.listarPedidos();

        console.log(this._restaurante.actualizarPedidos(this._pedido1, this._pedido2));
        this._restaurante.listarPedidos();

        console.log(this._restaurante.eliminarPedido(this._pedido3));
        this._restaurante.listarPedidos();
    }

    testClienteFrecuente(){
        console.log(this._clienteFrecuente.getPerfil());
    }

    añadirElementoPedido(){
        let elementoPedido1 = new ElementoPedido(new Pedido("Pizza ppchampi", new Precio(65)), 4);
        let elementoPedido2 = new ElementoPedido(new Pedido("Crepa de Nutella", new Precio(45.5)), 3);
        this._pedido1.agregarElemento(elementoPedido1);
        this._pedido1.agregarElemento(elementoPedido2);
        this._pedido1.listarElementos();

        let elementoPedido3 = new ElementoPedido(new Pedido("Pizza carnivora", new Precio(75)), 2);
        let elementoPedido4 = new ElementoPedido(new Pedido("Brownie", new Precio(37.5)), 2);
        this._pedido2.agregarElemento(elementoPedido3);
        this._pedido2.agregarElemento(elementoPedido4);
        this._pedido2.listarElementos();

        let elementoPedido5 = new ElementoPedido(new Pedido("Ensalada de pollo", new Precio(55)), 3);
        let elementoPedido6 = new ElementoPedido(new Pedido("Crepa de zarzamora", new Precio(40.5)), 4);
        this._pedido3.agregarElemento(elementoPedido5);
        this._pedido3.agregarElemento(elementoPedido6);
        this._pedido3.listarElementos();
    }

    testPedido(){
        console.log(this._pedido1.getResumen());
        console.log(this._pedido2.getResumen());
        console.log(this._pedido3.getResumen());
    }
}
let app = new main();
/*
app.testClienteFrecuente();
app.añadirElementoPedido();
app.testPedido();
*/
app.testRestaurante();