
export class Bikes {
  async getBikesByCity(city) {
    try{
    let response = await fetch (`https://bikeindex.org:443/api/v3/search/count?location=${city}&distance=10&stolenness=all`);
    let jsonifiedResponse = await response.json();
    return jsonifiedResponse;
    } catch(error){
      console.error("There was an error handling your request: " + error.message);
    }
  };

  async getBikesByColor(color){
    try{
    let answer = await fetch(`https://bikeindex.org:443/api/v3/search?page=1&per_page=10&query=${color}&location=${city}&distance=10&stolenness=proximity`);
    let jsonifiedAnswer = await answer.json();
    return jsonifiedAnswer;
    } catch(error){
      console.error("There was an error handling your request: " + error.message);
    }
  };


}

