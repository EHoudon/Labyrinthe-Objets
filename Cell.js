
class Cell {

    constructor( cellData ){
        this.rowX = cellData.posX;
        this.columnY = cellData.posY;   
        this.walls = cellData.walls;
        this.width = 50; // largeur en px
        this.entrance = cellData.entrance;
        this.exit = cellData.exit
        this.visited = false;
    }

    getDOM(){
        let cellDOM = document.createElement('div');
        cellDOM.id = ['cell', this.rowX, this.columnY].join('-')
        cellDOM.style.width = this.width + 'px';
        cellDOM.style.height = this.width + 'px';
        cellDOM.style.backgroundColor = '#F0DFAD';
        cellDOM.style.border = 'solid 1px #443627';
        cellDOM.style.borderWidth = this.computeBorders();
        this.Entrée_Sortie(cellDOM);
        return cellDOM;
    }

    computeBorders(){
        return this.walls.map( wall => wall ? '1px' : '0px').join(' ')
    }

    Entrée_Sortie(cell){
        if (this.entrance) {
            cell.style.backgroundColor = '#258EA6';
        } else if (this.exit) {
            cell.style.backgroundColor = '#DB5461';
        }
    }

}