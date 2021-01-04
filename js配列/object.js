// ①
// const test = new Object();
const test = {
  test1: 10,
  test2: 20,
  test3: 30,
  // test4: '本田', 文字だったら''いる
};
// objectをつける必要がある
console.log(Object.values(test));
for (value of Object.values(test)) {
  console.log(value);
}

// ②
// 〒判定

// const postalCode = '123-4567';

// function checkPostalCode(string) {
//   // replaceはなくす
//   // -があったら''にする
//   const replaced = string.replace('-', '');
//   const length = replaced.length;

//   if (length === 7) {
//     return true;
//   }
//   return false;
// }

// console.log(checkPostalCode(postalCode));

// objectを作る
const postal = {
  postalCode : '123-45678',
  checkPostalCode() {
    // オブジェクトを使って判定
    const replaced = this.postalCode.replace('-', '');
    const length = replaced.length;

    if (length === 7) {
      return true;
    }
    return false;
  }
};

// console.log(postal.checkPostalCode());


const postal2 = {
  postalCode: '123-4567',
  checkPostalCode() {
    // オブジェクトを使って判定
    const replaced = this.postalCode.replace('-', '').length;
    // const length = replaced.length;

    if (replaced === 7) {
      return true;
    }
    return false;
  }
};

console.log(postal2.checkPostalCode());


// ③
// メッソドチェーン

// オブジェクト
const person = {
  name: '本田',
  age: 30,
  
  // メソッド
  getName() {
    console.log(this.name);
    // 戻り値にthisをつける
    return this;
  },
  getAge() {
    console.log(this.age);
    return this;
  }
};

// メソッドをくっつける事ができる
person.getName().getAge();






