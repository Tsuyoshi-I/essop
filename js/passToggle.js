// ここは要素の取得。多分意味が分かり辛いと思うので気にしなくていい。
// ただの準備。
const passInput = document.querySelectorAll("input[type='password']")
const eyeIcon = document.createElement("i");

// 4行目 + 以下3行で<i class="fas fa-eye toggle-show-pass></i>"
// という要素を作ってる。
// **まだこの時点ではHTMLに<i class="fas~~~"></i>が書かれたわけじゃない(20行目で分かる)**
// アイコンに関するスタイルは全てtoggle-show-pass@subpage.cssに記述
eyeIcon.classList.add("fas")
eyeIcon.classList.add("fa-eye")
eyeIcon.classList.add("toggle-show-pass")

// なぜfor文なのかはあんまり深追いしなくていい。
// 強いて言えばpassword入力欄が複数あった時も
// 対応出来るようにするためのfor文。
for (let i = 0; i < passInput.length; i++) {
  // ↓アイコンの位置調整の為に親要素にrelativeをつけてる
  passInput[i].parentNode.style.position = "relative"
  // ↓ここで初めてHTMLにアイコン要素がレンダリングされる
  passInput[i].after(eyeIcon.cloneNode(true))
  // 以下コードは日本語訳すると分かりやすい
  // アイコン(passInput[i].nextElementSibling)が
  // クリックされたら("click")
  // 以下(function(){~~~~})を実行
  // functionの内容は
  // クリックされる度にアイコンのクラスfa-eyeとfa-eye-slashを
  // 交互に入れ替える
  // 同時にinputのtype属性をswitchの通り処理する
  passInput[i].nextElementSibling.addEventListener("click", function () {
    this.classList.toggle("fa-eye")
    this.classList.toggle("fa-eye-slash")
    const prev = this.previousSibling
    const attr = prev.getAttribute("type")
    switch (attr) {
      case "password":
        prev.setAttribute("type", "text")
        break
      case "text":
        prev.setAttribute("type", "password")
    }
  })
}







