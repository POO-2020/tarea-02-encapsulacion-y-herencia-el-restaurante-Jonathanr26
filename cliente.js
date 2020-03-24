import Direccion from "./direccion.js"
export default class Cliente{
    /**
     * 
     * @param {sting} nombre 
     * @param {Direccion} direccion 
     * @param {number} telefono 
     */
    constructor(nombre, direccion, telefono){
        this._nombre = nombre;
        this._direccion = direccion;
        this._telefono = telefono;
    }
    getPerfil(){
        return `Nombre: ${this._nombre}, 
Direccion: ${this._direccion.getFormatoExtendido()}, 
Telefono: ${this._telefono}`
    }
}