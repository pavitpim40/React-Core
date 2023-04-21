function MyComponent({ title, age, isAdmin, nickname }) {
    //    Child รับ Prop
    // console.log(props);

    // Don't Modify prop
    // props.title = 'Job';
    // props.age = 20;

    // prop destructuring
    // const { title, age, isAdmin } = props;
    // const title = props.title
    // const age = props.age
    // const isAdmin = props.isAdmin

    return (
        <>
            <h6>{title}</h6>
            <p>{age}</p>
            {isAdmin && <button>Click for delete</button>}
        </>
    );
}

// Parent
function App() {
    // เรียก Render == Call Function Component
    // Pass Prop == Pass ที่ App (Parent)

    let name = 'pavit';
    let age = 20;
    let isAdmin = true;
    // Child
    return (
        <div className='container'>
            <MyComponent title='pavit' age={20} isAdmin={true} />
            <MyComponent title={name} age={age} isAdmin={isAdmin} />
            <MyComponent title='max' age={23} isAdmin={false} />
            <MyComponent title='bung' age={27} isAdmin={false} />
            {/* <MyComponent />
            <MyComponent />
            <MyComponent /> */}
        </div>
    );
}

// Render
const domRoot = document.getElementById('root');
const root = ReactDOM.createRoot(domRoot);
root.render(<App />);
