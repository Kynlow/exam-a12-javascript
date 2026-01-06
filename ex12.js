function estPalindromeAvance(chaine) {
    let clean = "";
	for (let i = 0; i < chaine.length; i++) {
		if (chaine[i] !== " ") {
			clean += chaine[i];
		}
	}  
    let end = clean.length - 1;
    for (let j = 0; j < end; j++) {
        if (clean[end] != clean[j]) {
            return false
        }
        end--
    }
    return true
}

console.log(estPalindromeAvance("a man a plan a canal panama")); // Résultat attendu : true