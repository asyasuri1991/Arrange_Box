export default function searchInput(list, input) {
  const searchText = input.value.toLowerCase();
  Array.from(list.children).forEach((listItem) => {
    const currentItem = listItem;
    if (currentItem.textContent.toLowerCase().includes(searchText)) {
      currentItem.style.display = 'block';
    } else {
      currentItem.style.display = 'none';
    }
  });
}
