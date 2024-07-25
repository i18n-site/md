# Problem I Përbashkët

## Shtimi Ose Fshirja E Rreshtave Të Përkthimit, Duke Rezultuar Në Konfuzion Në Përkthim

Mbani mend, **numri i rreshtave në përkthim duhet të korrespondojë me rreshtat në tekstin origjinal** .

Kjo do të thotë, kur rregulloni manualisht përkthimin, **mos shtoni ose fshini rreshta të përkthimit** , përndryshe marrëdhënia e hartës midis përkthimit dhe tekstit origjinal do të prishet.

Nëse aksidentalisht shtoni ose fshini një rresht, duke shkaktuar konfuzion, ju lutemi rivendosni përkthimin në versionin përpara modifikimit, ekzekutoni `i18` përkthimin dhe rivendosni memorien e duhur të hartës së saktë.

Hartëzimi midis përkthimit dhe tekstit origjinal është i lidhur me shenjën Krijoni `.i18h/hash` shenjë të re në [i18n.site/token](//i18n.site/token)

## : Të `YAML` Konvertimin `HTML` Të Lidhjes Në `Markdown`

Vlera e `YAML` do të trajtohet si `MarkDown` për përkthim.

Ndonjëherë konvertimi `HTML` → `MarkDown` nuk është ai që duam, si p.sh. konvertimi i `<a href="/">Home</a>` në `[Home](/)` .

Shtoni ndonjë atribut tjetër përveç `href` në `a` , si p.sh. `<a class="A" href="/">Home</a>` , për të shmangur këtë konvertim.

## `./I18n/Hash` E Mëposhtëm Konfliktohen

Fshini skedarët në konflikt dhe ekzekutoni përsëri `i18`
