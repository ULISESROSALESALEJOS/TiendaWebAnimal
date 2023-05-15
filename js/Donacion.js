var modal = document.getElementById("myModal");
var modalImage = document.getElementById("modalImage");
var modalText1 = document.getElementById("textoModal");
var fundacion = document.getElementById("NombreOrganizacion")
var nombreOrga = {
    nombrefundacion1:{nombre:"ARCA"}, 
    nombrefundacion2:{nombre:"ADOPT"},
    nombrefundacion3:{nombre:"CEREFAN"},
    nombrefundacion4:{nombre:"FUNDACION AYUDA CALLEJEROS"}};
    
var TextoImagen = {
  image1: {
    description: "ARCA es una organización sin fines de lucro, compuesta por"+
    "un equipo multidisciplinario de profesionales, tales como médicos veterinarios"+
    "y abogados, todos versados en el manejo y cuidado animal.Esta organización nace"+
    "a fines del año 2016, como una respuesta a la problemática chilena en cuanto a"+
    "la situación de abandono de animales en el país. Movidos por la necesidad de"+
    "disminuir la población flotante de animales de compañía abandonados en las"+
    "calles, constatamos que esta situación de abandono responde a la falta de"+
    "educación ciudadana en esta materia y a prácticas y costumbres de manejo animal"+
    "que se mantienen, equivocadamente, a lo largo de los años, incidiendo negativamente"+
    "en la dinámica relacional entre los seres humanos y el resto de los animales."
  },
  image2: {
    description: "El propósito de esta organización es mejorar la calidad de"+
     "vida de los animales de compañía, especialmente de aquellos que se"+ 
     "encuentran en condición de abandono o maltrato, a través de actividades"+ 
     "educativas, apoyo en operativos de esterilización y trabajando mancomunadamente"+
      "con instituciones privadas o públicas."
  },
  image3: {
    description: "El Centro de Rescate de Fauna Andina es una organización sin fines"+
    "de lucro, cuya labor es rescatar, rehabilitar y liberar fauna silvestre andina"+
    "que ha sido puesta en peligro. Creado en 2019 en el Valle de Aconcagua, han"+ 
    "atendido más de 90 casos derivados de SAG o de particulares, con dolencias"+ 
    "principalmente vinculada a la intervención del ser humano en su medio: trampas,"+
    "disparos, ataques de animales domésticos o asilvestrados, tráfico, entre otros."+
    "Descripción larga para la imagen 2. Este es otro texto de ejemplo que puede"+
    "contener una gran cantidad de contenido."
  },
  image4: {
    description: "Nuestra Misión, es el Rescate, Rehabilitación y Adopción de perros"+
    "y gatos callejeros en riesgo para otorgarles la oportunidad de tener un hogar"+
    "y una familia.Se dedican al rescate, Rehabilitación y Adopción de perros y"+
    "gatos callejeros en riesgo para otorgarles la oportunidad de tener un hogar y una familia."
  }
};

function abrir(reference, imageId,TITULO) {
  modal.style.display = "flex";
  modalImage.src = reference;
  modalText1.textContent = TextoImagen[imageId].description;
  fundacion.textContent = nombreOrga[TITULO].nombre;

  localStorage.setItem("modalVisible", "true");
}

function cerrar() {
  modal.style.display = "none";
}

function cerrarModal() {
  modal.style.display = "none";

  // Al cerrar el modal, eliminar el estado del almacenamiento local
  localStorage.removeItem("modalVisible");
}

    window.onload = function() {
  var modalVisible = localStorage.getItem("modalVisible");
  if (modalVisible) {
    modal.style.display = "none";
  } else {
    modal.style.display = "none";
  }
};

window.onclick = function(event) {
  if (event.target == modal) {
    cerrar();
  }
}


