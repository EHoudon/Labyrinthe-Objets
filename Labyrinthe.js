// Une classe est composée 
// De données (ici : cells)
// De méthodes qui agissent sur les données

class Labyrinthe {

    // Constructeur de ma classe Labyrinthe
    // On initialise les 'champs' de ma classe
    constructor( labyData ) {
        this.cells = this.initCells( labyData );  
    }

    // Fonction display :
    // Instancie les objects de type Cell 
    // et 'append' leur representation DOM au container  
    display() {

        // Get le container principal
        let container = document.getElementById('container');
        
        // On calcule la largeur (en nombre de cellules)
        // ex : si 9 cellules --> carré de taille 3 x 3 cellules 
        let nbre_cells_largeur = Math.sqrt( this.cells.length );
        
        // Compute width of main container
        let computed_width = nbre_cells_largeur * this.cells[0].width;
        container.style.width = computed_width + 'px';
        
        // Ajoute la classe CSS 'main-container' à la div 
        container.classList.add('main-container');

        // Get la representation DOM de chacune des cellules
        // Append au container
        for (let cell of this.cells) {
            let cellDOM = cell.getDOM(); 
            container.appendChild( cellDOM );
        }
    }
    
    // Fonction initCells :
    // Initialise le champs 'this.cells' 
    // en bouclant sur les données du labyrinthe 
    // et en instanciant une Cell à chaque fois
    initCells( labyData ) {
        let cells = [];
        for (let cellData of labyData) {
            let cell = new Cell( cellData );
            cells.push( cell ); 
        }
        return cells; 
    } 
}

