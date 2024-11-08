# Алдан Карау &

## Урнаштыру

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Конфигурация Билгесе

`i18n.site` эчендә урнаштырылган `i18` тәрҗемә коралы бар, зинһар, [монда басыгыз, керү токенын конфигурацияләү өчен `i18` документка](/i18/use) .

## Демо Проекты

`i18n.site` кулланырга өйрәнү өчен демо проектыннан башлыйк.

Без башта демо складны клонлаштырабыз һәм боерыкны түбәндәгечә эшлибез:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Кытай материкларында кулланучылар:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`docker` белән җирле алдан карау өчен `demo.i18n.site` код базасы клонының каталог исеме `md` булырга тиеш.

### Тәрҗемә Итү

Башта `md` каталогны кертегез һәм `en` `zh` тәрҗемә итәчәк `i18n.site` эшләгез.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Эшләгәннән соң, тәрҗемә `git add . ` кэш файллары барлыкка киләчәк `md`

### Җирле Алдан Карау

`docker` урнаштырыгыз һәм башлап җибәрегез ( `MAC` кулланучы `docker` өчен эш вакыты итеп [orbstack](https://orbstack.dev) тәкъдим итә).

Аннары, `docker` каталогны кертегез һәм `./up.sh` эшләгез, аннары керегез [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">