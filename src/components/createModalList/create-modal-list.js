import ElementsCreator from '../../utils/elementGenerator/element-generator';
import './create-modal-list.css';

export default class CreateModalList {
  constructor() {
    const questionText = ElementsCreator.createElement('p', 'List', {
      class: 'modal-text',
    });

    const confirmBtn = ElementsCreator.createElement('button', 'Ок', {
      class: 'modal-btn',
    });

    this.list = ElementsCreator.createElement('ul', '', {
      class: 'modal-list',
    });

    const modalContent = ElementsCreator.createElement(
      'div',
      '',
      {
        class: 'modal-content',
      },
      questionText,
      this.list,
      confirmBtn,
    );

    this.modal = ElementsCreator.createElement('div', '', { class: 'modal' }, modalContent);

    document.body.append(this.modal);
    this.confirmBtn = confirmBtn;

    this.displayModal = this.displayModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  displayModal(callback) {
    this.confirmBtn.addEventListener('click', () => {
      callback();
      this.closeModal();
    });

    this.modal.classList.add('open');
  }

  closeModal() {
    this.modal.classList.remove('open');
  }

  addItemToList(item) {
    const listItems = item.split(',');

    this.list.innerHTML = '';

    listItems.forEach((elem) => {
      const listItem = ElementsCreator.createElement('li', elem);
      this.list.append(listItem);
    });
  }
}
