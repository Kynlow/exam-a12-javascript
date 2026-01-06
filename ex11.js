function premiereLettreMajuscule(chaine) {
	let total = "";
	for (let i = 0; i < chaine.length; i++) {
		if (i == 0) {
            total += chaine[i].toUpperCase();
        }
        else if (chaine[i] == " ") {
			total += " ";
			total += chaine[i + 1].toUpperCase();
			i++;
		} else {
			total += chaine[i];
		}
	}
	return total;
}

console.log(premiereLettreMajuscule("bonjour tout le monde")); // Résultat attendu : "Bonjour Tout Le Monde"
