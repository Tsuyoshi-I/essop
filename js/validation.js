/**
 * 入力要素
 */
const loginId = document.getElementById("loginId")
const userName = document.getElementById("userName")
const tel = document.getElementById("tel")
const address = document.getElementById("address")
const pass = document.getElementById("pass")
const rePass = document.getElementById("rePass")

/**
 * 正規表現リスト
 */
const ONLY_HALF_WIDTH_NUM = "^[0-9]+$"// 半角数字のみ
const LENGTH_AND_FORMAT_LIMIT = "[!-~]{4,16}" // 4文字以上16文字以下の記号含む半角英数
const ADDRESS_FORMAT = "^.{0,50}$"

tel.setAttribute("pattern", ONLY_HALF_WIDTH_NUM)
pass.setAttribute("pattern", LENGTH_AND_FORMAT_LIMIT)
rePass.setAttribute("pattern", LENGTH_AND_FORMAT_LIMIT)
address.setAttribute("pattern", ADDRESS_FORMAT)

tel.addEventListener("input", function () {
  this.setCustomValidity("")
  this.checkValidity();
})

tel.addEventListener("invalid", function () {
  if (this.value === "") {
    this.setCustomValidity("入力必須項目です")
  } else {
    this.setCustomValidity("半角数字のみ入力してください")
  }
})
