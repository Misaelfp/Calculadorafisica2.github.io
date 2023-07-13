// Agrega el código JavaScript necesario aquí

// Importa la librería de gráficos Chart.js
// Asegúrate de haber incluido la librería Chart.js en tu proyecto
// Puedes descargarla desde https://www.chartjs.org/
// Luego, incluye el archivo chart.min.js en tu HTML
// <script src="ruta/chart.min.js"></script>

// Variables globales para almacenar los datos de los resultados
const labels = [];
const data = [];

// Agrega un evento de escucha a los campos de entrada para la tecla Enter
document.getElementById("masa1").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("masa2").focus();
    }
});

document.getElementById("masa2").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("distancia").focus();
    }
});

document.getElementById("distancia").addEventListener("keyup", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("calcularBtn").click();
    }
});

function calcular() {
    const seleccion = document.getElementById("selectCalculo").value;
    const masa1 = parseFloat(document.getElementById("masa1").value);
    const masa2 = parseFloat(document.getElementById("masa2").value);
    const distancia = parseFloat(document.getElementById("distancia").value);

    let resultado = "";

    switch (seleccion) {
        case "fuerzaGravitacional":
            const fuerzaGravitacional = (6.67430e-11 * masa1 * masa2) / Math.pow(distancia, 2);
            resultado = `<h4>Fuerza Gravitacional:</h4>
            <p>La fuerza gravitacional es: ${fuerzaGravitacional} N</p>`;
            mostrarDescripcionFormula("Fuerza Gravitacional", "F = (G * m1 * m2) / (r^2)");

            // Agrega los datos del resultado al arreglo de datos
            labels.push("Fuerza Gravitacional");
            data.push(fuerzaGravitacional);
            break;

        case "aceleracion":
            const aceleracion = (6.67430e-11 * masa2) / Math.pow(distancia, 2);
            resultado = `<h4>Aceleración:</h4>
            <p>La aceleración es: ${aceleracion} m/s^2</p>`;
            mostrarDescripcionFormula("Aceleración", "a = (G * m2) / (r^2)");

            // Agrega los datos del resultado al arreglo de datos
            labels.push("Aceleración");
            data.push(aceleracion);
            break;

        case "fuerzaResultante":
            const fuerzaResultante = (6.67430e-11 * masa1 * masa2) / Math.pow(distancia, 2);
            resultado = `<h4>Fuerza Resultante:</h4>
            <p>La fuerza resultante es: ${fuerzaResultante} N</p>`;
            mostrarDescripcionFormula("Fuerza Resultante", "F = (G * m1 * m2) / (r^2)");

            // Agrega los datos del resultado al arreglo de datos
            labels.push("Fuerza Resultante");
            data.push(fuerzaResultante);
            break;

        case "trabajo":
            const trabajo = (6.67430e-11 * masa1 * masa2 * distancia) / Math.pow(distancia, 2);
            resultado = `<h4>Trabajo Realizado:</h4>
            <p>El trabajo realizado es: ${trabajo} J</p>`;
            mostrarDescripcionFormula("Trabajo Realizado", "Trabajo = (G * m1 * m2 * d) / (r^2)");

            // Agrega los datos del resultado al arreglo de datos
            labels.push("Trabajo Realizado");
            data.push(trabajo);
            break;

        case "energiaCinetica":
            const energiaCinetica = (1 / 2) * masa1 * Math.pow(((6.67430e-11 * masa2) / distancia), 2);
            resultado = `<h4>Energía Cinética:</h4>
            <p>La energía cinética es: ${energiaCinetica} J</p>`;
            mostrarDescripcionFormula("Energía Cinética", "Energía Cinética = (1/2) * m1 * ((G * m2) / r)^2");

            // Agrega los datos del resultado al arreglo de datos
            labels.push("Energía Cinética");
            data.push(energiaCinetica);
            break;

        case "energiaPotencialGravitatoria":
            const energiaPotencialGravitatoria = (-6.67430e-11 * masa1 * masa2) / distancia;
            resultado = `<h4>Energía Potencial Gravitatoria:</h4>
            <p>La energía potencial gravitatoria es: ${energiaPotencialGravitatoria} J</p>`;
            mostrarDescripcionFormula("Energía Potencial Gravitatoria", "Energía Potencial Gravitatoria = -(G * m1 * m2) / r");

            // Agrega los datos del resultado al arreglo de datos
            labels.push("Energía Potencial Gravitatoria");
            data.push(energiaPotencialGravitatoria);
            break;
    }

    document.getElementById("resultado").innerHTML = resultado;

    // Grafica los resultados en un gráfico de barras
    graficarResultados();
}

function mostrarDescripcionFormula(titulo, descripcion) {
    const descripcionFormula = document.getElementById("descripcionFormula");
    descripcionFormula.innerHTML = `<h4>Descripción de la Fórmula:</h4>
    <p><strong>${titulo}:</strong> ${descripcion}</p>`;
}

function graficarResultados() {
    const ctx = document.getElementById("grafico").getContext("2d");

    // Crea el gráfico de barras utilizando Chart.js
    new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{
                label: "Resultado",
                data: data,
                backgroundColor: "rgba(75, 192, 192, 0.2)",
                borderColor: "rgba(75, 192, 192, 1)",
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
