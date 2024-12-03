// const heading = document.createElement("h1");
// heading.innerHTML = "Hello from Javascript";
// const root = document.getElementById("root");
// root.appendChild(heading);

//---//
// const root = ReactDOM.createRoot(document.getElementById("root"));
// const heading = React.createElement("h1",{id:"heading"},"Hello from ReactJS");
// root.render(heading);

/* */


const parent = React.createElement("div",{id:"parent"}, [
    React.createElement("h1",{id:"child"},"Hello from parent-child demo"),
    React.createElement("h1",{id:"child"},"Hello from parent-child demo2")
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

console.log(parent);  