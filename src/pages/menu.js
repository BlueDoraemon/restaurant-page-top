import { menuItems } from './data';

const menuList = document.getElementById('menu-list');

function createMenuItem(item) {
  const menuItem = document.createElement('div');
  menuItem.classList.add('menu-item');

  const itemName = document.createElement('h2');
  itemName.textContent = item.name;

  const itemDescription = document.createElement('p');
  itemDescription.textContent = item.description;

  const itemPrice = document.createElement('p');
  itemPrice.classList.add('price');
  itemPrice.textContent = `$${item.price.toFixed(2)}`;

  menuItem.appendChild(itemName);
  menuItem.appendChild(itemDescription);
  menuItem.appendChild(itemPrice);

  return menuItem;
}

export function renderMenuItems() {

    let array = [];
    const heading = document.createElement('h1');
    heading.textContent = 'The Lanternpost Café Menu';
  menuItems.forEach((item) => {
    const menuItem = createMenuItem(item);
    array.push(menuItem);
  });

  return array;
}