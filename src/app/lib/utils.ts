export const getConversionUnits = (type: string): string[] => {
    switch (type) {
      case 'length':
        return ['meters', 'feet', 'inches', 'kilometers', 'miles', 'yards'];
      case 'weight':
        return ['kilograms', 'pounds', 'ounces', 'grams', 'tons'];
      case 'temperature':
        return ['celsius', 'fahrenheit', 'kelvin'];
      case 'volume':
        return ['liters', 'gallons', 'cups', 'milliliters', 'cubic meters'];
      default:
        return [];
    }
  };
  
  export const convert = (
    type: string,
    value: number,
    fromUnit: string,
    toUnit: string
  ): number => {
    // First convert to base unit, then to target unit
    const baseValue = convertToBase(type, value, fromUnit);
    return convertFromBase(type, baseValue, toUnit);
  };
  
  const convertToBase = (type: string, value: number, fromUnit: string): number => {
    // Convert to base units (meters, kilograms, celsius, liters)
    switch (type) {
      case 'length':
        return convertLengthToBase(value, fromUnit);
      case 'weight':
        return convertWeightToBase(value, fromUnit);
      case 'temperature':
        return convertTemperatureToBase(value, fromUnit);
      case 'volume':
        return convertVolumeToBase(value, fromUnit);
      default:
        return value;
    }
  };
  
  const convertFromBase = (type: string, value: number, toUnit: string): number => {
    // Convert from base units to target unit
    switch (type) {
      case 'length':
        return convertLengthFromBase(value, toUnit);
      case 'weight':
        return convertWeightFromBase(value, toUnit);
      case 'temperature':
        return convertTemperatureFromBase(value, toUnit);
      case 'volume':
        return convertVolumeFromBase(value, toUnit);
      default:
        return value;
    }
  };
  
  // Implement specific conversion functions for each type
  // Here's an example for length conversions:
  
  const convertLengthToBase = (value: number, fromUnit: string): number => {
    switch (fromUnit) {
      case 'meters':
        return value;
      case 'feet':
        return value * 0.3048;
      case 'inches':
        return value * 0.0254;
      case 'kilometers':
        return value * 1000;
      case 'miles':
        return value * 1609.344;
      case 'yards':
        return value * 0.9144;
      default:
        return value;
    }
  };
  
  const convertLengthFromBase = (value: number, toUnit: string): number => {
    switch (toUnit) {
      case 'meters':
        return value;
      case 'feet':
        return value / 0.3048;
      case 'inches':
        return value / 0.0254;
      case 'kilometers':
        return value / 1000;
      case 'miles':
        return value / 1609.344;
      case 'yards':
        return value / 0.9144;
      default:
        return value;
    }
  };

    const convertWeightToBase = (value: number, fromUnit: string): number => {
        switch (fromUnit) {
        case 'kilograms':
            return value;
        case 'pounds':
            return value * 0.453592;
        case 'ounces':
            return value * 0.0283495;
        case 'grams':
            return value / 1000;
        case 'tons':
            return value * 1000;
        default:
            return value;
        }
    };

    const convertWeightFromBase = (value: number, toUnit: string): number => {
        switch (toUnit) {
        case 'kilograms':
            return value;
        case 'pounds':
            return value / 0.453592;
        case 'ounces':
            return value / 0.0283495;
        case 'grams':
            return value * 1000;
        case 'tons':
            return value / 1000;
        default:
            return value;
        }
    };

    const convertTemperatureToBase = (value: number, fromUnit: string): number => {
        switch (fromUnit) {
        case 'celsius':
            return value;
        case 'fahrenheit':
            return (value - 32) * (5 / 9);
        case 'kelvin':
            return value - 273.15;
        default:
            return value;
        }
    };

    const convertTemperatureFromBase = (value: number, toUnit: string): number => {
        switch (toUnit) {
        case 'celsius':
            return value;
        case 'fahrenheit':
            return value * (9 / 5) + 32;
        case 'kelvin':
            return value + 273.15;
        default:
            return value;
        }
    };

    const convertVolumeToBase = (value: number, fromUnit: string): number => {
        switch (fromUnit) {
        case 'liters':
            return value;
        case 'gallons':
            return value * 3.78541;
        case 'cups':
            return value * 0.236588;
        case 'milliliters':
            return value / 1000;
        case 'cubic meters':
            return value * 1000;
        default:
            return value;
        }
    };

    const convertVolumeFromBase = (value: number, toUnit: string): number => {
        switch (toUnit) {
        case 'liters':
            return value;
        case 'gallons':
            return value / 3.78541;
        case 'cups':
            return value / 0.236588;
        case 'milliliters':
            return value * 1000;
        case 'cubic meters':
            return value / 1000;
        default:
            return value;
        }
    };
    
  
