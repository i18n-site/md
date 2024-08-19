# Cechy Produktu

## Integracja z tłumaczeniami `i18`

Program zawiera wbudowane tłumaczenia `i18`, szczegółowe informacje znajdziesz w [➔ dokumentacji `i18`](/i18).

## Automatyczne dopasowanie języka przeglądarki

Domyślny język strony automatycznie dopasuje się do języka przeglądarki.

Après zmiana języka przez użytkownika, wybór użytkownika zostanie zapamiętany.

Related code: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Adaptacja na urządzenia mobilne

Na urządzeniach mobilnych również można cieszyć się doskonałym doświadczeniem czytelniczym.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Wysoka dostępność interfejsu front-end

`i18n.site` domyślnie publikuje zawartość strony na `npmjs.com`, korzystając z [jsdelivr.com](//jsdelivr.com), [unpkg.com](//unpkg.com) oraz innych `CDN`, które załadowują treści na `npm`.

Na tej podstawie dodano mirror sources z Chin kontynentalnych, aby zapewnić chińskim użytkownikom stabilny dostęp, osiągając **wysoką dostępność interfejsu front-end**.

Zasada jest taka: przechwytuj żądania z wartością [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) , ponawiaj nieudane żądania na innych `CDN` i adaptacyjnie włączaj najszybciej odpowiadającą witrynę źródłową jako domyślne źródło ładowania.

Related code: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Jednostronicowa aplikacja, błyskawiczne ładowanie

Strona korzysta z architektury jednostronicowej aplikacji, co pozwala na przełączanie stron bez odświeżania i błyskawiczne ładowanie.

## Zoptymalizowane pod kątem czytania

### Starannie zaprojektowany styl

> Prostota w jej najczystszej formie jest doskonale oddana w projekcie tej strony.
> Porzuca nadmiarowe dekoracje, prezentując treść w najczystszej postaci.
> Jak piękny wiersz, krótki, ale poruszający serca.

<p style="text-align:right">— Autor I18N.SITE</p>

[➔ Kliknij tutaj, aby zobaczyć przegląd stylów](/i18n.site/md/styl).

### Wczytywanie czcionek online, obsługa języka chińskiego

Strona domyślnie używa [dwuosiowych, zmiennych czcionek Alimama](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR), [MiSans](https://hyperos.mi.com/font/zh/download/) oraz innych czcionek online, aby zapewnić jednolite doświadczenie czytania na różnych platformach.

Jednocześnie, aby zwiększyć szybkość ładowania, czcionki są dzielone na podstawie statystyk częstotliwości słów.

Related code: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Automatyczne ukrywanie górnej nawigacji

Przewijając w dół, górna nawigacja automatycznie się ukryje.

Przewijając w górę, ukryta nawigacja ponownie się pokaże.

Gdy mysz jest nieruchoma, nawigacja zaniknie.

W prawym górnym rogu paska nawigacji znajduje się przycisk trybu pełnoekranowego, który zapewnia wciągające doświadczenie z czytania dokumentów.

### Synchroniczne podświetlanie konturu bieżącego rozdziału

Przewijając treść po prawej stronie, kontur po lewej stronie będzie synchronicznie podświetlał bieżący rozdział.

## Intrygujące detale

### Efekty myszy

Najedź myszką na przycisk po prawej stronie górnego paska nawigacyjnego, aby zobaczyć efektowne efekty.

### `404` Mały Duch

Na stronie `404` znajduje się uroczy, unoszący się duch, whose eyes follow the mouse, [➔ Kliknij tutaj, aby zobaczyć](/404)

## Kod jest otwarty

[Kod jest open source](/i18n.site/src). Jeśli jesteś zainteresowany włączeniem się do rozwoju, zapraszamy do przedstawienia się na [liście mailingowej](//groups.google.com/u/2/g/i18n-site).

Istnieje wiele małych, ważnych, ale niepilnych wymagań. Zespół deweloperski przydzieli zadania zgodnie z Twoimi umiejętnościami technicznymi i jednocześnie uzupełni dokumentację rozwojową.