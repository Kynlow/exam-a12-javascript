function moyenne(tab) {
    let total = 0
	for (let i = 0; i < tab.length; i++) {
        total += tab[i]
    }
    return total / tab.length
}

console.log(moyenne([4, 6, 8])); // Résultat attendu : 6