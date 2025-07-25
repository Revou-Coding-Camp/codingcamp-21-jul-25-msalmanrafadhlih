document.addEventListener('DOMContentLoaded', () => {

    const todoForm = document.getElementById('todo-form');
    const todoInput = document.getElementById('todo-input');
    const dateInput = document.getElementById('date-input');
    const todoList = document.getElementById('todo-list');
    const allBtn = document.getElementById('all-btn');
    const activeBtn = document.getElementById('active-btn');
    const completedBtn = document.getElementById('completed-btn');

    let todos = []; 
    let currentFilter = 'all';

    //  Menyimpan tugas ke Local Storage
    const saveTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    //  Memuat tugas dari Local Storage
    const loadTodos = () => {
        const storedTodos = localStorage.getItem('todos');
        if (storedTodos) {
            todos = JSON.parse(storedTodos);
        }
    };

    // Menampilkan daftar tugas
    const renderTodos = () => {
        todoList.innerHTML = '';

        const filteredTodos = todos.filter(todo => {
            if (currentFilter === 'all') {
                return true;
            } else if (currentFilter === 'active') {
                return !todo.completed;
            } else if (currentFilter === 'completed') {
                return todo.completed;
            }
        });

        if (filteredTodos.length === 0 && currentFilter === 'all') {
            const emptyMessage = document.createElement('li');
            emptyMessage.textContent = 'No tasks yet. Add a new one!';
            emptyMessage.style.textAlign = 'center';
            emptyMessage.style.color = '#777';
            emptyMessage.style.padding = '20px';
            emptyMessage.style.backgroundColor = '#f0f0f0';
            todoList.appendChild(emptyMessage);
            return;
        } else if (filteredTodos.length === 0) {
            const emptyMessage = document.createElement('li');
            emptyMessage.textContent = `No ${currentFilter} tasks.`;
            emptyMessage.style.textAlign = 'center';
            emptyMessage.style.color = '#777';
            emptyMessage.style.padding = '20px';
            emptyMessage.style.backgroundColor = '#f0f0f0';
            todoList.appendChild(emptyMessage);
            return;
        }

        filteredTodos.forEach((todo, index) => {
            const listItem = document.createElement('li');
            listItem.setAttribute('data-id', todo.id);

            if (todo.completed) {
                listItem.classList.add('completed');
            }

            listItem.innerHTML = `
                <div class="task-info">
                    <span class="task-name">${todo.text}</span>
                    <span class="task-date">Due: ${todo.date}</span>
                </div>
                <div class="actions">
                    <button class="complete-btn">${todo.completed ? 'Undo' : 'Complete'}</button>
                    <button class="delete-btn">Delete</button>
                </div>
            `;

            // Menambahkan event listener untuk tombol "Complete"
            const completeBtn = listItem.querySelector('.complete-btn');
            completeBtn.addEventListener('click', () => {
                toggleCompleteTodo(todo.id);
            });

            // Menambahkan event listener untuk tombol "Delete"
            const deleteBtn = listItem.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', () => {
                deleteTodo(todo.id);
            });

            todoList.appendChild(listItem);
        });
    };

// Menambah tugas baru
    const addTodo = (text, date) => {
        const newTodo = {
            id: Date.now().toString(), 
            text: text,
            date: date,
            completed: false 
        };
        todos.push(newTodo);
        saveTodos();
        renderTodos();
        todoInput.value = '';
        dateInput.value = ''; 
    };

    // Memvalidasi input
    const validateInput = (text, date) => {
        if (!text.trim()) {
            alert('Task description cannot be empty!');
            return false;
        }
        if (!date) {
            alert('Due date cannot be empty!');
            return false;
        }
        return true;
    };

    // Submit formulir
    todoForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const todoText = todoInput.value.trim();
        const todoDate = dateInput.value;

        if (validateInput(todoText, todoDate)) {
            addTodo(todoText, todoDate);
        }
    });

    // Mengubah status selesai/belum selesai tugas
    const toggleCompleteTodo = (id) => {
        todos = todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        );
        saveTodos();
        renderTodos();
    };

    // Delete tugas
    const deleteTodo = (id) => {
        todos = todos.filter(todo => todo.id !== id);
        saveTodos();
        renderTodos();
    };

    // filter
    const setFilter = (filterType) => {
        currentFilter = filterType;
        allBtn.classList.remove('active');
        activeBtn.classList.remove('active');
        completedBtn.classList.remove('active');

        if (filterType === 'all') {
            allBtn.classList.add('active');
        } else if (filterType === 'active') {
            activeBtn.classList.add('active');
        } else if (filterType === 'completed') {
            completedBtn.classList.add('active');
        }
        renderTodos();
    };

    allBtn.addEventListener('click', () => setFilter('all'));
    activeBtn.addEventListener('click', () => setFilter('active'));
    completedBtn.addEventListener('click', () => setFilter('completed'));

    loadTodos();
    renderTodos();
});

// Floating images logic
const floatingContainer = document.querySelector('.floating-images');
const imageSources = [
  'img/img1.jpg',
  'img/img2.jpg',
  'img/img3.jpg',
  'img/img4.jpg',
  'img/img5.jpg',
  'img/img6.jpg',
  'img/img7.jpg',
  'img/img8.jpg',
  'img/img9.jpg',
  'img/img10.jpg',
  'img/img11.jpg',
  'img/img12.jpg',
  'img/img13.jpg',
  'img/img14.jpg',
  'img/img15.jpg',
  'img/img16.jpg',
  'img/img17.jpg',
  'img/img18.jpg',
  'img/img19.jpg',
  'img/img20.jpg'
];

const TOTAL_IMAGES = 1000;
let created = 0;

function createFloatingImage() {
  if (created >= TOTAL_IMAGES) return;

  const img = document.createElement('img');
  img.src = imageSources[Math.floor(Math.random() * imageSources.length)];
  img.loading = 'lazy';
  img.style.left = Math.random() * 100 + 'vw';
  img.style.top = Math.random() * -200 + 'px';
  img.style.width = (30 + Math.random() * 50) + 'px';
  img.style.animationDuration = (8 + Math.random() * 12) + 's';
  img.style.animationDelay = Math.random() * 5 + 's';
  img.style.animationName = 'floatDown';

  floatingContainer.appendChild(img);
  created++;
}

let interval = setInterval(() => {
  createFloatingImage();
  if (created >= TOTAL_IMAGES) clearInterval(interval);
}, 10);
