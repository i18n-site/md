<h1 style="justify-content:space-between">3Ti.Site · Amuyt’aña Janiwa Fronteras utjkiti<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, walja arunakan sitio estático generador ukax Markdown ukax [patak jila arunakaruw](https://github.com/i18n-site/node/blob/main/lang/src/index.js) jaqukipaspa .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Yaqhip jaqinakax jiskt’asiñ munapxaspaw, jichhax navegadores ukanakax jaqukipañ lurawinakaniwa, ¿janit sitio web ukar internacionalización lurañax wakiskiti?

Nayax sañ muntwa **, taqpach sitio ukar internacionalización ukampikiw walja arunakan sitio ukan taqpach qillqat thaqhañ ukhamarak motor de búsqueda optimización ukar yanapt’sna** .

## Sikunsya

"Biblia·Génesis qillqata".:

> Nayra jaqinakax janiw arunak yaqhachapkänti. Diosan punkupar puriñkamaw alaxpachar puriñ torrenak lurapxäna, ukhamat jaqinakan jachʼañchatäñapataki.
>
> Jaqinakax jupanakan mä tribupawa, pachpa saräwini ukat pachpa kastani sasaw Diosax säna. Mä torre lurañajj mä nayrïr uñachtʼäwikiwa. Jichhajj kuntï munkta uk phoqasmawa, janiw kuna ajjsarañas utjkaniti.
>
> Ukatxa Diosax jutasinx kunayman chiqanakaruw jaqinakar ch’iqiyäna, janiw maynit maynikam amuyañjamäkänti.
>
> Uka tiempot aksarojja, jaqenakajj parltʼasiñatakiw chʼamachasipjjäna, jan tukuskir chʼajjwañanakaw utjäna, ukat akapachajj janiw alajjpachar purir mä torre uñjjjänti.

Novela de ciencia ficción &quot;Kimsa Cuerpo&quot; (chino aruchja: `3Ti` ) ukax mä civilización extranjera ukar uñt'ayi, ukax olas electromagnéticas ukanakampiw aruskipt'i, janiw arut jark'atäkiti, ukatx tecnología tuqitx wali ch'amanchatawa.

Nayax suyt’twa, aka yän yanapt’apampixa, aka uraqin jaqinakax kimsa janchini jaqinakjamaw tukupxani, aruskipt’añax janiw arumpi jark’atäkaniti, ukat taqi jaqinakaw wasitat mayacht’asipxani.

## Yatichäwi

## Función Uñt’ayawi

### Markdown Formato Ukax Utjañapawa

### Jaqukipaña Mayjt’ayaña

Jaqukipäwi mayjt’ayañ tukuyasaxa, `./i18n.sh` wasitat apnaqañaw wakisi, ukhamat caché ukar machaqar tukuyañataki.

### Jaqukipañataki Qillqatanaka

Jaqukipañ amuyunakax \``` qhipa aru uñacht’ayañaw wakisi, kunjamatix ` ```rust` .

Jichhax rust, c, cpp, java, js, café, python, ukat bash ukatakix comentario jaqukipañ yanapt’i.

[tran_md/src/comment.coffee ukar](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) chiqanchañamawa, juk’amp arunakan aruskipäwinakatak jaqukipäw yanapt’äwinak yapxatañataki.

### Proxy Ukar Uñt’ayaña

Aka pacha mayjt’awinak utt’ayañax Google Translate API jawsatanakarux proxy tuqiw sarañapatak jaytawayi.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Variable Embedding Ukax Mä Juk’a Pachanakanwa

```
test: 测试变量<br 0>嵌入
```

### Ch’usa Uka Caché

```bash
rm -rf .i18n/.cache
```
