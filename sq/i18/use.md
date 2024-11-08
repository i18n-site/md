# Instaloni Dhe Përdorni

## windows Fillimisht Instalon git bash

windows , ju lutemi [klikoni këtu për të shkarkuar dhe instaluar fillimisht `git bash`](https://git-scm.com/download/win) .

Kryeni operacionet pasuese në `git bash` .

## Instaloni

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfiguro Tokenin E Përkthimit

Vizitoni [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Krijoni `~/.config/i18n.site.yml` , ngjisni përmbajtjen e kopjuar në të, përmbajtja është si më poshtë:

```
token: YOUR_API_TOKEN
```

Përveç kësaj [,](/#price) ju duhet të lidhni një kartë krediti në [i18n.site/payBill](//i18n.site/payBill)

## Përdorni

### Projekt Demo

Ju lutemi referojuni projektit [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) për të mësuar konfigurimin e përkthimit `i18` .

Përdoruesit në Kinë mund të klonojnë [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Pas klonimit, futni direktorinë dhe ekzekutoni `i18` për të përfunduar përkthimin.

### Struktura E Drejtorisë

Struktura e drejtorisë së magazinës së shabllonit është si më poshtë

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Skedarët demo të përkthyer në drejtorinë `en` janë vetëm një shembull dhe mund të fshihen.

### Ekzekuto Përkthimin

Futni drejtorinë dhe ekzekutoni `i18` për të përkthyer.

Përveç përkthimit, programi do të gjenerojë gjithashtu dosjen `.i18n/data` , ju lutemi shtoni atë në depo.

Pas përkthimit të skedarit të ri, në këtë direktori do të krijohet `git add . ` skedar i ri i të dhënave.

## Skedari I Konfigurimit

`.i18n/conf.yml` është skedari i konfigurimit të mjetit të përkthimit të linjës së komandës `i18`

Përmbajtja është si më poshtë:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### & E Përkthimit

Në skedarin e konfigurimit, vartësi i `fromTo` :

`en` është gjuha burimore, `zh ja ko de fr` është gjuha e synuar e përkthimit.

Shih kodin e gjuhës [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Për shembull, nëse doni të përktheni kinezisht në anglisht, rishkruajeni këtë rresht `zh: en` .

Nëse dëshironi të përktheni në të gjitha gjuhët e mbështetura, lëreni bosh pas `:` . për shembull

```
i18n:
  fromTo:
    en:
```

Ju mund të konfiguroni `fromTo` të ndryshëm për skedarë të ndryshëm / Një demonstrim shkruhet si më poshtë :

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

Në këtë tabelë konfigurimi, gjuha burimore e përkthimit të katalogut `blog` është `zh` dhe gjuha burimore e përkthimit të katalogut `blog/your_file_name.md` është `ja` .

### Imazhe/Lidhje Shumëgjuhëshe

Kur URL-të në fotot dhe lidhjet në `replace:` dhe `MarkDown` (dhe atributet `src` dhe `href` të `HTML` të integruar) konfigurohen në `.i18n/conf.yml` me këtë parashtesë, kodi i gjuhës burimore në URL do të zëvendësohet nga kodi i gjuhës së përkthimit ( [gjuha lista e kodeve](/i18/LANG_CODE) ).

Për shembull, konfigurimi juaj është si më poshtë:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` është një fjalor, çelësi është prefiksi i URL-së që do të zëvendësohet dhe vlera është rregulli i zëvendësimit.

Kuptimi i zëvendësimit të rregullit `ko de uk>ru zh-TW>zh >en` më sipër është se `ko de` përdor figurën e kodit të gjuhës së vet, `zh-TW` dhe `zh` përdorin figurën e `zh` , `uk` përdor figurën e `ru` dhe gjuhët e tjera (si p.sh. `ja` ) përdorin figurën nga `en` si parazgjedhje.

Për shembull, skedari burimor francez ( `fr` ) i `MarkDown` është si më poshtë :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Skedari i përkthyer dhe i krijuar në anglisht ( `en` ) është si më poshtë :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Këtu, `/en/` në kodin e gjuhës burimore zëvendësohen me `/zh/` në gjuhën e synuar.

Shënim : Duhet të ketë `/` para dhe pas kodit të gjuhës së tekstit të zëvendësuar në URL.

> [!TIP]
> Nëse `- /` është konfiguruar në `url:` , vetëm shtigjet relative do të përputhen, por URL-të që fillojnë me `//` nuk do të përputhen.
>
> Nëse disa lidhje të një emri domaini duan të zëvendësohen dhe disa nuk duan të zëvendësohen, mund të përdorni parashtesa të ndryshme si `[x](//x.com/en/)` dhe `[x](https://x.com/en/)` për t'i dalluar ato.

### Injoro Skedarin

Si parazgjedhje, të gjithë skedarët që fillojnë me `.md` dhe `.yml` në drejtorinë e gjuhës burimore do të përkthehen.

Nëse dëshironi të shpërfillni skedarë të caktuar dhe të mos i përktheni ato (si p.sh. draftet e papërfunduara), mund ta konfiguroni atë me fushën `ignore` .

`ignore` përdor të [globset](https://docs.rs/globset/latest/globset/#syntax) sintaksë si skedari `.gitignore` .

Për shembull, `_* ` në skedarin e konfigurimit të mësipërm do të thotë që skedarët që fillojnë me `_` nuk do të përkthehen.

## Rregullat E Përkthimit

### Redaktorët E Përkthimit Nuk Duhet Të Shtojnë Ose Fshijnë Rreshta

Përkthimi është i modifikueshëm. Ndryshoni tekstin origjinal dhe përkthejeni përsëri me makinë, modifikimet manuale të përkthimit nuk do të mbishkruhen (nëse ky paragraf i tekstit origjinal nuk është modifikuar).

> [!WARN]
> Duhet të ketë një korrespondencë një-për-një ndërmjet rreshtave të përkthimit dhe tekstit origjinal. Kjo do të thotë, mos shtoni ose fshini rreshta gjatë përpilimit të përkthimit. Përndryshe, do të shkaktojë konfuzion në cache-in e redaktimit të përkthimit.

Nëse diçka shkon keq, ju lutemi referojuni [FAQ për zgjidhje.](/i18/qa#H1)

### `YAML` Përkthime

Mjeti i linjës së komandës do të gjejë të gjithë skedarët që përfundojnë me `.yml` në direktorinë e skedarëve të gjuhës burimore dhe do t'i përkthejë ato.

* Vini re se prapashtesa e emrit të skedarit duhet të jetë `.yml` (jo `.yaml` ).

Mjeti përkthen vetëm vlerat e fjalorit në `.yml` , jo çelësat e fjalorit.

Për shembull `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

do të përkthehet si `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Përkthimi i `YAML` mund të modifikohet gjithashtu manualisht (por mos shtoni ose fshini çelësat ose rreshtat në përkthim).

Bazuar në përkthimin `YAML` , mund të ndërtoni lehtësisht zgjidhje ndërkombëtare për gjuhë të ndryshme programimi.

## Përdorimi I Avancuar

### Nëndirektoria E Përkthimit

Për sa kohë që krijohet `.i18n/conf.yml` (nuk ka nevojë të filloni nga shablloni i projektit demo çdo herë), `i18` do të funksionojë mirë.

Vegla e linjës së komandës do të gjejë `.i18n/conf.yml` konfigurime në të gjitha nëndrejtoritë dhe do t'i përkthejë ato.

Projektet që përdorin arkitekturën [monorepo](//monorepo.tools) mund të ndajnë skedarët e gjuhës në nëndrejtori.

![](https://p.3ti.site/1719910016.avif)

### Drejtoria E Personalizuar E Instalimit

Do të instalohet në `/usr/local/bin` si parazgjedhje.

Nëse `/usr/local/bin` nuk ka leje shkrimi, do të instalohet në `~/.bin` .

Vendosja e ndryshores së mjedisit `TO` mund të përcaktojë direktorinë e instalimit, për shembull :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```