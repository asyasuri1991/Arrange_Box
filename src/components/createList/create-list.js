import ElementsCreator from '../../utils/elementGenerator/element-generator';
import './create-list.css';

export default class CreateList {
  constructor() {
    this.clickedElement = null;
    this.clickedList = [];
  }

  createList(values) {
    const boxList = ElementsCreator.createElement('ul', '', { class: 'box__list list-reset' });

    if (values === undefined) return boxList;

    values.forEach((value) => {
      const boxListItem = ElementsCreator.createElement('li', value, {
        class: 'box__list-item',
      });
      boxListItem.addEventListener('click', () => this.clickItem(boxListItem));
      boxList.append(boxListItem);
    });

    return boxList;
  }

  addClickedClass(element) {
    element.classList.add('clicked-item');
  }

  removeClickedClass(element) {
    element.classList.remove('clicked-item');
  }

  clickItem(clickedElement) {
    if (!this.clickedList) {
      this.clickedList = [];
    }
    if (this.clickedList.includes(clickedElement)) {
      this.clickedList = this.clickedList.filter((item) => item !== clickedElement);
      this.removeClickedClass(clickedElement);
    } else {
      this.clickedList.push(clickedElement);
      this.addClickedClass(clickedElement);
    }
  }
}
