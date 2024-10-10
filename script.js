// Información detallada de cada bebida
const bebidas = [
    {
        nombre: "Estrella Galicia Especial 1906",
        descripcion: "En la mezcla se aportan tanto el lúpulo como la malta, en ésta cerveza predomina el aroma limpio, franco e intenso de la malta tostada. De bonito color ámbar oscuro. Limpia y brillante, y de abundante espuma espesa y cremosa que se mantiene durante todo el consumo.",
        notas: "Ideal con carnes rojas, quesos curados y embutidos.",
        ibu: "25",
        grados: "6,5"
    },
    {
        nombre: "Sagres",
        descripcion: "Lanzado en 1940, Sagres siempre ha producido con productos 100% naturales, según métodos exclusivos tradicionales a partir de agua, malta, cereales no malteados y el lúpulo con métodos de selección rigurosos. Sagres se caracteriza por ser una cerveza de cuerpo medio, carácter seco y agradable amargor, ligera y de color dorado.",
        notas: "Ideal con pescados, mariscos, tapas ligeras y aperitivos salados.",
        ibu: "N/D",
        grados: "5"
    },
    {
        nombre: "Alhambra Reserva 1925",
        descripcion: "Espuma consistente, de textura esponjosa. Color ámbar dorado y aromas ligeramente tostados. Con cuerpo, sabor redondo, constante y agradable. Balance amargo / dulce perfectamente equilibrado, con notas que van desde la naranja amarga hasta un final ligeramente caramelizado.",
        notas: "Perfecta para acompañar carnes a la parrilla, embutidos ibéricos y quesos curados.",
        ibu: "25",
        grados: "6,4",
    },
    {
        nombre: "Corona",
        descripcion: "De color dorado pálido y cristalino, con una espuma ligera y efímera que desaparece rápidamente. Aroma ligero, con notas de malta dulce, maíz y un toque herbal. También se perciben leves trazas de cítricos y un frescor que recuerda a la cebada. Sabor suave y refrescante, predominan sabores a malta ligeramente dulce, con un toque de maíz. El amargor es muy bajo, lo que la hace fácil de beber. El final es limpio y seco.",
        notas: "Perfecta con mariscos, tacos, ensaladas ligeras y comidas frescas.",
        ibu: "18",
        grados: "4,5",
    },
    {
        nombre: "Desperados",
        descripcion: "Una cerveza rubia ligera que se caracteriza por su sabor único, ya que está aromatizada con tequila. Es refrescante y tiene un toque dulce, con notas cítricas y de caramelo, combinadas con un ligero amargor. Su perfil es suave, con un final dulce y ligeramente alcohólico, lo que la hace ideal para disfrutar en ambientes festivos o como una opción refrescante en días cálidos.",
        notas: "Combina bien con comida mexicana, hamburguesas y platos picantes.",
        ibu: "N/D",
        grados: "6",
    },
    {
        nombre: "Mahou 5 Estrellas",
        descripcion: "Cerveza lager española de gran tradición, conocida por su sabor equilibrado y carácter refrescante. Tiene un color dorado brillante y un aroma a malta con toques ligeros de lúpulo. Su sabor es suave y redondo, con notas a cereales y un amargor moderado que le da cuerpo sin ser demasiado intensa. Es una cerveza fácil de beber, con un final limpio y ligeramente seco, ideal para acompañar tapas y comidas típicas españolas.",
        notas: "Ideal con tapas, embutidos, quesos suaves y carnes a la parrilla.",
        ibu: "27",
        grados: "5,5"
    },
    {
        nombre: "Judas",
        descripcion: "Es una cerveza rubia, de alta graduación alcohólica. Sabor suave, amargo y a la vez dulce. Buen cuerpo y equilibrio entre sus aromas y el amargor. Su gran densidad hace de ella una cerveza para degustar a pequeños sorbos, como si de un licor se tratara.",
        notas: "Carnes rojas, guisos, quesos fuertes y postres a base de chocolate.",
        ibu: "30",
        grados: "8,5"
    },
    {
        nombre: "Grimbergen",
        descripcion: "La Grimbergen Doble es de color ámbar oscuro,con mucho cuerpo, un sabor rico, lleno y algo dulce. De hecho se elabora con una selecta de diferentes maltas con azúcar de caña, lo que también le aporta ese sabor dulce, con un aroma profundo.",
        notas: "Se combina especialmente bien con quesos fuertes y curados, carnes rojas asadas o estofadas, así como con platos de caza.",
        ibu: "22",
        grados: "6,5"
    },
    {
        nombre: "1906 Red Vintage",
        descripcion: "1906 recupera ese sabor legendario en la nueva 1906 Red Vintage. Cerveza intensa y equilibrada, se caracteriza su aroma a malta tostada y espuma cremosa y compacta con burbuja fina.",
        notas: "Quesos azules, pulpo a la gallega, pescados ahumados, embutidos ibéricos.",
        ibu: "27",
        grados: "8"
    },
    {
        nombre: "Paulaner",
        descripcion: "El conocedor aprecia toques de mango y de piña y ensalza el hermoso equilibrio de dulzor y amargor. Los amantes de la cerveza disfrutan del fino aroma de levadura y de su fabulosa suavidad burbujeante. Es la típica cerveza para tomar al aire libre, capaz de unir a personas de todo el mundo.",
        notas: "Se marida muy bien con una amplia variedad de platos, desde carnes blancas y pescados hasta ensaladas y postres",
        ibu: "16",
        grados: "5,5"
    },
];

// Función para mostrar la bebida en el modal
function mostrarBebida(index) {
    const bebida = bebidas[index];
    document.getElementById('bebidaNombre').innerText = bebida.nombre;
    document.getElementById('bebidaDescripcion').innerText = bebida.descripcion;
    document.getElementById('bebidaNotas').innerText = bebida.notas;
    document.getElementById('bebidaIBU').innerText = bebida.ibu;
    document.getElementById('bebidaGrados').innerText = bebida.grados;

    // Mostrar el modal
    document.getElementById('bebidaModal').style.display = 'block';
}

// Función para cerrar el modal
function cerrarModal() {
    document.getElementById('bebidaModal').style.display = 'none';
}

window.onclick = function(event) {
    const modal = document.getElementById('bebidaModal');
    if (event.target === modal) {
        cerrarModal();
    }
}
