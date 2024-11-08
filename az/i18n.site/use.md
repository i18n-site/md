# Quraşdırın &

## Quraşdırın

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Konfiqurasiya Nişanı

`i18n.site` [`i18`](/i18/use) daxili `i18` tərcümə aləti var.

## Demo Layihə

`i18n.site` necə istifadə edəcəyimizi öyrənmək üçün demo layihə ilə başlayaq.

Əvvəlcə demo deposunu klonlayırıq və əmri aşağıdakı kimi icra edirik:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Çin materikindəki istifadəçilər:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`docker` ilə yerli önizləməni asanlaşdırmaq üçün `demo.i18n.site` kod bazası klonunun kataloq adı `md` olmalıdır.

### Tərcümə Et

Əvvəlcə `md` kataloqunu daxil edin və `en` dən `zh` ə tərcümə edəcək `i18n.site` işə salın.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

İşlədikdən sonra tərcümə və keş faylları yaradılacaq, onları `md` `git add . ` əlavə etməyi unutmayın.

### Yerli Önizləmə

`docker` quraşdırın və işə salın ( `MAC` istifadəçi `docker` üçün iş vaxtı kimi [orbstack](https://orbstack.dev) istifadə etməyi tövsiyə edir).

Sonra, `docker` kataloqunu daxil edin və `./up.sh` işə salın və sonra yerli olaraq önizləmə üçün ziyarət edin [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">