// Render

// Child
// function UserCard({ name, age, onClick }) {
//     const handleClick = () => {
//         // do other logic ?
//         onClick();
//     };
//     return (
//         <div>
//             <h3>name : {name} </h3>
//             <h5>age : {age}</h5>
//             <button onClick={handleClick}>Increase</button>
//         </div>
//     );
// }

// Parent
// function App() {
//     const [count, setCount] = React.useState(0);
//     const users = [
//         { id: 1, name: 'Louis', age: 23 },
//         { id: 2, name: 'Earth', age: 26 },
//         { id: 3, name: 'Bung', age: 27 },
//     ];

//     const onClickIncrease = () => {
//         setCount(count + 1);
//     };
//     return (
//         <div className='container'>
//             {/* <UserCard name='Louis' age='23' />
//             <UserCard name='Earth' age='26' />
//             <UserCard name='Bung' age='27' /> */}
//             {users.map((person) => (
//                 <UserCard
//                     name={person.name}
//                     age={person.age}
//                     key={person.id}
//                     onClick={onClickIncrease}
//                 />
//             ))}
//             <div>
//                 <h1>Count</h1>
//                 <p>{count}</p>
//                 <button onClick={onClickIncrease}>click-parent</button>
//             </div>
//         </div>
//     );
// }

// ## SIBLING
function Counter({ count, setCount }) {
    // const [count, setCount] = React.useState(0);
    const styleObj = {
        display: 'flex',
        gap: '10px',
    };

    return (
        <div style={styleObj}>
            <button onClick={() => setCount(count - 1)}>-</button>
            <span>{count}</span>
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
}

function App() {
    const [count, setCount] = React.useState(0);
    return (
        <div className='container'>
            <Counter count={count} setCount={setCount} />
            <Counter count={count} setCount={setCount} />
        </div>
    );
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
