//    creating a custom  react app with our assigned value

const reactElement = {
    type: 'a',
    props: {
        href: 'https://google.com',
        target: '_blank'
    },
    children: 'Click me to visit google'
}


const mainContainer = document.getElementById('root')

function custumRender (reactElement, maincontainer){
    /*   //   some error in this code like in setting multiple attributes

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href)
    domElement.setAttribute('target', reactElement.props.target)

    maincontainer.appendChild(domElement)
    */

    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;    //    this is the =>    children: 'Click me to visit google'
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }


    //  using noraml for loop

    // const propsKeys = Object.keys(reactElement.props);    //  Object.keys(reactElement.props) returns an array of property names (keys) from the props object inside reactElement.
    // for (let i = 0; i < propsKeys.length; i++) {
    //     const prop = propsKeys[i];
    //     domElement.setAttribute(prop, reactElement.props[prop]);
    // }

    mainContainer.appendChild(domElement)
}

custumRender(reactElement, mainContainer)