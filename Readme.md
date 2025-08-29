1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?

Ans: getElementById: Selects a single HTML element by its unique ID. It returns the first matching element or null if none found. It is fast and simple for unique elements on a page.

getElementsByClassName: Selects all elements that have a given class name and returns a live HTMLCollection. It can return multiple elements matching the class.

querySelector & querySelectorAll: These methods use CSS selectors to find elements.

querySelector: returns the first matching element or null.

querySelectorAll: returns a static NodeList of all matching elements.
These are the most flexible, supporting any valid CSS selector.

<!-- --------------------------------------------------------------------- -->


2. How do you create and insert a new element into the DOM?

Ans: create a new element using document.createElement(). After creating the element,I insert it into the DOM using methods like .appendChild(), .insertBefore(), or .append() on an existing parent element.

example: 
const newDiv = document.createElement('div');  
newDiv.textContent = 'Hello, new element!';  

const container = document.getElementById('container');  
container.appendChild(newDiv);

<!-- ---------------------------------------------------------------------- -->

3. What is Event Bubbling and how does it work?

Ans: Event Bubbling is a process in which an event starts from the innermost element (the target) and then propagates or bubbles up to its parent elements until it reaches the root of the DOM tree. For example: 
if a button inside a div is clicked, the click event first triggers on the button, then on the div, and so on, up the DOM tree.


4. What is Event Delegation in JavaScript? Why is it useful?

Ans: Event Delegation is a technique where instead of attaching event listeners to each child element individually, a single event listener is attached to their parent element. Due to event bubbling, events from child elements bubble up to the parent where they can be handled. This results in fewer event listeners, better performance, and easier management, especially when elements are added dynamically.

<!-- -------------------------------------------------------------- -->

5. What is the difference between preventDefault() and stopPropagation() methods?

Ans: 
preventDefault(): Stops the default browser action associated with the event. For example, preventing a link from opening its href or stopping a form submission.

stopPropagation(): Stops the event from bubbling or capturing further in the DOM tree, preventing parent or ancestor elements from receiving the event.