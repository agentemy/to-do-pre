let items = [
	"Сделать проектную работу",
	"Полить цветы",
	"Пройти туториал по Реакту",
	"Сделать фронт для своего проекта",
	"Прогуляться по улице в солнечный день",
	"Помыть посуду",
];

const listElement = document.querySelector(".to-do__list");
const formElement = document.querySelector(".to-do__form");
const inputElement = document.querySelector(".to-do__input");

function loadTasks() {
	return items;
}

function createItem(item) {
	const template = document.getElementById("to-do__item-template");
	const clone = template.content.querySelector(".to-do__item").cloneNode(true);
	const textElement = clone.querySelector(".to-do__item-text");
	const deleteButton = clone.querySelector(".to-do__item-button_type_delete");
	const duplicateButton = clone.querySelector(".to-do__item-button_type_duplicate");
	const editButton = clone.querySelector(".to-do__item-button_type_edit");
	textElement.textContent = item;
	return clone;
}

function getTasksFromDOM() {

}

function saveTasks(tasks) {
	localStorage.setItem("tasks", JSON.stringify(tasks));
}

items = loadTasks();

items.forEach(function(item) {
	const taskElement = createItem(item);
	listElement.append(taskElement);
})

// Обработчик отправки формы с подробным логированием
formElement.addEventListener("to-do__submit", function(event) {
    console.log("1. Событие submit сработало");
    
    event.preventDefault();
    
    const taskText = inputElement.value.trim();
    console.log("2. Текст задачи:", taskText);
    
    if (taskText === "") {
        console.log("3. Текст пустой, выход");
        return;
    }
    
    console.log("4. Создаём элемент задачи");
    const taskElement = createItem(taskText);
    console.log("5. Созданный элемент:", taskElement);
    
    if (!taskElement) {
        console.error("6. Ошибка: taskElement = null");
        return;
    }
    
    console.log("7. Добавляем в начало списка");
    listElement.prepend(taskElement);
    
    console.log("8. Текущее количество задач в DOM:", listElement.children.length);
    
    inputElement.value = "";
    console.log("9. Поле ввода очищено");
});