# Komanda Xətti Parametrlərinin Ətraflı Izahı

## Faylları `-P`

`-p` Və ya `--purge` hər bir tərcümə kataloqunda mövcud olan, lakin mənbə dil kataloqunda olmayan faylları təmizləyəcək.

Çünki sənədləri yazarkən Markdown fayl adları tez-tez düzəldilir, nəticədə tərcümə qovluğunda çoxlu köhnə və tərk edilmiş fayllar yaranır.

Digər dil kataloqlarında silinməli olan faylları təmizləmək üçün bu parametrdən istifadə edin.

## Tərcümə Kataloqunu `-D`

Tərcümə edilmiş kataloq defolt olaraq cari faylın yerləşdiyi qovluğa uyğunlaşdırılır.

Və `-d` `--workdir` tərcümə kataloqunu təyin edə bilər, məsələn:

```
i18 -d ~/i18n/md
```

## Köməyə `-H`

`-h` Və ya `--help` komanda xətti yardımına baxa bilərsiniz.