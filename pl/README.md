<h1 style="justify-content:space-between">3Ti.Site · Nie myśl o granicach<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, wielojęzyczny generator stron statycznych, może automatycznie przetłumaczyć Markdown na [ponad sto różnych języków](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Niektórzy ludzie mogą chcieć zapytać, czy teraz, gdy przeglądarki mają wbudowane funkcje tłumaczenia, niepotrzebne jest umiędzynarodowienie witryny?

Chcę powiedzieć, że **tylko poprzez internacjonalizację całej witryny możemy wspierać wielojęzyczne wyszukiwanie pełnotekstowe w witrynie i optymalizację wyszukiwarek** .

## Sekwencja

„Biblia·Geneza”:

> Starożytni nie rozróżniali języków. Zbudowali wieże sięgające nieba, aby dotrzeć do bramy Boga, aby promować prestiż rodzaju ludzkiego.
>
> Bóg powiedział, że ludzie są odrębnym plemieniem o tej samej kulturze i gatunku. Budowa wieży to tylko preludium. Teraz możesz osiągnąć, co chcesz, i nie będziesz miał się czego bać.
>
> Wtedy przyszedł Bóg i rozproszył ludzi po różnych miejscach, nie mogąc się porozumieć.
>
> Odtąd ludzkość miała trudności z komunikacją, konflikty narastały w nieskończoność, a świat nie widział już wieży sięgającej nieba.

Powieść science fiction „Trzy ciała” (chińska wymowa: `3Ti` ) fabularyzuje obcą cywilizację, która komunikuje się za pomocą fal elektromagnetycznych, nie ma barier językowych i jest zamożna technologicznie.

Mam nadzieję, że za pomocą tego narzędzia ludzie na ziemi będą jak ludzie w trzech ciałach, komunikacja nie będzie ograniczona językiem, a cała ludzkość ponownie się zjednoczy.

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
