var React = require('react');
var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
    getInitialState: () => {
      return{isLoading : false}
    },

    //To 'handle' 'onSearch' from child  WeatherForm
    handleSearch : function(location){
        //this changes when we enter a new function scope
        var that = this;
        this.setState({isLoading : true});

        openWeatherMap.getTemp(location).then( function(temp) {
            that.setState({
                location: location,
                temp: temp,
                isLoading: false
            });
            }, function(errorMessage)  {
            that.setState({isLoading: false});
            alert(errorMessage);
        })
    },

    render: function () {
        //ES6 Destructuring: this.state.temp OR =>
        var {temp, location,isLoading} = this.state;
        function renderMessage() {
            if (isLoading){
                return <h3>Fetching Weather...</h3>;
            }
            else if (temp && location){
                return <WeatherMessage temp={temp} location={location} />
            }
        }

       return (
           <div>
               <h3>Get Weather</h3>
               <WeatherForm onSearch={this.handleSearch} />
               {renderMessage()}
           </div>
       );
   }
});
module.exports = Weather;