 // Función para enviar eventos al dataLayer
 function pushDL(evento, ga4_parameters) {
    window.dataLayer.push({
      'event': evento,
      'ga4':ga4_parameters
    });
  }

//Eventos click_menu
document.querySelectorAll('a.nikear-store-components-0-x-itemLinkDesktop--level-2').forEach(function(item){
    item.addEventListener("click", function(event) {
        
        event.preventDefault();
        var ga4_parameters = {
            element_name: 'name',
            type_value: 'value',
            element_text: 'text'
        }
    // Agrega el objeto al datalayer
    pushDL("click_menu", ga4_parameters);

    });
})