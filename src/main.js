import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import './bike-index';



$(document).ready(function(){
    $("#outputSubmit").click(function(){


        fetch(`https://bikeindex.org:443/api/v3/search/count?location=IP&distance=10&stolenness=non`)
          .then(function(response){
            return response.json();
          })
          .then(function(jsonifiedResponse){
            getElements(jsonifiedResponse);
          })
          .catch(err => {
            console.log(err);
          });

          const getElements = function (response){
            $("#outputResult").text(`The number of bikes stolen is ${response.stolen}.`)
          }
    })
})