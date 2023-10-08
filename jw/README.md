# I18N.SITE · Dokumen Tanpa Wates<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, generator situs statis sing ndhukung terjemahan otomatis menyang [133 basa](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

![](https://i-01.eu.org/2023/09/O0Tee_m.webp)

Sawetara wong bisa uga pengin takon, saiki browser duwe fungsi terjemahan sing dibangun, apa ora perlu kanggo internasionalisasi situs web?

Aku pengin ngomong yen **mung kanthi internasionalisasi kabeh situs, kita bisa ndhukung telusuran teks lengkap lan optimasi mesin telusur multi-lingual ing situs** .

## Tutorial

## Pengenalan Fungsi

### Simpen Format Markdown

### Ngowahi Terjemahan

Sawise ngowahi terjemahan, sampeyan kudu mbukak maneh `./i18n.sh` kanggo nganyari cache.

### Cathetan Terjemahan

Komentar terjemahan kudu nuduhake basa sawise \```, kayata ` ```rust` .

Saiki ndhukung terjemahan komentar kanggo teyeng, c, cpp, java, js, kopi, python, lan bash.

Sunting [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) kanggo nambah dhukungan terjemahan kanggo komentar ing basa liyane.

### Konfigurasi Proxy

Nyetel variabel lingkungan ing ngisor iki ngidini telpon Google Translate API bisa liwat proxy.

```bash
export https_proxy=http://127.0.0.1:7890


```

### Embedding Variabel

```
test: 测试变量<br 0>嵌入
```

### Kosong Cache

```bash
rm -rf .i18n/.cache


```
