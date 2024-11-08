# Template Ng Blog

`i18n/conf.yml` sa `use: Blog` ay nangangahulugan ng paggamit ng template ng blog para sa pag-render.

Ang `markdown` file ng blog post ay kailangang i-configure ang meta information.

Ang impormasyon ng meta ay dapat nasa simula ng file, nagsisimula sa `---` at nagtatapos sa `---` Ang format ng impormasyon sa pagsasaayos sa gitna ay `YAML` .

Ang configuration ng isang demo file ay ang mga sumusunod:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` ay nagpapahiwatig ng buod ng nilalaman, na ipapakita sa pahina ng index ng blog.

Sa tulong ng `YMAL` ' | `Syntax, maaari kang magsulat ng mga buod ng maraming linya.

Ang configuration ng directory tree sa kanang bahagi ng blog ay `TOC` file din (tingnan ang nakaraang kabanata Ang mga artikulo lamang na nakalista sa `TOC` ang lalabas sa index ng homepage ng blog).

Hindi lalabas sa homepage ng blog ang mga artikulong hindi naglalaman ng meta information, ngunit maaaring lumabas sa puno ng direktoryo sa kanan.

## Impormasyon Ng May-Akda

Maaaring isulat ang impormasyon ng may-akda sa meta information ng artikulo, gaya ng:

```yml
author: marlowe
```

Pagkatapos ay i-edit `author.yml` sa direktoryo ng pinagmulang wika at magdagdag ng impormasyon ng may-akda, tulad ng :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` at `title` ay opsyonal lahat. Kung hindi nakatakda `name` , ang key name (dito `marlowe` ) ay gagamitin bilang `name` .

Tingnan ang demo project [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) at [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Naka-Pin Na Artikulo

Kung kailangan mong i-pin ang artikulo sa itaas, mangyaring patakbuhin `i18n.site` at i-edit ang `xxx.yml` file sa ibaba `.i18n/data/blog` , at baguhin ang timestamp sa isang negatibong numero (maramihang negatibong numero ang pag-uuri-uriin mula sa pinakamalaki hanggang sa pinakamaliit).