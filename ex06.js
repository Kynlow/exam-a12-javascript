function doublons(tab) {
	let nbrDouble = []
    for (let i = 0; i < tab.length; i++) {
        nbrDouble.push(tab[i] * 2)
    }
    return nbrDouble
}

console.log(doublons([1, 2, 3])); // Résultat attendu : [2, 4, 6]