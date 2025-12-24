// DOM Basics - They have four pillers 

// - Selection of an Element
// - Changing HTML
// - Changing CSS
// - Event Listener

/* 
var h1 = document.querySelector('h1') // select element

console.log(h1)

h1.innerHTML = 'Changed' // Changed HTML

h1.style.color = "royal blue"  // Changed CSS


h1.addEventListener('click', function(){
    console.log('Clicked')
}) 
*/

/* 

var root = document.querySelector("#root")

var h1 = document.createElement('h1')

h1.innerHTML = "hello World"

root.appendChild(h1) 

*/


var h1 = React.createElement('h1', null, 'Hello From React')

var parent = document.querySelector('#parent')

var root = ReactDOM.createRoot(parent)

root.render(h1)





