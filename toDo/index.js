
    var form = document.querySelector('form');
    var input = document.getElementById('toDo');
    var list = document.getElementById('toDoList');
    var btnRemoveAll = document.getElementById('btnRemoveAll');
    var btnAddTask = document.getElementById('btnAddTask')

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      let task = input.value;
      addTask(task);
      input.value = '';
    });

    btnAddTask.addEventListener('click', function() {
      let task = input.value;
        addTask(task);
        input.value = '';
      }
    );

    function addTask(task) {
      if (task === '') {
        alert('please add new task');
      } else {
      let newTask = document.createElement('li');
      newTask.textContent = task;
      list.appendChild(newTask);
    }
  };

    btnRemoveAll.addEventListener('click', function() {
      while (list.firstChild) {
        list.removeChild(list.firstChild);
      }
    })
