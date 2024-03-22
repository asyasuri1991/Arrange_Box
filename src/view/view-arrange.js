import ElementsCreator from '../utils/elementGenerator/element-generator';
import CreateArrangeArea from '../components/create-arrange-area';
import ControlArea from '../components/createControlPanel/create-control-panel';
import './view-arrange.css';

export default class ViewArrange {
  constructor() {
    this.container = document.getElementById('container');
    this.render();
  }

  render() {
    const arrangeBox = new CreateArrangeArea();
    const controlArea = new ControlArea(
      this.container,
      arrangeBox.arrAvailable,
      arrangeBox.arrSelected,
      arrangeBox.initialValues,
    );
    const initialArrangeBox = this.createArrangeBox(arrangeBox, controlArea);
    this.container.append(initialArrangeBox);
  }

  createArrangeBox(arrangeArea, controlArea) {
    const arrangeBox = ElementsCreator.createElement(
      'div',
      '',
      { class: 'box arrange-box' },
      controlArea.createControlArea(),
      arrangeArea.createArrangeArea(),
    );

    return arrangeBox;
  }
}
