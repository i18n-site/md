<h1 style="justify-content:space-between">3Ti.Site · Ka fikir ma jiraan xuduud<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, dhaliyaha goobta taagan ee luuqadaha badan leh, ayaa si toos ah Markdown ugu turjumi kara [in ka badan boqol luqadood oo kala duwan](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Dadka qaar ayaa laga yaabaa inay rabaan inay waydiiyaan, hadda daalacayaashu waxay leeyihiin hawlo tarjumaad ah, miyayna loo baahnayn in la caalamiyeeyo mareegaha?

Waxaan rabaa in aan sheego in **kaliya caalamiyeynta goobta oo dhan aan ku taageeri karno raadinta qoraalka buuxa ee luqadaha badan ee goobta iyo hagaajinta mashiinka raadinta** .

## Isku Xigxiga

"Bible·Bilowgii":

> Dadkii hore afafka ma kala saari jirin. Waxay dhiseen munaarado cirka gaadhay si ay albaabka Eebbe u gaadhaan si ay kor ugu qaadaan sharafta bini-aadmiga.
>
> Illahay wuxuu sheegay in dadku ay yihiin qabiil iyaga u gaar ah, isku dhaqan iyo isku nooc ah. Dhismaha munaaraddu waa horudhac. Hadda waxaad samayn kartaa wax kasta oo aad rabto, mana heli doontid wax aad ka cabsato.
>
> Dabadeed Ilaahay baa yimid oo dadkii meelo kala duwan ku kala firdhiyey, isma fahmin.
>
> Intaa wixii ka dambeeyay, bini’aadmigu waxa uu u halgami jiray is-gaadhsiinta, khilaafaadyo aan dhammaad lahayn ayaa ka dhashay, duniduna may arag daar cirka gaadhay.

Sheekada mala-awaalka sayniska &quot;Three-Body&quot; ( ku dhawaaqida Shiinaha: `3Ti` ) waxay khayaaliyeed ka dhigtaa ilbaxnimada shisheeyaha ee ku wada xidhiidha mowjadaha elektromagnetic, ma laha caqabado luqadeed, waana barwaaqo tignoolajiyada.

Waxaan rajeynayaa in iyadoo la kaashanayo qalabkan, dadka dhulku ay noqon doonaan sida dad saddex jir ah, isgaarsiintuna ma xaddidi doonto luqadda, dhammaan bani-aadmigana mar kale waa midoobaan.

## Waxbarashada

## Hordhaca Shaqada

### Hayso Qaabka Markdown

### Wax Ka Beddel Turjumaada

Kadib markaad wax ka beddesho tarjumaada, waxaad u baahan tahay inaad dib u socodsiiso `./i18n.sh` si aad u cusboonaysiiso khasnadaha.

### Qoraallada Turjumaada

Faallooyinka tarjumaada waxay u baahan yihiin inay muujiyaan luqadda ka dib \```, sida ` ```rust` .

Hadda waxay taageertaa tarjumaada faallooyinka ee miridhku, c, cpp, java, js, kafeega, python, iyo bash.

Tafatir [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) si aad ugu darto taageerada tarjumaada ee faallooyinka luqado badan.

### Habee Wakiil

Dejinta doorsoomayaasha deegaanka ee soo socda waxay u ogolaataa Google Translate API wicitaanada inay maraan wakiilka.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Isku-Xidhka Isbedbeddelaya

```
test: 测试变量<br 0>嵌入
```

### Faaruqi Cache-Ga

```bash
rm -rf .i18n/.cache
```
