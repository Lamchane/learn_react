// here we desiging the customRender methods.

function customRender(reactElement, container) {
  //   const domElement = document.createElement(reactElement.type);
  //   domElement.innerHTML = reactElement.children;
  //   domElement.setAttribute("href", reactElement.props.href);
  //   domElement.setAttribute("target", reactElement.props.target);
  //   container.appendChild(domElement);

  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.children;
  for (const prop in reactElement.props) {
    if (prop === "children") continue; // we don't want to set children as attribute
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  container.appendChild(domElement);
}

// below code represents how react works internally
const reactElement = {
  type: "a", // type elements
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  children: "Google Link",
};

const mainContainer = document.getElementById("root");
// below method represent how we add the above tree element into the root element
customRender(reactElement, mainContainer);
