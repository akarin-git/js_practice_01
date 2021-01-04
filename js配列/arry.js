// const fruits = new Array();
const fruits = [
  'りんご','バナナ'
];

// console.log(fruits);

// fruits.push('みかん');


// コールバック
fruits.forEach(function (input) {
  // console.log(input);
});


// 一般的な関数
// function getItem() {}

//コールバック 名前がない関数(無名関数,匿名関数)

// アロー関数

// 関数の名前あり
const getItem = () => { console.log('アロー') };
getItem();

// 関数名前なし
fruits.forEach(input => console.log(input));


// Array.filter
const scores = [10, 20, 30, 40];

// 30以上の配列の中身をとる
// const newScore = scores.filter((value) => {
//   return value >= 30;
// });
const newScore = scores.filter(value => value >= 30
);
console.log(newScore);


// Array.find
const members = ['本田', '香川', '長友'];

const member = members.find(value => value === '長友');
console.log(member);

// Array.map 配列を元に新しい配列を作る
const userList = [10,20,30,40];
// テンプレート文字列 `${}`バックコート
// const userIdList = userList.map((value) => {
//   return `user_${value}`;
// });
const userIdList = userList.map(value => `user_${value}`);

// console.log(userIdList);
console.table(userIdList);