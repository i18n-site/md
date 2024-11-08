# .i18n/conf.yml

`i18n.site` ren konfigurazio-fitxategia `.i18n/conf.yml` da eta edukia honakoa da :

```yaml
i18n:
  fromTo:
    en:
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
    use: Blog
addon:
  - i18n.addon/toc
```

Horien artean, `upload` `ext:` konfigurazio-elementuak esan nahi du `.md` bakarrik igoko direla argitaratzean.

## Goiko Nabigazio Nab

`nav:` konfigurazio aukerak, hasierako orriaren goialdean dagoen nabigazio menuari dagozkionak.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Horien artean, `i18n: home` `home: Home` in `en/i18n.yml` dagokio (non `en` da proiektuaren itzulpenaren sorburu hizkuntza).

`en/i18n.yml` edukia nabigazio menuan bistaratzen den testua da, konfigurazioan `fromTo` arabera itzuliko dena, adibidez, `zh/i18n.yml` itzulita.

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Itzulpena amaitu ondoren, itzulpenaren `yml` balioa alda dezakezu, baina ez gehitu edo ezabatu itzulpenaren gakoa `yml` .

### `use: Toc` Txantiloia Eskemarekin

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` `Toc` txantiloi bat erabiliz errendatzea esan nahi du, hau da, `Markdown` txantiloi bakarra errendatzea da.

`TOC` `Table of Contents` laburdura da. Txantiloi hau errendatzen denean, `Markdown` fitxategi honen eskema bistaratuko da alboko barran.

`url:` fitxategiaren bidea adierazten du `Markdown` ( `/` erro direktorioari dagokio `/README.md` , fitxategi-izen honek maiuskulak eta minuskulak atzizkia behar ditu).

### `use: Md` Bakarreko Txantiloia Eskemarik Gabe

`Md` txantiloia eta `Toc` txantiloia berdinak dira eta biak `Markdown` fitxategi bakar bat errendatzeko erabiltzen dira. Baina `Md` txantiloiak ez du eskema erakusten alboko barran.

Goiko konfigurazioan `use: Toc` alda dezakezu `use: Md` , `i18n.site` exekutatu berriro `md` direktorioan eta, ondoren, bisitatu garapenaren aurrebista URLa hasierako orrian aldaketak ikusteko.

### `use: Blog` Blog Txantiloiak

Blog txantiloiak artikuluen zerrenda (izenburuak eta laburpenak) bistaratzen du, argitalpen denboraren arabera.

[→ Egin klik hemen konfigurazio zehatzari buruz jakiteko](/i18n.site/conf/blog)

### `use: Doc` Dokumentu-Txantiloiak

Konfigurazio fitxategian:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Txantiloiak errendatzeko `Doc` erabiltzea adierazten du.

`Doc` txantiloiak `MarkDown` anitz integratzea onartzen du proiektu bakarreko edo anitzeko dokumentuen eskemak sortzeko.

#### Hainbat Proiektu Eta Hainbat Fitxategi

`.i18n/conf.yml` in `i18n:doc` en konfigurazioa proiektu anitzeko fitxategi anitzeko errendatze modua da.

Hemen, `menu: NB demo1,demo2` , goitibeherako menua errendatzeko `NB` txantiloia erabiltzea esan nahi du.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , hau da, `Name Breif` laburdura da, goitibeherako menuak proiektuaren izena eta leloa bistaratu ditzakeela esan nahi du.

`NB` ondoren `demo1,demo2` parametroa pasatzen zaio.

Oharra : ** Ez da ** egon behar `demo1,demo2` -n `,` -aren aurretik eta ondoren.

Goiko parametroetarako dagokion direktorio-indize fitxategia hau da:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Proiektu Bakarreko Hainbat Fitxategi

Proiektu bakarra baduzu, honela konfigura dezakezu.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Fitxategi ugari dituen proiektu bakarrak ez du onartzen `url` erroko bide gisa `/` konfiguratzea
> __conf.yml → nav:__ Erro biderik ez badago konfiguratuta, webgunearen hasierako orrialdera sartzean, automatikoki berridatziko da lehen URLra `nav:` konfigurazioan.
> Diseinu hau direktorioen bidez proiektuen dokumentuak, blogak eta bestelako edukiak hobeto bereiztea da.
> Fitxategi bakarra eta orri bakarra erabiltzea gomendatzen da hasierako orri gisa.

> [!TIP]
> `url` ez bada idazten, `url` lehenetsiko da `i18n` balioa. Arau honek beste txantiloietarako ere eragina du.

#### TOC Aurkibidea

Konfigurazioan `use: Doc` txantiloia gaituta badago, mesedez gaitu plug-in `i18n.addon/toc` in `.i18n/conf.yml` Konfigurazioa honako hau da :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` automatikoki instalatu eta exekutatu egingo du plug-in hau, `TOC` direktorio-indize fitxategia irakurriko du eta `json` direktorioaren eskema sortuko du.

Fitxategi anitz dituen proiektu bakarra bada, `TOC` erro-direktorioa iturburu-hizkuntzaren direktorioko `url:` -ari dagokion direktorioa da. Adibidez, iturburu-hizkuntza txinera bada: `url: flashduty` -ri dagokion fitxategia `zh/flashduty/TOC` da.

Hainbat proiektu eta hainbat fitxategi badira, ez dago `url:` konfiguratu beharrik. `TOC` ren erro-direktorioa `i18n` -ren balioari dagokion direktorioa da.

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

`TOC` fitxategiak koska daude eskemaren erlazio hierarkikoa adierazteko, maila anitzeko koska onartzen dute eta `# ` hasten diren lerro-iruzkinak.

##### Gurasoen Mailak Izenburua Bakarrik Idazten Du, Ez Edukia.

Koska-maila anitz daudenean, guraso-mailak izenburua soilik idazten du eta ez edukia. Bestela, tipografia nahastu egingo da.

##### README.md Proiektua

Edukia `README.md` elementuan idatz daiteke, adibidez, `en/demo2/README.md` .

Kontuan izan fitxategi honen edukiak ez duela aurkibiderik erakusten, beraz, luzera mugatzea eta sarrera labur bat idaztea gomendatzen da.

###### Proiektuaren Leloa

Ikus dezakezu `Deme Two` goitibeherako menuan eta katalogoaren eskema `Your Project slogan` proiektuaren izenaren azpian duela :

![](https://p.3ti.site/1721276842.avif)

Hau `en/demo2/README.md` -ren lehen ilarari dagokio :

```
# Demo Two : Your Project slogan
```

`README.md` proiektuaren lehen mailako tituluaren lehen `:` puntuen ondorengo edukia proiektuaren lelotzat hartuko da.

Txina, Japonia eta Koreako erabiltzaileek, kontuan izan zabalera erdiko `:` bi puntu erabili behar dituzula zabalera osoko bi puntuen ordez.

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

### Kargatze Lehenetsia Konfigurazio Biderik Gabe

Bide jakin batera sartzeko, bide-aurrizkia `nav:` -n konfiguratuta ez badago, bideari dagokion `MarkDown` fitxategia lehenespenez kargatuko da eta `Md` txantiloia erabiliz errendatuko da.

Adibidez, `/test` atzitzen bada eta `nav:` bide honen aurrizkirik gabe konfiguratzen bada, eta uneko arakatze-hizkuntza ingelesa bada ( `en` kodea), `/en/test.md` lehenespenez kargatuko da eta `Md` txantiloia erabiliz errendatuko da.

`/en/test.md` fitxategi hau existitzen ez bada, lehenetsitako `404` orria bistaratuko da.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">