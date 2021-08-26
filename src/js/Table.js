/* eslint-disable no-restricted-syntax */
import { clearArrow } from './sortingFunc';

export default class Table {
  constructor(container) {
    this.container = document.querySelector(container);
    this.body = this.container.querySelector('tbody');
  }

  render(newData) {
    for (const elem of newData) {
      const formatter = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 2,
      });
      const imdb = formatter.format(`${elem.imdb}`);
      this.container.querySelector('tbody').insertAdjacentHTML('beforeend', `<tr data-id="${elem.id}" data-title="${elem.title}" data-year="${elem.year}" data-imdb="${elem.imdb}">
      <td>${elem.id}</td>
      <td>${elem.title}</td>
      <td>(${elem.year})</td>
      <td>imdb:${imdb}</td>
      </tr>`);
    }
  }

  clear() {
    clearArrow();
    this.body.innerHTML = '';
  }
}

window.Table = Table;
