function moyenne(tab) {
    if (!tab || tab.length == 0) {
        return 0;
    }
    let total = 0;

    for (let i = 0; i < tab.length; i++) {
        total += tab[i];
    }
    return total / tab.length;
}

console.log(moyenne([4, 6])); // Résultat attendu : 6
