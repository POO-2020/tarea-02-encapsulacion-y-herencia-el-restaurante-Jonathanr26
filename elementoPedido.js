import Producto from "./producto.js";
import Precio from "./precio.js";

export default class ElementoPedido{
    /**
     *
     * @param {Producto} producto 
     * @param {number} cantidad 
     */
    constructor(producto, cantidad) {
      this._producto = producto;
      this._cantidad = cantidad;
    }
  
    getDescripcion() {
      let x = this._cantidad * this._producto._precio._valor;
      return `${this._cantidad} X  ${this._producto._nombre}, ${"$" +
        new Intl.NumberFormat("en-US").format(x)}`;
    }
}