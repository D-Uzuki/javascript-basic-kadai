const date = new Date();
const [year, month, day] = [
  date.getFullYear(),
  date.getMonth() + 1, // 月は0から始まるため1を加算
  date.getDate(),
];

console.log(year + '年' + month + '月' + day + '日'); // 2021年11月24日


