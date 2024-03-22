import ElementsCreator from '../../utils/elementGenerator/element-generator';
import './create.buttons.css';

export default class CreateButtons {
  constructor() {
    this.buttonsArr = [];
  }

  createButtons(count, icons, operations /* , disabledStatus */) {
    const buttonsContainer = ElementsCreator.createElement('div', '', {
      class: 'box_buttons-container',
    });

    for (let i = 0; i < count; i += 1) {
      const button = ElementsCreator.createElement('button', icons[i], {
        class: 'box__button',
      });

      button.addEventListener('click', operations[i]);

      // if (disabledStatus[i]) {
      //   this.disableBtn(button);
      // }

      buttonsContainer.append(button);
      this.buttonsArr.push(button);
    }

    return buttonsContainer;
  }

  disableBtn(...targetButtons) {
    targetButtons.forEach((btn) => {
      const currentBtn = btn;
      currentBtn.disabled = true;
      currentBtn.classList.add('disabled');
    });
  }

  allowBtn(...targetButtons) {
    targetButtons.forEach((btn) => {
      const currentBtn = btn;
      currentBtn.disabled = false;
      currentBtn.classList.remove('disabled');
    });
  }
}
