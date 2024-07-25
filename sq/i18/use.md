# Instaloni Dhe Përdorni

## windows Fillimisht Instalon git bash

windows , ju lutemi [klikoni këtu për të shkarkuar dhe instaluar fillimisht `git bash`](https://git-scm.com/download/win)

Kryeni operacionet pasuese në `git bash`

## Instaloni

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Konfiguro Tokenin E Përkthimit

Vizitoni [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="max-width:400px">

Krijo `~/.config/i18n.site.yml` ngjit përmbajtjen e kopjuar në të, përmbajtja është si më poshtë:

```
token: YOUR_API_TOKEN
```

Përveç kësaj, ju duhet [i18n.site/payBill](//i18n.site/payBill) lidhni një kartë krediti për pagesë (nuk kërkohet rimbushje, faqja e internetit do të zbresë automatikisht tarifat sipas përdorimit, [shikoni faqen kryesore për çmimin](/#price) ).

## Përdorni

### Projekt Demo

[github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) lutemi referojuni projektit demo për të mësuar konfigurimin e përkthimit `i18`

Përdoruesit në Kinë mund të klonojnë [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Pas klonimit, futni direktorinë dhe `i18` për të përfunduar përkthimin.

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

Drejtoria `en` përmban skedarët demo të përkthyer, të cilët janë vetëm një shembull dhe mund të fshihen.

### Ekzekutoni Përkthimin

Futni direktorinë dhe `i18` për të përkthyer.

### Shtoni Skedarë Në Depo

Përveç përkthimit, programi do të gjenerojë gjithashtu skedarët e mëposhtëm, ju lutemi shtoni ato në depo.

```
.i18n/hash
.i18n/cache/.gitignore
```

Midis tyre : përmbajtja e `.i18n/cache/.gitignore`

```
**/*
!**/.gitignore
```

Kjo do të thotë të shpërfillni `.i18n/cache/.gitignore` gjithë skedarët në drejtorinë `.i18n/cache/`

Nëse programi juaj i kontrollit të versionit nuk është `git` ju lutemi injoroni atë sipas këtij konfigurimi.

## Skedari I Konfigurimit

`.i18n/conf.yml` skedari i konfigurimit të mjetit të përkthimit të `i18` line

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

Në skedarin e konfigurimit, vartësit e `fromTo`

`en` është gjuha burimore, `zh ja ko de fr` është gjuha e synuar e përkthimit.

Shih kodin e gjuhës [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE)

Për shembull, nëse doni të përktheni kinezisht në anglisht, rishkruajeni këtë rresht `zh: en`

Nëse dëshironi të përktheni në të gjitha gjuhët e mbështetura, lëreni bosh pas `:` për shembull

```
i18n:
  fromTo:
    en:
```

### Injoro Skedarin

Si parazgjedhje, të gjithë skedarët që fillojnë me `.md` dhe `.yml` në drejtorinë e gjuhës burimore do të përkthehen.

Nëse dëshironi të shpërfillni skedarë të caktuar dhe të mos i përktheni ato (si p.sh. draftet e papërfunduara), mund të përdorni konfigurimin e fushës `ignore`

Përdor një sintaksë [globset](https://docs.rs/globset/latest/globset/#syntax) ngjashme me `.gitignore` `ignore`

Për shembull, në skedarin e konfigurimit të mësipërm `_* ` të thotë që skedarët që fillojnë me `_` nuk do të përkthehen.

## Rregullat E Përkthimit

### Redaktorët E Përkthimit Nuk Duhet Të Shtojnë Ose Fshijnë Rreshta

Përkthimi është i modifikueshëm. Ndryshoni tekstin origjinal dhe përkthejeni përsëri me makinë, modifikimet manuale të përkthimit nuk do të mbishkruhen (nëse ky paragraf i tekstit origjinal nuk është modifikuar).

Por vini re se rreshtat e përkthimit dhe teksti origjinal duhet të korrespondojnë një me një. Kjo do të thotë, mos shtoni ose fshini rreshta gjatë përpilimit të përkthimit. Përndryshe, do të shkaktojë konfuzion në cache-in e redaktimit të përkthimit.

Nëse diçka shkon keq, ju lutemi referojuni [FAQ për zgjidhje.](/i18/qa#H1)

### `Yaml`

Mjeti i linjës së komandës do t'i gjejë të gjithë skedarët që mbarojnë me `.yml`

* Vini re se prapashtesa e emrit të skedarit `.yaml` të jetë `.yml`

Mjeti përkthen vetëm vlerat e fjalorit në `.yml` jo çelësat e fjalorit.

për shembull `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

do të përkthehet si `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Përkthimi i `YAML`

Bazuar `YAML` Translation, ju mund të ndërtoni lehtësisht zgjidhje ndërkombëtare për gjuhë të ndryshme programimi.

## Përdorimi I Avancuar

### Nëndirektoria E Përkthimit

Për sa kohë `i18` krijoni `.i18n/conf.yml`

Mjeti i linjës së komandës do të gjejë konfigurimin `.i18n/conf.yml` në të gjitha nëndrejtoritë dhe do ta përkthejë atë.

Projektet që përdorin arkitekturën [monorepo](//monorepo.tools) mund të ndajnë skedarët e gjuhës në nëndrejtori.

<img alt="" src="https://p.3ti.site/1719910016.avif">

### Drejtoria E Personalizuar E Instalimit

Ai do të instalohet në `/usr/local/bin`

Nëse nuk ka leje shkrimi `/usr/local/bin` do të instalohet në `~/.bin` .

Vendosni variablat e mjedisit Ju mund të përcaktoni direktorinë e instalimit, për `TO` :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```
