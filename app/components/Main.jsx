var React = require('react');
var Nav = require('Nav');

var Main = (props) =>{
    return(
        <div>
            <Nav/>
            <h2>Main Component</h2>

            {/*To allow weather widget comes after main component*/}
            {props.children}
        </div>
    );
};

module.exports = Main;