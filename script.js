let menuVisible = false;
//Funcion que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}
function seleccionar(){
    //ocualta el menu una vez se selecciona una opcion
    document.getElementById("nav").classList ="";
    menuVisible = false;
}
//Funcion que aplica las animaciones de las habilidades
function efectoHablidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if(distancia_skills >= 300){
    let habilidades = document.getElementsByClassName("progreso");
    habilidades[0].classList.add("javascript");
    habilidades[1].classList.add("htmlcss");
    habilidades[2].classList.add("C");
    habilidades[3].classList.add("SQL");
    habilidades[4].classList.add("GIT");
    habilidades[5].classList.add("JAVA");
    habilidades[6].classList.add("MySQL");
    habilidades[7].classList.add("Postgresql");
    habilidades[8].classList.add("NET");
    habilidades[9].classList.add("Oracle");
    habilidades[10].classList.add("PHP");
    habilidades[11].classList.add("PYTHON");
    habilidades[12].classList.add("SCRUM");
    habilidades[13].classList.add("VISUAL");
    habilidades[14].classList.add("Power");
    habilidades[15].classList.add("Figma");
    habilidades[16].classList.add("Aura");
    habilidades[17].classList.add("comunication");
    habilidades[18].classList.add("trabajo");
    habilidades[19].classList.add("creatividad");
    habilidades[20].classList.add("dedicacion");
    habilidades[21].classList.add("liderazgo");
    habilidades[22].classList.add("analitico");
    habilidades[23].classList.add("resolucion");
    habilidades[24].classList.add("adaptacion");
    habilidades[25].classList.add("servicio");
    };
}

// Obtener los elementos de la lista de titulos
const titleItems = document.querySelectorAll('.title-list ul li');

// Obtener el modal y sus elementos
const modal = document.getElementById('modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.close');

// Añadir eventos de clic a los elementos de la lista
titleItems.forEach(item => {
    item.addEventListener('click', function() {
        const imageUrl = item.getAttribute('src');
        modalImage.src = imageUrl;
        modal.classList.add('show'); // Mostrar el modal con transición
    });
});

// Cerrar el modal al hacer clic en la "X"
closeModal.addEventListener('click', function() {
    modal.classList.remove('show'); // Ocultar el modal con transición
});

// Cerrar el modal al hacer clic fuera del contenido
window.addEventListener('click', function(e) {
    if (e.target == modal) {
        modal.classList.remove('show');
    }
});
//Detectar el scrolling para aplicar la animacion de la barra de habilidades
window.onscroll = function(){
    efectoHablidades();
}
