'use strict';

const listContainer = document.querySelector('.content');
let page = 1;

let loading = false;

function fetchData() {
  loading = true;
  setTimeout(() => {
    const list = Array.from({ length: 20 }, (_, i) => {
      const item = document.createElement('li');
      item.textContent = `Item ${i + 1} pg${page}`;
      return item;
    });

    listContainer.append(...list);
    loading = false;
  }, 500);
}

console.log(listContainer);

function handleScroll() {
  if (loading) return;
  const scrollTop = listContainer.scrollTop;
  const windowHeight = listContainer.clientHeight;
  const documentHeight = listContainer.scrollHeight;
  if (scrollTop + windowHeight >= documentHeight - 100) {
    fetchData();
    page++;
  }
}

fetchData();

listContainer.addEventListener('scroll', handleScroll);
