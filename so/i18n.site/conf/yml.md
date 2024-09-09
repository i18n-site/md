# .i18n/conf.yml

Profile-ka `i18n.site` waa `.i18n/conf.yml` .

Marka laga reebo dejinta [`i18`](/i18) , `ignore:` iyo `i18n:` , faylka qaabeynta waa sida soo socota:

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

Waxaa ka mid ah, `upload` ilaa `ext:` shay qaabeynta macnaheedu waa in `.md` kaliya la soo gelin doono marka la daabacayo.

## nav Navigation Sare

`nav:` , oo u dhiganta liiska navigation ee ku yaal xagga sare ee bogga guriga.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

Waxaa ka mid ah, `i18n: home` waxay u dhigantaa `home: Home` ee `en/i18n.yml` .

`en/i18n.yml` waxaa loo tarjumi doonaa luqado badan, sida `zh/i18n.yml` .

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Ka dib marka turjumaada la dhammeeyo, waxaad wax ka beddeli kartaa qiimaha tarjumaadda `yml` , laakiin ha ku darin hana tirtirin furaha tarjumaadda `yml` .

### `use: Toc` , Hal Qaab Oo Fayl Ah (Oo Leh Dulmar)

`nav` :

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` waxa ay ka dhigan tahay in la isticmaalayo `Toc` template, kaas oo keenaya hal `Markdown` template.

`TOC` waa soo gaabinta `Table of Contents` Marka qaab-dhismeedkan la sameeyo, dulucda `Markdown` faylka waxa lagu soo bandhigi doonaa dhinaca dhinaceeda.

`url:` waxay u taagan tahay dariiqa faylka `Markdown` ( `/` waxay u dhigantaa tusaha xididka `/README.md` , magaca faylkan wuxuu u baahan yahay horgale horgale ah iyo xaraf yar).

### `use: Md` , Hal Qaab Oo Fayl Ah (Aan Lahayn Dulmar)

Habka `Md` iyo template `Toc` waa isku mid oo labadaba waxaa loo isticmaalaa in lagu sameeyo hal `Markdown` fayl. Laakiin `Md` da qaab-dhismeedka ma muujinayo dulucda dhinaca bar-side.

Waxaad wax ka beddeli kartaa `use: Toc` qaabeynta sare waxaadna ka dhigi kartaa `use: Md` , ku socodsii `i18n.site` tusaha `md` mar kale, ka dibna booqo URL-ka horu marinta si aad u ilaaliso isbeddelada bogga hore.

### Soo Dejinta Asalka Ah Iyada Oo Aan Lahayn Dariiqa Qaabeynta

Haddii waddo gaar ah la galo oo horgalayaasha dariiqa aan lagu habeynin `nav:` , faylka `MarkDown` ee u dhigma jidka waxaa lagu rari doonaa si caadi ah waxaana loo gudbin doonaa iyadoo la adeegsanayo `Md` template.

Tusaale ahaan, haddii `/test` la galo, oo `nav:` la habeeyo iyada oo aan jidkan la marin, luqadda boggana ay tahay Ingiriisi (code `en` ), `/en/test.md` waxaa lagu rari doonaa si default ah oo loo sameeyay iyadoo la isticmaalayo template `Md` .

Haddii `/en/test.md` uusan jirin faylkan, `404` bogga caadiga ah ayaa la soo bandhigi doonaa.

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Qaabka Fayl Badan

Faylka qaabeynta:

```
  - i18n: blog
    use: Doc
```

Waxay tusinaysaa adeegsiga `Doc` qaab-samaynta.

`Doc` template wuxuu taageeraa isku-dhafka `MarkDown` badan si loo soo saaro qoraallo dukumeenti ah oo loogu talagalay hal ama dhowr mashruuc.

#### Mashruuc Keli Ah (Faylal Badan)

`blog` kore waa qaabka hal-shay ee `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Marka Url-Ku Madhan Yahay, Waxa Ay Ku Beddeshaa Qiimaha i18n

Haddii `url` aan la qorin, `url` waxay ku dhacaysaa qiimaha `i18n` Xeerkani wuxuu sidoo kale dhaqan galayaa qaabab kale.

Habka qoraalka ee kore wuxuu u dhigmaa `url: blog` , galkiisa u dhigmana waa `en/blog/TOC` .

#### Mashaariic Badan

