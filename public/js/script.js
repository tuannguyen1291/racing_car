// Bài Test: Chương trình giải phương trình bậc 2

/*
var a = prompt("Nhập số a:");
var b = prompt("Nhập số b:");
var c = prompt("Nhập số c:");
var x1, x2, delta;

function bacHai(a, b, c) {
    if (a == 0) {
        if (b == 0) {
            if (c == 0) {
                document.write("Phương trình có vô số nghiệm")
            } else {
                document.write("Phương trình vô nghiệm")
            }
        } else {
            x1 = -c / b
            document.write("Phương trình có nghiệm duy nhất: x = " + x1)
        }
    } else {
        delta = b*b - 4*a*c
        if (delta > 0) {
            x1 = (-b + Math.sqrt(delta)) / (2*a)
            x2 = (-b - Math.sqrt(delta)) / (2*a)
            document.write("Phương trình có 2 nghiệm: x1 = " + x1 + ", x2 = " + x2)
        } else {
            if (delta == 0) {
                x1 = (-b) / (2*a)
                document.write("Phương trình có nghiệm duy nhất: x = " + x1)
            } else {
                document.write("Phương trình vô nghiệm")
            }
        }
    }
}

bacHai(a, b, c)
*/

// Bài 1: Viết chương trình in ra 20 số Fibonacci

var first_num = 0;
var second_num = 1;
var saved_num;

document.write("20 số dãy Fibonacci đầu tiên: ")
document.write("<br>")
document.write(first_num + " ")
document.write(second_num + " ")

var num_count;

// Bắt đầu bằng số thứ 3 bởi vì ta đã có số đầu tiên và số thứ 2

for (num_count = 3; num_count <= 20; num_count++) {
    saved_num = second_num;
    second_num = first_num + second_num;
    first_num = saved_num;
    document.write(second_num + " ")
}

document.write("<br>")
document.write("<br>")
// Bài 2: Viết chương trình kiểm tra 1 số nhập vào có phải là số nguyên tố hay không

var input_number = prompt("Nhập một số bất kì:")

function checkPrime(input_number) {
    var is_prime = true;
    if (input_number <= 1) {
        document.write("Số " + input_number + " không phải là số nguyên tố!")
    } else {
        for (var i = 2; i < input_number; i++) {
            if (input_number % i == 0) {
                document.write("Số " + input_number + " không phải là số nguyên tố!")
                is_prime = false
                break
            }
        }
        if (is_prime == true) {
            document.write("Số " + input_number + " là số nguyên tố!")
        }
    }
}

checkPrime(input_number)

document.write("<br>")
document.write("<br>")

// Bài 3: Viết chương trình đảo ngược một số (12345 -> 54321)

var get_number = prompt("Nhập một số để đảo ngược:")
var rev_number = 0;

function reverseNumber(input_number) {
    while (input_number > 0) {
        rev_number = rev_number * 10 + input_number % 10
        input_number = (input_number - input_number % 10) / 10
    }
    return rev_number
}

reverseNumber(get_number);
document.write("Số đảo ngược của số " + get_number + " là số " + rev_number);

document.write("<br>");
document.write("<br>");
// Bài 4: Viết chương trình liệt kê 20 số nguyên tố đầu tiên

var prime_count = 1;
var starting_num = 2;

document.write("Dãy 20 số nguyên tố đầu tiên:");
document.write("<br>");
document.write(starting_num + " ")

while (prime_count <= 20) {
    starting_num += 1
    var is_prime = true

    for (var k = 2; k < starting_num; k++) {
        if (starting_num % k == 0) {
            is_prime = false
            break
        }
    }
    if (is_prime == true) {
        document.write(starting_num + " ")
        prime_count += 1
    }
}