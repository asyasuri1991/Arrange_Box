import ElementsCreator from '../../utils/elementGenerator/element-generator';
import './create-modal.css';

export default class CreateModal {
  constructor() {
    const questionText = ElementsCreator.createElement('p', 'Enter new value', {
      class: 'modal-text',
    });

    const input = ElementsCreator.createElement('input', '', { class: 'modal-input' });

    const hintText = ElementsCreator.createElement('span', 'Please enter a value', {
      class: 'hint-text',
    });

    const confirmBtn = ElementsCreator.createElement('button', 'Add', {
      class: 'modal-btn',
    });

    const cancelBtn = ElementsCreator.createElement('button', 'Cancel', {
      class: 'modal-btn',
    });

    const modalButtons = ElementsCreator.createElement(
      'div',
      '',
      { class: 'modal-buttons' },
      confirmBtn,
      cancelBtn,
    );

    const modalContent = ElementsCreator.createElement(
      'div',
      '',
      {
        class: 'modal-content',
      },
      questionText,
      input,
      hintText,
      modalButtons,
    );

    this.modal = ElementsCreator.createElement('div', '', { class: 'modal' }, modalContent);

    document.body.append(this.modal);

    this.confirmBtn = confirmBtn;
    this.cancelBtn = cancelBtn;
    this.input = input;

    this.displayModal = this.displayModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.input.addEventListener('input', () => {
      this.checkInputValue();
    });
  }

  displayModal(callback) {
    this.confirmBtn.addEventListener('click', () => {
      this.checkInputValue();
      if (this.input.value.trim() !== '') {
        callback(this.input.value);
        this.closeModal();
      }
    });

    this.cancelBtn.addEventListener('click', () => {
      this.closeModal();
    });
    this.input.nextElementSibling.textContent = 'Please enter a value';

    this.modal.classList.add('open');
    this.input.focus();
  }

  closeModal() {
    this.modal.classList.remove('open');
    this.input.value = '';
  }

  checkInputValue() {
    if (this.input.value.trim() === '') {
      this.input.nextElementSibling.textContent = 'Please enter a value';
    } else {
      this.input.nextElementSibling.textContent = '';
    }
  }
}
