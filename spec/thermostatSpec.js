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
    it('cannot increase above 32 when not in power saving mode', function() {
      for (let i = 0; i < 13; i++) {
        thermostat.up()
      };
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
    it('cannot increase above 25 when in power saving mode', function() {
      thermostat.turnOnPowerSaving()
      for (let i = 0; i < 6; i++) {
        thermostat.up()
      };
      expect(thermostat.getCurrentTemperature()).toEqual(25);
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
      };
      expect(thermostat.getCurrentTemperature()).toEqual(10);
    });
  });

  describe('turnOffPowerSaving', function() {
    it('turns off power saving', function() {
      thermostat.turnOnPowerSaving();
      thermostat.turnOffPowerSaving();
      for (let i = 0; i < 13; i++) {
        thermostat.up();
      };
      expect(thermostat.getCurrentTemperature()).toEqual(32);
    });
  });

  describe('resetTemperature', function() {
    it('resets the current temperature to DEFAULT_TEMPERATURE', function() {
      thermostat.up();
      thermostat.resetTemperature();
      expect(thermostat.getCurrentTemperature()).toEqual(thermostat.DEFAULT_TEMPERATURE);
    });
  });

  describe('showCurrentEnergyUsage', function() {
    it('shows low if temp is < 18', function() {
      for (let i = 0; i < 5; i++) {
        thermostat.down();
      };
      expect(thermostat.showCurrentEnergyUsage()).toEqual("low");
    });
    it('shows medium if 18 <= temp <= 25', function() {
      for (let i = 0; i < 2; i++) {
        thermostat.down();
      };
      expect(thermostat.showCurrentEnergyUsage()).toEqual("medium");
      for (let i = 0; i < 7; i++) {
        thermostat.up();
      };
      expect(thermostat.showCurrentEnergyUsage()).toEqual("medium");
    });
    it('shows high if temp is > 25', function() {
      for (let i = 0; i < 6; i++) {
        thermostat.up();
      };
      expect(thermostat.showCurrentEnergyUsage()).toEqual("high");
    });
  });


});
