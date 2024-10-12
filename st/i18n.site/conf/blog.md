# Setšoantšo Sa Blog

`i18n/conf.yml` ho `use: Blog` e bolela ho sebelisa template ea blog bakeng sa ho fana.

Faele ea `markdown` ea poso ea blog e hloka ho hlophisa tlhahisoleseling ea meta.

Boitsebiso ba meta bo tlameha ho ba qalong ea faele, ho qala ka `---` le ho qetella ka `---` Sebopeho sa boitsebiso ba tlhophiso bohareng ke `YAML` .

Tlhophiso ea faele ea demo e tjena:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` e bonts'a kakaretso ea litaba, e tla hlahisoa leqepheng la index ea blog.

Ka thuso ea `YMAL` '|`Syntax, o ka ngola kakaretso ea mela e mengata.

Tlhophiso ea sefate sa directory ka lehlakoreng le letona la blog le tsona ke lifaele tsa `TOC` (sheba khaolo e fetileng) Ke lingoloa tse thathamisitsoeng ho `TOC` feela tse tla hlaha ho index ea leqephe la lapeng.

Lingoliloeng tse se nang lintlha tsa meta li ke ke tsa hlaha leqepheng la lehae la blog, empa li ka hlaha sefateng sa directory se ka ho le letona.

Haeba u hloka ho penya sengoloa holimo, ka kopo matha `i18n.site` me u fetole lifaele `xxx.yml` tse ka tlase ho `.i18n/data/blog` , 'me u fetole setempe sa nako ho nomoro e mpe (linomoro tse ngata tse mpe li tla hlophisoa ho tloha ho tse nyane ho isa ho tse kholo ka boleng bo felletseng).