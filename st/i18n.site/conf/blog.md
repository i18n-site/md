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

Ka thuso ea `YMAL` ' | `Syntax, o ka ngola kakaretso ea mela e mengata.

Tlhophiso ea sefate sa directory ka lehlakoreng le letona la blog le tsona ke lifaele tsa `TOC` (sheba khaolo e fetileng) Ke lingoloa tse thathamisitsoeng ho `TOC` feela tse tla hlaha ho index ea leqephe la lapeng.

Lingoliloeng tse se nang lintlha tsa meta li ke ke tsa hlaha leqepheng la lehae la blog, empa li ka hlaha sefateng sa directory se ka ho le letona.

## Litaba Tsa Mongoli

Lintlha tsa sengoli li ka ngoloa ho lintlha tsa meta tsa sengoloa, joalo ka:

```yml
author: marlowe
```

Ebe u hlophisa `author.yml` bukeng ea puo ea mohloli 'me u kenye lintlha tsa mongoli, joalo ka :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` le `title` kaofela ke boikhethelo. Haeba `name` e sa behoa, lebitso la senotlolo (mona `marlowe` ) le tla sebelisoa e le `name` .

Sheba projeke ea demo [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) le [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Sengoloa Se Hatisitsoeng

Haeba u hloka ho penya sengoloa holimo, ka kopo matha `i18n.site` me u fetole lifaele `xxx.yml` ka tlase ho `.i18n/data/blog` , 'me u fetole setempe sa nako ho nomoro e nyahamisang (linomoro tse ngata tse mpe li tla hlophisoa ho tloha ho tse kholo ho isa ho tse nyane).