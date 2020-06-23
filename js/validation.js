/**
 * 正規表現リスト
 */
const ONLY_HALF_WIDTH_NUM = "^[0-9]+$"// 半角数字のみ
const LENGTH_AND_FORMAT_LIMIT = "[!-~]{4,16}" // 4文字以上16文字以下の記号含む半角英数
const ADDRESS_FORMAT = "^.{0,50}$"

/**
 * 入力要素
 */
const loginId = document.getElementById("loginId")
const userName = document.getElementById("userName")
const tel = document.getElementById("tel")
const address = document.getElementById("address")
const pass = document.getElementById("pass")
const rePass = document.getElementById("rePass")
const productName = document.getElementById("productName")
const purchase = document.getElementById("purchase")
const price = document.getElementById("price")

let inputElementList = []
if (loginId !== null) {
  inputElementList.push({
    ele: loginId,
    msg: null,
  })
}

if (userName !== null) {
  inputElementList.push({
    ele: userName,
    msg: null,
  })
}

if (tel !== null) {
  inputElementList.push({
    ele: tel,
    msg: "半角数字のみ入力してください"
  })
  tel.setAttribute("pattern", ONLY_HALF_WIDTH_NUM)
}
if (address !== null) {
  inputElementList.push({
    ele: address,
    msg: "住所は50文字以内で入力してください"
  })
  address.setAttribute("pattern", ADDRESS_FORMAT)
}
if (pass !== null) {
  inputElementList.push({
    ele: pass,
    msg: "パスワードは4文字以上16文字以内で入力してください",
  })
  pass.setAttribute("pattern", LENGTH_AND_FORMAT_LIMIT)
}
if (rePass !== null) {
  inputElementList.push({
    ele: rePass,
    msg: "パスワードは4文字以上16文字以内で入力してください",
  })
  rePass.setAttribute("pattern", LENGTH_AND_FORMAT_LIMIT)
}
if (productName !== null) {
  inputElementList.push({
    ele: productName,
    msg: null,
  })
}
if (purchase !== null) {
  inputElementList.push({
    ele: purchase,
    msg: null,
  })
  purchase.setAttribute("pattern", ONLY_HALF_WIDTH_NUM)
}
if (price !== null) {
  inputElementList.push({
    ele: price,
    msg: null
  })
  price.setAttribute("pattern", ONLY_HALF_WIDTH_NUM)
}

for (let i = 0; i < inputElementList.length; i++) {
  inputElementList[i].ele.addEventListener("input", function () {
    this.setCustomValidity("")
    this.checkValidity();
  })
}

for (let i = 0; i < inputElementList.length; i++) {
  inputElementList[i].ele.addEventListener("invalid", function () {
    if (this.value === "") {
      this.setCustomValidity("入力必須項目です")
    } else if (inputElementList[i].msg !== null) {
      this.setCustomValidity(inputElementList[i].msg)
    }
  })
}
