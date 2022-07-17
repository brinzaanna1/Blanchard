(() => {

  ymaps.ready(init);
  function init() {
    const mapElem = document.querySelector('#map');
    const myMap = new ymaps.Map(
      "map",
      {
        center: [55.75846806898367, 37.60108849999989],
        zoom: 14,
        controls: ['geolocationControl', 'zoomControl']
      },
      {
        suppressMapOpenBlock: true,
        geolocationControlSize: "large",
        geolocationControlPosition: { top: "350px", right: "10px" },
        geolocationControlFloat: 'none',
        zoomControlSize: 'medium',
        zoomControlFloat: "none",
        zoomControlPosition: { top: "250px", right: "10px" }
      }

    );

    myMap.behaviors.disable('scrollZoom');

    const myPlacemark = new ymaps.Placemark(
      [55.75846806898367, 37.60108849999989],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../img/marker-map.svg",
        iconImageSize: [20, 20],
        iconImageOffset: [-20, -40],
      }
    );

    const APIReadyHandler = () => {
      if (window.innerWidth <= 1280) {
        myMap.setCenter([55.75846806898367, 37.60108849999989]);
        myMap.behaviors.disable('scrollZoom')
      }
    }
    ymaps.ready(function () {
      APIReadyHandler();
    });



    myMap.geoObjects.add(myPlacemark);
    myMap.container.fitToViewport();
  }

})();




// (() => {

//   ymaps.ready(init);
//   function init() {
//     const mapElem = document.querySelector('#map');
//     const myMap = new ymaps.Map(
//       "map",
//       {
//         center: [48.872185073737896, 2.354223999999991],
//         zoom: 15,
//         controls: [] /* Убираем элементы управления*/
//       },
//       {
//         suppressMapOpenBlock: true, /* Убираем элементы управления*/
//       }
//     );

//     myMap.behaviors.disable('scrollZoom');

//     const myPlacemark = new ymaps.Placemark(
//       [48.872185073737896, 2.354223999999991],
//       {},
//       {
//         iconLayout: "default#image",
//         iconImageHref: "../img/mdi_location_on.svg",

//         iconImageSize: [48, 48],
//         iconImageOffset: [-20, -40],
//       }
//     );

//     myMap.geoObjects.add(myPlacemark);
//     myMap.container.fitToViewport();
//   };

// })();
