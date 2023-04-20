// UI
// const header = React.createElement('h1', null, 'Hi from React');

// JSX : Javascript Syntax Extension , JS for XML
// const reactEl = (
//     <>
//         <h1>Header</h1>
//         <ul>
//             <li>item-1</li>
//             <li>item-2</li>
//             <li>item-3</li>
//         </ul>
//     </>
// );

function add(x, y) {
    return x + y;
}

const reactEl = <div>Hello {`add 2+3 = ${5}`}</div>;

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(reactEl);
