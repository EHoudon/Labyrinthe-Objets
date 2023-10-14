
class Labyrinthe {

    constructor( labyData ) {
        this.cells = this.initCells( labyData );  
    }

    display() {

        let container = document.getElementById('container');
        let nbre_cells_largeur = Math.sqrt( this.cells.length );
        let computed_width = nbre_cells_largeur * this.cells[0].width;
        container.style.width = computed_width + 'px';
        container.classList.add('main-container');

        for (let cell of this.cells) {
            let cellDOM = cell.getDOM(); 
            container.appendChild( cellDOM );
        }
    }
    
    initCells( labyData ) {
        let cells = [];
        for (let cellData of labyData) {
            let cell = new Cell( cellData );
            cells.push( cell ); 
        }
        return cells;
    } 
}

