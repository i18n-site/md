
## CNAME バインドされたドメイン名

Cloudflare Workerのドメイン名は、`SSL/TLS`経由でカスタムホスト名にバインドされ、CNAMEドメイン名が設定された後、直接アクセスすると、エラーコード`522`が表示されます

この場合、HTTPルーティング → ワーカールーティングを使用して、新しいルートをバインドする必要があります。以下の図に示されるようにです

![](https://p.3ti.site/1719625477.avif)
![](https://p.3ti.site/1719625385.avif)