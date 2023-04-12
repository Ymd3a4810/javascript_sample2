function emailValidation() {
  const form = document.getElementById('form');
  // NOTE: イベントを付与したいのはemail_confirmなので取得してイベントの付与先を変更する
  const confirm = document.getElementById('email_confirm');

  console.log(confirm);
  confirm.addEventListener('input', function(e) {
    if(form.email.value !== form.email_confirm.value) {
      e.preventDefault();
      const element = document.createElement('p')
      const message = document.createTextNode("Eメールが一致しません")
      form.appendChild(element);
      element.appendChild(message);
      element.classList.add("alert");
    }
  });
};



window.onload = function(){ 
  emailValidation();
};