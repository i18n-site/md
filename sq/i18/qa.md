# Faq

## Shtimi Ose Fshirja E Rreshtave Të Përkthimit, Duke Rezultuar Në Konfuzion Në Përkthim

> [!WARN]
> Mbani mend, **numri i rreshtave në përkthim duhet të korrespondojë me rreshtat në tekstin origjinal** .
> Kjo do të thotë, kur rregulloni manualisht përkthimin, **mos shtoni ose fshini rreshta të përkthimit** , përndryshe marrëdhënia e hartës midis përkthimit dhe tekstit origjinal do të prishet.

Nëse aksidentalisht shtoni ose fshini një rresht, duke shkaktuar konfuzion, ju lutemi rivendosni përkthimin në versionin përpara modifikimit, ekzekutoni përsëri përkthimin `i18` dhe rivendosni memorien e duhur të hartës së saktë.

Hartëzimi midis përkthimit dhe tekstit origjinal është i lidhur me tokenin Krijoni një shenjë të re në [i18n.site/token](//i18n.site/token) fshini `.i18h/hash` dhe përktheni përsëri për të pastruar hartën konfuze (por kjo do të bëjë që të gjitha rregullimet manuale të përkthimit të humbasin).

## `YAML` : Si Të Shmangni Konvertimin E Lidhjes `HTML` Në `Markdown`

Një vlerë prej `YAML` trajtohet si `MarkDown` për përkthim.

Ndonjëherë konvertimi nga `HTML` → `MarkDown` nuk është ai që duam, si p.sh. `<a href="/">Home</a>` të konvertohet në `[Home](/)` .

Shtimi i ndonjë atributi tjetër përveç `href` në etiketën `a` , si p.sh. `<a class="A" href="/">Home</a>` , mund të shmangë këtë konvertim.

## `./i18n/hash` Konflikte Skedarësh Më Poshtë

Fshini skedarët në konflikt dhe ekzekutoni përsëri `i18` përkthim.