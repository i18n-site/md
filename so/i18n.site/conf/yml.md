# .i18n/conf.yml

Faylka qaabeynta ee `i18n.site` waa `.i18n/conf.yml` nuxurkuna waa sida soo socota :

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

Waxaa ka mid ah, `upload` ilaa `ext:` shay qaabeynta macnaheedu waa in `.md` kaliya la soo gelin doono marka la daabacayo.

## nav Navigation Sare

`nav:` , oo u dhiganta liiska navigation ee ku yaal xagga sare ee bogga hoyga.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Waxaa ka mid ah, `i18n: home` waxay u dhigantaa `home: Home` ee `en/i18n.yml` (halka `en` ay tahay luqadda isha ee tarjumaada mashruuca).

`en/i18n.yml` content waa qoraalka lagu soo bandhigay menu navigation, kaas oo loo turjumi doono si waafaqsan `fromTo` qaabeynta, tusaale ahaan, loo tarjumay `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Ka dib marka turjumaada la dhammeeyo, waxaad wax ka beddeli kartaa qiimaha tarjumaadda `yml` , laakiin ha ku darin hana tirtirin furaha tarjumaadda `yml` .

### `use: Toc` Dukumeenti Kali Ah Oo Leh Dulmar

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` waxa ay ka dhigan tahay in la isticmaalayo `Toc` template, kaas oo keenaya hal `Markdown` template.

`TOC` waa soo gaabinta `Table of Contents` Marka templateka la sameeyo, dulucda `Markdown` faylkan waxa lagu soo bandhigi doonaa dhinaca dhinaceeda.

`url:` waxay u taagan tahay dariiqa faylka `Markdown` ( `/` waxay u dhigantaa tusaha xididka `/README.md` , magaca faylkan wuxuu u baahan yahay horgale horgale ah iyo xaraf yar).

### `use: Md` Ee Aan Dulmar Lahayn

Habka `Md` iyo template `Toc` waa isku mid oo labadaba waxaa loo isticmaalaa in lagu sameeyo hal `Markdown` fayl. Laakiin `Md` da qaab-dhismeedka ma muujinayo dulucda dhinaca bar-side.

Waxaad wax ka beddeli kartaa `use: Toc` qaabeynta sare waxaadna ka dhigi kartaa `use: Md` , ku socodsii `i18n.site` tusaha `md` mar kale, ka dibna booqo URL-ka horu marinta si aad u ilaaliso isbeddelada bogga hore.

### `use: Blog` Qaababka Blog

Qaabka blogku wuxuu soo bandhigayaa liiska maqaallada (ciwaanada iyo qoraallada) siday u kala horreeyaan wakhtiga daabacaadda.

[→ Halkan guji si aad wax uga ogaato habaynta gaarka ah](/i18n.site/conf/blog)

### `use: Doc` Dukumeenti Faylal Badan

Faylka qaabeynta:

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

Waxay tusinaysaa adeegsiga `Doc` qaab-samaynta.

`Doc` template wuxuu taageeraa isku-dhafka `MarkDown` badan si loo soo saaro qoraallo dukumeenti ah oo loogu talagalay hal ama dhowr mashruuc.

#### Mashaariic Badan Iyo Faylal Badan

Qaabaynta `.i18n/conf.yml` ee `i18n:doc` waa qaab samaynta fayl badan oo mashruucyo badan ah.

Halkan, `menu: NB demo1,demo2` , waxay ka dhigan tahay isticmaalka `NB` template si aad u muujiso liiska hoos u dhaca.

<img src="//p.3ti.site/1721275191.avif" width="320px">

`NB` , oo ah soo gaabinta `Name Breif` , waxay la macno tahay in liiska hoos-u-dhaca uu muujin karo magaca iyo hal-ku-dhigga mashruuca.

`NB` waxaa raacaya halbeegga `demo1,demo2` ee loo gudbiyay.

`demo1,demo2` : ** `,` **

Faylka tusaha u dhigma ee cabbirrada sare waa:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Mashruuc Kaliya Oo Faylal Badan Ah

Haddii aad leedahay hal mashruuc, waxaad u habeyn kartaa sida soo socota.

```
  - i18n: doc
    url: flashduty
    use: Doc
```

> [!WARN]
> Mashruuc keli ah oo leh faylal badan ma taageerayo u habeynta `url` sida dariiqa xididka `/`
> nav:__ __conf.yml `nav:`
> Naqshadeyntan ayaa ah in si wanaagsan loo kala saaro dukumeentiyada mashruuca, blogyada iyo waxyaabaha kale iyada oo loo marayo hagayaal.
> Waxaa lagu talinayaa in la isticmaalo hal fayl iyo hal bog sida bogga guriga.

> [!TIP]
> Haddii `url` aan la qorin, `url` waxay ku dhacaysaa qiimaha `i18n` Xeerkani wuxuu sidoo kale dhaqan galayaa qaabab kale.

