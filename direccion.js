export default class Direccion{
    /**
     * 
     * @param {string} calle 
     * @param {number} numeroExterior 
     * @param {number} numeroInterio 
     * @param {string} colonia 
     * @param {number} codigoPostal 
     * @param {string} ciudad 
     * @param {string} municipio 
     */
    constructor(calle, numeroExterior, numeroInterio, colonia, codigoPostal, ciudad, municipio){
        this._calle =  calle;
        this._numeroExterior = numeroExterior;
        this._numeroInterio = numeroInterio;
        this._colonia = colonia;
        this._codigoPostal = codigoPostal;
        this._ciudad = ciudad;
        this._municipio = municipio;
    }
    getFormatoCorto(){
        return `Calle:${this._calle} Numero:${this._numeroExterior}`
    }
    getFormatoExtendido(){
        if(this._numeroInterio == "SN"){
            return `Calle:${this._calle} Numero Exterior:${this._numeroExterior} Numero Interior:${this._numeroInterio} 
Colonia:${this._colonia} CP:${this._codigoPostal} Ciudad:${this._ciudad} Municipio:${this._municipio}`
        }
        else{
            return `Calle:${this._calle} Numero Exterior:${this._numeroExterior} Numero Interir:${this._numeroInterio} 
Colonia:${this._colonia} CP:${this._codigoPostal} Ciudad:${this._ciudad} Municipio:${this._municipio}`            
        }
    }
}