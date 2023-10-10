<h1 style="justify-content:space-between">3Ti.Site · Think No Borders<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, generator situs statis multi-basa, kanthi otomatis bisa nerjemahake Markdown menyang [luwih saka satus basa sing beda-beda](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Sawetara wong bisa uga pengin takon, saiki browser duwe fungsi terjemahan sing dibangun, apa ora perlu kanggo internasionalisasi situs web?

Aku pengin ngomong yen **mung kanthi internasionalisasi kabeh situs, kita bisa ndhukung telusuran teks lengkap lan optimasi mesin telusur multi-lingual ing situs** .

## Urut-Urutan

"Alkitab·Purwaning Dumadi":

> Wong kuna ora mbedakake basa. Dheweke lair kanthi bangga lan pengin mbangun menara sing dhuwur kanthi dhuwur nganti langit.
> <blockquote><p>Gusti Allah ora rena marang angkuhne manungsa, mula kabeh makhluk urip padha buyar ing panggonan-panggonan sing beda-beda, ora bisa ngerti.</p></blockquote>
> <blockquote><p>Wiwit kuwi, manungsa angel komunikasi, perselisihan terus, lan ora ana Menara Babel ing jagad iki.</p></blockquote>

Novel fiksi ilmiah &quot;Tiga Badan&quot; (lafal Basa Cina: `3Ti` ) minangka fiksi peradaban alien sing komunikasi liwat gelombang elektromagnetik, ora ana alangan basa, lan teknologi sing makmur.

Muga-muga kanthi sarana sarana iki, wong-wong ing bumi dadi kaya wong telu, komunikasi ora kendala basa, lan kabeh manungsa bisa manunggal maneh.

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
