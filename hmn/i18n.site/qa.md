# Faq

## Nco Ntsoov Deleted `.i18n/v` , Ua Rau Pob `npm` Tsis Tau Luam Tawm

Cov keeb kwm version tso tawm los ntawm pob `npm` tau txais kev cawmdim hauv `.i18n/v/ol/v.hash` .

Yog tias koj yuam kev rho tawm `.i18n/v/ol` pob `npm` yuav tsis raug tso tawm.

Lub sijhawm no, thawj zaug pom tus lej version ntawm qhov kawg tso tawm ntawm koj qhov project hauv [npmjs.com](//npmjs.com) piv txwv li, `0.1.9` .

Tom qab ntawd xa mus rau `bash` hauv qab no los tsim cov ntaub ntawv.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Nco ntsoov tias kev kho nyob rau hauv txoj kev no yuav poob cov ntaub ntawv keeb kwm, ua rau nws tsis yooj yim sua kom incrementally hloov tshiab tso tawm tom ntej, thiab tag nrho cov ntsiab lus yuav rov ntim dua thiab upload ib zaug.