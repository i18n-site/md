# Gereelde Vrae

## Byvoeging of Uitvee Van Reëls Van Die Vertaling, Wat Verwarring in Die Vertaling Tot Gevolg Het

> [!WARN]
> Onthou, **die aantal reëls in die vertaling moet ooreenstem met die reëls in die oorspronklike teks** .
> Dit wil sê, wanneer die vertaling met die hand aangepas word, **moenie reëls van die vertaling byvoeg of uitvee nie** , anders sal die karteringverhouding tussen die vertaling en die oorspronklike teks wanordelik wees.

As jy per ongeluk 'n reël byvoeg of uitvee, wat verwarring veroorsaak, herstel asseblief die vertaling na die weergawe voor wysiging, voer `i18` vertaling weer uit en kas die korrekte kartering weer.

Die kartering tussen die vertaling en die oorspronklike teks is gebind aan die teken Skep 'n nuwe teken in [i18n.site/token](//i18n.site/token) vee `.i18h/hash` uit en vertaal weer om die verwarrende kartering uit te vee (maar dit sal veroorsaak dat alle handmatige aanpassings aan die vertaling verlore gaan).

## `YAML` : Hoe Om Te Verhoed Dat Skakel `HTML` Na `Markdown` Omgeskakel Word

'n Waarde van `YAML` word as `MarkDown` vir vertaling hanteer.

Soms is die omskakeling van `HTML` → `MarkDown` nie wat ons wil hê nie, soos `<a href="/">Home</a>` wat na `[Home](/)` omgeskakel word.

Deur enige ander kenmerk as `href` by die `a` merker te voeg, soos `<a class="A" href="/">Home</a>` , kan hierdie omskakeling vermy word.

## `./i18n/hash` Lêerkonflik Hieronder

Vee die botsende lêers uit en herhaal `i18` vertaling.