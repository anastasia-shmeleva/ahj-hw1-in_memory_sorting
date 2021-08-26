import Table from './Table';
import sortingFunc from './sortingFunc';

const table = new Table('.container');

function delay(n) {
  return new Promise((resolve) => {
    setTimeout(resolve, n * 1000);
  });
}

async function myAsyncFunction() {
  table.clear();
  let newData = sortingFunc(1, 'id');
  table.render(newData);

  await delay(2);

  table.clear();
  newData = sortingFunc(2, 'id');
  table.render(newData.reverse());

  await delay(2);

  table.clear();
  newData = sortingFunc(1, 'title');
  table.render(newData);

  await delay(2);

  table.clear();
  newData = sortingFunc(2, 'title');
  table.render(newData.reverse());

  await delay(2);

  table.clear();
  newData = sortingFunc(1, 'year');
  table.render(newData);

  await delay(2);

  table.clear();
  newData = sortingFunc(2, 'year');
  table.render(newData.reverse());

  await delay(2);

  table.clear();
  newData = sortingFunc(1, 'imdb');
  table.render(newData);

  await delay(2);

  table.clear();
  newData = sortingFunc(2, 'imdb');
  table.render(newData.reverse());

  await delay(2);

  myAsyncFunction();
}

myAsyncFunction();
