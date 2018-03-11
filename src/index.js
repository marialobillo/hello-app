var React = require('react');
var ReactDOM = require('react-dom');

var App = <h1>Hello React.js</h1>;
// var App = (
// 	<ul>
// 		<li>Apple</li>
// 		<li>Mango</li>
// 		<li>Orange</li>
// 	</ul>
// );

const Component = function(){
	return (
		<h1>Hello React Component</h1>
	);
};

// ReactDOM.render(
// 	App,
// 	document.getElementById('root')
// );
// ReactDOM.render(
// 	<Component></Component>,
// 	document.getElementById('root')
// );
ReactDOM.render(
	<Component />,
	document.getElementById('root')
);
