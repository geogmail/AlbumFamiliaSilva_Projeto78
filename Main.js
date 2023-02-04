var fotos= [
    "Familia1.PNG", "Familia2.PNG", "Familia3.PNG", "Familia4.PNG", "Familia5.PNG"
]
var nomes= [
    "Erika e Giovanna", "Geovani, Erick, Beatriz, Giovanna e Eliete", "Geovani, Giovanna, Erick e Erika", "Erick, Beatriz e Giovanna", "Masha"
]
var I= 0
function uptade(){
   I++
   if(I>4){
    I=0
   }
   document.getElementById("Familia").src= fotos[I]
   document.getElementById("Familia2").innerHTML= nomes[I]
}