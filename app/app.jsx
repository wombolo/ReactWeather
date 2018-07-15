var React = require('react');
var ReactDOM = require('react-dom');

var {Route, Router, IndexRoute, hashHistory } = require('react-router');

// We're able to use Name straight coz of webpack.config alias
var Main = require('Main');
var Weather = require('Weather');
var About = require('About');
var Examples = require('Examples');

ReactDOM.render(
    <Router history = {hashHistory}>
        <Route path="/" component = {Main}>

            {/* This runs when the url is '/about'  */}
            <Route path="about" component={About}/>
            <Route path="examples" component={Examples}/>

            {/* This runs when the url is '/'  */}
            <IndexRoute component={Weather}/>
        </Route>
    </Router>,
    document.getElementById('app')
);