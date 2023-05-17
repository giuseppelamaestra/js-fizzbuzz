
//Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.
//Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.
//Prima di partire a scrivere codice poniamoci qualche domanda:
//Come faccio a sapere se un numero è divisibile per un altro?
//Abbiamo visto qualcosa di particolare che possiamo usare?
//Consigli del giorno:
//Scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
//Proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"//

for (let i = 1; i < 101; i ++){

   

   const rest3 = i % 3
   const rest5 = i % 5

   

   if (rest3 === 0 && rest5 === 0){
    console.log("FizzBuzz")
   } else if (rest5 === 0) {
    console.log("buzz")
   } else if (rest3 === 0) {
          
      console.log("Fizz")

   }
    else {
    console.log(i)
   }
  
   
}
