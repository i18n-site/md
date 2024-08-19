# フロントエンドキャッシュ

## フロントエンドキャッシュ更新の遅延

[MDN](https://developer.mozilla.org/docs/Web/API/Service_Worker_API)によると、 `service worker`の最大更新頻度は24時間です。

i18n.site CDN名を`service worker`にキャッシュします。したがって、 `cdn`設定で変更された場合、古いユーザーは更新を確認するまで24時間待つ必要があります。

## ローカル デバッグでフロントエンド キャッシュをクリアする方法

TODOクロム
