// Une classe est composée 
// De données (ici : rowX, columnY, ...)
// et de méthodes qui agissent sur les données

class Cell {

    // Initialise les champs de la classe
    // en utilisant cellData (la description de la cellule)
    constructor( cellData ){
        this.rowX = cellData.posX;
        this.columnY = cellData.posY;   
        this.walls = cellData.walls;
        this.width = 50; // largeur en px
    }

    // On 'fabrique' une div pour la cellule
    getDOM(){
        let cellDOM = document.createElement('div');
        cellDOM.id = ['cell', this.rowX, this.columnY].join('-')
        cellDOM.style.width = this.width + 'px';
        cellDOM.style.height = this.width + 'px';
        cellDOM.style.backgroundColor = 'black';
        cellDOM.style.border = 'solid 1px red';
        cellDOM.style.borderWidth = this.computeBorders();
        return cellDOM;
    }

    // Fonction compliquée qui transforme 
    // [true, true, false, true] en '1px 1px 0px 1px' 
    computeBorders(){
        return this.walls.map( wall => wall ? '1px' : '0px').join(' ')
    }

}