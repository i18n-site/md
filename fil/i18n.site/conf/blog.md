# Template Ng Blog

`i18n/conf.yml` sa `use: Blog` ay nangangahulugan ng paggamit ng template ng blog para sa pag-render.

Ang `markdown` file ng blog post ay kailangang i-configure ang meta information.

Ang impormasyon ng meta ay dapat nasa simula ng file, nagsisimula sa `---` at nagtatapos sa `---` Ang format ng impormasyon sa pagsasaayos sa gitna ay `YAML` .

Ang isang demo file ay na-configure tulad ng sumusunod:

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

Sa tulong ng `YMAL` '|`Syntax, maaari kang magsulat ng mga buod ng maraming linya.

Ang configuration ng directory tree sa kanang bahagi ng blog ay `TOC` file din (tingnan ang nakaraang kabanata Ang mga artikulo lamang na nakalista sa `TOC` ang lalabas sa index ng homepage ng blog).

Ang mga artikulong hindi naglalaman ng meta information ay hindi lilitaw sa homepage ng blog, ngunit maaaring lumitaw sa puno ng direktoryo sa kanan.

Kung kailangan mong i-pin ang artikulo sa itaas, mangyaring patakbuhin `i18n.site` at i-edit ang `xxx.yml` file sa ibaba `.i18n/data/blog` , at baguhin ang timestamp sa isang negatibong numero (maramihang negatibong numero ang pag-uuri-uriin mula sa maliit hanggang sa malaki sa ganap na halaga).