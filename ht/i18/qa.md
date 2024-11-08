# Faq

## Ajoute Oswa Efase Liy Tradiksyon an, Sa Ki Lakòz Konfizyon Nan Tradiksyon An

> [!WARN]
> Sonje byen, **kantite liy ki nan tradiksyon an dwe koresponn ak liy ki nan tèks orijinal la** .
> Sa vle di, lè w ap ajiste tradiksyon an manyèlman, **pa ajoute oswa efase liy tradiksyon an** , otreman relasyon kat tradiksyon an ak tèks orijinal la ap deranje.

Si ou aksidantèlman ajoute oswa efase yon liy, sa ki lakòz konfizyon, tanpri retabli tradiksyon an nan vèsyon an anvan modifikasyon, kouri `i18` tradiksyon ankò, epi re-kache kat ki kòrèk la.

Kat jeyografik ant tradiksyon an ak tèks orijinal la mare nan siy la. Kreye yon nouvo siy nan [i18n.site/token](//i18n.site/token) efase `.i18h/hash` , epi tradui ankò pou efase kat jeyografik la konfizyon (men sa ap lakòz tout ajisteman manyèl nan tradiksyon an ap pèdi).

## `YAML` : Ki Jan Pou Evite Lyen `HTML` Konvèti Nan `Markdown`

Yon valè `YAML` trete kòm `MarkDown` pou tradiksyon.

Pafwa konvèsyon soti nan `HTML` → `MarkDown` se pa sa nou vle, tankou `<a href="/">Home</a>` yo te konvèti nan `[Home](/)` .

Ajoute nenpòt atribi ki pa `href` nan tag `a` a, tankou `<a class="A" href="/">Home</a>` , ka evite konvèsyon sa a.

## `./i18n/hash` Dosye Konfli Anba A

Efase fichye konfli yo epi refè `i18` tradiksyon.