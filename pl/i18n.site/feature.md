# Cechy produktu

## Integracja tłumaczeń `i18`

Program zawiera wbudowane tłumaczenia `i18`, szczegółowe informacje znajdziesz w [➔ dokumentacji `i18`](/i18).

## Autoryzacja języka przeglądarki

Domyślny język strony automatycznie dopasuje się do języka przeglądarki.

Après zmiana języka przez użytkownika, wybór zostanie zapamiętany.

Related code: [github.com/i18n-site/18x/src/lang.coffee](https://github.com/i18n-site/18x/blob/main/src/lang.coffee).

## Adaptacja na urządzenia mobilne

Na urządzeniach mobilnych również zapewniamy doskonałe wrażenia z czytania.

<img src="//p.3ti.site/1721379497.avif" width="350px">

## <a rel=id href="#ha" id="ha"></a> Wysoka dostępność interfejsu front-end

`i18n.site` domyślnie publikuje zawartość na `npmjs.com`, korzystając z [jsdelivr.com](//jsdelivr.com), [unpkg.com](//unpkg.com) oraz innych `CDN` do ładowania treści na `npm`.

Na tej podstawie dodano mirror source z Chin kontynentalnych, aby zapewnić stabilny dostęp chińskim użytkownikom, osiągając **wysoką dostępność interfejsu front-end**.

Zasada działania: przy użyciu [`service worker`](https://developer.mozilla.org/docs/Web/API/Service_Worker_API) przechwytuje się żądania, a w przypadku ich niepowodzenia, ponawia się je na innych `CDN`, automatycznie wybierając najszybszy serwer jako domyślne źródło ładowania.

Related code: [github.com/18x/serviceWorker](https://github.com/i18n-site/18x/tree/main/serviceWorker).

## Jednostronicowa aplikacja, błyskawiczne ładowanie

Strona korzysta z architektury jednostronicowej aplikacji, co pozwala na przełączanie się między stronami bez odświeżania i błyskawiczne ładowanie.

## Optimizacja pod kątem czytania

### 1	Dobrze zaprojektowany styl

> Prostota w jej najczystszej postaci jest idealnie oddana w projekcie tej strony.
> Rezygnując z nadmiarowych ozdób, prezentuje treść w najczystszej formie.
> Jak krótki, ale poruszający wiersz, który dotyka serca.

<p style="text-align:right">— Autor I18N.SITE</p>

[➔ Kliknij tutaj, aby zobaczyć przegląd stylów](/i18n.site/md/styl).

### `RSS`

![](//p.3ti.site/1725541085.avif)

Powyższy obraz przedstawia subskrypcję wielojęzycznego kanału `RSS` `i18n.site` za pomocą strony [inoreader.com](//inoreader.com).

### Wczytywanie czcionek online, obsługa języka chińskiego

Strona domyślnie używa [dwuosiowych, zmiennych czcionek Alimama](https://www.iconfont.cn/fonts/detail?cnid=pOvFIr086ADR), [MiSans](https://hyperos.mi.com/font/zh/download/) oraz innych czcionek online, aby zapewnić jednolite wrażenia czytelnicze na różnych platformach.

Jednocześnie, aby przyspieszyć ładowanie, czcionki są dzielone na podstawie statystyk częstotliwości słów.

Related code: [github.com/i18n-site/font](https://github.com/i18n-site/font).

### Automatyczne ukrywanie górnej nawigacji

Przewijając w dół, górna nawigacja automatycznie się ukrywa.

Przewijając w górę, ukryta nawigacja ponownie się pokazuje.

Gdy mysz jest nieruchoma, nawigacja zanika.

W prawym górnym rogu paska nawigacji znajduje się przycisk trybu pełnoekranowego, który zapewnia wciągające wrażenia z czytania dokumentów.

### Synchronizowane podświetlanie konturu bieżącego rozdziału

Podczas przewijania treści po prawej stronie, kontur po lewej stronie będzie synchronicznie podświetlał bieżący rozdział.

## Interesujące detale

### Efekty myszy

Najedź myszką na przycisk po prawej stronie górnego paska nawigacyjnego, aby zobaczyć efektowne efekty.

### Mały duch `404`

Na stronie `404` znajduje się uroczy, unoszący się duch, whose eyes follow the mouse, [➔ Kliknij tutaj, aby zobaczyć](/404)

## Kod jest otwarty

[Kod jest open-source](/i18n.site/src). Jeśli jesteś zainteresowany dołączeniem do rozwoju, zapraszamy do przedstawienia się na [liście mailingowej](//groups.google.com/u/2/g/i18n-site).

Istnieje wiele małych, ale ważnych zadań, które nie są pilne. Zespół deweloperski przydzieli zadania zgodnie z Twoimi umiejętnościami technicznymi i jednocześnie uzupełni dokumentację deweloperską.