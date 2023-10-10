<h1 style="justify-content:space-between">3Ti.Site · Kufunga Pasina Border<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, jenareta yesaiti isingachinji, inokwanisa kushandura Markdown [mumitauro inodarika zana yakasiyana](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Vamwe vanhu vanogona kubvunza, sezvo mabhurawuza ane akavakirwa-mukati mabasa eshanduro, hazvina basa here kuita kuti webhusaiti iyi iite pasi rose?

Ndinoda kutaura kuti **nekuita saiti yese pasi rese tinogona kutsigira mitauro yakawanda-in-saiti yakazara-zvinyorwa kutsvaga uye kutsvaga injini optimization** .

## Nhanganyaya

Bhaibheri · Genesisi :

> Munguva dzekare, mitauro payaiva imwe chete, vanhu vakavaka shongwe yaisvika kudenga, musuo wenzvimbo yaMwari, inozivisa simba rorudzi rwomunhu.
>
> Mwari akazivisa kuti, "Vanhu vanobatana sorudzi rumwe, norurimi rwakafanana, uye shongwe iyi yangova sumo. Zvino vazadzisa chido chavo, uye hapachazovi nekutya."
>
> Nokudaro, Mwari akaburuka, achiparadzira vanhu kumativi akasiyana-siyana, vachishandisa mitauro yakasiyana.
>
> Kubva ipapo, kutaurirana kwevanhu kwakava kunonetsa, kukakavadzana kusingagumi, uye pakanga pasisina shongwe yaibata denga.

Iro sainzi ngano inonyorwa &quot;Miviri Mitatu&quot; (Mataurirwo echiChinese: `3Ti` ) inofungidzira budiriro yevatorwa inotaurirana kuburikidza nemasaisai emagetsi, haina zvipingamupinyi zvemutauro, uye yakabudirira muhunyanzvi.

Ndinotarisira kugadzira chishandiso chichaita kuti vanhu vari panyika vave sevanhu vane miviri mitatu, vataure vasingabatanidzwi nomutauro, uye vabatanezve vanhu vose.

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
