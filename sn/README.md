<h1 style="justify-content:space-between">3Ti.Site · Pfungwa dzisina miganhu<img src="//i-01.eu.org/i18n/logo.svg" style="width:42px;margin-top:-1px"></h1>

3Ti.Site, jenareta yesaiti yemitauro yakawanda, inokwanisa kushandura Markdown [mumitauro inodarika zana yakasiyana](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Vamwe vanhu vangangoda kubvunza, sezvo mabhurawuza ane akavakirwa-mukati mabasa eshanduro, hazvina basa here kuita kuti webhusaiti iyi ive nenyika?

Ndinoda kutaura kuti **nekuita saiti yese pasi rese tinogona kutsigira mitauro yakawanda-in-saiti yakazara-zvinyorwa kutsvaga uye kutsvaga injini optimization** .

## Zvinoteverana

"Bhaibheri Genesisi":

> Vanhu vekare vaisasiyanisa mitauro. Vakaberekwa vachizvikudza uye vaida kuvaka shongwe refu ine musoro unosvika kudenga.
> <blockquote><p>Mwari haana kufadzwa nokuzvikudza kwomunhu, saka akaparadzira zvisikwa zvipenyu munzvimbo dzakasiyana-siyana, zvisingakwanisi kunzwisisa mumwe nomumwe.</p></blockquote>
> <blockquote><p>Kubvira ipapo, kwave kwakaomera vanhu kukurukura, kukakavadzana kwakapfuurira, uye hakuna Shongwe yeBhabheri munyika.</p></blockquote>

Iro sainzi ngano inonyorwa &quot;Miviri Mitatu&quot; (Mataurirwo echiChinese: `3Ti` ) inofungidzira budiriro yevatorwa inotaurirana kuburikidza nemasaisai emagetsi, haina zvipingamupinyi zvemutauro, uye yakabudirira muhunyanzvi.

Ndinovimba kuti nerubatsiro rwechishandiso ichi, vanhu vepanyika vachava sevanhu vane miviri mitatu, kukurukurirana hakuzoganhurirwi nemutauro, uye vanhu vose vachabatanidzwa zvakare.

## Tutorial

## Basa Nhanganyaya

### Chengetedza Markdown Format

### Shandura Shanduro

Mushure mekugadzirisa shanduro, unofanirwa kumhanyisa `./i18n.sh` kugadzirisa cache.

### Zvinyorwa ZveDudziro

Mashoko eshanduro anoda kuratidza mutauro mushure me \```, sekuti ` ```rust` .

Parizvino inotsigira dudziro yekutaura kune ngura, c, cpp, java, js, kofi, python, uye bash.

Rongedza [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) kuti uwedzere tsigiro yeshanduro yemhinduro mune mimwe mitauro.

### Gadzirisa Proxy

Kuseta zvinotevera zvinosiyanisa nharaunda zvinobvumira Google Translate API mafoni kuti apinde nemumiriri.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Variable Embedding

```
test: 测试变量<br 0>嵌入
```

### Bvisa Cache

```bash
rm -rf .i18n/.cache
```
