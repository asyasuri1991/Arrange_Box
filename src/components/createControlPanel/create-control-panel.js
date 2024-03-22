import ElementsCreator from '../../utils/elementGenerator/element-generator';
import CreateArrangeArea from '../create-arrange-area';
import './create-control-panel.css';
import MoveControl from '../../utils/move/move-control';
import CreateList from '../createList/create-list';

export default class ControlArea {
  constructor(container, arrAvailable, arrSelected, initialValues) {
    this.arrAvailable = arrAvailable;
    this.arrSelected = arrSelected;
    this.initialValues = initialValues;
    this.container = container;
    this.move = new MoveControl();
    this.createList = new CreateList();
  }

  createControlArea() {
    const getAllAvailableValues = ElementsCreator.createElement(
      'button',
      'Get All Available Values',
      {
        class: 'control-area__btn',
      },
    );

    getAllAvailableValues.addEventListener('click', () => this.move.showValues(this.arrAvailable));

    const getAllSelectedValues = ElementsCreator.createElement(
      'button',
      'Get All Selected Values',
      {
        class: 'control-area__btn',
      },
    );

    getAllSelectedValues.addEventListener('click', () => this.move.showValues(this.arrSelected));

    const createNewArrangeBox = ElementsCreator.createElement('button', 'Create new arrange box', {
      class: 'control-area__btn',
    });

    createNewArrangeBox.addEventListener('click', () => {
      this.createNewArrangeBox();
    });

    const resetArrangeBox = ElementsCreator.createElement('button', 'Reset', {
      class: 'control-area__btn',
    });

    resetArrangeBox.addEventListener('click', () => this.reset());
    const controlArea = ElementsCreator.createElement(
      'div',
      '',
      { class: 'box control-area' },
      getAllAvailableValues,
      resetArrangeBox,
      createNewArrangeBox,
      getAllSelectedValues,
    );
    return controlArea;
  }

  resetList(listOne, listTwo) {
    if (listOne && listTwo) {
      Array.from(listOne.children).forEach((item) => {
        item.remove();
      });
      Array.from(listTwo.children).forEach((item) => {
        item.remove();
      });
    }
  }

  reset() {
    if (this.arrAvailable) {
      this.resetList(this.arrAvailable, this.arrSelected);
      this.initialValues.forEach((text) => {
        const listElem = document.createElement('li');
        listElem.classList.add('box__list-item');
        listElem.addEventListener('click', () => this.createList.clickItem(listElem));
        listElem.textContent = text;
        this.arrAvailable.append(listElem);
      });
    }

    if (this.listSelected) {
      this.resetList(this.listSelected, this.listSelected);
    }
  }

  createNewArrangeBox() {
    const newArrangeBox = new CreateArrangeArea();
    const arrangeBox = newArrangeBox.createArrangeArea();

    const newControlArea = new ControlArea(
      this.container,
      newArrangeBox.arrAvailable,
      newArrangeBox.arrSelected,
      newArrangeBox.initialValues,
    );
    const controlArea = newControlArea.createControlArea();

    this.container.append(
      ElementsCreator.createElement(
        'div',
        '',
        { class: 'box arrange-box' },
        controlArea,
        arrangeBox,
      ),
    );
  }
}
