# Blog Template

`i18n/conf.yml` kunze `use: Blog` zvinoreva kushandisa blog template yekushandura.

Iyo `markdown` faira yeblog post inoda kugadzirisa meta ruzivo.

Meta ruzivo runofanira kunge rwuri pakutanga kwefaira, kutanga `---` uye kupera ne `---` Chimiro chemashoko ekugadzirisa ari pakati ndeye `YAML` .

Kugadziriswa kwedemo faira kunotevera:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` inoratidza pfupiso yemukati, iyo icharatidzwa pane blog index peji.

Nerubatsiro `YMAL` ' | `Syntax, unogona kunyora zvipfupiso zvemitsara yakawanda.

Kugadziriswa kwemuti wedhairekitori kudivi rekurudyi rebhurogi zvakare `TOC` mafaera (ona chitsauko chakapfuura chete zvinyorwa zvakanyorwa `TOC` ndizvo zvinozoonekwa mubhurogu peji rekutanga).

Zvinyorwa zvisina ruzivo rwemeta hazvizoonekwe pablog homepage, asi zvinogona kuoneka mudhairekitori muti kurudyi.

## Munyori Ruzivo

Ruzivo rwemunyori runogona kunyorwa mune meta ruzivo rwechinyorwa, senge:

```yml
author: marlowe
```

Wobva wagadzirisa `author.yml` mudhairekitori remutauro uye wedzera ruzivo rwemunyori, senge :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` uye `title` zvose zvingasarudzwa. Kana `name` isina kuiswa, zita rinokosha (pano `marlowe` ) richashandiswa `name` .

Ona demo purojekiti [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) uye [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Pinned Article

Kana uchida kupinza chinyorwa kumusoro, ndapota mhanya `i18n.site` wogadzirisa mafaera `xxx.yml` ari pazasi `.i18n/data/blog` , uye shandura chitambi chenguva kuita nhamba isina kunaka (nhamba dzakawanda dzisina kunaka dzicharongwa kubva pahukuru kusvika padiki).