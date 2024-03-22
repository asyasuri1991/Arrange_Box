import ElementsCreator from '../../utils/elementGenerator/element-generator';
import searchInput from '../../utils/searchInput/search-input';
import './create-arrange-area-box.css';

export default class CreateArrangeAreaBox {
  createArrangeAreaBox(title, arr) {
    const boxTitle = ElementsCreator.createElement('h2', title, {
      class: 'box__title',
    });

    const boxInput = ElementsCreator.createElement('input', '', {
      class: 'box__input',
      placeholder: `Search ${title.toLowerCase()}`,
    });

    const boxSearch = ElementsCreator.createElement('div', '', { class: 'box__search' }, boxInput);

    if (boxTitle.textContent === 'Available values') {
      boxSearch.addEventListener('input', () => searchInput(arr, boxInput));
    } else {
      boxSearch.addEventListener('input', () => searchInput(arr, boxInput));
    }

    const arrangeAreaBox = ElementsCreator.createElement(
      'div',
      '',
      {
        class: 'arrange-area__box',
      },
      boxTitle,
      boxSearch,
      arr,
    );
    return arrangeAreaBox;
  }
}
