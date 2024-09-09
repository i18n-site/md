# .i18n/conf.yml

Profils `i18n.site` ir `.i18n/conf.yml` .

Izņemot iestatījumus [`i18`](/i18) , `ignore:` un `i18n:` , konfigurācijas fails ir šāds:

```yaml
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Doc
addon:
  - i18n.addon/toc
```

No tiem `upload` līdz `ext:` konfigurācijas vienums nozīmē, ka publicēšanas laikā tiks augšupielādēti tikai `.md` .

## Augšējā Navigācijas Navigācija

`nav:` konfigurācijas opcijas, kas atbilst navigācijas izvēlnei mājas lapas augšdaļā.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Starp tiem `i18n: home` atbilst `home: Home` `en/i18n.yml` .

`en/i18n.yml` tiks tulkots vairākās valodās, piemēram, `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Kad tulkojums ir pabeigts, varat mainīt tulkojuma vērtību `yml` , taču nepievienojiet un nedzēsiet tulkojuma `yml` atslēgu.

### `use: Toc` , Viena Faila Veidne (Ar Kontūru)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` nozīmē renderēšanu, izmantojot veidni `Toc` , kas ir vienas `Markdown` veidnes renderēšana.

`TOC` ir saīsinājums no `Table of Contents` Kad šī veidne ir atveidota, sānjoslā tiks parādīta šī `Markdown` faila kontūra.

`url:` apzīmē faila ceļu `Markdown` ( `/` atbilst saknes direktorijam `/README.md` , šim faila nosaukumam ir nepieciešams prefikss ar lielajiem burtiem un mazajiem burtiem).

### `use: Md` , Viena Faila Veidne (Bez Kontūras)

Veidne `Md` un veidne `Toc` ir vienādas, un abas tiek izmantotas viena `Markdown` faila renderēšanai. Taču `Md` veidne sānjoslā nerāda kontūru.

Iepriekš minētajā konfigurācijā varat mainīt `use: Toc` uz `use: Md` , vēlreiz palaist `i18n.site` direktorijā `md` un pēc tam apmeklēt izstrādes priekšskatījuma URL, lai novērotu izmaiņas sākumlapā.

### Noklusējuma Ielāde Bez Konfigurācijas Ceļa

Ja tiek piekļūts noteiktam ceļam un tā ceļa prefikss nav konfigurēts `nav:` , ceļam atbilstošais fails `MarkDown` tiks ielādēts pēc noklusējuma un renderēts, izmantojot veidni `Md` .

Piemēram, ja tiek piekļūts `/test` un `nav:` ir konfigurēts bez šī ceļa, un lapas valoda ir angļu (kods `en` ), `/en/test.md` tiks ielādēta pēc noklusējuma un renderēta, izmantojot `Md` veidni.

Ja `/en/test.md` šis fails nepastāv, tiks parādīta noklusējuma `404` lapa.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Vairāku Failu Veidne

Konfigurācijas failā:

```
  - i18n: blog
    use: Doc
```

Norāda `Doc` izmantošanu veidnes renderēšanai.

`Doc` veidne atbalsta vairāku `MarkDown` integrēšanu, lai ģenerētu dokumentu kontūras vienam vai vairākiem projektiem.

#### Viens Projekts (Vairāki Faili)

Iepriekš norādītais `blog` ir viena vienuma režīms `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Ja url Ir Tukšs, Tā Noklusējuma Vērtība Ir i18n

Ja `url` nav rakstīts, `url` pēc noklusējuma ir vērtība `i18n` Šis noteikums attiecas arī uz citām veidnēm.

Iepriekš minētā rakstīšanas metode ir līdzvērtīga `url: blog` , un tai atbilstošais fails ir `en/blog/TOC` .

#### Vairāki Projekti

Konfigurācija `i18n:doc` no `.i18n/conf.yml` ir vairāku projektu režīms.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Šeit `menu: NB demo1,demo2` nozīmē veidnes `NB` izmantošanu, lai renderētu nolaižamo izvēlni.

`NB` , kas ir saīsinājums no `Name Breif` , nozīmē, ka nolaižamajā izvēlnē var tikt parādīts projekta nosaukums un sauklis.

`NB` seko tam nodots parametrs `demo1,demo2` .
Piezīme : ** Pirms un pēc komata `,` no `demo1,demo2` nedrīkst būt atstarpēm ** .

Iepriekšminētajiem parametriem atbilstošais direktoriju indeksa fails ir:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Satura Rādītājs

`i18n.site` izpildīs `js` spraudni `.i18n/hook/after.tran/TOC.js` demonstrācijas noliktavā, lai nolasītu `doc` direktoriju indeksa failu, kas atbilst `TOC` veidnes konfigurācijai, lai ģenerētu `json` direktorija kontūru.

Ja izmantojat `doc` veidni, jums ir jābūt šim spraudnim.

Ja inicializējat projektu `i18n.site` no tukšas mapes, neaizmirstiet kopēt `.i18n` demonstrācijas projektu savā direktorijā.

`Doc` veidne atveidos satura rādītāja kontūru, pamatojoties uz ģenerēto `json` .

##### Detalizēts Satura Skaidrojums

`en/blog/TOC` Saturs ir šāds :

```
README.md

news/README.md
  news/begin.md
```

##### Izmantojiet Atkāpi, Lai Norādītu Līmeņus

`README.md` pirmajā rindā no `en/blog/TOC` atbilst `i18n.site` zemāk esošajā attēlā, kas ir projekta nosaukums.

Nākamās divas rindas ir tādas, kā parādīts zemāk esošajā ekrānuzņēmumā.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` atbilst `News` ,
`news/begin.md` atbilst `Our Product is Online !`

`TOC` failiem ir atkāpe, lai norādītu kontūras hierarhiskās attiecības, atbalstītu daudzlīmeņu atkāpi un rindu komentārus, kas sākas ar `#` .

##### Vecāku Līmenis Raksta Tikai Virsrakstu, Nevis Saturu.

Ja ir vairāki atkāpes līmeņi, vecāku līmenis raksta tikai virsrakstu, nevis saturu. Pretējā gadījumā tipogrāfija tiks sajaukta.

##### Projekts README.md

Saturu var ierakstīt `README.md` punktā, piemēram, `en/demo2/README.md` .

Ņemiet vērā, ka šī faila saturs nerāda satura rādītāju, tāpēc ieteicams ierobežot garumu un uzrakstīt īsu ievadu.

###### Projekta Sauklis

Jūs varat redzēt, ka `Deme Two` ir tā projekta sauklis zem nolaižamās izvēlnes un kataloga izklāsta projekta : `Your Project slogan` .

![](https://p.3ti.site/1721276842.avif)

Tas atbilst `en/demo2/README.md` pirmajai rindai :

```
# Demo Two : Your Project slogan
```

Saturs aiz projekta `README.md` pirmā līmeņa nosaukuma pirmā kola `:` tiks uzskatīts par projekta saukli.

Lietotāji no Ķīnas, Japānas un Korejas, lūdzu, ņemiet vērā, ka pilna platuma kolu vietā izmantojiet pusplatuma kolu `:` .

##### Kā Pārvietot TOC Vairumā?

`TOC` faili ir jāievieto avota valodas direktorijā.

Piemēram, ja avota valoda ir ķīniešu, tad `TOC` iepriekš ir `zh/blog/TOC` .

Ja avota valoda ir modificēta, jums ir jāpārvieto `TOC` faili no noteiktas valodas projektā uz citu valodu.

Varat atsaukties uz šādām komandām:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Lūdzu, mainiet `en/` un `zh/` iepriekš minētajā komandā savā valodas kodā.