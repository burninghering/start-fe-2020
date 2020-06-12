import { render } from './html-render';
import inputForm from './input-form';
import { loadData } from './data-manager';
import './todos.css';

const $result = document.querySelector('#result');

const todos = loadData();

$result.addEventListener('click', (event) => {
  const { className } = event.target;
  if (className === 'delete') {
    const { index } = event.target.parentElement.dataset;
    todos.splice(index, 1);
    render(todos);
  } else if (className === 'toggle-checked') {
    const { index } = event.target.parentElement.dataset;
    todos[index].isDone = !todos[index].isDone;
    render(todos);
  }
});

inputForm.init(todos);
render(todos);
