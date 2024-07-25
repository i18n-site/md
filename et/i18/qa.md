# Levinud Probleem

## Tõlke Ridade Lisamine Või Kustutamine, Mis Põhjustab Tõlkes Segadust

Pidage meeles, **et tõlke ridade arv peab vastama originaalteksti ridadele** .

See tähendab, et tõlke käsitsi kohandamisel **ärge lisage ega kustutage tõlke ridu** , vastasel juhul on tõlke ja originaalteksti vaheline vastendussuhe häire.

Kui lisate või kustutate kogemata rea, tekitades segadust, taastage tõlge enne muutmist, käivitage tõlge `i18` ja salvestage õige vastendus uuesti vahemällu.

Tõlke ja originaalteksti vaheline vastendus on seotud märgiga. Looge uus `.i18h/hash` [i18n.site/token](//i18n.site/token)

## `YAML` : Vältida Lingi `HTML` Teisendamist `Markdown` -Ks

Väärtust `YAML` käsitletakse tõlkimisel kui `MarkDown` .

Mõnikord ei ole `HTML` → `MarkDown` teisendamine see, mida me tahame, näiteks `<a href="/">Home</a>` teisendamine `[Home](/)` .

Selle teisenduse vältimiseks `<a class="A" href="/">Home</a>` `href` `a`

## Järgmised Failid on `./I18n/Hash`

Kustutage vastuolulised failid ja käivitage uuesti `i18`
