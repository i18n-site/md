# Усталяваць &

## Усталяваць

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Маркер Канфігурацыі

`i18n.site` мае ўбудаваны `i18` інструмент перакладу, [пстрыкніце тут, каб звярнуцца да `i18` дакумента, каб наладзіць маркер доступу](/i18/use) .

## Дэманстрацыйны Праект

Давайце пачнем з дэманстрацыйнага праекта, каб даведацца, як выкарыстоўваць `i18n.site` .

Спачатку мы кланіруем дэма-рэпазітар і запускаем каманду наступным чынам:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Карыстальнікі ў Кітаі могуць:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

Імя каталога базавага клона кода `demo.i18n.site` павінна быць `md` для палягчэння лакальнага папярэдняга прагляду з `docker` .

### Перакладаць

Спачатку ўвядзіце каталог `md` і запусціце `i18n.site` , які перавядзе `en` у `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Пасля запуску `git add . ` `md` файлы перакладу і кэша.

### Лакальны Папярэдні Прагляд

Усталюйце і запусціце `docker` ( `MAC` карыстальнік рэкамендуе выкарыстоўваць [orbstack](https://orbstack.dev) у якасці асяроддзя выканання для `docker` ).

Затым увайдзіце ў каталог `docker` і запусціце `./up.sh` , а потым наведайце лакальна [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">