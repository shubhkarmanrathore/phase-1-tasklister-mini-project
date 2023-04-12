document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', e => { 
    e.preventDefault();
    buildToDo(e.target.new_task_description.value);
    e.target.reset();
  });
});

function buildToDo(todo) {
  let p = document.createElement('p');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleToDo);
  btn.textContent = 'X';
  p.textContent = `${todo} `;
  document.querySelector('#tasks').appendChild(p);
  p.appendChild(btn);
}

function handleToDo(e) {
  e.target.parentNode.remove();
}
