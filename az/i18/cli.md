# Komanda Xətti Parametrlərinin Ətraflı Izahı

## 0 Faylları `-p`

`-p` və ya `--purge` hər tərcümə kataloqunda mövcud olan, lakin mənbə dil kataloqunda olmayan faylları siləcək.

Çünki sənədləri yazarkən Markdown fayl adları tez-tez düzəldilir ki, bu da tərcümə qovluğunda bir çox köhnə və tərk edilmiş faylların yaranmasına səbəb olur.

Digər dil kataloqlarında silinməli olan faylları təmizləmək üçün bu parametrdən istifadə edin.

## `-d` Tərcümə Kataloqunu Təyin Edir

Tərcümə edilmiş kataloq defolt olaraq cari faylın yerləşdiyi qovluğa uyğunlaşdırılır.

`-d` və ya `--workdir` tərcümə kataloqunu təyin edə bilər, məsələn:

```
i18 -d ~/i18n/md
```

## `-h` Yardıma Baxın

Komanda xətti yardımına baxmaq üçün `-h` və ya `--help` .