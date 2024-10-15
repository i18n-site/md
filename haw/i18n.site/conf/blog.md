# Laʻana Moʻomanaʻo Moʻomanaʻo

ʻO `i18n/conf.yml` o `use: Blog` ʻo ia ka hoʻohana ʻana i ka template blog no ka hāʻawi ʻana.

Pono ka faila `markdown` o ka pou blog e hoʻonohonoho i ka ʻike meta.

Pono ka ʻike meta ma ka hoʻomaka ʻana o ka faila, e hoʻomaka me `---` a hoʻopau me `---` ʻO ke ʻano o ka ʻike hoʻonohonoho i waena o `YAML` .

Hoʻonohonoho ʻia kahi faila demo penei:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` i ka hōʻuluʻulu manaʻo, e hōʻike ʻia ma ka ʻaoʻao kuhikuhi blog.

Me ke kōkua o `YMAL` ' | 'Syntax, hiki iā ʻoe ke kākau i nā hōʻuluʻulu laina lehulehu.

ʻO ka hoʻonohonoho ʻana o ka lāʻau kuhikuhi ma ka ʻaoʻao ʻākau o ka moʻomanaʻo he `TOC` mau faila (e ʻike i ka mokuna i hala ʻO nā ʻatikala wale nō i helu ʻia ma `TOC` e ʻike ʻia ma ka ʻatikala homepage.

ʻAʻole ʻike ʻia nā ʻatikala i loaʻa ʻole ka ʻike meta ma ka ʻaoʻao home blog, akā hiki ke ʻike ʻia ma ka lāʻau kuhikuhi ma ka ʻākau.

## ʻIke Mea Kākau

Hiki ke kākau ʻia ka ʻike mea kākau ma ka ʻike-meta o ka ʻatikala, e like me:

```yml
author: marlowe
```

A laila hoʻoponopono i `author.yml` i ka papa kuhikuhi ʻōlelo kumu a hoʻohui i ka ʻike mea kākau, e like me :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` a me `title` nā mea koho. Inā ʻaʻole i hoʻonohonoho ʻia `name` , e hoʻohana ʻia ka inoa kī (ma ʻaneʻi `marlowe` ) e like me `name` .

E nānā i ka papahana demo [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) a me [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## ʻatikala Paʻa

Inā pono ʻoe e paʻi i ka ʻatikala ma luna, e ʻoluʻolu e holo i `i18n.site` a hoʻoponopono i nā faila `xxx.yml` ma lalo o `.i18n/data/blog` , a hoʻololi i ka timestamp i kahi helu ʻino (e hoʻokaʻawale ʻia nā helu ʻino he nui mai ka nui a ka liʻiliʻi).