# .i18n/conf.yml

`i18n.site` ren profila `.i18n/conf.yml` da.

[`i18`](/i18) , `ignore:` eta `i18n:` ezarpenak izan ezik, konfigurazio fitxategia hau da:

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
addon:
  - i18n.addon/toc
```

Horien artean, `upload` `ext:` konfigurazio-elementuak esan nahi du `.md` bakarrik igoko direla argitaratzean.

## Goiko Nabigazio Nab

`nav:` konfigurazio aukerak, hasierako orriaren goialdean dagoen nabigazio menuari dagozkionak.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Horien artean, `i18n: home` `home: Home` in `en/i18n.yml` dagokio.

`en/i18n.yml` hainbat hizkuntzatara itzuliko da, `zh/i18n.yml` adibidez.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Itzulpena amaitu ondoren, itzulpenaren `yml` balioa alda dezakezu, baina ez gehitu edo ezabatu itzulpenaren gakoa `yml` .

### `use: Toc` , Fitxategi Bakarreko Txantiloia (Eskema Batekin)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` `Toc` txantiloi bat erabiliz errendatzea esan nahi du, hau da, `Markdown` txantiloi bakarra errendatzea da.

`TOC` `Table of Contents` laburdura da. Txantiloi hau errendatzen denean, `Markdown` fitxategi honen eskema bistaratuko da alboko barran.

`url:` fitxategiaren bidea adierazten du `Markdown` ( `/` erro direktorioari dagokio `/README.md` , fitxategi-izen honek maiuskulak eta minuskulak atzizkia behar ditu).

### `use: Md` , Fitxategi Bakarreko Txantiloia (Eskemarik Gabe)

`Md` txantiloia eta `Toc` txantiloia berdinak dira eta biak `Markdown` fitxategi bakar bat errendatzeko erabiltzen dira. Baina `Md` txantiloiak ez du eskema erakusten alboko barran.

Goiko konfigurazioan `use: Toc` alda dezakezu `use: Md` , `i18n.site` exekutatu berriro `md` direktorioan eta, ondoren, bisitatu garapenaren aurrebista URLa hasierako orrian aldaketak ikusteko.

### Kargatze Lehenetsia Konfigurazio Biderik Gabe

Bide jakin batera sartzen bada eta bere bide-aurrizkia `nav:` -n konfiguratuta ez badago, bideari dagokion `MarkDown` fitxategia lehenespenez kargatuko da eta `Md` txantiloia erabiliz errendatuko da.

Adibidez, `/test` atzitzen bada, eta `nav:` bide hori gabe konfiguratuta badago eta orriaren hizkuntza ingelesa bada ( `en` kodea), `/en/test.md` lehenespenez kargatuko da eta `Md` txantiloia erabiliz errendatuko da.

`/en/test.md` fitxategi hau existitzen ez bada, lehenetsitako `404` orria bistaratuko da.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Fitxategi Anitzeko Txantiloia

Konfigurazio fitxategian:

```
  - i18n: blog
    use: Doc
```

Txantiloiak errendatzeko `Doc` erabiltzea adierazten du.

`Doc` txantiloiak `MarkDown` anitz integratzea onartzen du proiektu bakarreko edo anitzeko dokumentuen eskemak sortzeko.

#### Proiektu Bakarra (Fitxategi Anitz)

`blog` elementu bakarreko `Doc` modua da.

```
  - i18n: blog
    url: blog
    use: Doc
```

##### url Hutsik Dagoenean, i18n Balio Lehenetsia Du

`url` ez bada idazten, `url` lehenetsiko da `i18n` balioa. Arau honek beste txantiloietarako ere eragina du.

Goiko idazketa-metodoa `url: blog` ren baliokidea da eta dagokion fitxategia `en/blog/TOC` da.

#### Hainbat Proiektu

`i18n:doc` `.i18n/conf.yml` konfigurazioa proiektu anitzeko modua da.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Hemen, `menu: NB demo1,demo2` , goitibeherako menua errendatzeko `NB` txantiloia erabiltzea esan nahi du.

`NB` , hau da, `Name Breif` laburdura da, goitibeherako menuak proiektuaren izena eta leloa bistaratu ditzakeela esan nahi du.

`NB` ondoren `demo1,demo2` parametroa pasatzen zaio.
Oharra : ** Ez da ** egon behar `demo1,demo2` -n `,` aren aurretik eta ondoren.

Goiko parametroetarako, dagokion direktorio-indize fitxategia hau da:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC Aurkibidea

`i18n.site` k `js` plug-in `.i18n/hook/after.tran/TOC.js` exekutatuko du demo biltegian `TOC` txantiloiaren konfigurazioari dagokion `doc` direktorio-indize fitxategia irakurtzeko `json` direktorio-eskema sortzeko.

`doc` txantiloia erabiltzen baduzu, plug-in hau izan behar duzu.

`i18n.site` proiektua hasieratzen baduzu karpeta huts batetik, gogoratu demo-proiektua `.i18n` zure direktorioan kopiatu behar duzula.

`Doc` txantiloiak edukien eskema errendatuko du sortutako `json` oinarrituta.

##### Edukien Azalpen Zehatza

`en/blog/TOC` honako hau da :

```
README.md

news/README.md
  news/begin.md
```

##### Erabili Koska Mailak Adierazteko

Goiko `en/blog/TOC` lehen lerroko `README.md` beheko irudiko `i18n.site` dagokio, hau da, proiektuaren izena.

Hurrengo bi lerroak beheko pantaila-argazkian erakusten diren bezala daude.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` `News` dagokio,
`news/begin.md` `Our Product is Online !` dagokio

`TOC` fitxategiak koska daude eskemaren erlazio hierarkikoa adierazteko, maila anitzeko koska onartzen dute eta `#` hasten diren lerro-iruzkinak.

##### Gurasoen Mailak Izenburua Bakarrik Idazten Du, Ez Edukia.

Koska-maila anitz daudenean, guraso-mailak izenburua soilik idazten du eta ez edukia. Bestela, tipografia nahastu egingo da.

##### README.md Proiektua

Edukia `README.md` elementuan idatz daiteke, adibidez, `en/demo2/README.md` .

Kontuan izan fitxategi honen edukiak ez duela aurkibiderik erakusten, beraz, luzera mugatzea eta sarrera labur bat idaztea gomendatzen da.

###### Proiektuaren Leloa

Ikus `Your Project slogan` `Deme Two` goitibeherako menuan eta katalogoaren eskema-proiektuaren izenaren azpian duela :

![](https://p.3ti.site/1721276842.avif)

Hau `en/demo2/README.md` lehen ilarari dagokio :

```
# Demo Two : Your Project slogan
```

`README.md` proiektuaren lehen mailako tituluaren lehen `:` puntuen ondorengo edukia proiektuaren lelotzat hartuko da.

Txina, Japonia eta Koreako erabiltzaileek, kontuan izan zabalera erdiko `:` puntu erabili behar dituzula zabalera osoko bi puntuen ordez.

##### Nola Mugitu TOC Soltean?

`TOC` fitxategi jarri behar dira iturburu-hizkuntzaren direktorioa.

Adibidez, jatorri-hizkuntza txinera bada, goiko `TOC` `zh/blog/TOC` da.

Sorburu-hizkuntza aldatzen bada, proiektuko hizkuntza jakin bateko `TOC` fitxategiak beste hizkuntza batera eraman behar dituzu.

Komando hauetara jo dezakezu:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Mesedez, aldatu goiko komandoko `en/` eta `zh/` zure hizkuntza kodearekin.