class Billete
{
  constructor(v, c)
    {
      this.valor = v;
      this.cantidad = c;
    }
}

function entregarDinero()
{
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);
  for(var bil of caja)
  {
    if(dinero > 0)
    {
      div = Math.floor(dinero / bil.valor)
      if( div > bil.cantidad)
      {
        papeles = bil.cantidad //Entrego la cantidad de billetes que tengo porque no puedo dar más de los que existen
      }
      else
      {
        papeles = div;
      }

      entregado.push( new Billete(bil.valor, papeles));
      dinero = dinero - (bil.valor * papeles);
    }
  }

  if (dinero > 0)
  {
    resultado.innerHTML = "soy un cajero en la inmunda :(";
  }
  else
  {
    for(var e of entregado)
    {
      if(e.cantidad > 0)
      resultado.innerHTML = resultado.innerHTML +  e.cantidad + " billetes de $" + e.valor + "<br />"
    }
  }
  console.log(entregado);
}

var caja = [];
var entregado = [];
caja.push ( new Billete(50, 20));
caja.push ( new Billete(20, 30));
caja.push ( new Billete(10, 20));
var dinero =0;
var div = 0;
var papeles = 0;

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer")
b.addEventListener("click", entregarDinero);
