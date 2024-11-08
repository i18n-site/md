# Projekti Versioon

Võtke näitena demoprojekt:

`en/demo2/v` on projekti praeguse versiooni number, mis kuvatakse külgriba kontuuris projekti nimest paremal.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Siin on `en/` keelekood, mis vastab `.i18n/conf.yml` konfigureeritud tõlke lähtekeelele.

Kui teie lähtekeel ei ole inglise keel, tuleks `v` fail paigutada teie lähtekeele projektikataloogi.

Dokumentide ajalooliste versioonide sirvimise võimalus on väljatöötamisel.

Soovitatav on muuta dokumendi versiooninumbrit ainult suuremate värskenduste avaldamisel (nt `v1` , `v2` ), et vältida liiga palju versiooninumbreid, mis põhjustavad segadust otsingumootorite indekseeritud lehtedel.

## Kasutage Tühje `v` Faile, Et Jagada Erinevate Projektide Failiindeksid

Demoprojektis on lisaks `en/demo2/v` -le näha ka seda, et kataloogides `en/blog` ja `en/demo1` on tühjad `v` faili.

Külgriba kontuuris ei kuvata tühja `v` , kuid seni, kuni on olemas `v` fail, genereeritakse kataloogis ja alamkataloogides olevate failide jaoks sõltumatu register.

Erinevate projektide indekseid jagades saate vältida aeglast juurdepääsu, mis on põhjustatud kogu saidi kõigi failide indeksi korraga laadimisest.

Näiteks `blog` -le vastav indeksfail demoprojektis on [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :