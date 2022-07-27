//---

import { html, render } from 'lit-html';

// // This is a lit-html template function. It returns a lit-html template.
const helloTemplate = (name) => html`<div>Hello ${name}!</div>`;


export default helloTemplate;

// // This renders <div>Hello Steve!</div> to the document body
// render(helloTemplate('Steve'), document.body);

// // This updates to <div>Hello Kevin!</div>, but only updates the ${name} part
// render(helloTemplate('Kevin'), document.body);


// https://dev.to/azure/too-hard-too-soft-just-right-rendering-html-with-lit-html-1km8