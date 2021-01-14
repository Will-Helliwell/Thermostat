'use strict';

class Thermostat {
  constructor() {
    this.DEFAULT_TEMPERATURE = 20
    this.temperature = this.DEFAULT_TEMPERATURE

    this.MINIMUM_TEMPERATURE = 10;
    this.MAXIMUM_TEMPERATURE_PSM_OFF = 32;
    this.MAXIMUM_TEMPERATURE_PSM_ON = 25;
    this.currentMaximumTemperature = this.MAXIMUM_TEMPERATURE_PSM_OFF;
  };

  getCurrentTemperature() {
    return this.temperature
  };

  up() {
    if (this.isMaximumTemperature()) {
      return;
    } else {
      this.temperature += 1;
    };
  };

  down() {
    if (this.isMinimumTemperature()) {
      return;
    } else {
      this.temperature -= 1;
    };
  };

  isMaximumTemperature() {
    return this.getCurrentTemperature() === this.currentMaximumTemperature;
  };

  isMinimumTemperature() {
    return this.getCurrentTemperature() === this.MINIMUM_TEMPERATURE;
  };

  turnOnPowerSaving() {
    this.currentMaximumTemperature = this.MAXIMUM_TEMPERATURE_PSM_ON;
  };

  turnOffPowerSaving() {
    this.currentMaximumTemperature = this.MAXIMUM_TEMPERATURE_PSM_OFF;
  };

  resetTemperature() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  };

};
