"use strict";

// A
/*if (!("a" in window)) {
    var a = 1;
}
alert(a);*/

// Т. к в объекте "window" нет св-ва (метода) "а" !false равно true далее  а = 1 и выведется соответственно 1.

// B
/*var b = function a(x) {
 x && a(--x);
};
alert(a);*/

// Т. к function a(x) объявлена как function expression для переменной b и является тепереь св-вом (методом) этой
// переменной. Выполнение alert(a); выведет undefined потому что у объкта "window" нет св-ва (метода) "а".


// С
/*function a(x) {
 return x * 2;
}
var a;
alert(a);*/

function a(x) {
    return x * 2;
}
var a;
alert(a);

// Т. к в объекте "window" нет св-ва (метода) "а" !false равно true далее  а = 1 и выведется соответственно 1.