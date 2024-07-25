# .i18n/conf.yml

`i18n.site` Konfigurazio fitxategia `.i18n/conf.yml` da.

[`i18`](/i18) `ignore:` eta `i18n:` ezarpenak izan ezik, konfigurazio fitxategia hau da:

```yaml
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Doc
```

Horien artean, `ext:` konfigurazio elementuak esan nahi `upload` `.md` bakarrik igoko dela argitaratzean.

## Goiko Nabigazio Nab

`nav:` konfigurazio aukerak, hasierako orriaren goialdean dagoen nabigazio-menuari dagozkionak.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Horien artean `i18n: home` `en/i18n.yml`中`home: Home` ri dagokio.

`en/i18n.yml` hainbat hizkuntzatara itzuliko da, `zh/i18n.yml` adibidez.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Itzulpena amaitu ondoren, itzulpenaren `yml` alda dezakezu, baina ez gehitu edo ezabatu itzulpenaren `yml` gakoa.

### `use: Toc` , Fitxategi Bakarreko Txantiloia (Eskema Batekin)

`nav` Konfiguratzen :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` `Toc` errendatzea erabiltzea esan nahi du, hau da, `Markdown` txantiloi bakarra errendatzea.

`TOC` `Table of Contents` ren laburdura da txantiloi hau errendatzen denean, `Markdown` fitxategi honen eskema bistaratuko da.

`Markdown` fitxategiaren bidea adierazten `url:` ( `/` erroko direktorioari dagokio `/README.md` , fitxategi-izen honek maiuskulak eta minuskulak atzizkia behar ditu).

### `use: Md` Fitxategi Bakarreko Txantiloia (Eskemarik Gabe)

`Md` `Toc` berdina da, biak `Markdown` fitxategi bakarra errendatzeko erabiltzen dira. Hala ere `Md` txantiloiak ez du eskema erakusten alboko barran.

Goiko konfigurazioan `use: Toc` dezakezu `use: Md` , exekutatu `i18n.site` `md` direktorioan berriro, eta gero bisitatu garapenaren aurrebista URLa hasierako orrialdean dauden aldaketak ikusteko.

### Kargatze Lehenetsia Konfigurazio Biderik Gabe

Sartzen ari den bide jakin baten bide-aurrizkia `nav:` bideari dagokion `MarkDown` fitxategia lehenespenez kargatuko da eta `Md` txantiloiaren bidez errendatuko da.

Adibidez, `/test` bisitatzen baduzu, eta `nav:` bide hau gabe konfiguratuta badago, eta orriaren hizkuntza ingelesa bada (kodea `en` ), txantiloia kargatuko da `/en/test.md` eta erabilita errendatuko da `Md` lehenespenez.

Fitxategi hau existitzen ez `/en/test.md` , lehenetsitako `404` orrialdea bistaratuko da.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Fitxategi Anitzeko Txantiloia

Konfigurazio fitxategian:

```
  - i18n: blog
    use: Doc
```

Txantiloiak errendatzeko `Doc`

`Doc` Txantiloiak `MarkDown` anitz integratzea onartzen du proiektu bakarreko edo anitzeko dokumentuen eskemak sortzeko.

#### Proiektu Bakarra (Fitxategi Anitz)

`blog` goikoan `Doc` proiektu bakarreko modua da.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### url Hutsik Dagoenean, i18n Balio Lehenetsia Du

Ez baduzu idazten `url` `url` `i18n` -ren balioa izango du arau honek beste txantiloietarako ere.

Goiko idazketa-metodoa `url: blog` eta dagokion fitxategia `en/blog/TOC` da.

#### Hainbat Proiektu

`.i18n/conf.yml` `i18n:doc` -ko konfigurazioa proiektu anitzeko modua da.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Hemen, `menu: NB demo1,demo2` `NB` goitibeherako menua errendatzeko erabiltzea esan nahi du.

`NB` , `Name Breif` laburdura da, goitibeherako menuak proiektuaren izena eta leloa bistaratu ditzakeela adierazten duena.

`NB` pasatu zaion `demo1,demo2` parametroa jarraitzen du.
Kontuan izan ez ** `,` `demo1,demo2` aurretik eta ondoren : **

Goiko parametroetarako, dagokion direktorio-indize fitxategia hau da:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Aurkibidea

`js` plugina `.i18n/hook/after.tran/TOC.js` exekutatuko `i18n.site` demo biltegian direktorioaren indize-fitxategia irakurtzeko `doc` txantiloiaren konfigurazioari dagokiona `TOC` direktorioaren eskema `json` sortzeko.

`doc` erabiltzen baduzu, plug-in hau izan behar duzu.

`i18n.site` hutsik dagoen karpeta batetik hasieratzen baduzu, gogoratu demo-proiektuko `.i18n` kopia zure direktorioan.

`Doc` Txantiloiak edukien eskema errendatuko du sortutako `json` .

##### Edukien Azalpen Zehatza

`en/blog/TOC` Edukia honakoa da :

```
README.md

news/README.md
  news/begin.md
```

##### Erabili Koska Mailak Adierazteko

Goian `en/blog/TOC` Lehen lerroko `README.md` beheko irudiko `i18n.site` -ri dagokio, hau da, proiektuaren izena.

Hurrengo bi lerroak beheko pantaila-argazkian erakusten diren bezala daude.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` `News` -ri dagokio
`news/begin.md` `Our Product is Online !` dagokio

`TOC` Fitxategia koska dago eskemaren erlazio hierarkikoa adierazteko eta maila anitzeko koska onartzen du.

##### Gurasoen Mailak Izenburua Bakarrik Idazten Du, Ez Edukia.

Koska-maila anitz daudenean, guraso-mailak izenburua soilik idazten du eta ez edukia. Bestela, tipografia nahastu egingo da.

##### README.md Proiektua 

`README.md` proiektuko, adibidez, edukia `en/demo2/README.md` idatzi dezakezu.

Kontuan izan fitxategi honen edukiak ez duela aurkibiderik erakusten, beraz, luzera mugatzea eta sarrera labur bat idaztea gomendatzen da.

###### Proiektuaren Leloa

Ikus dezakezun bezala `Deme Two` goitibeherako menuaren eta katalogoaren eskemaren izenaren azpian, bere proiektua : `Your Project slogan`

<img alt="" src="https://p.3ti.site/1721276842.avif">

: lehen lerroari dagokio `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

Proiektua `README.md` Lehen mailako izenburuko lehenengo `:` puntuen ondorengo edukia proiektuaren lelotzat hartuko da.

Txinako, Japoniako eta Koreako erabiltzaileek, kontuan izan zabalera erdiko bi puntu erabili behar dituzula bi puntuen ordez `:`

##### Nola Mugitu TOC Soltean?

`TOC` Fitxategia sorburu-hizkuntzaren direktorioan kokatu behar da.

Adibidez, sorburu-hizkuntza txinera bada `TOC` goian `zh/blog/TOC` da.

Sorburu-hizkuntza aldatzen bada, proiektuko hizkuntza jakin bateko `TOC` beste hizkuntza batera eraman behar dituzu.

Komando hauetara jo dezakezu:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Mesedez, aldatu `en/` eta `zh/` goiko komandoan zure hizkuntza-kodearekin.


