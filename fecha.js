const diaSemana = [
    "Domingo", 
    "Lunes", 
    "Martes", 
    "Miercoles", 
    "Jueves", 
    "Viernes", 
    "Sabado"];
const mesAño = [
    "Enero", 
    "Febrero", 
    "Marzo", 
    "Abril", 
    "Mayo", 
    "Junio", 
    "Julio", 
    "Agosto", 
    "Septiembre", 
    "Octubre", 
    "Noviembre", 
    "Diciembre"];
export default class Fecha{
    /**
     * 
     * @param {number} dia 
     * @param {number} mes 
     * @param {number} año 
     */    
    constructor(dia, mes, año){ 
        this._fecha = new Date(año, mes-1, dia);
    }
    getAños(){
        let x = Date.now() - this._fecha;
        let z = 1000*60*60*24*365;
        let fechaDiferencia = Math.trunc(x/z);
        return `la diferencia de la fecha es de ${fechaDiferencia} años`;
    }
    getMeses(){
        let x = Date.now() - this._fecha;
        let z = 1000*60*60*24*7*4;
        let fechaDiferencia = Math.trunc(x/z);
        return `la diferencia de la fecha es de ${fechaDiferencia} meses`;
    }
    getSemanas(){
        let x = Date.now() - this._fecha;
        let z = 1000*60*60*24*7;
        let fechaDiferencia = Math.trunc(x/z);
        return `la diferencia de la fecha es de ${fechaDiferencia} semanas`;
    }
    getDias(){
        let x = Date.now() - this._fecha;
        let z = 1000*60*60*24;
        let fechaDiferencia = Math.trunc(x/z);
        return `la diferencia de la fecha es de ${fechaDiferencia} dias`; 
    }
    getFecha(){
        return `${this._fecha.getDate()}/${mesAño[this._fecha.getMonth()]}/${this._fecha.getFullYear()}`;
    }
    getDiaFecha(){
        return `${diaSemana[this._fecha.getDay()]}`;        
    }
}