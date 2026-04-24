class Turbina
{
    private  numTurbinas:number = 0;
    public constructor( n :number) 
    {
        this.numTurbinas = n;
    }
    public  ToString()
    {
        return this.numTurbinas + " Turbina/s";
    }
}

class Helice
{
    private  numHelices:number = 0;
    public constructor( n:number)
    {
        this.numHelices = n;
    }
    public ToString()
    {
        return this.numHelices + " hélice/s";
}

}

class TrendeAterrizaje
{
    private  numNeumaticos:number = 0;
    private  numAmortiguadores:number= 0;
    private  fijoRetractil:boolean = false;
    public constructor(a:number, b:number, c:boolean)
    {
        this.numNeumaticos = a;
        this.numAmortiguadores = b;
        this.fijoRetractil = c;
    }
    public  ToString()
    {
        let mensaje:string = "Tren de Aterrizaje compuesto por: ";
        if (this.fijoRetractil)
        {
            mensaje += " con Retractil fijo, ";
        }
        mensaje +=  this.numNeumaticos + " neumáticos, " + this.numAmortiguadores + " amoriguadores ";
        return mensaje;
    }
}

class Cubierta
{
    private cabinaTripulacion:boolean = false;
    private cabinaVuelo:boolean = false;
    private sistemaEmergencia:boolean = false;
    private numTanquesCombustible:number = 0;
    private numPuertasSalidas:number = 0;
    public constructor( pCabinaTripulacion:boolean,  pCabinaVuelo:boolean,  pSistemaEmergencia:boolean,  pTanquesCombustible:number,  pPuertasSalida:number)
    {
        this.cabinaTripulacion = pCabinaTripulacion;
        this.cabinaVuelo = pCabinaVuelo;
        this.sistemaEmergencia = pSistemaEmergencia;
        this.numTanquesCombustible = pTanquesCombustible;
        this.numPuertasSalidas = pPuertasSalida;
    }

    public ToString()
    {
        let mensaje = "Cubierta compuesta de: ";
        if (this.cabinaVuelo)
        {
            mensaje += " Cubierta de Vuelo, ";
        }
        if (this.cabinaTripulacion)
        {
            mensaje += " Cubierta de Tripulación, ";
        }
        if (this.sistemaEmergencia)
        {
            mensaje += " Sistema de Emergencia, ";
        }
        mensaje += this.numTanquesCombustible + " Tanques de Combustible, ";
        mensaje += this.numPuertasSalidas + " Puertas de Salida.";
        return mensaje;
    }
}

class Alas
{
   private  numAlasFrente:number = 0;
   private  numAlasCola:number = 0;
   public constructor( mAlasFrente:number,  nAlasCola:number) 
   {
    this.numAlasFrente = mAlasFrente;
    this.numAlasCola = nAlasCola;
   }

    public ToString()
    {
        return "Alas Frontales: " + this.numAlasFrente + " Alas Posteriore: " + this.numAlasCola;
    }

}

class Aeroplano
{
    private  helice: Helice ;
    private  trenAterrizaje:TrendeAterrizaje;
    private  alas: Alas ;
    private  cubierta:Cubierta ;

    constructor( phelice:Helice,  pTrenAterrizaje:TrendeAterrizaje,  pAlas:Alas,  pCubierta:Cubierta)
    {
         this.helice = phelice;
         this.trenAterrizaje = pTrenAterrizaje;
         this.alas = pAlas;
         this.cubierta = pCubierta;
    }
    public  ToString()
    {
        let mensaje = "Aeroplano compuesto por: ";
        mensaje += this.helice.ToString();
        mensaje += this.alas.ToString();
        mensaje += this.trenAterrizaje.ToString();
        mensaje += this.cubierta.ToString();
        return mensaje;

    }
}
class Aeropuerto {
    private aeroplanos: Aeroplano[] = [];

    agregarAeroplano(a: Aeroplano) {
        this.aeroplanos.push(a);
    }

    mostrarAeroplanos() {
        this.aeroplanos.forEach(a => {
            console.log(a.ToString());
        });
    }
}
let  helice: Helice = new Helice(3);
let  trenAterrizaje:TrendeAterrizaje = new TrendeAterrizaje(2,3,true);
let  alas: Alas = new Alas(2,3);
let  cubierta:Cubierta = new Cubierta(true,true,true,4,4);

let aeroplano=new Aeroplano(helice, trenAterrizaje, alas, cubierta);
console.log(aeroplano.ToString());
let aeropuerto = new Aeropuerto();
aeropuerto.agregarAeroplano(aeroplano);
aeropuerto.mostrarAeroplanos();
//El código fue implementado y ejecutado correctamente en un entorno local utilizando TypeScript.
//Se compiló el archivo .ts a .js y se ejecutó con Node.js, obteniendo como salida la descripción del aeroplano y sus componentes.
//En el código presentado no existen relaciones de jerarquía (herencia), ya que ninguna clase utiliza la palabra clave extends.
//No existe una diferencia significativa en el tiempo de ejecución entre ambas. Tanto la composición como la agregación trabajan con referencias a objetos en memoria, por lo que su rendimiento es prácticamente el mismo.