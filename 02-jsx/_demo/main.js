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

// const reactEl = <div>{5 * 10}</div>;
// const reactEl = <div>{`Total : ${200 + 50}`}</div>;
// const reactEl = <div>{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}</div>;
// const reactEl = <div>{add(20, 5)}</div>;

// const listOfHeader = [<h1>H-1</h1>, <h2>H-2</h2>, <h3>H-3</h3>];
// const reactEl = <div>{listOfHeader}</div>;

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newArr = arr.map((num) => <li>{`item-${num}`}</li>);
// [<li>item-1</li>,<li>item-2</li>,,,,]
// const reactEl = <ul>{newArr}</ul>;
// const reactEl = (
//     <ul>
//         {arr.map((num) => (
//             <li>{`item-${num}`}</li>
//         ))}
//     </ul>
// );

// const obj = {
//     name: 'john',
//     age: 30,
// };
// const reactEl = <h1>{obj}</h1>;

let isAdmin = true;
// const reactEl = <h1>{isAdmin ? 'Hi-Admin' : 'Hi-User'}</h1>;
const reactEl = <h1>{isAdmin && 'Hi-Admin'}</h1>;

const styleObj = {
    color: 'blue',
    textTransform: 'uppercase',
};
// first bracket {} == Inject Expression
// second bracket === styleObject
// const reactEl = <h1 style={styleObj}>{isAdmin || 'Hi'}</h1>;
// const reactEl = <h1 style={{ color: 'green', textTransform: 'uppercase' }}>{isAdmin || 'Hi'}</h1>;

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(reactEl);
