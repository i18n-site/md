# .i18n/conf.yml

Konfigurācijas fails `i18n.site` ir `.i18n/conf.yml` , un saturs ir šāds :

```yaml
i18n:
  fromTo:
    en:
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
    use: Blog
addon:
  - i18n.addon/toc
```

No tiem `upload` līdz `ext:` konfigurācijas vienums nozīmē, ka publicēšanas laikā tiks augšupielādēti tikai `.md` .

## Augšējā Navigācijas Navigācija

`nav:` konfigurācijas opcijas, kas atbilst navigācijas izvēlnei mājas lapas augšdaļā.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Starp tiem `i18n: home` atbilst `home: Home` in `en/i18n.yml` (kur `en` ir projekta tulkojuma avota valoda).

`en/i18n.yml` saturs ir navigācijas izvēlnē redzamais teksts, kas konfigurācijā tiks tulkots atbilstoši `fromTo` , piemēram, tulkots uz `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Kad tulkojums ir pabeigts, varat mainīt tulkojuma vērtību `yml` , taču nepievienojiet un nedzēsiet tulkojuma `yml` atslēgu.

### `use: Toc` Dokumenta Veidne Ar Kontūru

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` nozīmē renderēšanu, izmantojot veidni `Toc` , kas ir vienas `Markdown` veidnes renderēšana.

`TOC` ir saīsinājums no `Table of Contents` Kad šī veidne ir atveidota, sānjoslā tiks parādīta šī `Markdown` faila kontūra.

`url:` apzīmē faila ceļu `Markdown` ( `/` atbilst saknes direktorijam `/README.md` , šim faila nosaukumam ir nepieciešams prefikss ar lielajiem burtiem un mazajiem burtiem).

### `use: Md` Dokumenta Veidne Bez Kontūras

Veidne `Md` un veidne `Toc` ir vienādas, un abas tiek izmantotas viena `Markdown` faila renderēšanai. Taču `Md` veidne sānjoslā nerāda kontūru.

Iepriekš minētajā konfigurācijā varat mainīt `use: Toc` uz `use: Md` , vēlreiz palaist `i18n.site` direktorijā `md` un pēc tam apmeklēt izstrādes priekšskatījuma URL, lai novērotu izmaiņas sākumlapā.

### `use: Blog` Emuāru Veidnes

Emuāra veidnē tiek parādīts rakstu saraksts (nosaukumi un kopsavilkumi) publicēšanas laika secībā.

[→ Noklikšķiniet šeit, lai uzzinātu par konkrēto konfigurāciju](/i18n.site/conf/blog)

### `use: Doc` Failu Dokumentu Veidnes

Konfigurācijas failā:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Norāda `Doc` izmantošanu veidnes renderēšanai.

`Doc` veidne atbalsta vairāku `MarkDown` integrēšanu, lai ģenerētu dokumentu kontūras vienam vai vairākiem projektiem.

#### Vairāki Projekti Un Vairāki Faili

Konfigurācija `.i18n/conf.yml` in `i18n:doc` ir vairāku projektu vairāku failu renderēšanas režīms.

Šeit `menu: NB demo1,demo2` nozīmē veidnes `NB` izmantošanu, lai renderētu nolaižamo izvēlni.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , kas ir saīsinājums no `Name Breif` , nozīmē, ka nolaižamajā izvēlnē var tikt parādīts projekta nosaukums un sauklis.

`NB` seko tam nodots parametrs `demo1,demo2` .

Piezīme : ** Pirms un pēc komata `,` no `demo1,demo2` nedrīkst būt atstarpēm ** .

Iepriekš minētajiem parametriem atbilstošais direktoriju indeksa fails ir:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Viens Projekts Vairākus Failus

Ja jums ir tikai viens projekts, varat to konfigurēt šādi.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Viens projekts ar vairākiem failiem neatbalsta `url` konfigurēšanu kā saknes ceļu `/`
> nav:__ __conf.yml konfigurēts saknes ceļš, piekļūstot vietnes sākumlapai, tas tiks automātiski pārrakstīts uz pirmo URL konfigurācijā `nav:` .
> Šis dizains ir paredzēts, lai labāk atšķirtu projekta dokumentus, emuārus un citu saturu, izmantojot direktorijus.
> Kā sākumlapu ieteicams izmantot vienu failu un vienu lapu.

> [!TIP]
> Ja `url` nav rakstīts, `url` pēc noklusējuma ir vērtība `i18n` Šis noteikums attiecas arī uz citām veidnēm.

#### TOC Satura Rādītājs

Ja konfigurācijā ir iespējota veidne `use: Doc` , lūdzu, iespējojiet spraudni `i18n.addon/toc` `.i18n/conf.yml` Konfigurācija ir šāda :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` automātiski instalēs un izpildīs šo spraudni, `TOC` nolasīs direktorija indeksa failu un `json` ģenerēs direktorija kontūru.

Ja tas ir viens projekts ar vairākiem failiem, saknes direktorijs `TOC` ir `url:` , kas atbilst avota valodas direktorijā. Piemēram, ja avota valoda ir ķīniešu: fails, kas atbilst `url: flashduty` ir `zh/flashduty/TOC` .

Ja runa ir par vairākiem projektiem un vairākiem failiem, `url:` nav jākonfigurē. `TOC` saknes direktorijs ir direktorijs, kas atbilst `i18n` vērtībai.

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

`TOC` failiem ir atkāpe, lai norādītu kontūras hierarhiskās attiecības, atbalstītu daudzlīmeņu atkāpi un rindu komentārus, kas sākas ar `# ` .

##### Vecāku Līmenis Raksta Tikai Virsrakstu, Nevis Saturu.

Ja ir vairāki atkāpes līmeņi, vecāku līmenis raksta tikai virsrakstu, nevis saturu. Pretējā gadījumā tipogrāfija tiks sajaukta.

##### Projekts README.md

Saturu var ierakstīt `README.md` punktā, piemēram, `en/demo2/README.md` .

Ņemiet vērā, ka šī faila saturs nerāda satura rādītāju, tāpēc ieteicams ierobežot garumu un uzrakstīt īsu ievadu.

###### Projekta Sauklis

Jūs varat redzēt `Your Project slogan` ka `Deme Two` ir tā projekta sauklis zem nolaižamās izvēlnes un kataloga izklāsta projekta nosaukuma : .

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

### Noklusējuma Ielāde Bez Konfigurācijas Ceļa

Noteiktam ceļam, kuram tiek piekļūts, ja ceļa prefikss nav konfigurēts `nav:` , ceļam atbilstošais fails `MarkDown` tiks ielādēts pēc noklusējuma un renderēts, izmantojot veidni `Md` .

Piemēram, ja tiek piekļūts `/test` un `nav:` ir konfigurēts bez šī ceļa prefiksa un pašreizējā pārlūkošanas valoda ir angļu (kods `en` ), `/en/test.md` tiks ielādēta pēc noklusējuma un renderēta, izmantojot `Md` veidni.

Ja `/en/test.md` šis fails nepastāv, tiks parādīta noklusējuma `404` lapa.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">