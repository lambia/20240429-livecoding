//questo risultato NON è lo stesso "let" presente nella funzione (diverso scope)
// let risultato = pariOrDispari( 15 );
// console.log( "Il numero è: ", risultato );

// risultato = pariOrDispari( 16 );
// console.log( "Il numero è: ", risultato );

// risultato = pariOrDispari( 17 );
// console.log( "Il numero è: ", risultato );

// for (let i = 0; i < 5; i++) {
// 	let numeroUtente = parseInt(prompt("Inserisci un numero"));
// 	let risultato = pariOrDispari(numeroUtente);
// 	alert(risultato);
// }


for (let i = 0; i < 10; i++) {
	
	let numero = getRandomNumber(1, 100);
	let risultato = pariOrDispari(numero);
	console.log(`Il numero ${numero} è ${risultato}`);
	
}
