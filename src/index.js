var React = require('react');
var ReactDOM = require('react-dom');

//var App = <h1>Hello React.js</h1>;



const Component = function(props){
	var style = {
		color: props.color
	};
	return (
		<div style={style}>
		<h1>{props.greeting}</h1>
	</div>
	);
};



ReactDOM.render(
	<Component greeting="Hello there" color="green"/>,
	document.getElementById('root')
);
