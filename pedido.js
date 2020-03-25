import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import ElementoPedido from "./elementoPedido.js";
import Cliente from "./cliente.js";
import Precio from "./precio.js";
import Producto from "./producto.js";

export default class Pedido {
    /**
     *
     * @param {Fecha} fecha 
     * @param {Tiempo} hora 
     * @param {Cliente} cliente 
     * @param {ElementoPedido} elementosPedidos
     */
    constructor(fecha, hora, cliente, numeroPedido) {
      this._fecha = fecha;
      this._hora = hora;
      this._cliente = cliente;
      this._numeroPedido = numeroPedido;
      this._elementosPedidos = new Array();
    }

    getNumeroPedido() {
      return this._numeroPedido;
    }
  
    esIgualA(pedido) {
      if (pedido.getNumeroPedido() === this._numeroPedido) {
        return true;
      }
      return false;
    }
  
    getResumen() {
      return `${this._fecha.getFecha()} ${this._hora.getFormato12()} 
- ${this.getNumeroElementos()} elementos con ${this.getProductos()} productos - total: ${this.getCostoTotal()}  `
    }
  
    getNumeroElementos() {
      return this._elementosPedidos.length;
    }
  
    getProductos() {
      let x = 0;
      this._elementosPedidos.forEach(elemento => {
        x = elemento._cantidad + x
      })
  
      return (x)
    }
  
    getCostoTotal() {
      let x = 0;
      this._elementosPedidos.forEach(elemento => {
        x = (elemento._cantidad * elemento._producto._precio._valor) + x
      });
  
      return new Precio(x).getPrecio();
    }
  
  
    agregarElemento(elemento) {
      this._elementosPedidos.push(elemento);
    }
  
    listarElementos() {
      this._elementosPedidos.forEach((elemento, i) => {
        console.log(`${i} - ${elemento.getDescripcion()}`)
      });
    }
  
}