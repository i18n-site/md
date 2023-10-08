# I18N.SITE · Język Bez Granic<img Src="//i-01.eu.org/i18n.svg" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, wielojęzyczny generator stron statycznych, może automatycznie przetłumaczyć Markdown na [ponad sto różnych języków](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n.lang.webp" alt="" />

Niektórzy ludzie mogą chcieć zapytać, czy teraz, gdy przeglądarki mają wbudowane funkcje tłumaczenia, niepotrzebne jest umiędzynarodowienie witryny?

Chcę powiedzieć, że **tylko poprzez internacjonalizację całej witryny możemy wspierać wielojęzyczne wyszukiwanie pełnotekstowe w witrynie i optymalizację wyszukiwarek** .

## Instruktaż

## Wprowadzenie Do Funkcji

### Zachowaj Format Markdown

### Zmodyfikuj Tłumaczenie

Po zmodyfikowaniu tłumaczenia musisz ponownie uruchomić `./i18n.sh` , aby zaktualizować pamięć podręczną.

### Uwagi Do Tłumaczenia

Komentarze do tłumaczenia muszą wskazywać język po \```, np ` ```rust` .

Obecnie obsługuje tłumaczenie komentarzy dla języków rust, c, cpp, Java, js, Coffee, Python i Bash.

Edytuj [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) , aby dodać obsługę tłumaczenia komentarzy w większej liczbie języków.

### Skonfiguruj Serwer Proxy

Ustawienie następujących zmiennych środowiskowych umożliwia przechodzenie wywołań API Tłumacza Google przez serwer proxy.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Zmienne Osadzanie

```
test: 测试变量<br 0>嵌入
```

### Opróżnij Pamięć Podręczną

```bash
rm -rf .i18n/.cache
```
