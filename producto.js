import Precio from "./precio.js";

export default class Producto{
  /**
   *
   * @param {string} nombre 
   * @param {Precio} precio 
   */
  constructor(nombre, precio) {
    this._nombre = nombre;
    this._precio = precio;
  }

  getDescription() {
    return `${this._nombre} ${this._precio.getPrecio()}`;
  }
}