# Aw Bɛ a Sigi Ani Ka Baara Kɛ Ni a Ye

## windows Bɛ Fɔlɔ Ka git bash Sigi Sen Kan

windows , aw bɛ se [ka digi yan walasa ka telesarse ani k'a bila fɔlɔ `git bash`](https://git-scm.com/download/win)

Baara nataw boli san `git bash`

## Ka Sigi

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Bamanankan Baarakɛcogo Token Labɛn

Visit [i18n.site/token](//i18n.site/token) Klik ka token kopi kɛ

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Da `~/.config/i18n.site.yml` ka kopi kɛlenw nɔrɔ a kɔnɔ, kɔnɔkow bɛ nin cogo la:

```
token: YOUR_API_TOKEN
```

Ka fara o kan, i ka kan [i18n.site/payBill](//i18n.site/payBill) karti siri walasa ka wari sara (wari sarali man kan ka kɛ, site web bɛna wari bɔ a yɛrɛma ka kɛɲɛ ni baarakɛcogo ye, [a’ ye ɲɛ fɔlɔ lajɛ walasa ka sɔngɔ dɔn](/#price) ).

## K'a Nafa Bɔ a La

### Porozɛ Demokarasi

aw `i18` demo porozɛ lajɛ walasa ka bamanankan baarakɛcogo dɔn [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18)

Baarakɛlaw minnu bɛ Sinuwa jamana na, olu bɛ se ka clone kɛ [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Clon kɛlen kɔfɛ, i ka don ɲɛbilasɛbɛn kɔnɔ ka `i18` walasa ka bamanankan baara dafa.

### Annuaire (Daɲɛgafew) Sigicogo

Jateblaw ka magasin ɲɛbilasɛbɛn jɔcogo bɛ nin cogo in na

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en`

### Bamanankan Baarakɛcogo Boli

Aw bɛ don ɲɛbilasɛbɛn kɔnɔ ka boli ka baara kɛ ni bamanankan ye `i18`

### Aw Bɛ Dosiyew Fara a Marayɔrɔ Kan

Ka fara bamanankan baara kan, porogaramu bɛna nin dosiye ninnu fana Bɔ, aw k’u Fàra o marayɔrɔ kan.

```
.i18n/hash
.i18n/cache/.gitignore
```

Olu cɛma : `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

O kɔrɔ ye `.i18n/cache/.gitignore` `.i18n/cache/`

Ni i ka version control software tɛ `git`

## Labɛnni Filen

`.i18n/conf.yml` `i18`

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

Labɛnni dosiye kɔnɔ, `fromTo`

`en` `zh ja ko de fr`

Kanko kode lajɛ [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Misali la, n’i b’a fɛ ka Sinuwakan baara tubabukan na, i ka nin layini in sɛbɛn kokura `zh: en`

N’i ​​b’a fɛ ka baara kɛ ni kanw bɛɛ ye minnu bɛ dɛmɛ, i ka yɔrɔ lankolon to `:` I n'a fo

```
i18n:
  fromTo:
    en:
```

### Ignorer Filen

Ka da a kan, dosiye minnu bɛ daminɛ ni `.md` ani `.yml` minnu bɛ sɔrɔyɔrɔ kan ɲɛbila kɔnɔ, olu bɛɛ bɛna baara kɛ.

N’i ​​b’a fɛ ka dosiye dɔw jate Minɛ k’a sɔrɔ i t’u baara (i n’a fɔ sɛbɛnfura minnu ma ban), i bɛ Se ka baara Kɛ ni `ignore`

A bɛ baara kɛ ni sintasi ye min ni `.gitignore` bɛ tali kɛ ɲɔgɔn [globset](https://docs.rs/globset/latest/globset/#syntax) `ignore`

Misali la, sanfɛ-labɛn-dosiyɛri kɔnɔ `_* ` o kɔrɔ ye ko dosiye minnu bɛ daminɛ ni `_` ye, olu tɛna baara kɛ.

## Bamanankan Baarakɛcogo Sariyaw

### Bamanankan Baarakɛcogo Ɲɛnabɔbagaw Man Kan Ka Zana Dɔw Fara U Kan Walima Ka U Bɔ Yen

Bamanankan baarakɛcogo bɛ se ka ladilan. Sɛbɛn fɔlɔ ladilan ani k’a baara ni masin ye tugun, bololabaara ladilan minnu kɛra bamanankan na, olu tɛna sɛbɛn ka tɛmɛ (ni sɛbɛn fɔlɔ dakun in ma sɛmɛntiya).

Nka aw k’a kɔlɔsi ko bayɛlɛmani sinsinniw ni sɛbɛn fɔlɔw ka kan ka bɛn kelen ni kelen ma. O kɔrɔ ye ko i kana zana fara ɲɔgɔn kan walima k’u bɔ yen ni i bɛ baara kɛ ni bamanankan baarakɛcogo ye. N’o tɛ, a bɛna ɲagami don bamanankan bamanankan-falen-falen-sɛbɛn kɔnɔ.

Ni fɛn dɔ ma ɲɛ, aw bɛ [Ɲininkaliw jaabiw lajɛ walasa ka furaw sɔrɔ.](/i18/qa#H1)

### `YAML` Ka Bayɛlɛma

Cikanw baarakɛminɛn bɛna dosiyew bɛɛ sɔrɔ minnu bɛ laban ni `.yml`

* A kɔlɔsi ko dosiye tɔgɔ kɔfɛta ka kan ka kɛ `.yml` (a tɛ `.yaml` ).

Baarakɛminɛn in bɛ daɲɛgafe nafaw baara dɔrɔn `.yml`

I n'a fo `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

bɛna bamanankan na i n' a fɔ `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

`YAML`

Ka da `YAML`

## Baarakɛcogo Kɔrɔlen

### Bamanankan Baarabolodalen

Ni `i18` ye `.i18n/conf.yml`

Cikanw ka baarakɛminɛn bɛna `.i18n/conf.yml`

Porozɛ minnu bɛ baara kɛ ni [monorepo](//monorepo.tools)

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Custom Installation Directory (Daɲɛw Sigicogo Ɲɛfɔli Sɛbɛn) Min Bɛ Kɛ Ka Kɛɲɛ Ni Mɔgɔw Sago Ye

A bɛna sigi sen kan ka kɛɲɛ ni `/usr/local/bin`

`/usr/local/bin` sɛbɛnni yamaruya tɛ a bɛ sigi `~/.bin` .

Set environment `TO` Aw bɛ se ka installation directory ɲɛfɔ, misali la :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
