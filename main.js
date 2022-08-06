//kicks in when everything is loaded on html
window.addEventListener('load', () => {
  //returns the first element within the doc, matches specifed selector
  const form = document.querySelector('#new-to-do-list-form');
  const input = document.querySelector('#to-do-input');
  const list_el = document.querySelector('#tasks');

  form.addEventListener('submit', (e) => {
    //stopping the automatic refresh
    e.preventDefault();

    const tasks = input.value;

    //sending an alert to "add task"
    if (!tasks) {
      alert('Please put in a task!');
      return;
    }

    //adding the "tasks" and making the html file "readonly".
    const tasks_el = document.createElement('div');
    tasks_el.classList.add('tasks');

    const tasks_content_el = document.createElement('div');
    tasks_content_el.classList.add('content');

    tasks_el.appendChild(tasks_content_el);

    const tasks_input_el = document.createElement('input');
    tasks_input_el.classList.add('text');
    tasks_input_el.type = 'text';
    tasks_input_el.value = tasks;
    tasks_input_el.setAttribute('readonly', 'readonly');

    tasks_content_el.appendChild(tasks_input_el);

    //adding actions buttons 'edit', 'delete'.

    const tasks_actions_el = document.createElement('div');
    tasks_actions_el.classList.add('actions');

    const tasks_edit_el = document.createElement('button');
    tasks_edit_el.classList.add('edit');
    tasks_edit_el.innerHTML = 'edit';

    const tasks_delete_el = document.createElement('button');
    tasks_delete_el.classList.add('delete');
    tasks_delete_el.innerHTML = 'delete';

    tasks_actions_el.appendChild(tasks_edit_el);
    tasks_actions_el.appendChild(tasks_delete_el);

    tasks_el.appendChild(tasks_actions_el);
    list_el.appendChild(tasks_el);

    input.value = '';

    tasks_edit_el.addEventListener('click', () => {
      if (tasks_edit_el.innerText.toLowerCase() == 'edit') {
        tasks_input_el.removeAttribute('readonly');
        tasks_input_el.focus();
        tasks_edit_el.innerText = 'save';
      } else {
        tasks_input_el.setAttribute('readonly', 'readonly');
        tasks_edit_el.innerText = 'edit';
      }
    });

    tasks_delete_el.addEventListener('click', () => {
      list_el.removeChild(tasks_el);
    });
  });
});
