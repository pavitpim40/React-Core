// Child : Lab-1
// function Profile({ name, age }) {
//     // console.log(props);
//     // const { name, age } = props;
//     return (
//         <>
//             <h1>fullName : {name}</h1>
//             <h2>age : {age}</h2>
//         </>
//     );
// }

// Lab3-4
// function Profile(props) {
//     console.log(props);
//     // const { name, age } = props.user;
//     return (
//         <>
//             <p>user</p>
//             <h1>fullName : {props.user.name}</h1>
//             <h2>age : {props.user.age}</h2>
//         </>
//     );
// }

function Profile({ user: { name, age } }) {
    // console.log(props);
    // const { name, age } = props.user;
    return (
        <>
            <h1>fullName : {name}</h1>
            <h2>age : {age}</h2>
        </>
    );
}

// Parent
function App() {
    let user1 = { name: 'John Doe', age: 27 };
    let user2 = { name: 'Mark Zuckerberge', age: 30 };
    let user3 = { name: 'Chuwit Keow', age: 49 };
    return (
        <div className='container'>
            <Profile user={user1} />
            <Profile user={user2} />
            <Profile user={user3} />
        </div>
    );
}

const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);

// function Car(props) {
//     console.log(props.brand); // *
//     console.log(props.price); // **
//     console.log(props.color); // ***
//     return <div>Car</div>;
// }
// // React 17
// const root = document.getElementById('root');
// ReactDOM.render(<Car brand='Honda' price='1000000' />, root);
