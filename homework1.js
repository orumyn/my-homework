// 'number' + 3 + 3
// 'number' - це рядок, а + використовується для конкатенації
// 'number' + 3 → 'number3'
// 'number3' + 3 → 'number33'
console.log('number' + 3 + 3); // "number33"

// null + 3
// null перетворюється в 0 у числовому контексті
// 0 + 3 = 3
console.log(null + 3); // 3

// 5 && "qwerty"
// 5 - це truthy значення, тому JS переходить до другого операнда
console.log(5 && "qwerty"); // "qwerty"

// +'40' + +'2' + "hillel"
// +'40' → 40 (унарний плюс)
// +'2' → 2
// 40 + 2 = 42
// 42 + "hillel" → "42hillel"
console.log(+'40' + +'2' + "hillel"); // "42hillel"

// '10' - 5 === 6
// '10' - 5 → 10 - 5 → 5 (JS конвертує '10' в число)
// 5 === 6 → false
console.log('10' - 5 === 6); // false

// true + false
// true → 1, false → 0
// 1 + 0 = 1
console.log(true + false); // 1

// '4px' - 3
// '4px' не можна конвертувати в число → NaN
// NaN - 3 = NaN
console.log('4px' - 3); // NaN

// '4' - 3
// '4' конвертується в 4
// 4 - 3 = 1
console.log('4' - 3); // 1

// '6' + 3 ** 0
// 3 ** 0 → 1 (будь-яке число в нульовій степені = 1)
// '6' + 1 → "6" + "1" → "61"
console.log('6' + 3 ** 0); // "61"

// 12 / '6'
// '6' перетворюється в 6
// 12 / 6 = 2
console.log(12 / '6'); // 2

// '10' + (5 === 6)
// 5 === 6 → false
// '10' + false → "10false"
console.log('10' + (5 === 6)); // "10false"

// null == ''
// null не є рівним '' (null рівний лише undefined у нестрогому порівнянні)
console.log(null == ''); // false

// 3 ** (9 / 3)
// 9 / 3 → 3
// 3 ** 3 → 27
console.log(3 ** (9 / 3)); // 27

// !!'false' == !!'true'
// !!'false' → true (будь-який непорожній рядок → true)
// !!'true' → true
// true == true → true
console.log(!!'false' == !!'true'); // true

// 0 || '0' && 1
// 0 || ('0' && 1)
// '0' && 1 → 1 (обидва truthy, повертається останнє значення)
// 0 || 1 → 1
console.log(0 || '0' && 1); // 1

// (+null == false) < 1
// +null → 0, false → 0
// 0 == 0 → true
// true (1) < 1 → false
console.log((+null == false) < 1); // false

// false && true || true
// (false && true) || true
// false || true → true
console.log(false && true || true); // true

// false && (false || true)
// false && true → false
console.log(false && (false || true)); // false

// (+null == false) < 1 ** 5
// +null → 0, false → 0
// 0 == 0 → true
// 1 ** 5 → 1
// true (1) < 1 → false
console.log((+null == false) < 1 ** 5); // false
