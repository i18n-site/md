# Projekti Versioon

Võtke näitena demoprojekt:

`en/demo2/v` on projekti praeguse versiooni number, mis kuvatakse külgriba kontuuris projekti nimest paremal.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

`en/` on `.i18n/conf.yml` tõlke lähtekeelele vastav keelekood.

Kui teie lähtekeel ei ole inglise keel, tuleks `v` paigutada teie lähtekeele projektikataloogi. 

Dokumentide ajalooliste versioonide sirvimise võimalus on väljatöötamisel.

Suuremate värskenduste (nt `v1` , `v2` ) avaldamisel on soovitatav muuta ainult dokumendi versiooninumbrit, et vältida otsingumootorite indekseeritud lehtede risustamist liiga paljude versiooninumbrite tõttu.

## Kasutage Tühje `v` -Faile Failiindeksite Jagamiseks Erinevate Projektide Jaoks

Demoprojektis näete lisaks `en/demo2/v` -le, et kataloogide `en/blog` ja `en/demo1` sisu on tühi `v` failid.

Empty `v` ei kuvata külgriba kontuuris, kuid seni, kuni `v` fail on olemas, luuakse kataloogis ja alamkataloogides olevate failide jaoks sõltumatu register.

Erinevate projektide indekseid jagades saate vältida aeglast juurdepääsu, mis on põhjustatud kogu saidi kõigi failide indeksi korraga laadimisest.

Näiteks demoprojektis : vastav [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) `blog`

