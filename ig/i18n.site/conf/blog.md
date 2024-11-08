# Ndebiri Blọọgụ

`i18n/conf.yml` n'ime `use: Blog` pụtara iji template blọgụ maka nsụgharị.

Faịlụ `markdown` nke blọgụ blọgụ kwesịrị ịhazi ozi meta.

Ozi Meta ga-adị na mmalite nke faịlụ ahụ, malite na `---` na njedebe na `---` Ụdị ozi nhazi dị n'etiti bụ `YAML` .

Nhazi faịlụ ngosi bụ nke a:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` na-egosi nchịkọta ọdịnaya, nke a ga-egosipụta na ibe ndeksi blọgụ.

Site n'enyemaka nke `YMAL` ' | 'Syntax, ị nwere ike dee nchịkọta ọtụtụ ahịrị.

Nhazi nke osisi ndekọ aha n'akụkụ aka nri nke blọọgụ bụkwa faịlụ `TOC` (lee isiakwụkwọ gara aga `TOC` .

Edemede na-enweghị ozi meta agaghị apụta na ibe blọgụ, mana nwere ike ịpụta na osisi ndekọ n'aka nri.

## Ozi Odee

Enwere ike dee ozi ndị odee na ozi meta nke akụkọ ahụ, dịka:

```yml
author: marlowe
```

wee dezie `author.yml` n'ime akwụkwọ ndekọ asụsụ isi wee tinye ozi odee, dịka :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` na `title` niile bụ nhọrọ. Ọ bụrụ na edoghị `name` , a ga-eji aha igodo (ebe a `marlowe` ) dị ka `name` .

Hụ ngosi ngosi [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) na [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Edemede Etinyere

Ọ bụrụ na ịchọrọ itinye akụkọ ahụ n'elu, biko gbaa `i18n.site` ma dezie faịlụ `xxx.yml` dị n'okpuru `.i18n/data/blog` , ma gbanwee timestamp ka ọ bụrụ nọmba na-adịghị mma (ọtụtụ ọnụọgụ na-adịghị mma ga-edozi site na nnukwu ruo nke nta).