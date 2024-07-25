# Broblem Gyffredin

## Ychwanegu Neu Ddileu Llinellau O'r Cyfieithiad, Gan Arwain at Ddryswch Yn Y Cyfieithiad

Cofiwch, **rhaid i nifer y llinellau yn y cyfieithiad gyfateb i'r llinellau yn y testun gwreiddiol** .

Hynny yw, wrth addasu'r cyfieithiad â llaw, **peidiwch ag ychwanegu neu ddileu llinellau o'r cyfieithiad** , fel arall bydd y berthynas fapio rhwng y cyfieithiad a'r testun gwreiddiol yn cael ei anhrefnu.

Os ydych chi'n ychwanegu neu'n dileu llinell yn ddamweiniol, gan achosi dryswch, a fyddech cystal ag adfer y cyfieithiad i'r fersiwn cyn yr addasiad, rhedeg y cyfieithiad `i18` , ac ail-storio'r mapio cywir.

Mae'r mapio rhwng y cyfieithiad a'r testun gwreiddiol wedi'i rwymo i'r tocyn. Crëwch docyn newydd yn [i18n.site/token](//i18n.site/token) , dileu `.i18h/hash` a chyfieithwch eto i glirio'r mapio dryslyd (ond bydd hyn yn achosi i bob addasiad llaw i'r cyfieithiad gael ei golli).

## `YAML` : I Atal `HTML` Y Ddolen Rhag Cael Ei Throsi I `Markdown`

Bydd gwerth `YAML` yn cael ei drin fel `MarkDown` ar gyfer cyfieithu.

Weithiau nid yw trosi `HTML` → `MarkDown` yr hyn yr ydym ei eisiau, megis `<a href="/">Home</a>` yn cael ei drosi i `[Home](/)` .

Ychwanegwch unrhyw briodwedd heblaw `href` i'r tag `a` , megis `<a class="A" href="/">Home</a>` , i osgoi'r trosiad hwn.

## `./I18n/Hash` Ffeiliau Canlynol Yn Gwrthdaro

Dileu'r ffeiliau sy'n gwrthdaro ac ail-redeg Cyfieithu `i18`
