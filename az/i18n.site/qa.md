# Ümumi Problem

## Təsadüfən Silindi `.i18n/V` Bu `Npm` Paketin Dərc Olunmamasına Səbəb Oldu

`npm` paket buraxılışının tarixi versiyası saxlanılır `.i18n/v/ol/v.hash`

Təsadüfən silsəniz `.i18n/v/ol` `npm` paketi dərc olunmayacaq.

Bu zaman əvvəlcə layihənizin son buraxılış versiyasının versiya nömrəsini tapın [npmjs.com](//npmjs.com) məsələn `0.1.9`

Sonra aşağıdakı fayl yarat `bash`

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Qeyd edək ki, bu şəkildə təmir fayl tarixçəsini itirəcək, növbəti buraxılışı tədricən yeniləməyi qeyri-mümkün edəcək və bütün məzmun bir dəfə yenidən paketlənəcək və yüklənəcək.

