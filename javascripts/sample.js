function getElement() {
  const element = document.getElementById("title");
  element.innerText = "idで取得した要素を変更しました"
};

window.onload = getElement;