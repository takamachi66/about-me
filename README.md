# about-me

クラシックMac風の見た目をベースにした、シンプルな自己紹介用の静的サイトです。  
`@sakun/system.css` を利用し、プロフィール表示と外部リンク導線を軽量な構成でまとめています。

## Overview

- 純粋な静的HTML / CSS / JavaScriptで構成
- パッケージマネージャやビルド工程なし
- クラシックMacintosh風UIでプロフィールページを表示
- Third-party notices ページで依存ライブラリの表記を掲載

## Files

- `index.html`
  メインページ
- `third-party-notices.html`
  外部ライブラリとフォント出典の通知ページ
- `assets/css/styles.css`
  サイト固有の追加スタイル
- `assets/js/script.js`
  タブ切り替えなどの簡単なUI制御
- `assets/images/profile_icon.png`
  プロフィール画像

## Local Preview

ビルドは不要です。ファイルをそのままブラウザで開くか、簡易HTTPサーバーで確認できます。

例:

```powershell
cd \\wsl.localhost\Ubuntu\home\nanoha\work\about-me
python -m http.server 8000
```

その後、`http://localhost:8000` を開いて確認してください。

## Customization

- プロフィール本文は `index.html` を編集
- リンク先は `index.html` 内の `External Links` セクションを編集
- 配色や余白は `assets/css/styles.css` を編集
- タブ動作は `assets/js/script.js` を編集

## Third-Party UI And Notices

このサイトは以下の外部UIライブラリを利用しています。

- `@sakun/system.css`
  配布元: https://github.com/sakofchit/system.css
  ライセンス: MIT

依存ライブラリおよびフォント出典の通知は [third-party-notices.html](./third-party-notices.html) にまとめています。
