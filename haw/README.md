<h1 style="justify-content:space-between">3Ti.Site · Noʻonoʻo me ka palena ʻole<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

Hiki i ka 3Ti.Site, kahi mea hoʻokumu pūnaewele paʻa, ke unuhi &#39;akomi iā Markdown i loko [o hoʻokahi haneli mau ʻōlelo like ʻole](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Nīnau paha kekahi poʻe, i kēia manawa ua loaʻa i nā mākaʻikaʻi nā hana unuhi i loko, ʻaʻole pono anei ka hoʻolaha ʻana i ka pūnaewele?

Makemake au e ʻōlelo **ma ka hoʻolaha ʻana i ka pūnaewele holoʻokoʻa e hiki ai iā mākou ke kākoʻo i nā ʻōlelo he nui i loko o ka pūnaewele i ka ʻimi kikokikona piha a me ka ʻenekini huli** .

## Hoʻolauna

Baibala · Genesis :

> I ka wā kahiko, i ka wā i hoʻokahi ai nā ʻōlelo, ua kūkulu ke kanaka i hale kiaʻi a hiki i ka lani, i puka i ke aupuni o ke Akua, e hoʻolaha ana i ka mana o ke kanaka.
>
> Olelo mai ke Akua, "Ua hui na kanaka me he ohana hookahi la, me ke alelo like, a o keia halekiai he olelo mua. Ano, ua hooko lakou i ko lakou makemake, aohe makau hou."
>
> No laila, iho mai ke Akua, hoʻopuehu kanaka i nā kihi like ʻole, hoʻohana i nā ʻōlelo like ʻole.
>
> Mai ia manawa mai, ua lilo ke kamaʻilio kanaka i mea paʻakikī, ʻaʻohe hoʻopaʻapaʻa pau ʻole, ʻaʻohe hale kiaʻi i pā i ka lani.

ʻO ka moʻolelo moʻokalaleo ʻepekema ʻo &quot;Three-Body&quot; (Chinese pronunciation: `3Ti` ) fictionalizes a alien civilization e kamaʻilio ana ma o nā hawewe electromagnetic, ʻaʻohe mea pale ʻōlelo, a ua holomua ʻo ka ʻenehana.

Manaʻo wau e hana i kahi mea hana e hiki ai i nā poʻe o ka honua ke like me nā poʻe kino ʻekolu, e kamaʻilio me ka hoʻopaʻa ʻole ʻia e ka ʻōlelo, a e hui hou i nā kānaka a pau.

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
