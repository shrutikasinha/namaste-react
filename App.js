import React from 'react'
import ReactDOM from 'react-dom/client'

// Example for non nested
// const heading = React.createElement('h1', {id: 'heading', xyz: 'hello again'}, 'Hello world from react!') //create element to create h1 with msg

//         const root = ReactDOM.createRoot(document.getElementById('root'))
//         root.render(heading)


// Notes
// 1.) If we print heading it just returns simple js obj with props and attribute type of element, etc, it is react element
// 2.) render converts it into html tag for DOM


//For nested
/*
<div id="parent">
<div id="child1">
<h1 id="heading">header 1</h1>
<h1> h2 </h1>
</div>
<div id="child2">
<h1 id="heading">header 2 </h1>
<h1> h2 </h2>
</div>

</div>
*/

//Example for nested 
const parent = React.createElement('div', {id: 'parent'}, 
[
    React.createElement('div', {id: 'child1'},
    [
        React.createElement('h1', {id: 'heading'}, 'header 1'),
        React.createElement('h1', {}, 'h2')
    ]),
    React.createElement('div', {id: 'child2'},
    [
        React.createElement('h1', {id: 'heading'}, 'header 2'),
        React.createElement('h1', {}, 'h2')
    ])
]
)

        const root = ReactDOM.createRoot(document.getElementById('root'))
        root.render(parent)


