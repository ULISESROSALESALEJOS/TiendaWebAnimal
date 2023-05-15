document.addEventListener('DOMContentLoaded', function() {
    var regionSelect = document.getElementById('region');
    var comunaSelect = document.getElementById('comuna');

    fetch('regiones.json')
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        data.regiones.forEach(function(region) {
          var option = document.createElement('option');
          option.value = region.region;
          option.text = region.region;
          regionSelect.appendChild(option);
        });


        function fillComunas() {

          comunaSelect.innerHTML = '';

          var selectedRegion = regionSelect.value;
            var selectedRegionData = data.regiones.find(function(region) {
            return region.region === selectedRegion;
          });


          selectedRegionData.comunas.forEach(function(comuna) {
            var option = document.createElement('option');
            option.value = comuna;
            option.text = comuna;
            comunaSelect.appendChild(option);
          });
        }


        fillComunas();


        regionSelect.addEventListener('change', fillComunas);
      })
      .catch(function(error) {
        console.error('Error al cargar el archivo JSON:', error);
      });
  });