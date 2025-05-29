document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  const feedback = document.getElementById('successMessage');

  if (!name || !email || !message) {
    feedback.textContent = 'All fields are required.';
    feedback.style.color = 'red';
    feedback.style.display = 'block';
    return;
  }

  if (!emailPattern.test(email)) {
    feedback.textContent = 'Please enter a valid email.';
    feedback.style.color = 'red';
    feedback.style.display = 'block';
    return;
  }

  feedback.textContent = 'Form submitted successfully!';
  feedback.style.color = '#28a745';
  feedback.style.display = 'block';

  this.reset();
});

function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskValue = taskInput.value.trim();

  if (taskValue === '') return;

  const li = document.createElement('li');
  li.textContent = taskValue;

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Remove';
  deleteBtn.style.marginLeft = '10px';
  deleteBtn.onclick = () => li.remove();
  li.appendChild(deleteBtn);

  document.getElementById('taskList').appendChild(li);
  taskInput.value = '';
}
