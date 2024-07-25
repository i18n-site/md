# .i18n/conf.yml

Faylka qaabeynta waa `.i18n/conf.yml` `i18n.site`

Marka laga reebo `ignore:` iyo `i18n:` settings of [`i18`](/i18) faylka qaabeynta waa sida soo socota:

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

Waxaa ka mid ah, shayga `ext:` qaabaynta ee `upload` waxay ka dhigan tahay in `.md` kaliya la soo gelin doono marka la daabacayo.

## nav Navigation Sare

Xulashada qaabeynta, `nav:` u dhiganta liiska navigation ee ku yaal xagga sare ee bogga hoyga.

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

`en/i18n.yml` ka mid `home: Home` , `i18n: home`

Waxaa loo tarjumi doonaa luqado badan, sida `zh/i18n.yml` `en/i18n.yml`

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

Ka dib marka turjumaada la dhammeeyo, waxaad wax ka beddeli kartaa `yml` `yml`

### `use: Toc` Hal Qaab Oo Fayl Ah (Oo Leh Dulmar)

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

macneheedu `use: Toc` isticmaalka `Toc` rendering, kaas oo samaynaya hal qaab `Markdown` .

`TOC` soo-gaabista `Table of Contents` `Markdown`

`url:` `/` `/README.md` dhigan tahay dariiqa faylka ee `Markdown`

### `use: Md` Hal Qaab Oo Fayl Ah (Wax Dulmar Ah Malaha)

`Md` waa isku mid sida `Toc` , labadaba waxaa loo isticmaalaa in lagu sameeyo `Markdown` fayl. Si kastaba ha ahaatee `Md` habku ma tusin dulucda dhinaca bar-side.

Waxaad wax ka `use: Toc` kartaa qaabeynta kore si aad u `use: Md` , socodsiiso `i18n.site` ku jira tusaha `md` mar kale, ka dibna booqo URL-ka horu marinta si aad u aragto isbeddellada bogga hore.

### Soo Dejinta Asalka Ah Iyada Oo Aan Lahayn Dariiqa Qaabeynta

Haddii horgalaha waddo gaar ah oo la gelayo aan lagu habayn `nav:` faylka `MarkDown` u dhigma waddada waxa lagu shubi doonaa si caadi ah waxaana loo samayn doonaa iyadoo la isticmaalayo `Md` template.

Tusaale ahaan, haddii aad booqato `/test` oo `nav:` la habeeyey la'aantiis, oo luqadda boggu ay tahay Ingiriisi (code `en` ), qaab-dhismeedka ayaa lagu shubi doonaa `/en/test.md` oo la isticmaalayaa `Md` si toos ah.

`404` `/en/test.md`

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , Qaabka Faylka Badan

Faylka qaabeynta:

```
  - i18n: blog
    use: Doc
```

`Doc` tusinaysaa adeegsiga qaab-samaynta.

`Doc` Template waxa uu taageeraa isku dhafka `MarkDown` si loo soo saaro qoraallo dukumeenti ah oo loogu talagalay hal ama dhowr mashruuc.

#### Mashruuc Keli Ah (Faylal Badan)

`blog` kor ku xusan waa habka hal-mashruuc ee `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### Marka Url-Ku Madhan Yahay, Waxa Ay Ku Beddeshaa Qiimaha i18n

Haddii aadan qorin `url` `url` dhimaya qiimaha `i18n` .

Habka qoraalka sare wuxuu u dhigmaa inuu haysto `url: blog` galkiisa u dhigmana waa `en/blog/TOC` .

#### Mashaariic Badan

Qaabeynta `i18n:doc` waa qaab mashruucyo badan `.i18n/conf.yml`

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

Halkan, `menu: NB demo1,demo2` waxay ka dhigan tahay adeegsiga `NB` si loo sameeyo liiska hoos-u-dhaca.

`NB` waa soo gaabin `Name Breif`

`NB` ku xiga halbeegga `demo1,demo2` loo gudbiyo.
Ogsoonow in aysan jirin boosas ** ka `demo1,demo2` iyo kadib hakadka `,` gudaha : **

Halbeegyada sare, faylka tusaha u dhigma waa:

* `en/demo1/TOC`
* `en/demo2/TOC`

#### Tusmada Tusmada Ka Kooban TOC

Wuxuu fulin doonaa `js` plugin `.i18n/hook/after.tran/TOC.js` ee bakhaarka demo si `i18n.site` u akhriyo tusaha tusaha `doc` oo u dhiganta qaabeynta template `TOC` si loo dhaliyo `json` dulucda tusaha.

Haddii aad isticmaasho `doc` , waa inaad haysataa fur-in.

Haddii aad `.i18n` soo bilawdo mashruuca `i18n.site`

`Doc` waxay soo bandhigaysaa shaxda tusmada oo ku salaysan `json` .

##### Sharaxaada Nuxurka Oo Faahfaahsan

Dulucda waa sida soo : `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### Isticmaal Galinta Si Aad U Muujiso Heerarka

Xagga `en/blog/TOC` ee `README.md` safka kowaad wuxuu u dhigmaa `i18n.site` ee sawirka hoose, oo ah magaca mashruuca.

Labada sadar ee xiga waa sida ka muuqata sawirka hoose.

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

waxay u dhigantaa `News` `news/README.md`
waxay u dhigantaa `Our Product is Online !` `news/begin.md`

Faylka waa la jeexjeexay si `TOC` u muujiyo xiriirka kala sareynta ee dulucda oo wuxuu taageeraa gelitaan heerar badan ah.

##### Heerka Waalidku Waxa Uu Qoraa Cinwaanka Oo Kaliya, Ee Ma Qoraayo Waxa Ku Jira.

Marka ay jiraan heerar kala duwan oo soo gelis ah, heerka waalidku waxa uu qoraa cinwaanka oo kaliya ee ma qoro waxa ku jira. Haddii kale, qoraal-gacmeedku wuu khalkhalayaa.

##### Mashruuca README.md 

`README.md` mashruuca, tusaale ahaan, waxaad ku qori kartaa nuxurka `en/demo2/README.md` .

Ogow in waxa ku jira faylkani aanu muujinayn shaxda nuxurka, sidaa awgeed waxa lagu talinayaa in la xaddido dhererka oo la qoro hordhac gaaban.

###### Halkudhegga Mashruuca

Sida aad arki `Your Project slogan` : `Deme Two`

<img alt="" src="https://p.3ti.site/1721276842.avif">

: waxay u dhigantaa safka hore `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

`README.md` `:`

Isticmaalayaasha Shiinaha, Japan iyo Kuuriya, fadlan ogow waa inaad isticmaashaa mindhicirka ballaca badhkii `:`

##### Sidee Loo Guuraa TOC Jumlad Ahaan?

Faylka `TOC` u baahan yahay in la geliyo tusaha luqadda.

Tusaale ahaan, haddii luqadda laga soo xigtay ay tahay Shiinaha, markaa `TOC` waa `zh/blog/TOC` .

Haddii luqadda isha wax laga beddelay, waxaad u baahan tahay inaad u rarto `TOC` luuqad gaar ah oo mashruuca ku jira oo aad u guurto luqad kale.

Waxaad tixraaci kartaa amarada soo socda:

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

Fadlan wax ka beddel `en/` `zh/` ku qor amarka sare summada luqaddaada


