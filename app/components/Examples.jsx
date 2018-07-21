var React = require('react');
var {Link} = require('react-router');

var Examples = (props) => {
  return (
    <div>
      <h1 className={"text-center"}>Examples</h1>
      <p>Here are few example locations to try</p>
        <ol>
            <li><Link to={'/?location=Abeokuta'} >Abeokuta</Link></li>
            <li><Link to={'/?location=New york'} >New york</Link></li>

        </ol>
    </div>
  )
};

module.exports = Examples;
