import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './bike-index';
import { Bikes } from './bike-index.js';



$(document).ready(function(){

  $("form").submit(function(event) {
    event.preventDefault();
    const city = $("input#city").val();

    (async () => {
      let bikes = new Bikes();
      const response = await bikes.getBikesByCity(city);
      getElements(response);
    })();

    function getElements(response) {
      $('#outputCity').text(`The city you are searching is ${city}.`);
      $('#outputResult').text(`The amount of bikes registered is: ${response.proximity}`);
    };
    });
    })
