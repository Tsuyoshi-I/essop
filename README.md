# essopモックアップ

## パスワードの可視不可視実装条件

- fontawesomeのCDNをheadに貼る
```html
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.13.1/css/all.css"
    integrity="sha384-xxzQGERXS00kBmZW/6qxqJPyxW3UR0BPsL4c8ILaIWXva5kFi7TxkIIaMiKtqV1Q" crossorigin="anonymous">
```
- ```js/passToggle.js```を読み込む(利用したいhtmlのbodyタグの閉じタグの直前で!)
- ```css/subpage.css```が必須

多分これで動く(はず)

<hr>

## その他仕様
- 基本的に今回のモックでしかほぼ有効じゃないです
- type属性がpasswordになっているinput要素の隣にアイコンをレンダリングするようになっています
- 以下のように、該当inputタグ専用(?)の親要素を持つようなHTML構造になっている必要があります(多分)
```html
<div class="ほげ">
  <label>ほげ</label><!--あってもなくてもいい-->
  <input type="password"><!--passwordでなきゃだめ-->
  <!--ここはspanとかくらいなら入っても大丈夫-->
</div>
<!-- div内の要素が一行に横並びになっていれば多分おｋ -->
```