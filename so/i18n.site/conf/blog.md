# Qaabka Blog-Ga

`i18n/conf.yml` ka mid ah `use: Blog` macnaheedu waa isticmaalka template blog si loo soo bandhigo.

Faylka `markdown` ee boostada blogku wuxuu u baahan yahay inuu habeeyo macluumaadka meta.

Macluumaadka Meta waa inuu ahaadaa bilowga faylka, laga bilaabo `---` oo ku dhammaanaya `---` Qaabka xogta qaabeynta ee dhexda waa `YAML` .

Habaynta faylka demo waa sida soo socota:

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

Iyada oo la kaashanayo `YMAL` ' | 'Syntax, waxaad qori kartaa koobab dhowr xariiq ah.

Habaynta geedka tusaha ee dhinaca midig ee blogku waa `TOC` faylal (eeg cutubka hore) Maqaallada ku taxan `TOC` oo keliya ayaa ka muuqan doona tusmada bogga bogga.

Maqaallada aan ku jirin macluumaadka meta kama soo bixi doonaan bogga hoyga blog, laakiin waxay ka soo muuqan karaan geedka hagaha ee midigta.

## Macluumaadka Qoraaga

Macluumaadka qoraaga waxaa lagu qori karaa xogta badan ee maqaalka, sida:

```yml
author: marlowe
```

Dabadeed `author.yml` ku tafatir buugga tusaha luqadda oo ku dar macluumaadka qoraaga, sida :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` iyo `title` dhamaantood waa ikhtiyaari. Haddii `name` aan la dejin, magaca muhiimka ah (halkan `marlowe` ) waxaa loo isticmaali doonaa sida `name` .

Fiiri mashruuca [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) iyo [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml)

## Maqaal La Dhejiyay

Haddii aad u baahan tahay inaad maqaalka ku dhejiso xagga sare, fadlan orod `i18n.site` oo tafatir `xxx.yml` faylal ee ka hooseeya `.i18n/data/blog` , oo u beddel wakhtiga shaambadda lambar taban (tirooyinka taban ee badan ayaa laga sooci doonaa kuwa ugu waaweyn ilaa kuwa ugu yar).