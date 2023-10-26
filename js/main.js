
function cargarImagenConSonido(imagenSrc) {
    var imagen = document.getElementById('imagen');
    var sonido = document.getElementById('sonido');

    if (imagenSrc === 'imagen1.jpg') {
        imagen.src = imagenSrc;
        imagen.style.display = 'block';
        sonido.src = 'clic1.mp3';
    } else if (imagenSrc === 'imagen2.jpg') {
        imagen.src = imagenSrc;
        imagen.style.display = 'block';
        sonido.src = 'clic2.mp3';
    } else if (imagenSrc === 'imagen3.jpg') {
        imagen.src = imagenSrc;
        imagen.style.display = 'block';
        sonido.src = 'clic3.mp3';
    } else {
        console.log('Imagen no encontrada');
    }

    sonido.play();
}


document.getElementById('boton1').addEventListener('click', function() {
    cargarImagenConSonido('imagen1.jpg');
});
document.getElementById('boton2').addEventListener('click', function() {
    cargarImagenConSonido('imagen2.jpg');
});
document.getElementById('boton3').addEventListener('click', function() {
    cargarImagenConSonido('imagen3.jpg');
});