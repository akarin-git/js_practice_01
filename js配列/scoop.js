'use strict';

// グローバル　ローカル

const globalVariable = 'グローバル';

function checkScope() {
  // const localVariable = 'ローカル';
  // console.log(localVariable);

  // 関数の外で設定しているグローバル定数は関数の中でも使える
  console.log(globalVariable);
}

// console.log(globalVariable);

checkScope();

