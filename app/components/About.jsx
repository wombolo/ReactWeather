var React = require('react');

// var About = React.createClass({
//     render: function () {
//         return (//             <h3>About Component</h3>//         );
//     }
// });
//Becomes =>
var About = (props) => {
  return (
    <div>
      <h1 className={"text-center"}>About</h1>
        <p>This is a weathe rapplication built on React. I built this for the complete react web developer course.</p>
        <p>Here are some of the tools I used:</p>
        <ul>
            <li><a href={"https://facebook.github.io/react"}>React</a>- This is the JS framework used </li>
            <li><a href={"http://openweathermap.org"}>Open Weather Map</a>- I used Open Weather to search for weather conditions in specified cities</li>

        </ul>
      <p>Aenean sodales mattis augue. Morbi euismod, felis at volutpat volutpat, quam lectus porttitor massa, tur ex a neque pulvinar pulvinar.</p>
    </div>
  )
};

module.exports = About;