var React = require('react');

// ES6 Destructuring var {temp, location} = props
var WeatherMessage = ({temp, location}) =>{
    return (
        <h3>Its {temp}^C in {location}</h3>
    );
};
module.exports = WeatherMessage;