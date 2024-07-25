# .i18n/conf.yml

Konfigurācijas fails ir `.i18n/conf.yml` `i18n.site`

Izņemot `ignore:` un `i18n:` iestatījumus [`i18`](/i18) konfigurācijas fails ir šāds:

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
```

Starp tiem `ext:` konfigurācijas `upload` nozīmē, ka publicēšanas laikā tiks augšupielādēti tikai `.md` .

## Augšējā Navigācijas Navigācija

`nav:` opcijas, kas atbilst navigācijas izvēlnei mājas lapas augšdaļā.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Starp tiem `i18n: home` atbilst `en/i18n.yml`中`home: Home` .

tiks tulkoti vairākās valodās, piemēram `en/i18n.yml` `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Kad tulkojums ir pabeigts, varat mainīt tulkojuma `yml` , taču nepievienojiet vai neizdzēsiet tulkojuma atslēgu `yml` .

### `use: Toc` Viena Faila Veidne (Ar Kontūru)

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` nozīmē izmantot `Toc` renderēšanu, kas ir vienas `Markdown` veidnes renderēšana.

`TOC` ir saīsinājums no `Table of Contents` `Markdown`

`url:` apzīmē faila ceļu no `Markdown` ( `/` atbilst saknes direktorijam `/README.md` , šim faila nosaukumam ir nepieciešams prefikss ar lielajiem burtiem un mazajiem burtiem).

### `use: Md` Viena Faila Veidne (Bez Kontūras)

`Md` ir tāda pati kā `Toc` , abas tiek izmantotas viena `Markdown` faila renderēšanai. Tomēr `Md` veidne sānjoslā nerāda kontūru.

Iepriekš minētajā konfigurācijā varat `use: Toc` uz `use: Md` , palaist `i18n.site` vēlreiz direktorijā `md` un pēc tam apmeklēt izstrādes priekšskatījuma URL, lai novērotu izmaiņas sākumlapā.

### Noklusējuma Ielāde Bez Konfigurācijas Ceļa

Ja noteikta ceļa prefikss, kuram tiek piekļūts, nav konfigurēts `nav:` ceļam atbilstošais `MarkDown` fails tiks ielādēts pēc noklusējuma un renderēts, izmantojot `Md` veidni.

Piemēram, ja apmeklējat `/test` un `nav:` ir konfigurēts bez šī ceļa, un lapas valoda ir angļu (kods `en` ), veidne pēc noklusējuma tiks ielādēta `/en/test.md` un atveidota, izmantojot `Md` .

Ja `/en/test.md` fails neeksistē, tiks parādīta noklusējuma `404` lapa.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` Vairāku Failu Veidne

Konfigurācijas failā:

```
  - i18n: blog
    use: Doc
```

Norāda, ka tiek izmantots `Doc`

`Doc` atbalsta vairāku `MarkDown` integrēšanu, lai izveidotu dokumentu kontūras vienam vai vairākiem projektiem.

#### Viens Projekts (Vairāki Faili)

`blog` ir viena projekta režīms `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Ja url Ir Tukšs, Tā Noklusējuma Vērtība Ir i18n

Ja nerakstiet `url` `url` vērtība ir `i18n` Šis noteikums attiecas arī uz citām veidnēm.

Iepriekš minētā rakstīšanas metode ir līdzvērtīga `url: blog` un tai atbilstošais fails ir `en/blog/TOC` .

#### Vairāki Projekti

Konfigurācija `.i18n/conf.yml` `i18n:doc` vairāku projektu režīms.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Šeit `menu: NB demo1,demo2` nozīmē izmantot `NB` , lai renderētu nolaižamo izvēlni.

`NB` ir `Name Breif` saīsinājums, kas norāda, ka nolaižamajā izvēlnē var tikt parādīts projekta nosaukums un sauklis.

`NB` seko parametrs `demo1,demo2` .
Piezīme : ** Pirms un ** komata `,` nedrīkst būt atstarpes `demo1,demo2`

Iepriekšminētajiem parametriem atbilstošais direktoriju indeksa fails ir:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Satura Rādītājs

`i18n.site` `js` `.i18n/hook/after.tran/TOC.js` `doc` `TOC` `json`

Ja izmantojat `doc` , jums ir jābūt šim spraudnim.

Ja inicializējat `i18n.site` no tukšas mapes, neaizmirstiet kopēt `.i18n` demonstrācijas projektā savā direktorijā.

`Doc` atveidos satura rādītāju, pamatojoties uz ģenerēto `json` .

##### Detalizēts Satura Skaidrojums

Saturs : šāds `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Izmantojiet Atkāpi, Lai Norādītu Līmeņus

Virs `en/blog/TOC` `README.md` pirmajā rindā atbilst `i18n.site` zemāk redzamajā attēlā, kas ir projekta nosaukums.

Nākamās divas rindas ir tādas, kā parādīts zemāk esošajā ekrānuzņēmumā.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` attiecas uz `News` ,
`news/begin.md` attiecas uz `Our Product is Online !`

Fails ir ar atkāpi `TOC` lai norādītu kontūras hierarhiskās attiecības, un tas atbalsta vairāku līmeņu atkāpi.

##### Vecāku Līmenis Raksta Tikai Virsrakstu, Nevis Saturu.

Ja ir vairāki atkāpes līmeņi, vecāku līmenis raksta tikai virsrakstu, nevis saturu. Pretējā gadījumā tipogrāfija tiks sajaukta.

##### Projekts README.md 

`README.md` piemēram, varat rakstīt saturu ar `en/demo2/README.md` .

Ņemiet vērā, ka šī faila saturs nerāda satura rādītāju, tāpēc ieteicams ierobežot garumu un uzrakstīt īsu ievadu.

###### Projekta Sauklis

Kā redzat `Deme Two` zem nolaižamās izvēlnes un kataloga projekta nosaukuma ir tā projekta sauklis `Your Project slogan` :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: atbilst pirmajai rindai `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

`README.md` Saturs pēc pirmā kola `:` pirmā līmeņa nosaukumā tiks uzskatīts par projekta saukli.

Lietotāji no Ķīnas, Japānas un Korejas, lūdzu, ņemiet vērā, ka pilna platuma resnās zarnas vietā ir jāizmanto pusplatums `:`

##### Kā Pārvietot TOC Vairumā?

Fails jāievieto avota valodas direktorijā `TOC`

Piemēram, ja avota valoda ir ķīniešu, tad iepriekš ir `zh/blog/TOC` `TOC`

Ja avota valoda ir modificēta, jums ir nepieciešams pakešpārvietot `TOC` noteiktā valodā projektā uz citu valodu.

Varat atsaukties uz šādām komandām:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Lūdzu `en/` modificējiet un `zh/` savā valodas kodā iepriekš minētajā komandā.


