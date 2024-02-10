const myList = document.getElementById('myList');

class ListBinding {
  constructor(element) {
    this.listElement = element;
    this.textList = [];
  }
  update() {
    /*Remove all existing li element tags*/
    while (this.listElement.firstChild) {
      this.listElement.removeChild(this.listElement.firstChild);
    }
  }
}
