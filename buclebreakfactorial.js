var x = 10;
let i = x - 1;

while (x){
    x *= i;
    i--;
    if (i <= 1) break
}

console.log(x)