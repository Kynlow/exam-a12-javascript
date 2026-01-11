function compterVoyelles(chaine) {
    let compteur = 0;
    let voyelles = ["a", "e", "i", "o", "u", "y"];
    for (let i = 0; i < chaine.length; i++) {
        for (let j = 0; j < voyelles.length; j++) {
            if (chaine[i] == voyelles[j]) {
                compteur++;
            }
        }
    }
    return compteur;
}

console.log(compterVoyelles("bonjour")); // Résultat attendu : 3
