// 変数numに1～100までのランダムな整数を代入する
let num = (Math.floor(Math.random() * 100)+1);
console.log(num);

let num3=num%3;
let num5=num%5;
let num15=num%15;

if (num15 === 0) {
  console.log('3と5の倍数です');
}
else if (num3 === 0) {
  console.log('3の倍数です');
}
else if (num5 === 0) {
  console.log('5の倍数です');
}
else {
  console.log(num);
}


