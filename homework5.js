var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн"
    };

    services['Розбити скло'] = "200 грн";

let values = Object.values(services);

// метод price(), який обчислює та повертає загальну вартість наданих послуг.
services.price = function() {
    let sum = 0;
    for (let i in this) {
        let num = parseInt(this[i]);
            if (!isNaN(num)) {
                sum += num;
            }
        }
        return sum;
};


// метод minPrice(), який повертає мінімальну ціну.
services.minPrice = function() {
    let min = Infinity;
    for (let i in this) {
        let num = parseInt(this[i]);
            if (!isNaN(num) && num < min) {
                min = num;
            }
        }
        return min;
};


// метод maxPrice(), який повертає максимальну ціну.
services.maxPrice = function() {
    let max = -Infinity;
    for (let i in this) {
        let num = parseInt(this[i]);
            if (!isNaN(num) && num > max) {
                max = num;
            }
        }
        return max;
};


console.log("Загальна вартість:", services.price(), "грн");
console.log("Мінімальна ціна:", services.minPrice(), "грн");
console.log("Максимальна ціна:", services.maxPrice(), "грн");
