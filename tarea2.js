function palabras(string) {
    
    const imprimir = document.getElementById("resultado");

    let cantidadString = string.split(' ').length;

    let resultado = `
    <p> numero de palabras: ${cantidadString} </p>
    `

    imprimir.innerHTML += resultado;
    
}



function findLongestWord(frase) {
  const imprimir = document.getElementById("resultado")
  let pp = frase.replace(",", " ").split(" ");
  palabra_mas_grande = ""
  pp.forEach(function(palabra){
  if (palabra.length > palabra_mas_grande.length){
       palabra_mas_grande = palabra
       
   };
  });
  let result = `
      <p> la palabra mas larga es: ${palabra_mas_grande} </p>
      `

  imprimir.innerHTML += result;
}

function alContrario(string) {
  const res = document.getElementById("resultado");
  let arr = string.split(' ');
  let op = arr.reverse();
  const mensaje = `
  <p> al contrario: ${op}
  `
  res.innerHTML += mensaje;

}


function enviarFrase() {
  const frase = document.getElementById("frase").value;
  if(frase){
    palabras(frase)
    findLongestWord(frase)
    alContrario(frase)

  }else {
    const error = document.getElementById("resultado");
    const mensaje = `
    <p> No ha escrito una frase </p>`
    error.innerHTML = mensaje
  }
}

