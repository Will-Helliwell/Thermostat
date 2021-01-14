'use strict';

describe('Thermostat', function() {
  var thermostat;
  beforeEach(function(){
    thermostat = new Thermostat();
  });
  it('starts at 20 degrees', function(){
    expect(thermostat.temperature).toEqual(20);
  });

  describe('up', function(){
    it('increases the temperature', function(){
      thermostat.up();
      expect(thermostat.getCurrentTemperature()).toEqual(21);
    });
  });

  describe('down', function(){
    it('decreases the temperature', function(){
      thermostat.down();
      expect(thermostat.getCurrentTemperature()).toEqual(19);
    });
    it('throws an error when temperature reaches 10', function (){
      for (let i = 0; i < 11; i++) {
        thermostat.down();
        // console.log(thermostat.getCurrentTemperature());
      };
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });
  });

  
});
