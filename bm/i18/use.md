# Aw Bɛ a Sigi Ani Ka Baara Kɛ Ni a Ye

## windows Fɔlɔ Ka git bash Sigi Sen Kan

windows , i ka [nin yɔrɔ digi walasa ka `git bash` telesarse ani k'a bila fɔlɔ](https://git-scm.com/download/win) .

baara nataw kɛ `git bash` kɔnɔ .

## Ka Sigi

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Bamanankan Baarakɛcogo Token Labɛn

Visit [i18n.site/token](//i18n.site/token) Klik ka token kopi kɛ

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

`~/.config/i18n.site.yml` Dabɔ, ka kɔnɔko kopilenw nɔrɔ a kɔnɔ, kɔnɔkow bɛ nin cogo in na:

```
token: YOUR_API_TOKEN
```

Ka [i18n.site/payBill](//i18n.site/payBill) , i ka kan ka karti siri walasa ka wari sara (wari sarali tɛ kɛ, siti in bɛna wari bɔ a yɛrɛma ka kɛɲɛ ni baarakɛcogo ye, [aw ye ɲɛ fɔlɔ lajɛ walasa ka sɔngɔ dɔn](/#price) ).

## K'a Nafa Bɔ a La

### Porozɛ Demokarasi

Aw ye demo poroze lajɛ walasa ka `i18` bamanankan baarakɛcogo dɔn [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Baarakɛlaw minnu bɛ Sinuwa jamana na, olu bɛ se ka clone kɛ [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Clon kɛlen kɔfɛ, i bɛ don ɲɛbilasɛbɛn kɔnɔ ka `i18` boli walasa ka bamanankan baara dafa.

### Annuaire (Daɲɛgafe) Jɔcogo

Jateblaw ka magasin ɲɛbilasɛbɛn jɔcogo bɛ nin cogo in na

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Demo file minnu bamanankanna `en` ɲɛbilasɛbɛn kɔnɔ olu ye misali dɔrɔn de ye wa u bɛ se ka bɔ yen.

### Bamanankan Baarakɛcogo Boli

Aw bɛ don ɲɛbilasɛbɛn kɔnɔ ka `i18` boli walasa ka baara kɛ.

Ka fara bamanankan baarakɛcogo kan, porogaramu bɛna `.i18n/data` foli fana Bɔ, aw k’a Fàra marayɔrɔ kan.

Dosiyɛri kura bamanankan na, `git add .` -falen kura bɛna Bɔ nin ɲɛbilasɛbɛn in kɔnɔ.

## Labɛnni Filen

`.i18n/conf.yml` ye `i18` cikanw bamanankan baarakɛminɛnw labɛncogo dosiye ye

A kɔnɔkow ye nin ye:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Source Language Bamanankan Bamanankan Na &

Labɛnni dosiye kɔnɔ, `fromTo` jukɔrɔla :

`en` ye bɔyɔrɔkan ye, `zh ja ko de fr` ye bamanankan bamanankan laɲinikan ye.

Kanko kode lajɛ [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Misali la, n’i b’a fɛ ka Sinuwakan baara tubabukan na, i ka nin layini `zh: en` sɛbɛn kokura.

N’i b’a fɛ ka baara kɛ ni kanw bɛɛ ye minnu bɛ dɛmɛ, i ka yɔrɔ lankolon to `:` kɔfɛ. I n'a fo

```
i18n:
  fromTo:
    en:
```

Aw bɛ se ka `fromTo` danfaralenw labɛn ka ɲɛsin subdirectories danfaralenw : Files /

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

Nin labɛncogo-tabali in kɔnɔ, katalogu `blog` bamanankan bamanankan bɔyɔrɔkan ye `zh` ye, katalogu `blog/your_file_name.md` bamanankan bamanankan bɔyɔrɔkan ye `ja` ye.

### Ignorer Filen

O cogo la, dosiye minnu bɛ daminɛ ni `.md` ni `.yml` ye minnu bɛ sɔrɔyɔrɔ kan ɲɛbila kɔnɔ, olu bɛɛ bɛna baara kɛ.

N’i b’a fɛ ka dosiye dɔw jate Minɛ k’u t’u baara (i n’a fɔ sɛbɛnfura dafabaliw), i bɛ Se k’a Labɛn ni `ignore` foro ye.

`ignore` bɛ `.gitignore` kɛ ni [globset](https://docs.rs/globset/latest/globset/#syntax)

Misali la, `_* ` min bɛ sanfɛ-labɛn-dosiyɛri kɔnɔ, o kɔrɔ ye ko dosiye minnu bɛ daminɛ ni `_` ye, olu tɛna baara kɛ.

## Bamanankan Baarakɛcogo Sariyaw

### Bamanankan Baarakɛcogo Ɲɛnabɔbagaw Man Kan Ka Zana Dɔw Fara U Kan Walima Ka U Bɔ Yen

Bamanankan baarakɛcogo bɛ se ka ladilan. Sɛbɛn fɔlɔ ladilan ani k’a baara ni masin ye tugun, bololabaara ladilan minnu kɛra bamanankan na, olu tɛna sɛbɛn ka tɛmɛ (ni sɛbɛn fɔlɔ dakun in ma sɛmɛntiya).

Nka aw k’a kɔlɔsi ko bamanankan bayɛlɛmani tigɛli ni sɛbɛn fɔlɔw ka kan ka bɛn kelen ni kelen ma. O kɔrɔ ye ko i kana zana fara ɲɔgɔn kan walima k’u bɔ yen ni i bɛ bamanankan bamanankan na. N’o tɛ, a bɛna ɲagami don bamanankan bamanankan-falen-falen-yɔrɔ la.

Ni fɛn dɔ ma ɲɛ, aw bɛ [Ɲininkaliw jaabiw lajɛ walasa ka furaw sɔrɔ.](/i18/qa#H1)

### `YAML` Bamanankan Bamanankan Na

Cikanw baarakɛminɛn bɛna filenw bɛɛ Sɔrɔ minnu bɛ laban ni `.yml` ye bɔyɔrɔkan filenw ɲɛbilasɛbɛn kɔnɔ k’u baara.

* A kɔlɔsi ko filen tɔgɔ kɔfɛta ka kan ka kɛ `.yml` ye (a tɛ kɛ `.yaml` ).

Baarakɛminɛn in bɛ daɲɛgafe nafaw baara dɔrɔn `.yml` kɔnɔ, daɲɛgafe kilisi tɛ.

Misali la `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

bɛna baara kɛ ni `i18n/zh/i18n.yml` ye

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML` bamanankan bamanankan fana bɛ Se ka Lakodɔn ni bolo ye (nka i kana kilisi walima zana dɔw Fàra walima k’u Bɔ bamanankan na).

Ka da `YAML` bamanankan baarakɛcogo kan, i bɛ se ka diɲɛ kɔnɔ fɛɛrɛw jɔ nɔgɔya la porogaramukan suguya caman na.

## Baarakɛcogo Kɔrɔlen

### Bamanankan Baarabolodalen

Ni `.i18n/conf.yml` dabɔra (wajibi tɛ ka daminɛ demo poroze template la waati bɛɛ), `i18` bɛna baara kɛ ka ɲɛ.

Cikanw baarakɛminɛn bɛna `.i18n/conf.yml` labɛncogo Sɔrɔ ɲɛbilasɛbɛn fitininw bɛɛ kɔnɔ k’u baara.

Porozɛ minnu bɛ baara kɛ ni [monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### Custom Installation Directory (Daɲɛw Sigicogo Ɲɛfɔli Sɛbɛn) Min Bɛ Kɛ Ka Kɛɲɛ Ni Mɔgɔw Sago Ye

A bɛna sigi `/usr/local/bin` la ka kɛɲɛ ni a daminɛ ye.

ni `/usr/local/bin` ma sɛbɛnni yamaruya sɔrɔ a bɛ sigi `~/.bin` kan .

Setting environment variable `TO` bɛ se ka installation directory ɲɛfɔ, misali la :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```