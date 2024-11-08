# Zainstaluj &

## Zainstalować

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Token Konfiguracji

`i18n.site` ma wbudowane narzędzie do tłumaczenia `i18` [Kliknij tutaj, aby zapoznać się z dokumentem `i18` i skonfigurować token dostępu](/i18/use) .

## Projekt Demonstracyjny

Zacznijmy od projektu demonstracyjnego, aby dowiedzieć się, jak używać `i18n.site` .

Najpierw klonujemy repozytorium demonstracyjne i uruchamiamy polecenie w następujący sposób:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Użytkownicy w Chinach kontynentalnych mogą:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Nazwa katalogu podstawowego klonu kodu `demo.i18n.site` musi wynosić `md` aby umożliwić lokalny podgląd za pomocą `docker` .

### Tłumaczyć

Najpierw wejdź do katalogu `md` i uruchom `i18n.site` , co przetłumaczy `en` na `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Po uruchomieniu zostaną wygenerowane pliki tłumaczeń i pamięci podręcznej. Pamiętaj o dodaniu ich do repozytorium w `git add . ` `md` .

### Podgląd Lokalny

Zainstaluj i uruchom `docker` ( `MAC` użytkownik zaleca użycie [orbstack](https://orbstack.dev) jako środowiska wykonawczego dla `docker` ).

Następnie wejdź do katalogu `docker` i uruchom `./up.sh` , a następnie odwiedź [https://127.0.0.1](https://127.0.0.1) aby wyświetlić podgląd lokalny.

<img src="//p.3ti.site/1721104238.avif" style="width:360px">