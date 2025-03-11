function checkProbabilityTheory(count, min, max) {
    let evenCount = 0;  // Кількість парних чисел
    let oddCount = 0;   // Кількість непарних чисел
  
    for (let i = 0; i < count; i++) {
        let getRandome = Math.floor(Math.random() * (max - min + 1)) + min; // Генерация числа от 100 до 1000
        if (getRandome % 2 === 0) {
            evenCount++; // Якщо число парне — збільшуємо лічильник парних
        } 
        else {
            oddCount++;  // Якщо непарне — збільшуємо лічильник непарних
        }
    }
    

    let evenPercentage = (evenCount / count * 100).toFixed(0); // Відсоток парних
    let oddPercentage = (oddCount / count * 100).toFixed(0);   // Відсоток непарних

    console.log("Кількість згенерованих чисел:", count);
    console.log("Парних чисел:", evenCount);
    console.log("Не парних чисел:", oddCount);
    console.log("Відсоток парних до не парних:", evenPercentage + "% / " + oddPercentage + "%");
}

// Передаємо в функцію кількість 
// count - випадкових чисел, 
// min - діапазон від 100 (уже задам 101), не має завдання задати 100 в саму функцію, тому вказую 101, якщо потрібно то необхідно додадти відразу одиницю до числа перед циклом min+1, але на то не було завдання ;-)
// max - до 1000 включно 
 
checkProbabilityTheory(33, 101, 1000);
