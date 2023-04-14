function emailValidation() {
  const form = document.getElementById('form');
  // NOTE: イベントを付与したいのはemail_confirmなので取得してイベントの付与先を変更する
  const confirm = document.getElementById('email_confirm');
  // TODO: error_messageを取得する
  const errorMessage = document.getElementById('error_message');
  const contactMessage = document.getElementById('contact_message');
  console.log(errorMessage);
  console.log(contactMessage);
  // TODO: 最初にエラー表示のラベルを追加してしまう
  const element = document.createElement('p')
  const message = document.createTextNode("Eメールが一致しません")
  
  // TOOD[宿題]: サンプルと同じ場所にエレメントを追加する
  element.appendChild(message);
  //errorMessage.insertAdjacentElement('afterend', element);
  errorMessage.appendChild(element);
  console.log(errorMessage);
  // 理想: この時点で非表示
  contactMessage.classList.add("invisible_alert");

  confirm.addEventListener('input', function(e) {
    // TODO: エラーの場合には表示する
    if(form.email.value !== form.email_confirm.value) {
      e.preventDefault();
      // 理想: この時点で表示
      contactMessage.classList.remove("invisible_alert");
      contactMessage.classList.add("visible_alert");
      confirm.classList.add("input_alert")
      console.log(confirm);
    }
    //  TODO: エラーがない場合には非表示にする
    else{
      // 理想: この時点で非表示
      errorMessage.removeChild(element);
      confirm.classList.remove("input_alert");
      conatactMessage.classList.remove("visible_alert");
      errorMessage.classList.add("invisible_alert");

    }
  });
};

window.onload = function(){ 
  emailValidation();
};