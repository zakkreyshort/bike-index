import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './bike-index';
import { Bikes } from './bike-index.js'



$(document).ready(function(){

  $("form").submit(function(event) {
    event.preventDefault();
    const city = $("input#city").val();
    const color = $("#colorSelect").val();

    (async () => {
      let bikes = new Bikes();
      const response = await bikes.getBikesByCity(city);
      const answer = await bikes.getBikesByColor(color);
      getElements(response, answer);
    })();

    function getElements(response, answer) {
      let bikeColorArray = [];
      for(let i=0; i<10; i++){
        bikeColorArray.push(answer.bikes[0].frame_colors)
      }
      console.log(answer)
      $('#outputCity').text(`The city you are searching is ${city}.`);
      $('#outputResult').text(`The amount of bikes registered here is: ${response.proximity}`);
      $("#colorOutput").text(`The amount of bikes that are ${color} and ${bikeColorArray.length}`)
    };
    });
    })
