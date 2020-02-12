
export class Bikes {
  async getBikesByCity(city) {
    try{
    let response = await fetch (`https://bikeindex.org:443/api/v3/search/count?location=${city}&distance=10&stolenness=all`);
    let jsonifiedResponse = await response.json();
    return jsonifiedResponse;
    } catch(error){
      console.error("There was an error handling your request: " + error.message);
    }
  }
}
