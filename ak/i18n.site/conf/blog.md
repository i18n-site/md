# Blog Nsusuwso

`i18n/conf.yml` wɔ `use: Blog` mu kyerɛ sɛ wode blog template no bedi dwuma de ayɛ nkyerɛase.

`markdown` fael a ɛwɔ blog post no mu no hia sɛ ɛhyehyɛ meta nsɛm.

Ɛsɛ sɛ meta nsɛm wɔ fael no mfiase, efi ase `---` na ɛba awiei wɔ `---` Nsiesiei ho nsɛm a ɛwɔ mfinimfini no kwan a wɔfa so yɛ no yɛ `YAML` .

Wɔahyehyɛ demo fael bi sɛnea edidi so yi:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` kyerɛ nsɛm a ɛwɔ mu no mu nsɛm tiawa, a wɔbɛda no adi wɔ blog index krataafa no so.

Ɛnam mmoa a `YMAL` ' . | `Syntax, wobɛtumi akyerɛw nsɛm a wɔaboaboa ano a ɛwɔ nkyerɛwde pii.

Nsiesiei a ɛwɔ directory dua a ɛwɔ blog no nifa so no nso yɛ fael `TOC` (hwɛ ti a atwam no Nsɛm a wɔakyerɛw wɔ `TOC` mu nkutoo na ɛbɛpue wɔ blog homepage index no mu.

Nsɛm a meta nsɛm nni mu no renpue wɔ blog homepage no so, nanso ebetumi apue wɔ directory dua a ɛwɔ nifa so no mu.

## Ɔkyerɛwfo Ho Nsɛm

Wobetumi akyerɛw ɔkyerɛwfo ho nsɛm wɔ asɛm no meta-nsɛm mu, te sɛ:

```yml
author: marlowe
```

Afei sesa `author.yml` wɔ kasa fibea kyerɛwtohɔ no mu na fa ɔkyerɛwfo ho nsɛm ka ho, te sɛ :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` ne `title` nyinaa yɛ nea wobetumi apaw. Sɛ wɔanhyehyɛ `name` a, wɔde safoa din (ha `marlowe` ) bedi dwuma sɛ `name` .

Hwɛ demo project [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) ne [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Pinned Asɛm No

Sɛ ɛhia sɛ wode asɛm no pin kɔ soro a, yɛsrɛ wo tu mmirika `i18n.site` na sesa fael `xxx.yml` a ɛwɔ aseɛ ha `.i18n/data/blog` , na sesa berɛ nsɔano no kɔ nɔma a ɛnyɛ papa (wɔbɛhyehyɛ nɔma bɔne pii afiri kɛseɛ so akɔ ketewa).