# Qaabka Blog-Ga

`i18n/conf.yml` ka mid ah `use: Blog` waxay ka dhigan tahay isticmaalka template blog si loo soo bandhigo.

Faylka `markdown` ee boostada blogku wuxuu u baahan yahay inuu habeeyo macluumaadka meta.

Macluumaadka Meta waa inuu ahaadaa bilowga faylka, laga bilaabo `---` oo ku dhammaanaya `---` Qaabka xogta qaabeynta ee dhexda waa `YAML` .

Faylka demo waxaa loo habeeyey sida soo socota:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` waxay tusinaysaa nuxurka kooban, kaas oo lagu soo bandhigi doono bogga tusmada blog-ka.

Iyada oo la kaashanayo `YMAL` '|'Syntax, waxaad qori kartaa koobab dhowr xariiq ah.

Habaynta geedka tusaha ee dhinaca midig ee blogku waa `TOC` faylal (eeg cutubka hore) Maqaallada ku taxan `TOC` oo keliya ayaa ka muuqan doona tusmada bogga bogga.

Maqaallada aan ku jirin macluumaadka meta kama soo bixi doonaan bogga hoyga blog, laakiin waxay ka soo muuqan karaan geedka hagaha ee midigta.

Haddii aad u baahan tahay inaad maqaalka ku dhejiso xagga sare, fadlan orod `i18n.site` oo tafatir `xxx.yml` faylal ee ka hooseeya `.i18n/data/blog` , oo u beddel timestamp lambar taban (tirooyinka taban ee badan ayaa loo kala sooci doonaa mid yar ilaa weyn oo qiimo buuxa leh).