#### Tusmada Tusmada Ka Kooban TOC

Haddii template `use: Doc` uu karti u yeesho qaabaynta, fadlan awood fur-in `i18n.addon/toc` in `.i18n/conf.yml` Qaabayntu waa sida soo socota :

```yml
addon:
  - i18n.addon/toc
```

`i18n.site` si toos ah ayuu u rakibi doonaa oo u fulin doonaa fur-in, akhri `TOC` faylka tusaha tusaha, oo soo saari doona `json` dulucda tusaha.

Haddii ay tahay hal mashruuc oo leh faylal badan, tusaha xididka `TOC` waa tusaha u dhigma `url:` ee buugga tusaha luqadda, tusaale ahaan, haddii luqadda isha ay tahay Shiine: faylka u dhigma `url: flashduty` waa `zh/flashduty/TOC` .

Haddii ay tahay mashruucyo badan iyo faylal badan, looma baahna in la habeeyo `url:` Tusaha xididka `TOC` waa tusaha u dhigma qiimaha `i18n` .

##### Sharaxaada Nuxurka Oo Faahfaahsan

`en/blog/TOC` waa sida soo socota :

```
README.md

news/README.md
  news/begin.md
```

##### Isticmaal Galinta Si Aad U Muujiso Heerarka

`README.md` ee safka koowaad ee `en/blog/TOC` ee sare wuxuu u dhigmaa `i18n.site` ee sawirka hoose, kaas oo ah magaca mashruuca.

Labada sadar ee xiga waa sida ka muuqata sawirka hoose.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` waxay u dhigantaa `News` ,
`news/begin.md` waxay u dhigantaa `Our Product is Online !`

Faylasha `TOC` ayaa la jeexjeexay si ay u muujiyaan xiriirka kala sareynta ee dulucda, taageer gelinta heerar badan, iyo faallooyinka xariiqa ka bilaabma `# ` .

##### Heerka Waalidku Waxa Uu Qoraa Cinwaanka Oo Kaliya, Ee Ma Qoraayo Waxa Ku Jira.

Marka ay jiraan heerar kala duwan oo soo gelis ah, heerka waalidku waxa uu qoraa cinwaanka oo kaliya ee ma qoro waxa ku jira. Haddii kale, qoraal-gacmeedku wuu khalkhalayaa.

##### Mashruuca README.md

Nuxurka waxa lagu qori karaa shayga `README.md` , sida `en/demo2/README.md` .

Ogow in waxa ku jira faylkani aanu muujinayn shaxda nuxurka, sidaa awgeed waxa lagu talinayaa in la xaddido dhererka oo la qoro hordhac gaaban.

###### Halkudhegga Mashruuca

Waxaad arki kartaa in `Deme Two` uu leeyahay sumad mashruuceed oo ka `Your Project slogan` :

![](https://p.3ti.site/1721276842.avif)

Tani waxay u dhigantaa safka koowaad ee `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Nuxurka ka dambeeya xiidanka `:` ee darajada koowaad ee mashruuca `README.md` waxa loo tixgalin doonaa halku-dhegga mashruuca.

Isticmaalayaasha Shiinaha, Japan iyo Kuuriya, fadlan ogow waa inaad isticmaashaa mindhicirka ballaca badhkiisa `:` halkii aad ka isticmaali lahayd xiidan ballac buuxa ah.

##### Sidee Loo Guuraa TOC Jumlad Ahaan?

`TOC` faylasha waxay u baahan yihiin in la geliyo tusaha luqadda isha.

Tusaale ahaan, haddii luqadda asalka ahi tahay Shiinees, markaa `TOC` kor ku xusan waa `zh/blog/TOC` .

Haddii luqadda isha wax laga beddelay, waxaad u baahan tahay inaad u rarto faylasha `TOC` ee luqad gaar ah mashruuca una wareejiso luqad kale.

Waxaad tixraaci kartaa amarada soo socda:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Fadlan wax ka beddel `en/` iyo `zh/` ee amarka sare si aad code luqadaada.

### Soo Dejinta Asalka Ah Iyada Oo Aan Lahayn Dariiqa Qaabeynta

Waddo gaar ah oo la gelayo, haddii horgalaha dariiqa aan lagu habeynin `nav:` , faylka `MarkDown` ee u dhiganta dariiqa waxaa lagu rari doonaa si caadi ah waxaana loo adeegsan doonaa qaabka `Md` .

Tusaale ahaan, haddii `/test` la galo oo `nav:` la habeeyo iyadoon horgalaha waddadan, luqadda wax lagu baadhona ay tahay Ingiriisi (code `en` ), `/en/test.md` waxaa lagu shubi doonaa si default ah oo loo sameeyay iyadoo la adeegsanayo template `Md` .

Haddii `/en/test.md` uusan jirin faylkan, `404` bogga caadiga ah ayaa la soo bandhigi doonaa.

<img src="//p.3ti.site/1721184299.avif" style="width:360px">