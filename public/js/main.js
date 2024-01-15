var x = 0.5
var eps = 0.001

// Form 1

var n = 1
var first = 1
var second = first + Math.pow(x, n) / factorial(n)

function factorial(n) {
    if (n == 1) return 1
    return n * factorial(n - 1)
}

while (Math.abs(first - second) > eps) {
    n++
    first = second
    second = first + Math.pow(x, n) / factorial(n)
}

document.write(first)
document.write("<br>")
// Form 2

var n = 2
var first = 1
var second = first + Math.pow(-1, n - 1) * (n * (n + 1) / 2) * Math.pow(x, n - 1)

while (Math.abs(first - second) > eps) {
    n++
    first = second
    second = first + Math.pow(-1, n - 1) * (n * (n + 1) / 2) * Math.pow(x, n - 1)
}

document.write(first)
document.write("<br>")
// Form 3

var n = 2
var first = -x
var second = first - Math.pow(x, n) / n

while (Math.abs(first - second) > eps) {
    n++
    first = second
    second = first - Math.pow(x, n) / n
}

document.write(first)
document.write("<br>")
// Form 4

var n = 1
var first = 1
var second = first + Math.pow(-1, n + 1) * (multiOdd(n - 1) / multiEven(n)) * Math.pow(x, n)

function multiOdd(n) {
    if (n <= 0) return 1
    return (2 * n - 1) * multiOdd(n - 1)
}

function multiEven(n) {
    if (n <= 0) return 1
    return 2 * n * multiEven(n - 1)
}

while (Math.abs(first - second) > eps) {
    n++
    first = second
    second = first + Math.pow(-1, n + 1) * (multiOdd(n - 1) / multiEven(n)) * Math.pow(x, n)
}

document.write(first)
document.write("<br>")
// Form 5

var n = 1
var first = 1
var second = first + Math.pow(-1, n) * (multiOdd(n) / multiEven(n)) * Math.pow(x, n)

while (Math.abs(first - second) > eps) {
    n++
    first = second
    second = first + Math.pow(-1, n) * (multiOdd(n) / multiEven(n)) * Math.pow(x, n)
}

document.write(first)
document.write("<br>")
// Form 6

var n = 2
var first = x
var second = first + Math.pow(-1, n - 1) * Math.pow(x, 2*n - 1) / factorial(2*n - 1)

while (Math.abs(first - second) > eps) {
    n++
    first = second
    second = first + Math.pow(-1, n - 1) * Math.pow(x, 2*n - 1) / factorial(2*n - 1)
}

document.write(first)
document.write("<br>")
// Form 7

var n = 2
var first = 1
var second = first + Math.pow(-1, n - 1) * Math.pow(x, 2*n - 2) / factorial(2*n - 2)

while (Math.abs(first - second) > eps) {
    n++
    first = second
    second = first + Math.pow(-1, n - 1) * Math.pow(x, 2*n - 2) / factorial(2*n - 2)
}

document.write(first)
document.write("<br>")
// Form 8

var n = 2
var first = x
var second = first + multiOdd(n - 1) / multiEven(n - 1) * Math.pow(x, 2 * n - 1) / factorial(2 * n - 1)

while (Math.abs(first - second) > eps) {
    n++
    first = second
    second = first + multiOdd(n - 1) / multiEven(n - 1) * Math.pow(x, 2 * n - 1) / factorial(2 * n - 1)
}

document.write(first)
document.write("<br>")
// Form 9

var n = 2
var first = 1
var second = first + Math.pow(-1, n - 1) * Math.pow(x, 2 * n - 2) / factorial(2 * n - 1)

while (Math.abs(first - second) > eps) {
    n++
    first = second
    second = first + Math.pow(-1, n - 1) * Math.pow(x, 2 * n - 2) / factorial(2 * n - 1)
}

document.write(first)
document.write("<br>")
// Form 10

var n = 2
var first = x
var second = first + Math.pow(-1, n - 1) * Math.pow(x, 2 * n - 1) / (2 * n - 1)

while (Math.abs(first - second) > eps) {
    n++
    first = second
    second = first + Math.pow(-1, n - 1) * Math.pow(x, 2 * n - 1) / (2 * n - 1)
}

document.write(first)
document.write("<br>")

// Form 11

var n = 2
var first = x
var second = first + Math.pow(-1, n - 1) * Math.pow(x, n) / (n)

while (Math.abs(first - second) > eps) {
    n++
    first = second
    second = first + Math.pow(-1, n - 1) * Math.pow(x, n) / (n)
}

document.write(first)
document.write("<br>")

// Form 12

var n = 2
var first = 2*x
var second = first + 2 * Math.pow(x, n * 2 - 1) / (n * 2 - 1)

while (Math.abs(first - second) > eps) {
    n++
    first = second
    second = first + 2 * Math.pow(x, n * 2 - 1) / (n * 2 - 1)
}

document.write(first)
document.write("<br>")

// Form 13

var n = 2
var first = x
var second = first + Math.pow(x, n * 2 - 1) / factorial(n * 2 - 1)

while (Math.abs(first - second) > eps) {
    n++
    first = second
    second = first + Math.pow(x, n * 2 - 1) / factorial(n * 2 - 1)
}

document.write(first)
document.write("<br>")

// Form 14

var n = 2
var first = x
var second = first + Math.pow(x, n * 2 - 2) / factorial(n * 2 - 2)

while (Math.abs(first - second) > eps) {
    n++
    first = second
    second = first + Math.pow(x, n * 2 - 2) / factorial(n * 2 - 2)
}

document.write(first)
document.write("<br>")