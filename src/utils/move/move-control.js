import ElementsCreator from '../elementGenerator/element-generator';
import CreateModal from '../../components/createPromptModal/create-modal';
import CreateModalList from '../../components/createModalList/create-modal-list';
import CreateList from '../../components/createList/create-list';

export default class MoveControl {
  constructor(arrAvailable, arrSelected, buttonsArr) {
    this.arrAvailable = arrAvailable;
    this.arrSelected = arrSelected;
    this.buttonsArr = buttonsArr;
  }

  showValues(targetList) {
    const createModalList = new CreateModalList();
    let itemsSet = Array.from(targetList.children).map((item) => item.textContent);
    console.log(targetList.id);
    if (itemsSet.length) {
      itemsSet = itemsSet.join(', ');
      itemsSet = `Полученные значения:, ${itemsSet}`;
      createModalList.addItemToList(itemsSet);
    } else {
      itemsSet = 'Значений нет';
      createModalList.addItemToList(itemsSet);
    }

    createModalList.displayModal(() => {});
  }

  moveAllToSelected() {
    this.moveItems(this.arrAvailable, this.arrSelected);
  }

  moveAllToAvailable() {
    this.moveItems(this.arrSelected, this.arrAvailable);
  }

  moveItems(fromList, toList) {
    Array.from(fromList.children).forEach((item) => {
      toList.append(item);
      item.classList.remove('clicked-item');
    });
  }

  moveSomeToSelected() {
    this.moveSelectedItems(this.arrAvailable, this.arrSelected);
  }

  moveSomeToAvailable() {
    this.moveSelectedItems(this.arrSelected, this.arrAvailable);
  }

  moveSelectedItems(fromList, toList) {
    Array.from(fromList.children).forEach((item) => {
      if (item.classList.contains('clicked-item')) {
        toList.append(item);
        item.classList.remove('clicked-item');
      }
    });
  }

  upAllInAvailable() {
    this.reorderSelectedItems(this.arrAvailable, true);
  }

  upAllInSelected() {
    this.reorderSelectedItems(this.arrSelected, true);
  }

  downAllInAvailable() {
    this.reorderSelectedItems(this.arrAvailable, false);
  }

  downAllInSelected() {
    this.reorderSelectedItems(this.arrSelected, false);
  }

  reorderSelectedItems(currentList, isPrepend) {
    const selectedItems = Array.from(currentList.querySelectorAll('.clicked-item'));

    selectedItems.sort(
      (a, b) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        Array.from(currentList.children).indexOf(a) - Array.from(currentList.children).indexOf(b),
    );

    const firstElement = currentList.children[0];

    selectedItems.forEach((item) => {
      if (isPrepend) {
        currentList.insertBefore(item, firstElement);
      } else {
        currentList.append(item);
      }
    });
  }

  upOneInAvailable() {
    this.moveItemUp(this.arrAvailable);
  }

  upOneInSelected() {
    this.moveItemUp(this.arrSelected);
  }

  downOneInAvailable() {
    this.moveItemDown(this.arrAvailable);
  }

  downOneInSelected() {
    this.moveItemDown(this.arrSelected);
  }

  moveItemUp(currentList) {
    const selectedItems = Array.from(currentList.querySelectorAll('.clicked-item'));

    selectedItems.sort(
      (a, b) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        Array.from(currentList.children).indexOf(a) - Array.from(currentList.children).indexOf(b),
    );

    const indices = selectedItems.map((item) => Array.from(currentList.children).indexOf(item));

    selectedItems.forEach((item, index) => {
      const currentIndex = indices[index];
      const targetIndex = currentIndex - 1;

      if (targetIndex >= 0) {
        const targetElement = currentList.children[targetIndex];
        currentList.insertBefore(item, targetElement);
      }
    });
  }

  moveItemDown(currentList) {
    const selectedItems = Array.from(currentList.querySelectorAll('.clicked-item'));

    selectedItems.sort(
      (a, b) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        Array.from(currentList.children).indexOf(b) - Array.from(currentList.children).indexOf(a),
    );

    const indices = selectedItems.map((item) => Array.from(currentList.children).indexOf(item));

    selectedItems.forEach((item, index) => {
      const currentIndex = indices[index];
      const targetIndex = currentIndex + 1;

      if (targetIndex < currentList.children.length) {
        const targetElement = currentList.children[targetIndex];
        currentList.insertBefore(item, targetElement.nextSibling);
      }
    });
  }

  addListElement(list) {
    const modal = new CreateModal();
    const getClickItem = new CreateList();
    modal.displayModal((itemText) => {
      const newItem = ElementsCreator.createElement('li', itemText, { class: 'box__list-item' });
      newItem.addEventListener('click', () => getClickItem.clickItem(newItem));
      list.append(newItem);
      return newItem;
    });
  }

  delListElement(list) {
    Array.from(list.children).forEach((item) => {
      if (item.classList.contains('clicked-item')) {
        item.remove();
        item.classList.remove('clicked-item');
      }
    });
  }
}
