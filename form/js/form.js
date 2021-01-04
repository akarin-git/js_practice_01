
const formTest = document.forms;
// console.log(formTest);

const formTest1 = document.forms.form_test1;
// console.log(formTest1)


const formTestYourName = document.forms.form_test1.your_name;
// console.log(formTestYourName);

// 入力と同時に表示
formTestYourName.addEventListener('input', () => {
  let yourNameValue = document.getElementById('your_name_value');
  yourNameValue.textContent = formTestYourName.value.length;
});


// ファイルプレビュー
const preview = document.forms.form_test1.preview;
// console.log(preview);

document.forms.form_test1.image_file.addEventListener('change', e => {
  // console.log(e.target.files[0]);
  const uploadFile = e.target.files[0];

  const reader = new FileReader();
  reader.addEventListener('load', () => {
    // 画像のsrc
    preview.src = reader.result;
    console.log(preview.src);
  });
  // 表示
  reader.readAsDataURL(uploadFile);
});