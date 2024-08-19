# Komanda Xətti Parametrlərinin Ətraflı Izahı

## `-p` Faylları Təmizləyin

`-p` və ya `--purge` hər tərcümə kataloqunda mövcud olan, lakin mənbə dil kataloqunda olmayan faylları siləcək.

Çünki sənədləri yazarkən Markdown fayl adları tez-tez düzəldilir, nəticədə tərcümə qovluğunda çoxlu köhnə və tərk edilmiş fayllar yaranır.

Digər dil kataloqlarında silinməli olan faylları təmizləmək üçün bu parametrdən istifadə edin.

## `-d` Tərcümə Kataloqunu Təyin Edir

Tərcümə edilmiş kataloq defolt olaraq cari faylın yerləşdiyi qovluğa uyğunlaşdırılır.

`-d` və ya `--workdir` tərcümə kataloqunu təyin edə bilər, məsələn:

```
i18 -d ~/i18n/md
```

## `-h` Yardıma Baxın

Komanda xətti yardımına baxmaq üçün `-h` və ya `--help` .