import Cliente from "./cliente.js";
import Fecha from "./fecha.js";

export default class ClienteFrecuente extends Cliente{
    /**
     * 
     * @param {number} numeroCliente 
     * @param {Fecha} fechaRegistro
     */
    constructor({numeroCliente, fechaRegistro, nombre, direccion, telefono}){
        super(nombre, direccion, telefono)
        this._numeroCliente = numeroCliente;
        this._fechaRegistro = fechaRegistro;
    }

    getPerfil(){
        return `${this._numeroCliente}, ${this._fechaRegistro.getFecha()}, 
${this._nombre}, ${this._direccion.getFormatoCorto()}, ${this._telefono}`
    }
}