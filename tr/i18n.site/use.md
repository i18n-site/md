# Önizleme Yükleyin &

## Düzenlemek

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## Yapılandırma Jetonu

`i18n.site` `i18` bir çeviri aracına sahiptir. [Erişim belirtecini yapılandırmak üzere `i18` belgesine başvurmak için lütfen buraya tıklayın](/i18/use) .

## Demo Projesi

`i18n.site` nasıl kullanılacağını öğrenmek için bir demo projeyle başlayalım.

Öncelikle demo deposunu klonlayıp komutu şu şekilde çalıştırıyoruz:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

Çin ana karasındaki kullanıcılar şunları yapabilir:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` kodlu temel klonun dizin adı, `docker` ile yerel önizlemeyi kolaylaştırmak için `md` olmalıdır.

### Tercüme Etmek

Öncelikle `md` dizinine girin ve `en` `zh` çevirecek olan `i18n.site` çalıştırın.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

Çalıştırdıktan sonra çeviri ve önbellek dosyaları oluşturulacaktır. Lütfen bunları `md` `git add . ` depoya eklemeyi unutmayın.

### Yerel Önizleme

`docker` yükleyin ve başlatın ( `MAC` kullanıcı, `docker` çalışma zamanı olarak [orbstack](https://orbstack.dev) kullanılmasını önerir).

Daha sonra `docker` dizinine girin ve `./up.sh` komutunu çalıştırın ve ardından yerel olarak önizleme yapmak için [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">