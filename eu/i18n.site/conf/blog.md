# Blog Txantiloia

`i18n/conf.yml` `use: Blog` esan nahi du blogaren txantiloia errendatzeko erabiltzea.

Blogaren `markdown` fitxategiak meta informazioa konfiguratu behar du.

Meta-informazioak fitxategiaren hasieran egon behar du, `---` -tik hasi eta `---` z amaituz. Erdian dagoen konfigurazio-informazioaren formatua `YAML` da.

Demo fitxategi baten konfigurazioa honako hau da:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` edukiaren laburpena adierazten du, blogaren aurkibide-orrian bistaratuko dena.

`YMAL` -ren laguntzaz|`Sintaxia, lerro anitzeko laburpenak idatz ditzakezu.

Blogaren eskuineko aldean dagoen direktorio-zuhaitzaren konfigurazioa ere `TOC` fitxategia da (ikus aurreko kapitulua `TOC` zerrendatutako artikuluak soilik agertuko dira blogaren hasierako orrialdearen aurkibidean).

Meta informaziorik ez duten artikuluak ez dira blogaren hasierako orrialdean agertuko, baina eskuineko direktorioen zuhaitzean ager daitezke.

Artikulua goian jarri behar baduzu, mesedez exekutatu `i18n.site` eta editatu `.i18n/data/blog` azpian dauden `xxx.yml` fitxategiak, eta aldatu denbora-zigilua zenbaki negatibo batera (zenbaki negatibo anitz ordenatuko dira balio absolutuan txikitik handira).