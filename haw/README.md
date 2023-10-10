<h1 style="justify-content:space-between">3Ti.Site · Think No Borders<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

Hiki iā 3Ti.Site, kahi mea hoʻoheheʻe kahua paʻa ʻōlelo he nui, ke unuhi ʻakomi iā Markdown i loko [o hoʻokahi haneli mau ʻōlelo like ʻole](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Makemake paha kekahi poʻe e nīnau, i kēia manawa ua loaʻa i nā mākaʻikaʻi nā hana unuhi i kūkulu ʻia, ʻaʻole pono anei ka hoʻolaha ʻana i ka pūnaewele?

Makemake au e ʻōlelo **ma ka hoʻolaha ʻana i ka pūnaewele holoʻokoʻa e hiki ai iā mākou ke kākoʻo i nā ʻōlelo he nui i loko o ka pūnaewele i ka ʻimi kikokikona piha a me ka ʻenekini huli** .

## Kaʻina

"Baibala·Genesis":

> I ka wā kahiko, i ka wā hoʻokahi ka ʻōlelo, hānau haʻaheo ke kanaka. Ua ʻimi lākou e kūkulu i hale kiʻekiʻe, he hale kiaʻi e pili ana i ka lani.
>
> Akā naʻe, ʻaʻole i ʻoluʻolu ke Akua i ko lākou hoʻokiʻekiʻe, ua hoʻopuehu nā kānaka a puni ka honua, me ka hoʻomaopopo ʻole i ko lākou mau alelo.
>
> Mai ia manawa mai, paʻakikī nā kānaka e kamaʻilio, ua ala mai nā hakakā me ka pau ʻole, ʻaʻole i ʻike hou ka honua i kahi hale kiaʻi i hiki i ka lewa.

ʻO ka moʻolelo moʻokalaleo ʻepekema ʻo &quot;Three-Body&quot; (Chinese pronunciation: `3Ti` ) fictionalizes a alien civilization e kamaʻilio ana ma o nā hawewe electromagnetic, ʻaʻohe mea pale ʻōlelo, a ua holomua ʻo ka ʻenehana.

Ke lana nei ko'u manao, me ke kokua ana mai o keia mea paahana, e like auanei na kanaka o ka honua me he mau kanaka kino ekolu, aole e kaohiia ka launa ana ma ka olelo, a e hui hou na kanaka a pau.

## Aʻoaʻo

## Hoʻolauna Hana

### E Mālama I Ka Hōʻailona Markdown

### Hoʻololi I Ka Unuhi

Ma hope o ka hoʻololi ʻana i ka unuhi, pono ʻoe e holo hou i `./i18n.sh` e hoʻohou i ka huna huna.

### Nā Memo Unuhi

Pono nā manaʻo unuhi e hōʻike i ka ʻōlelo ma hope o \```, e like me ` ```rust` .

Kākoʻo ia i ka unuhi manaʻo no ka rust, c, cpp, java, js, coffee, python, a me bash.

Hoʻoponopono i [ka tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) e hoʻohui i ke kākoʻo unuhi no nā manaʻo ma nā ʻōlelo ʻē aʻe.

### E Hoʻonohonoho I Ka Proxy

ʻO ka hoʻonohonoho ʻana i nā mea hoʻololi kaiapuni e hiki ai i nā kelepona Unuhi Google ke hele ma o ka mea koho.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Hoʻopili Like ʻole

```
test: 测试变量<br 0>嵌入
```

### Hoʻokaʻawale I Ka Cache

```bash
rm -rf .i18n/.cache
```
