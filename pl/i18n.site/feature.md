# Cechy Produktu

## Zintegrowano `i18` Tłumaczeń

Program ma wbudowane `i18` tłumaczeń, zobacz [➔ `i18` dokument](/i18) dla konkretnego zastosowania.

## Automatycznie Dopasuj Język Przeglądarki

Domyślny język witryny automatycznie dopasuje się do języka przeglądarki.

Gdy użytkownik ręcznie zmieni język, jego wybór zostanie zapamiętany.

Powiązany kod : [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee)

## Adaptacja Terminala Mobilnego

Doskonałe wrażenia z czytania można uzyskać także na telefonie komórkowym.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Wysoka dostępność od frontu

`i18n.site` domyślnie opublikuje zawartość witryny w `npmjs.com` , za pomocą [jsdelivr.com](//jsdelivr.com) , [unpkg.com](//unpkg.com) i innych `CDN` treści załadowanych na `npm` .

Na tej podstawie dodano źródła lustrzane z Chin kontynentalnych, aby umożliwić chińskim użytkownikom stabilny dostęp i osiągnięcie **wysokiej dostępności front-endu** .

Zasada jest taka: przechwytuj żądania z [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , ponawiaj nieudane żądania na innych `CDN` i adaptacyjnie włączaj najszybciej odpowiadającą witrynę źródłową jako domyślne źródło ładowania.

Powiązany kod : [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker)

## Aplikacja Jednostronicowa, Niezwykle Szybkie Ładowanie

Strona przyjmuje architekturę aplikacji jednostronicowej, bez odświeżania przy przełączaniu stron i niezwykle szybkiego ładowania.

## Zoptymalizowany Pod Kątem Czytania

### Dobrze Zaprojektowany Styl

> Piękno prostoty jest doskonale zinterpretowane w projekcie tej witryny.
> Rezygnuje ze zbędnych dekoracji i prezentuje treść w najczystszej formie.
> Jak piękny wiersz, choć krótki, porusza ludzkie serca.

<p style="text-align:right">I18N.SITE Autorze</p>

[➔ Kliknij tutaj, aby zobaczyć listę stylów](/i18n.site/md/styl) .

### `RSS`

![](//p.3ti.site/1725541085.avif)

Powyższy obrazek `RSS` `i18n.site` subskrypcją [inoreader.com](//inoreader.com)

### Załaduj Czcionki Online, Obsługuj Język Chiński

Domyślnie na stronie internetowej włączone są [dwuosiowe, zmienne prostokątne czcionki Alimama](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR) [MiSans](https://hyperos.mi.com/font/zh/download/) inne czcionki internetowe, aby ujednolicić wygodę czytania użytkowników na różnych platformach.

Jednocześnie, aby poprawić szybkość ładowania, czcionki są dzielone zgodnie ze statystykami częstotliwości słów.

Powiązany kod : [github.com/i18n-site/font](https://github.com/i18n-site/font)

### Górna Nawigacja Automatycznie Ukryta

Przewiń w dół, a górna nawigacja zostanie automatycznie ukryta.

Przewiń w górę, a ukryta nawigacja pojawi się ponownie.

Zniknie, gdy mysz nie będzie się poruszać.

W prawym górnym rogu paska nawigacji znajduje się przycisk trybu pełnoekranowego, który zapewnia wciągające wrażenia z czytania dokumentów.

### Zsynchronizowane Podświetlanie Konturu Bieżącego Rozdziału

Podczas przewijania treści po prawej stronie, kontur po lewej stronie będzie jednocześnie podświetlał aktualnie czytany rozdział.

## Fajne Detale

### Efekty Myszy

Najedź myszką na przycisk po prawej stronie górnego panelu nawigacyjnego, aby zobaczyć fajne efekty specjalne.

### `404` Mały Duchu

Na stronie `404` znajduje się uroczy, pływający duch, którego oczy poruszają się za pomocą myszki, [➔ Kliknij tutaj, aby wyświetlić](/404) ,

## Kod Open Source

[Kod jest open source](/i18n.site/c/src) . Jeśli jesteś zainteresowany udziałem w rozwoju, prosimy o przedstawienie się na [liście mailingowej](//groups.google.com/u/2/g/i18n-site) .

Istnieje wiele małych wymagań, które są ważne, ale nie pilne. Zespół programistów przydzieli praktyczne zadania w oparciu o technologie, w których jesteś dobry, i poprawi dokumenty programistyczne podczas przypisywania wymagań.