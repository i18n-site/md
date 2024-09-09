# De Eme Eye Nàzãe

## windows Tsɔ git bash Ɖo Wò Kɔmpiuta Dzi Gbã

windows System, taflatse [te afisia be nàɖe `git bash` eye nàdae ɖe wò kɔmpiuta dzi](https://git-scm.com/download/win) gbã.

Du dɔwɔwɔ siwo kplɔe ɖo le `git bash` .

## Ɖoe Anyi

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Trɔ Asi Le Gbegɔmeɖeɖe Ƒe Dzesi Ŋu

Visit [i18n.site/token](//i18n.site/token) Zi edzi be nàwɔ token ƒe kɔpi

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Wɔ `~/.config/i18n.site.yml` , tsɔ nyatakaka siwo nèŋlɔ la de eme, emenyawo le ale:

```
token: YOUR_API_TOKEN
```

Tsɔ kpe ɖe eŋu la, ele [i18n.site/payBill](//i18n.site/payBill) nàbla gaxɔgbalẽvi hena fexexe (mehiã be nàgbugbɔ ga axɔ o, nyatakakadzraɖoƒea aɖe fe siwo woxena la le eɖokui si le alesi wozãe nu, [kpɔ nyatakakadzraɖoƒea hena asixɔxɔ](/#price) ).

## Zã

### Demo Dɔa Wɔwɔ

Taflatse kpɔ demo project [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) be nàsrɔ̃ `i18` gɔmeɖeɖe ƒe ɖoɖowɔwɔ.

Zãla siwo le China ate ŋu awɔ clone [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Le cloning megbe la, ge ɖe directory la me eye nàƒu du `i18` be nàwu gbegɔmeɖeɖea nu.

### Nyatakakadzraɖoƒe Ƒe Ɖoɖo

Template warehouse directory ƒe ɖoɖo le ale

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Demo file siwo gɔme woɖe le `en` directory la nye kpɔɖeŋu ko eye woateŋu atutu wo.

### Du Gbegɔmeɖeɖe

De agbalẽdzraɖoƒea eye nàƒu du `i18` be nàɖe egɔme.

Tsɔ kpe ɖe gbegɔmeɖeɖea ŋu la, ɖoɖowɔɖia awɔ `.i18n/data` ƒe agbalẽdzraɖoƒea hã, taflatse tsɔe kpe ɖe nudzraɖoƒea ŋu.

Ne èɖe faɛl yeyea gɔme vɔ la, woawɔ nyatakaka faɛl yeye ɖe agbalẽdzraɖoƒe sia Ðo ŋku edzi nàtsɔ `git add .` akpe ɖe eŋu.

## Ðoɖowɔɖi Ƒe Faɛl

`.i18n/conf.yml` nye `i18` sedede fli gɔmeɖeɖe dɔwɔnu ƒe ɖoɖowɔɖi faɛl

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

Le ɖoɖowɔɖi ƒe faɛl me la, `fromTo` ƒe etevi :

`en` nye gbe si wodona tso eme, `zh ja ko de fr` nye gbe si gɔmeɖeɖea le taɖodzinu ɖom.

Gbegbɔgblɔ ƒe kɔpi kpɔ [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Le kpɔɖeŋu me, ne èdi be yeaɖe Chinagbe gɔme ɖe Eŋlisigbe me la, gbugbɔ ŋlɔ fli sia `zh: en` .

Ne èdi be yeaɖe egɔme ɖe gbegbɔgblɔ siwo katã wodo alɔe me la, taflatse gblẽe ɖi ƒuƒlu le `:` megbe. Le kpɔɖeŋu me

```
i18n:
  fromTo:
    en:
```

Àte ŋu aɖo `fromTo` vovovowo na subdirectories vovovowo : /

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

Le ɖoɖowɔɖi ƒe kplɔ̃ sia dzi la, gbe si wodona tso agbalẽdzraɖoƒe `blog` gɔmeɖeɖe me nye `zh` , eye gbe si wodona tso `blog/your_file_name.md` gɔmeɖeɖe me enye `ja` .

### Ŋe Aɖaba Ƒu Faɛl Dzi

Le gɔmedzedzea me la, woaɖe faɛl siwo katã dze egɔme kple `.md` kple `.yml` le gbegbɔgblɔ dzɔtsoƒe ƒe nuŋlɔɖi me gɔme.

Ne èdi be yeaŋe aɖaba aƒu faɛl aɖewo dzi eye màɖe wo gɔme o (abe nuŋɔŋlɔ siwo womewu enu haɖe o ene) la, àte ŋu aɖoe kple `ignore` ƒe akpaa.

`ignore` [globset](https://docs.rs/globset/latest/globset/#syntax) `.gitignore`

Le kpɔɖeŋu me, `_* ` le ɖoɖowɔɖi ƒe faɛl si le etame me fia be womaɖe faɛl siwo dze egɔme kple `_` gɔme o.

## Gbegɔmeɖeɖe Ŋuti Sewo

### Mele Be Gbegɔmeɖeɖe Ŋuti Nuŋlɔlawo Natsɔ Fliwo Akpe Ɖe Wo Ŋu Alo Atutu Wo O

Woate ŋu atrɔ asi le gɔmeɖeɖea ŋu. Trɔ asi le nuŋɔŋlɔ gbãtɔa ŋu eye nàgaɖe egɔme kple mɔ̃ ake, womaŋlɔ asitɔtrɔ siwo wowɔ kple asi le gɔmeɖeɖea ŋu o (ne wometrɔ asi le nuŋɔŋlɔ gbãtɔa ƒe memama sia ŋu o).

Gake taflatse de dzesii be ele be gɔmeɖeɖea ƒe fliwo kple nuŋɔŋlɔ gbãtɔa nasɔ ɖeka kple ɖeka. Eyae nye be mègatsɔ fliwo akpe ɖe wo ŋu alo atutu wo ne èle gbegɔmeɖeɖea ƒom ƒu o. Ne menye nenema o la, ahe tɔtɔ vɛ le gbegɔmeɖeɖe ɖɔɖɔɖo ƒe cache la me.

Ne nane gblẽ la, taflatse kpɔ [FAQ hena egbɔkpɔnuwo.](/i18/qa#H1)

### `YAML` Gɔmeɖeɖewo

Sedede ƒe dɔwɔnua adi faɛl siwo katã wu enu kple `.yml` le gbegbɔgblɔ dzɔtsoƒe ƒe faɛlwo ƒe nuŋlɔɖi me eye wòaɖe wo gɔme.

* De dzesii be ele be faɛl ŋkɔ ƒe megbenya nanye `.yml` (menye `.yaml` o ).

Dɔwɔnua ɖea nyagɔmeɖegbalẽ ƒe asixɔxɔwo gɔme le `.yml` me ko, ke menye nyagɔmeɖegbalẽ ƒe safuiwo o.

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

Woateŋu atrɔ asi le `YAML` ƒe gɔmeɖeɖe hã ŋu kple asi (gake mègatsɔ safuiwo alo fliwo akpe ɖe eŋu alo atutu wo le gɔmeɖeɖea me o).

Wonɔ te ɖe `YAML` gɔmeɖeɖe dzi, àte ŋu atu dukɔwo dome kuxiwo gbɔkpɔnu na ɖoɖowɔɖi gbe vovovowo bɔbɔe.

## Zãzã Deŋgɔ

### Gbegɔmeɖeɖe Ƒe Nyatakakadzraɖoƒe Sue

Zi alesi wowɔ `.i18n/conf.yml` (mehiã be woadze egɔme tso demo project template dzi ɣesiaɣi o), `i18` awɔ dɔ nyuie.

Sedede ƒe dɔwɔnu akpɔ ɖoɖowɔɖi `.i18n/conf.yml` le nyatakakadzraɖoƒe suewo katã me eye wòaɖe wo gɔme.

Dɔ siwo zãa [monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### Custom Installation Directory

Woaɖoe ɖe `/usr/local/bin` dzi le gɔmedzedzea me.

Ne `/usr/local/bin` mekpɔ mɔɖeɖe le nuŋɔŋlɔ me o la, woaɖoe ɖe `~/.bin` dzi.

Setting environment variable `TO` ateŋu aɖe installation directory gɔme, le kpɔɖeŋu me :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```