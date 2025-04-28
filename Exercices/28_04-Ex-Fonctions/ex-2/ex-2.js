let choix = prompt("Choisis un nombre entre 1 et 5 pour découvrir ton animal magique !");
let magie = Number(choix);


function revelerAnimal(magie) {
    if (magie === 1) {
    alert("Tu es une Licorne magique !");
    } else if (magie === 2) {
    alert("Tu es une Grenouille enchantée")
    } else if (magie === 3) {
    alert("Tu es un Dragon magestueux !")    
    } else if (magie === 4) {
    alert("Tu es un Hibou sage !")
    } else if (magie === 5) {
    alert("Tu es un Escargot mystique !")
    } else {
    alert("Chiffre inconnu, tu es trop magique pour être interprété !")
    }
}


revelerAnimal(magie);