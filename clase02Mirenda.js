let n = prompt("Ingresa un numero para chequear si es Primo");
function numeroPrimo(n)
{

  if (n==1)
  {
    return(n + " no es primo");
  }
  else if(n == 2)
  {
    return(n + " es primo");
  }else
  {
    for(var x = 2; x < n; x++)
    {
      if(n % x === 0)
      {
        return(n + " no es primo");
      }
      else{
        return(n + " es primo"); 
    }
    }
    
     
  }

}

alert(numeroPrimo(n));
