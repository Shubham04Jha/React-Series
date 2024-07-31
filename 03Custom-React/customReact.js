import customTest from "./Test.js";
const customRender = (container,element)=>{
    const type = element.type;
    const newElement = document.createElement(type);
    for(const prop in element.props){
        if(prop === 'children') continue;
        newElement.setAttribute(prop,element.props[prop]);
    }
    newElement.innerText = element.children;
    container.append(newElement);
    container.append(customTest());
}
// website = 'google';
const reactElement = {
    
    type: `a`,
    props: {
        href : `https://google.com`,
        target : `_blank`
    },
    children : `Click to go to `
}
const root = document.querySelector(`#root`)
customRender(root,reactElement);
