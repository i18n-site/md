# De Eme Eye Nàzãe

## windows Tsɔ git bash Ɖo Wò Kɔmpiuta Dzi Gbã

windows [`git bash`](https://git-scm.com/download/win)

Du dɔwɔwɔ siwo kplɔe ɖo le `git bash`

## Ɖoe Anyi

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Trɔ Asi Le Gbegɔmeɖeɖe Ƒe Dzesi Ŋu

Visit [i18n.site/token](//i18n.site/token) Zi edzi be nàwɔ token ƒe kɔpi

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Wɔ `~/.config/i18n.site.yml` tsɔ nyatakaka siwo wogbugbɔ ŋlɔ la de eme, emenyawo le ale:

```
token: YOUR_API_TOKEN
```

Tsɔ kpe ɖe eŋu la, ele [i18n.site/payBill](//i18n.site/payBill) nàbla gaxɔgbalẽvi hena fexexe (mehiã be nàgbugbɔ ga axɔ o, nyatakakadzraɖoƒea aɖe fe siwo woxena la le eɖokui si le alesi wozãe nu, [kpɔ nyatakakadzraɖoƒea hena asixɔxɔ](/#price) ).

## Zã

### Demo Dɔa Wɔwɔ

Taflatse kpɔ demo project [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) be nàsrɔ̃ gbegɔmeɖeɖe ƒe ɖoɖowɔwɔ `i18`

Zãla siwo le China ate ŋu awɔ clone [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Ne èwɔ cloning vɔ la, ge ɖe directory la me eye nàƒu du `i18`

### Nyatakakadzraɖoƒe Ƒe Dɔwɔɖoɖo

Template warehouse directory ƒe ɖoɖo le ale

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

`en`

### Du Gbegɔmeɖeɖe

Ge ɖe agbalẽdzraɖoƒea eye nàƒu `i18` be nàɖe egɔme.

### Tsɔ Faɛlwo Kpe Ɖe Nudzraɖoƒea Ŋu

Tsɔ kpe ɖe gbegɔmeɖeɖe ŋu la, ɖoɖowɔɖia awɔ faɛl siwo gbɔna hã, taflatse tsɔ wo kpe ɖe nudzraɖoƒea ŋu.

```
.i18n/hash
.i18n/cache/.gitignore
```

Le wo dome la, nya : le `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Esia fia be nàŋe aɖaba aƒu faɛl `.i18n/cache/.gitignore` katã le `.i18n/cache/`

Ne wò version control software menye `git`

## Ðoɖowɔɖi Ƒe Faɛl

`.i18n/conf.yml` Enye `i18` fli gɔmeɖeɖe dɔwɔnu ƒe ɖoɖowɔɖi faɛl

Emenyawo le ale:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Gbegɔmeɖeɖe Ƒe Gbegbɔgblɔ &

Le ɖoɖowɔɖi ƒe faɛl me la, `fromTo`

`en` `zh ja ko de fr`

Gbegbɔgblɔ ƒe kɔpi kpɔ [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Le kpɔɖeŋu me, ne èdi be yeaɖe Chinagbe gɔme ɖe Eŋlisigbe me la, gbugbɔ ŋlɔ fli sia `zh: en`

Ne èdi be yeaɖe egɔme ɖe gbegbɔgblɔ siwo katã wodo alɔe me la, taflatse gblẽe ɖi ƒuƒlu le `:` Le kpɔɖeŋu me

```
i18n:
  fromTo:
    en:
```

### Ŋe Aɖaba Ƒu Faɛl Dzi

Le gɔmedzedzea me la, woaɖe faɛl siwo katã dze egɔme kple `.md` kple `.yml` le gbegbɔgblɔ dzɔtsoƒe ƒe nuŋlɔɖi me gɔme.

Ne èdi be yeaŋe aɖaba aƒu faɛl aɖewo dzi eye màɖe wo gɔme o (abe nuŋɔŋlɔ siwo womewu enu haɖe o ene) la, àte ŋu azã `ignore`

Ezãa nyagɔmeɖegbalẽ [globset](https://docs.rs/globset/latest/globset/#syntax) sɔ kple `.gitignore` `ignore`

Le kpɔɖeŋu me, le ɖoɖowɔɖi ƒe faɛl si le etame me `_* ` fia be womaɖe faɛl siwo dze egɔme kple `_` gɔme o.

## Gbegɔmeɖeɖe Ŋuti Sewo

### Mele Be Gbegɔmeɖeɖe Ŋuti Nuŋlɔlawo Natsɔ Fliwo Akpe Ɖe Wo Ŋu Alo Atutu Wo O

Woate ŋu atrɔ asi le gɔmeɖeɖea ŋu. Trɔ asi le nuŋɔŋlɔ gbãtɔa ŋu eye nàgaɖe egɔme kple mɔ̃ ake, womaŋlɔ asitɔtrɔ siwo wowɔ kple asi le gɔmeɖeɖea ŋu o (ne wometrɔ asi le nuŋɔŋlɔ gbãtɔa ƒe memama sia ŋu o).

Gake taflatse de dzesii be ele be gɔmeɖeɖea ƒe fliwo kple nuŋɔŋlɔ gbãtɔa nasɔ ɖeka kple ɖeka. Eyae nye be mègatsɔ fliwo akpe ɖe wo ŋu alo atutu wo ne èle gbegɔmeɖeɖea ƒom ƒu o. Ne menye nenema o la, ahe tɔtɔ vɛ le gbegɔmeɖeɖe ɖɔɖɔɖo ƒe cache la me.

Ne nane gblẽ la, taflatse kpɔ [FAQ hena egbɔkpɔnuwo.](/i18/qa#H1)

### `YAML` Ɖe Gbe Gɔme

Sedede ƒe dɔwɔnu akpɔ faɛl siwo katã wu enu kple `.yml`

* De dzesii be ele be faɛl ŋkɔ ƒe megbenyawo nanye `.yml` (menye `.yaml` o ).

Dɔwɔnua ɖea nyagɔmeɖegbalẽ ƒe asixɔxɔwo gɔme le `.yml`

Le kpɔɖeŋu me `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

woaɖe egɔme be `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Woate ŋu atrɔ asi le `YAML`

Àte ŋu anɔ te ɖe `YAML`

## Zãzã Deŋgɔ

### Gbegɔmeɖeɖe Ƒe Nyatakakadzraɖoƒe Sue

Zi alesi nèwɔ `.i18n/conf.yml` (mehiã be nàdze egɔme tso demo project template dzi ɣesiaɣi o), `i18` awɔ dɔ nyuie.

Sedede ƒe dɔwɔnu akpɔ `.i18n/conf.yml`

Dɔ siwo zãa [monorepo](//monorepo.tools)

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Custom Installation Directory

Woaɖoe ɖe `/usr/local/bin`

Ne mɔɖeɖe mele esi be wòaŋlɔ `/usr/local/bin` la, woaɖoe ɖe `~/.bin` .

Set environment `TO` Àte ŋu aɖe installation directory gɔme, le kpɔɖeŋu me :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
