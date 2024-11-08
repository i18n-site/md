# Kkk

## Tõlke Ridade Lisamine Või Kustutamine, Mis Põhjustab Tõlkes Segadust

> [!WARN]
> Pidage meeles, **et tõlke ridade arv peab vastama originaalteksti ridadele** .
> See tähendab, et tõlke käsitsi kohandamisel **ärge lisage ega kustutage tõlke ridu** , vastasel juhul on tõlke ja originaalteksti vaheline vastendussuhe häire.

Kui lisate või kustutate kogemata rea, tekitades segadust, taastage tõlge enne muutmist versioonile, käivitage uuesti tõlge `i18` ja salvestage õige vastendus uuesti vahemällu.

Tõlke ja originaalteksti vaheline vastendus seotakse märgiga. Looge uus märgis [i18n.site/token](//i18n.site/token) kustutage `.i18h/hash` ja tõlkige uuesti, et segane vastendus tühjendada (kuid see põhjustab tõlke käsitsi kohandamise kaotsi).

## `YAML` : Vältida Lingi `HTML` Teisendamist `Markdown`

Väärtust `YAML` käsitletakse tõlkimisel kui `MarkDown` .

Mõnikord ei ole `HTML` → `MarkDown` teisendamine see, mida me tahame, näiteks `<a href="/">Home</a>` teisendatakse `[Home](/)` .

Kui lisate märgendile `a` mis tahes muu atribuudi peale `href` , näiteks `<a class="A" href="/">Home</a>` , saate seda teisendust vältida.

## `./i18n/hash` Faili Konflikti Allpool

Kustutage vastuolulised failid ja käivitage `i18` uuesti.