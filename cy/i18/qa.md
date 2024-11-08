# Faq

## Ychwanegu Neu Ddileu Llinellau O'r Cyfieithiad, Gan Arwain at Ddryswch Yn Y Cyfieithiad

> [!WARN]
> Cofiwch, **rhaid i nifer y llinellau yn y cyfieithiad gyfateb i'r llinellau yn y testun gwreiddiol** .
> Hynny yw, wrth addasu'r cyfieithiad â llaw, **peidiwch ag ychwanegu neu ddileu llinellau o'r cyfieithiad** , fel arall bydd y berthynas fapio rhwng y cyfieithiad a'r testun gwreiddiol yn cael ei anhrefnu.

Os ydych chi'n ychwanegu neu'n dileu llinell yn ddamweiniol, gan achosi dryswch, a fyddech cystal ag adfer y cyfieithiad i'r fersiwn cyn ei addasu, rhedeg `i18` cyfieithiad eto, ac ail-storio'r mapio cywir.

Mae'r mapio rhwng y cyfieithiad a'r testun gwreiddiol wedi'i rwymo i'r tocyn. Crëwch docyn newydd yn [i18n.site/token](//i18n.site/token) dilëwch `.i18h/hash` , a chyfieithwch eto i glirio'r mapio dryslyd (ond bydd hyn yn achosi i bob addasiad llaw i'r cyfieithiad gael ei golli).

## `YAML` : Sut I Osgoi Trosi Dolen `HTML` I `Markdown`

Mae gwerth `YAML` yn cael ei drin fel `MarkDown` ar gyfer cyfieithu.

Weithiau nid y trosiad o `HTML` → `MarkDown` yw'r hyn yr ydym ei eisiau, fel trosi `<a href="/">Home</a>` i `[Home](/)` .

Gall ychwanegu unrhyw briodwedd heblaw `href` at y tag `a` , megis `<a class="A" href="/">Home</a>` , osgoi'r trosiad hwn.

## `./i18n/hash` Ffeil Yn Gwrthdaro Isod

Dileu'r ffeiliau sy'n gwrthdaro ac ail-redeg `i18` cyfieithiad.