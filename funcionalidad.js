// Código JavaScript para la calculadora de física

// Función para mostrar la sección de cálculo correspondiente
function showCalcSection(sectionId) {
    const calcSections = document.getElementsByClassName('calc-section');
    for (let i = 0; i < calcSections.length; i++) {
      calcSections[i].classList.remove('active');
    }
  
    const section = document.getElementById(sectionId);
    section.classList.add('active');
  }
  
  // Función para calcular la aceleración
  function calcularAceleracion(event) {
    event.preventDefault();
  
    // Obtener los valores ingresados por el usuario desde el formulario
    const deltaV = parseFloat(document.getElementById('delta-v').value);
    const deltaT = parseFloat(document.getElementById('delta-t').value);
  
    // Realizar el cálculo de la aceleración
    const aceleracion = deltaV / deltaT;
  
    // Mostrar el resultado en la sección correspondiente
    const aceleracionResult = document.getElementById('aceleracion-result');
    aceleracionResult.textContent = `a = ${aceleracion.toFixed(2)}`;
  
    // Graficar el resultado en un plano cartesiano
    const aceleracionChart = document.getElementById('aceleracion-chart').getContext('2d');
  
    if (window.aceleracionChartInstance) {
      window.aceleracionChartInstance.destroy();
    }
  
    window.aceleracionChartInstance = new Chart(aceleracionChart, {
      type: 'bar',
      data: {
        labels: ['Aceleración'],
        datasets: [{
          label: 'Valor',
          data: [aceleracion],
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
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
  
  // Función para calcular la fuerza gravitacional
  function calcularFuerza(event) {
    event.preventDefault();
  
    // Obtener los valores ingresados por el usuario desde el formulario
    const constanteGravitacional = parseFloat(document.getElementById('constante-gravitacional').value);
    const masa1 = parseFloat(document.getElementById('masa-1').value);
    const masa2 = parseFloat(document.getElementById('masa-2').value);
    const distancia = parseFloat(document.getElementById('distancia').value);
  
    // Realizar el cálculo de la fuerza gravitacional
    const fuerza = (constanteGravitacional * masa1 * masa2) / (distancia ** 2);
  
    // Mostrar el resultado en la sección correspondiente
    const fuerzaResult = document.getElementById('fuerza-result');
    fuerzaResult.textContent = `F = ${fuerza.toFixed(2)}`;
  
    // Graficar el resultado en un plano cartesiano
    const fuerzaChart = document.getElementById('fuerza-chart').getContext('2d');
  
    if (window.fuerzaChartInstance) {
      window.fuerzaChartInstance.destroy();
    }
  
    window.fuerzaChartInstance = new Chart(fuerzaChart, {
      type: 'bar',
      data: {
        labels: ['Fuerza gravitacional'],
        datasets: [{
          label: 'Valor',
          data: [fuerza],
          backgroundColor: 'rgba(255, 99, 132, 0.2)',
          borderColor: 'rgba(255, 99, 132, 1)',
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
  
  // Event listener para las opciones de cálculo
  document.addEventListener('DOMContentLoaded', function() {
    const aceleracionOption = document.getElementById('aceleracion-option');
    aceleracionOption.addEventListener('click', function() {
      showCalcSection('aceleracion-section');
    });
  
    const fuerzaOption = document.getElementById('fuerza-option');
    fuerzaOption.addEventListener('click', function() {
      showCalcSection('fuerza-section');
    });
  
    // Agrega más opciones de cálculo aquí
  
    // Event listeners para los formularios y botones de cálculo
    const aceleracionForm = document.getElementById('aceleracion-form');
    aceleracionForm.addEventListener('submit', calcularAceleracion);
  
    const fuerzaForm = document.getElementById('fuerza-form');
    fuerzaForm.addEventListener('submit', calcularFuerza);
  });
  