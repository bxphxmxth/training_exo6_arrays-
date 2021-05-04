// # 1°
// - ## Supprimer le dernier élément de l'array
let monTab = ['crabe', 'crevette', 'homard', 'cloporte']

monTab.pop();
console.log(monTab);


// - ## Supprimer le premier élément de l'array

monTab.shift();
console.log(monTab);

// - ## Ajouter un élément a la fin de l'array

monTab.push("yo");
console.log(monTab);

// - ## Ajouter un élément au debut de l'array


monTab.unshift("byyye");
console.log(monTab);


// - ## Mettre le deuxième élément en majuscule 

 monTab[1].toUpperCase;
 console.log(monTab);

// - ## Changer l'ordre de l'array

monTab.reverse();
console.log(monTab);

// - ## 2°
// - ## Ordonner les chiffres
let chiffres = [4, 5, 2, 1, 3]

chiffres.sort();
console.log(chiffres);

// - ## Première methode (Ordonner)
// - ## 1, 2, 3, 4, 5
chiffres.sort();
console.log(chiffres);

// - ## Deuxième methode (Concaténer les chiffres en un string)
// - ## 1-2-3-4-5

// let chiffres2 = chiffres.join(" - ");
console.log(chiffres.join( " - "));

// - ## Utiliser une méthode qui permet de revenir la chaine de caractères en un tableau

chiffres = Array.from(chiffres);
console.log(chiffres);


// - ## Afficher l'array avec les chiffres ordonnées

chiffres.sort();

// - # 3°
// - ## Créez un tableau vide

let taab = []

// - ## Ajouez 10 élément dans votre array

taab.push("1","2","3","4","5","6","7","8","9","10")

// - ## Affichez le contenu de l'array et sa taille

console.log(taab);
// - ## Touvez l'index de chaque éléments

console.log(taab.indexOf("8"));
// - ## Utiliser une methode qui permet de supprimer un element grâce à l'index

taab.splice(2,1);
console.log(taab);

// - ## Créez un tableau vide et rajoutez toutes les personnes de la classe. Faite un console.log de quelqu'un aléatoirement dans le tableau

let classe = [];
classe.push("nasila", "mouna", "nathan", "ail", "agim")
console.log(classe);

// - ## En une ligne supprimer 'Nathan' du tableau

classe.splice(2,1);
console.log(classe);
classe.splice(2,1,"adil");
console.log(classe);
