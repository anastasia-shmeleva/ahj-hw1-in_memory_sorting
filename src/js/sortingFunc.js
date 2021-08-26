/* eslint-disable no-extend-native */
/* eslint-disable func-names */
/* eslint-disable no-nested-ternary */
import * as data from '../../data.json';

function setArrow(order, sortBy) {
  const column = Array.from(document.querySelectorAll('th')).find((th) => th.innerHTML === sortBy);

  switch (order) {
    case 1:
      column.dataset.order = 1;
      column.classList.add('sorted');
      break;

    case 2:
      column.dataset.order = -1;
      column.classList.add('sorted');
      break;

    default:
      column.removeAttribute('data-order');
      break;
  }
}

export function clearArrow() {
  Array.from(document.querySelectorAll('th')).forEach((th) => {
    th.removeAttribute('data-order');
    th.classList.remove('sorted');
  });
}

export default function sortingFunc(order, sortBy) {
  const newData = JSON.parse(JSON.stringify(data.films));

  setArrow(order, sortBy);

  Array.prototype.sortBy = function (p) {
    return this.slice(0).sort((a, b) => ((a[p] > b[p]) ? 1 : (a[p] < b[p]) ? -1 : 0));
  };

  return newData.sortBy(sortBy);
}
