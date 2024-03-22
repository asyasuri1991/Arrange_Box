export default class ElementsCreator {
  static createGenericElement(elementType, text = null, attributes = {}, ...elements) {
    const element = document.createElement(elementType);
    if (text !== null) {
      element.textContent = text;
    }
    if (elements) {
      elements.forEach((el) => element.append(el));
    }

    if (attributes) {
      Object.entries(attributes).forEach(([key, value]) => {
        element.setAttribute(key, value);
      });
    }

    return element;
  }

  static createElement(elementType, text = null, attributes = {}, ...elements) {
    return this.createGenericElement(elementType, text, attributes, ...elements);
  }
}
