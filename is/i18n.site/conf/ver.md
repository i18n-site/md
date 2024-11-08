# Verkefnaútgáfa

Tökum kynningarverkefnið sem dæmi:

`en/demo2/v` er núverandi útgáfunúmer verkefnisins, sem birtist hægra megin við verkefnisheitið í útlínu hliðarstikunnar.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Hér er `en/` tungumálakóðinn sem samsvarar upprunatungumáli þýðingar sem er stillt með `.i18n/conf.yml` .

Ef frumtungumálið þitt er ekki enska, þá ætti `v` skráin að vera sett í verkefnaskrá frumtungumálsins.

Getan til að skoða sögulegar útgáfur af skjölum er í þróun.

Mælt er með því að breyta útgáfunúmeri skjalsins aðeins þegar meiriháttar uppfærslur eru gefnar út (svo sem `v1` , `v2` ) til að forðast of mörg útgáfunúmer sem valda ringulreið á síðum sem leitarvélar skrásetja.

## Notaðu Tómar `v` Skrár Til Að Skipta Skráarvísitölum Mismunandi Verkefna

Í kynningarverkefninu, auk `en/demo2/v` , geturðu líka séð að það eru tómar `v` skrár í `en/blog` og `en/demo1` möppunum.

Autt `v` mun ekki birtast í útlínum hliðarstikunnar, en svo framarlega sem það er `v` skrá mun sjálfstæð vísitala verða til fyrir skrárnar í möppunni og undirmöppunum.

Með því að skipta upp vísitölum mismunandi verkefna geturðu forðast hægan aðgang sem stafar af því að hlaða skrá yfir allar skrár á öllu síðunni í einu.

Til dæmis er vísitöluskráin sem samsvarar `blog` í kynningarverkefninu [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :