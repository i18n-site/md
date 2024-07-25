
## CNAME バインドされたドメイン名

Cloudflare Worker渡されたドメイン名`SSL/TLS` → カスタマイズされたホスト名バインディングCNAMEドメイン名の後に直接アクセスするとエラーが報告されます`error code: 522`

このとき、以下に示すように、HTTP ルーティング → ワーカー ルーティングを使用してルートをバインドする必要があります。

<img alt="" src="https://p.3ti.site/1719625477.avif">
<img alt="" src="https://p.3ti.site/1719625385.avif">

