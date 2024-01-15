import React from 'react';
// import ReactDOM from 'react-dom/client';
// import App from './App.tsx';
// import './index.css';

const jsx = (
	<div className='root'>
		<h1 key={'h1'}>react</h1>
		<ul {...{ key: 'ul' }}>
			<li>1</li>
			<li>2</li>
			<li>3</li>
		</ul>
	</div>
);

console.log(React);
console.log(jsx);

// ReactDOM.createRoot(document.getElementById('root')!).render(
// 	<React.StrictMode>
// 		<App />
// 	</React.StrictMode>
// );
