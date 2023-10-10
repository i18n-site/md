<h1 style="justify-content:space-between">3Ti.Site · Myślenie bez granic<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, wielojęzyczny generator stron statycznych, może automatycznie przetłumaczyć Markdown na [ponad sto różnych języków](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Niektórzy mogą zapytać, czy teraz, gdy przeglądarki mają wbudowane funkcje tłumaczenia, nie jest konieczne umiędzynarodowienie witryny?

Chcę powiedzieć, że **tylko poprzez internacjonalizację całej witryny możemy wspierać wielojęzyczne wyszukiwanie pełnotekstowe w witrynie i optymalizację wyszukiwarek** .

## Wstęp

Biblia · Geneza :

> W starożytności, kiedy języki były jednym, ludzkość zbudowała wieżę sięgającą nieba, portal do królestwa Boga, głoszący potęgę ludzkości.
>
> Bóg oświadczył: „Ludzie jednoczą się jako jedno plemię i mają wspólny język, a ta wieża to tylko prolog. Teraz spełnili swoje pragnienia i nie będzie już strachu”.
>
> W ten sposób zstąpił Bóg, rozpraszając ludzi w różne zakątki, posługując się różnymi językami.
>
> Od tego czasu komunikacja międzyludzka stała się wyzwaniem, spory nie miały już końca i nie było już wieży sięgającej nieba.

Powieść science fiction „Trzy ciała” (chińska wymowa: `3Ti` ) fabularyzuje obcą cywilizację, która komunikuje się za pomocą fal elektromagnetycznych, nie ma barier językowych i jest zamożna technologicznie.

Mam nadzieję stworzyć narzędzie, które umożliwi ludziom na ziemi być jak ludzie w trzech ciałach, komunikować się bez ograniczeń językowych i ponownie zjednoczyć całą ludzkość.

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
