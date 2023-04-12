function emailValidation() {
  const form = document.getElementById('form');
  // NOTE: イベントを付与したいのはemail_confirmなので取得してイベントの付与先を変更する
  const confirm = document.getElementById('email_confirm');

  // TODO: 最初にエラー表示のラベルを追加してしまう
  const element = document.createElement('p')
  const message = document.createTextNode("Eメールが一致しません")
  form.appendChild(element);
  element.appendChild(message);
  // 理想: この時点で非表示
  element.classList.add("alert");
  console.log(confirm);

  confirm.addEventListener('input', function(e) {
    // TODO: エラーの場合には表示する
    if(form.email.value !== form.email_confirm.value) {
      e.preventDefault();
      // 理想: この時点で表示
      element.classList.add("visible_alert");
    }
    //  TODO: エラーがない場合には非表示にする
    else{
      // 理想: この時点で非表示
      element.classList.remove("visible_alert");

    }
  });
};

window.onload = function(){ 
  emailValidation();
};