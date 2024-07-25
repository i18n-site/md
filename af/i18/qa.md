# Algemene Probleem

## Byvoeging of Uitvee Van Reëls Van Die Vertaling, Wat Verwarring in Die Vertaling Tot Gevolg Het

Onthou, **die aantal reëls in die vertaling moet ooreenstem met die reëls in die oorspronklike teks** .

Dit wil sê, wanneer die vertaling met die hand aangepas word, **moenie reëls van die vertaling byvoeg of uitvee nie** , anders sal die karteringverhouding tussen die vertaling en die oorspronklike teks wanordelik wees.

As jy per ongeluk 'n reël byvoeg of uitvee, wat verwarring veroorsaak, herstel asseblief die vertaling na die weergawe voor die wysiging, voer die vertaling `i18` uit en kas die korrekte kartering weer.

Die kartering tussen die vertaling en die oorspronklike teks is gebonde aan die token. Skep 'n nuwe token in [i18n.site/token](//i18n.site/token) `.i18h/hash` en vertaal weer om die verwarrende kartering skoon te maak (maar dit sal veroorsaak dat alle handmatige aanpassings aan die vertaling verlore gaan).

## `YAML` : Om Te Verhoed Dat `HTML` Van Die Skakel Na `Markdown` Omgeskakel Word

Die waarde van `YAML` sal as `MarkDown` vir vertaling hanteer word.

Soms is die omskakeling van `HTML` `MarkDown` nie wat ons wil hê nie, soos `<a href="/">Home</a>` word omgeskakel na `[Home](/)` .

Voeg enige ander kenmerk as `href` by die `a` , soos `<a class="A" href="/">Home</a>` , om hierdie omskakeling te vermy.

## `./I18n/Hash` Die Volgende Lêers Konflik

Vee die botsende lêers uit en herloop Vertaal `i18`
