function compterMots(chaine) {
	let total = 1;
    for (let i = 0; i < chaine.length; i++) {
        if (chaine[i] == " ") {
            total++
        }
    }
    return total
}

console.log(compterMots("Bonjour tout le monde")); // Résultat attendu : 4