// 1 // Фактично, використання клавіатури для введення може бути дещо проблематичним через різні причини:

// Неоднорідність у різних пристроях : Різні клавіатури можуть мати різне розташування клавіш, що може призвести до різних результатів введення на різних пристроях. Наприклад, різниця між американською та європейською розкладками клавіатури.

// Проблеми з кросплатформенністю : Ваша програма може відмінно працювати на одній платформі, але мати проблеми на інших через різні налаштування клавіатури на різних ОС або браузерах.

// Спеціальні клавіші та комбінації клавіш : Деякі клавіші мають спеціальні функції або комбінації, які можуть вплинути на поведінку вашої програми, і це може бути не завжди очевидно або очікувано.


const buttons = document.querySelectorAll('button');


function handleKeyPress(event) {
  const key = event.key.toLowerCase(); 
  buttons.forEach(button => {
    if (button.innerText.toLowerCase() === key) {
      if (button.style.backgroundColor === 'blue') {
        button.style.backgroundColor = 'black';
      } else {
        button.style.backgroundColor = 'blue';
      }
    } else if (button.style.backgroundColor === 'blue') {
      button.style.backgroundColor = 'black'; 
    }
  });
}

document.addEventListener('keydown', handleKeyPress);
