import Pedido from "./pedido.js"
import ElementoPedido from "./elementoPedido.js"
import Producto from "./producto.js"
import Cliente from "./cliente.js"
import Direccion from "./direccion.js"
import Fecha from "./fecha.js"
import Tiempo from "./tiempo.js"
import Precio from "./precio.js"

export default class Restaurante {
    /**
     * 
     * @param {string} nombre 
     * @param {number} telefono 
     * @param {Direccion} direccion 
     * @param {Producto} productos
     * @param {Pedido} pedidos
     */
    constructor(nombre, telefono, direccion) {
        this._nombre = nombre;
        this._telefono = telefono;
        this._direccion = direccion;
        this._productos = new Array();
        this._pedidos = new Array();
    }

    registrarProductos(producto) {
        this._productos.push(producto.getDescription());
    }

    listarProductos() {
        this._productos.forEach((producto, i) => {
            console.log(`${i} - ${producto}`)
        });
    }

    registrarPedido(pedido) {
        if(this.buscarPedido(pedido) === undefined){
            this._pedidos.push(pedido);
            return true;
        }
        return false;
    }

    listarPedidos() {
        this._pedidos.forEach((pedido, i) => {
            console.log(`${i} - ${pedido.getResumen()}`)
        })
    }

    buscarPedido(pedido){
        let resultado = this._pedidos.find(p => p.esIgualA(pedido));

        return resultado;
    }


    buscarIndicePedido(pedido){
        let indice = this._pedidos.findIndex(p => p.esIgualA(pedido));

        return indice;
    }

    eliminarPedido(pedido){
        let indice = this.buscarIndicePedido(pedido);

        if(indice < 0){
            return false;
        }

        this._pedidos.splice(indice,1);

        return true;
    }

    actualizarPedidos(pedido, nuevoPedido){
        let indice = this.buscarIndicePedido(pedido);

        if(indice < 0){
            return false;
        }

        this._pedidos.splice(indice, 1, nuevoPedido);

        return true;
    }
}