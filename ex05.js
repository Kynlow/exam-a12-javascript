function compterVoyelles(chaine) {
    if (!chaine) {
        return 0;
    }
    let compteur = 0;
    chaine = chaine.toUpperCase();
    for (let i = 0; i < chaine.length; i++) {
        if (
            chaine[i] == "A" ||
            chaine[i] == "E" ||
            chaine[i] == "I" ||
            chaine[i] == "O" ||
            chaine[i] == "U" ||
            chaine[i] == "Y"
        ) {
            compteur++;
        }
    }
    return compteur;
}

console.log(compterVoyelles("bonjour")); // Résultat attendu : 3
