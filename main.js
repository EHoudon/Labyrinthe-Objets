// Partie principale de mon programme

choixNombreCase()
choixNombreExo()

function choixNombreCase(){
    let number = document.createElement('select');
    number.id = 'choix_nombre_cases';
    $("#choix1").append(number);
        for (let item in data){
            $("#choix_nombre_cases").append($('<option>', {value:item,text:item}))
        //    return item  
        }   
}
function choixNombreExo(){
        let numExo = document.createElement('select');
        numExo.id = 'choix_nombre_exo';
        numExo.style.width = '200px'
        $("#choix2").append(numExo);
        $("#choix_nombre_exo").append($('<option>', {value:'ex-0',text:'ex-0'}))
        $("#choix_nombre_exo").append($('<option>', {value:'ex-1',text:'ex-1'}))
        $("#choix_nombre_exo").append($('<option>', {value:'ex-2',text:'ex-2'}))
        
        
}
function getValuesCase(){
        valueSize = document.getElementById('choix_nombre_cases').value;
        return valueSize;
}
function getValuesExo(){
        valueExo = document.getElementById('choix_nombre_exo').value;
         return valueExo;
}
function newLabyrinthe(){
    if (document.getElementById('container').innerHTML === "") {
        optionsLabyrinthe()
    } else {
        clearDivContainer()
        optionsLabyrinthe()
    }
}
function clearDivContainer(){
    let div = document.getElementById("container");
         div.replaceChildren();
}
function optionsLabyrinthe(){ 
    let size = getValuesCase();
    let num = getValuesExo();
    // Selection du labyrinthe 
    let labyData = data[size][num];
    // Création du labyrinthe
    // Opérateur 'new' fait appel au 'constructor'
    let labyrinthe = new Labyrinthe( labyData );
    // On appelle la fonction 'display' 
    // qui est dans la classe Labyrinthe
    labyrinthe.display(); 
}
