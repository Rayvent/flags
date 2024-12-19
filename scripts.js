const images = ["А.jpg", "Б.jpg", "В.jpg", "Г.jpg", "Д.jpg", "Е.jpg", "Ж.jpg", "З.jpg", "И.jpg", "К.jpg", "Л.jpg", "М.jpg", "Н.jpg", "О.jpg", "П.jpg", "Р.jpg", "С.jpg", "Т.jpg", "У.jpg", "Ф.jpg", "Х.jpg", "Ц.jpg", "Ч.jpg", "Ш.jpg", "Щ.jpg", "Ь-Ъ.jpg", "Ы.jpg", "Ю.jpg", "Я.jpg"];

const letters = ["А", "Б", "В", "Г", "Д", "Е", "Ж", "З", "И", "К", "Л", "М",
                 "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч",
                 "Ш", "Щ", "Ь-Ъ", "Э", "Ю", "Я"];

let currentLetter = "";

// Функция для выбора случайного изображения
function getRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];
    currentLetter = randomImage.split(".")[0];
    document.getElementById("semaphoreImage").src = randomImage;

    const resultElement = document.getElementById("result");
    resultElement.textContent = " "; // Резервируем место с пробелом
    resultElement.style.color = "transparent"; // Скрыто
}


// Функция для проверки ответа
function checkAnswer(letter) {
    const resultElement = document.getElementById("result");
    if (letter === currentLetter) {
        resultElement.textContent = "Верно!";
        resultElement.style.color = "green";
        setTimeout(getRandomImage, 1000);
    } else {
        resultElement.textContent = "Неправильно. Попробуйте ещё раз.";
        resultElement.style.color = "red";
    }
}

function createLetterButtons() {
    const container = document.getElementById("lettersContainer");
    letters.forEach(letter => {
        const button = document.createElement("button");
        button.textContent = letter;

        // Добавляем событие нажатия
        button.onclick = () => {
            checkAnswer(letter);
            button.blur(); // Убираем фокус с кнопки после нажатия
        };

        container.appendChild(button);
    });
}


// Инициализация интерфейса
window.onload = () => {
    createLetterButtons();
    getRandomImage();
};
