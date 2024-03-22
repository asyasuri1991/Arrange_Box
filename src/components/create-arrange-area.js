import ElementsCreator from '../utils/elementGenerator/element-generator';
import CreateArrangeAreaBox from './createArrangeAreaBox/create-arrange-area-box';
import CreateButtons from './createButtons/create-buttons';
import GenerateRandomList from '../utils/generateRandomList/generate-random-list';
import MoveControl from '../utils/move/move-control';
import CreateList from './createList/create-list';
import './create-arrange-area.css';

export default class CreateArrangeArea {
  constructor() {
    this.arrangeAreaBox = new CreateArrangeAreaBox();

    this.createButtons = new CreateButtons();

    this.listRandom = new GenerateRandomList();

    this.createList = new CreateList();

    this.initialValues = this.listRandom.generateRandomStringArray(10, 10);

    this.arrAvailable = this.createList.createList(this.initialValues);
    this.arrSelected = this.createList.createList();

    this.buttonsArr = this.createButtons.buttonsArr;

    this.move = new MoveControl(this.arrAvailable, this.arrSelected, this.buttonsArr);
  }

  createArrangeArea() {
    const arrangeArea = ElementsCreator.createElement(
      'div',
      '',
      { class: 'arrange-box__area' },

      this.createButtons.createButtons(
        6,
        ['+', '\u2191', '\u21C8', '\u2193', '\u21CA', 'DEL'],
        [
          () => this.move.addListElement(this.arrAvailable),
          () => this.move.upOneInAvailable(),
          () => this.move.upAllInAvailable(),
          () => this.move.downOneInAvailable(),
          () => this.move.downAllInAvailable(),
          () => this.move.delListElement(this.arrAvailable),
        ],
      ),

      this.arrangeAreaBox.createArrangeAreaBox('Available values', this.arrAvailable),

      this.createButtons.createButtons(
        4,
        ['>', '>>', '<', '<<'],
        [
          () => this.move.moveSomeToSelected(),
          () => this.move.moveAllToSelected(),
          () => this.move.moveSomeToAvailable(),
          () => this.move.moveAllToAvailable(),
        ],
      ),

      this.arrangeAreaBox.createArrangeAreaBox('Selected values', this.arrSelected),

      this.createButtons.createButtons(
        6,
        ['+', '\u2191', '\u21C8', '\u2193', '\u21CA', 'DEL'],
        [
          () => this.move.addListElement(this.arrSelected),
          () => this.move.upOneInSelected(),
          () => this.move.upAllInSelected(),
          () => this.move.downOneInSelected(),
          () => this.move.downAllInSelected(),
          () => this.move.delListElement(this.arrSelected),
        ],
      ),
    );
    return arrangeArea;
  }
}
