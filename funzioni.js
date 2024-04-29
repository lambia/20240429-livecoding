//La funzione pariOrDispari accetta un "numero" in ingresso, controlla se pari o dispari e restituisce una stringa in risultato
function pariOrDispari( numero ) {
	// console.log(numero);
	//controllo che "numero", cioè il valore fornito sia pari o dispari
	if( numero % 2 == 0 ) {
		let testo = "pari";
		return testo;
	}
	
	return "dispari";
}

//Input: range inteso come min e max, Output: un numero casuale in quel range
function getRandomNumber(min, max) {
	return Math.floor(Math.random() * (max - min + 1) ) + min;
}