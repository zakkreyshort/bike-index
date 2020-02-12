import { Bikes } from './../src/bike-index.js';


describe('Bikes', () => {

test('should identify number of bikes registered', () => {
    let bike = new Bikes();
    expect(bike.bikeTotal()).toEqual(0);
});

});