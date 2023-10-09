# I18N.SITE · ʻŌlelo Me Ka Palena ʻole<img Src="//i-01.eu.org/i18n/logo.svg" Style="float:right;width:42px;margin-Top:6px">

ʻO I18N.SITE, kahi mea hoʻoheheʻe kahua paʻa ʻōlelo he nui, hiki ke unuhi ʻakomi iā Markdown i loko [o hoʻokahi haneli mau ʻōlelo like ʻole](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Makemake paha kekahi poʻe e nīnau, i kēia manawa ua loaʻa i nā mākaʻikaʻi nā hana unuhi i kūkulu ʻia, ʻaʻole pono anei ka hoʻolaha ʻana i ka pūnaewele?

Makemake au e ʻōlelo **ma ka hoʻolaha ʻana i ka pūnaewele holoʻokoʻa e hiki ai iā mākou ke kākoʻo i nā ʻōlelo he nui i loko o ka pūnaewele i ka ʻimi kikokikona piha a me ka ʻenekini huli** .

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
