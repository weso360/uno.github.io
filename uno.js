// todays forecast in kelvin

let kelvin = 0;
//kelvin in celcius
let celsius = kelvin - 273;
//calculates farenheit
//rounds number to the nearest whole
let farenheit = Math.floor(celsius * (9/5) + 32);

console.log(`The temperature is ${farenheit} degrees Farenheit`)

