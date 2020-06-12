import { render } from './html-render';
import todoModel from './todo-model';

const $todoForm = document.querySelector('#todo-form');
const $input = document.querySelector('#input');

function init(data) {
  $todoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    data.push({
      ...todoModel,
      text: $input.value,
    });

    $input.value = '';
    render(data);
  });
}
export default {
  init,
};
