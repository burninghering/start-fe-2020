import { saveData } from './data-manager';

const $result = document.querySelector('#result');

function getTodosHtml(data) {
  console.log(data);
  const html = data.map((todo, index) => {
    return `<li data-index="${index}">
    <button class="delete">×</button>
    <input type="checkbox" class="toggle-checked" ${
      todo.isDone ? 'checked' : ''
    }/>
    <span class="text">${todo.text}</span>
  </li>`;
  });

  return `<ul>${html.join('')}</ul>`;
}

function render(data) {
  console.log('todos:', data);
  $result.innerHTML = getTodosHtml(data);
  saveData(data);
}

export { render };
