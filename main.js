// Partie principale de mon programme

// Seslection du labyrinthe
let size = '10';
let ex = 'ex-1';
let labyData = data[size][ex];

// Création du labyrinthe
// Opérateur 'new' fait appel au 'constructor'
let labyrinthe = new Labyrinthe( labyData );

// On appelle la fonction 'display' 
// qui est dans la classe Labyrinthe
labyrinthe.display();