Qaabeynta `i18n:doc` ee `.i18n/conf.yml` waa qaab mashruucyo badan.

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Halkan, `menu: NB demo1,demo2` , waxay ka dhigan tahay isticmaalka `NB` template si aad u muujiso liiska hoos u dhaca.

`NB` , oo ah soo gaabinta `Name Breif` , waxay la macno tahay in liiska hoos-u-dhaca uu muujin karo magaca iyo hal-ku-dhigga mashruuca.

`NB` waxaa ku xiga halbeegga `demo1,demo2` ee loo gudbiyay.
`demo1,demo2` : ** `,` **

Halbeegyada sare, faylka tusaha u dhigma waa:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Tusmada Tusmada Ka Kooban TOC

`i18n.site` wuxuu fulin doonaa `js` plug-in `.i18n/hook/after.tran/TOC.js` gudaha bakhaarka demo si uu u akhriyo `doc` ta tusaha tusaha ee u dhigma qaabeynta `TOC` template si loo soo saaro `json` hagaha.

Haddii aad isticmaasho `doc` template, waa inaad haysataa fur-in.

Haddii aad mashruuca `i18n.site` ka soo saarto gal madhan, xasuuso inaad koobiyayso mashruuca demo `.i18n` hagahaaga.

Qaabka `Doc` wuxuu soo bandhigayaa shaxda tusmada oo ku salaysan `json` la soo saaray.

##### Sharaxaada Nuxurka Oo Faahfaahsan

`en/blog/TOC` waa sida soo socota :

```
README.md

news/README.md
  news/begin.md
```

##### Isticmaal Galinta Si Aad U Muujiso Heerarka

`README.md` ee safka kowaad ee `en/blog/TOC` ee sare waxa uu u dhigma `i18n.site` ee sawirka hoose, kaas oo ah magaca mashruuca.

Labada sadar ee xiga waa sida ka muuqata sawirka hoose.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

`news/README.md` waxay u dhigantaa `News` ,
`news/begin.md` waxay u dhigantaa `Our Product is Online !`

Faylasha `TOC` ayaa la jeexjeexay si ay u muujiyaan xiriirka kala sareynta ee dulucda, taageer gelinta heerar badan, iyo faallooyinka xariiqa ka bilaabma `#` .

##### Heerka Waalidku Waxa Uu Qoraa Cinwaanka Oo Kaliya, Ee Ma Qoraayo Waxa Ku Jira.

Marka ay jiraan heerar kala duwan oo soo gelis ah, heerka waalidku waxa uu qoraa cinwaanka oo kaliya ee ma qoro waxa ku jira. Haddii kale, qoraal-gacmeedku wuu khalkhalayaa.

##### Mashruuca README.md

Nuxurka waxa lagu qori karaa shayga `README.md` , sida `en/demo2/README.md` .

Ogow in waxa ku jira faylkani aanu muujinayn shaxda nuxurka, sidaa awgeed waxa lagu talinayaa in la xaddido dhererka oo la qoro hordhac gaaban.

###### Halkudhegga Mashruuca

Waxaad arki kartaa in `Deme Two` uu leeyahay sumaddiisa mashruuca oo ka hooseysa liiska hoos-u-dhaca iyo liiska liiska : mashruuca `Your Project slogan` .

![](https://p.3ti.site/1721276842.avif)

Tani waxay u dhigantaa safka koowaad `en/demo2/README.md` :

```
# Demo Two : Your Project slogan
```

Nuxurka ka dambeeya xiidanka `:` ee darajada koowaad ee mashruuca `README.md` waxa loo tixgalin doonaa halku-dhegga mashruuca.

Isticmaalayaasha Shiinaha, Japan iyo Kuuriya, fadlan ogow waa inaad isticmaashaa mindhicirka ballaca badhkiisa `:` halkii aad ka isticmaali lahayd xiidan ballac buuxa ah.

##### Sidee Loo Guuraa TOC Jumlad Ahaan?

`TOC` faylasha waxay u baahan yihiin in la geliyo tusaha luqadda isha.

Tusaale ahaan, haddii luqadda laga soo xigtay ay tahay Shiinaha, markaa `TOC` kor ku xusan waa `zh/blog/TOC` .

Haddii luqadda isha wax laga beddelay, waxaad u baahan tahay inaad u rarto faylasha `TOC` ee luqad gaar ah mashruuca una wareejiso luqad kale.

Waxaad tixraaci kartaa amarada soo socda:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Fadlan wax ka beddel `en/` iyo `zh/` ee amarka sare si aad code luqadaada.