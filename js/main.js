document.getElementById('pantalla').innerHTML = 'inicializando...';


function clickBoton(color) {
    console.log('pasa por aqui', color);
    document.getElementById('pantalla').style.backgroundColor = color;
    document.getElementById('pantalla').className = 'secundario';
}