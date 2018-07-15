var React = require('react');

var WeatherForm = React.createClass({
    onFormSubmit: function(e){
        e.preventDefault();

        var location = this.refs.location.value;

        if (location.length > 0){
            this.refs.location.value = "";      //Empties the input field
            this.props.onSearch(location);
        }
    },

    render: function () {
        return(
            <div>
                <form onSubmit={this.onFormSubmit}>
                    <p><input type={'text'} ref={"location"} placeholder={'Enter City Name'}/></p>
                    <p><button>Get Weather</button></p>
                </form>
            </div>
        );
    }
});

module.exports = WeatherForm;