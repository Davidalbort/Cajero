class Billete
{
    constructor(n,v,c)
    {
        this.nombre = n;
        this.valor = v;
        this.cantidad = c;
        this.imagen = new Image();
        this.imagen.src = billetes[this.nombre];
    }


}

var f = 0;
var cajas = [];

var papeles = 0;
var div = 0;
var di = document.getElementById("cantidad");
var resultado = document.getElementById("resultado");
var money = 0;
var disponible = document.getElementById("disponible");
var retiro = 0;

var boton = document.getElementById("extraer");
boton.addEventListener("click", sacar);
var billetes = [];


billetes["cincuenta"] = "50.png";
billetes["veinte"] = "20.png";
billetes["diez"] = "10.png";

cajas.push(new Billete ("cincuenta",50,6));

cajas.push(new Billete ("veinte",20, 10));
cajas.push( new Billete ("diez",10,5));

for(var p in cajas)
{
    var h = 0;
    h = (cajas[p].cantidad)*(cajas[p].valor);
    money = h+money;
    console.log(money);
}
disponible.value= money;





function sacar()
{
    var entregado = [];
    var dinero = parseInt(di.value);
    var money1 = money;

    for(var b of cajas)
    {

        if(dinero>0)
        {
            div = Math.floor (dinero/b.valor);
            if(div>b.cantidad)
            {
                papeles = b.cantidad;
            }
            else
            {
                papeles = div;
            }
            entregado.push(new Billete(b.nombre,b.valor,papeles));
            
            dinero = dinero - (b.valor*papeles);
        }
       
    }

    if(dinero==0 && parseInt(di.value)<=money)
    {
        retiro =retiro+1;
        balance(money1,parseInt(di.value));
        console.log(money);
        disponible.value= money;
        resultado.innerHTML += "<br>En el retiro # "+retiro+ " se ha entregado el siguiente dinero: <br>";
        
        for(var x of entregado)
        {
            if(x.cantidad>0)
            {
                //resultado.innerHTML +="<br>"+x.cantidad+"billetes"+x.valor+"<br>";
                for(var u = 0; u<x.cantidad;u++)
                {
                    //resultado.innerHTML += "<br>"+x.cantidad+"billetes"+x.valor+"<br>";
                
                     resultado.innerHTML += "<img src=" + x.imagen.src+" />";

                }

            }
            console.log(x);
            
        
                
                
                
                   
              
            
        }
    }
    else
    {
        resultado.innerHTML = "Soy un cajero muy pobre, no te puedo entregar el dinero";
        
        
    }
      
      
    


}

function balance (f,g)
{
    money = f - g;
    console.log(money);
    return money;
}

