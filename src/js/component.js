class Component {
  constructor() {}
  init(target) {
    const div = this.generateDiv();
    const flexDiv = this.generateFlexDiv();
    const targetNode = document.querySelector(target);

    if (targetNode) {
      targetNode.append(div, flexDiv);
    }

    return Promise.resolve(targetNode);
  }
  generateDiv() {
    const div = document.createElement("div");
    div.innerText = "Hello Gulp!";
    div.classList.add("red");

    return div;
  }
  generateFlexDiv() {
    const div = document.createElement('div');
    div.classList.add('flex-wrap');
    
    for (let i = 0; i < 2; i++) {
      const item = document.createElement('div')
      item.classList.add('flex-item');
      div.appendChild(item)
    }
    return div
  }
}

export default Component;
