function filtrerNegatifs(tab) {
    let positifNbr = []
    for (let i = 0; i < tab.length; i++) {
        if (tab[i] > 0) {
            positifNbr.push(tab[i])
        }
    }
    return positifNbr
}

console.log(filtrerNegatifs([-3, 4, -1, 6])); // Résultat attendu : [4, 6]