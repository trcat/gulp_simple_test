class Component {
  constructor() {}
  init(target) {
    const div = this.generateDiv();
    const targetNode = document.querySelector(target);

    targetNode && targetNode.appendChild(div);

    return Promise.resolve(targetNode);
  }
  generateDiv() {
    const div = document.createElement("div");
    div.innerText = "Hello Gulp!";

    return div;
  }
}

export default Component
