# Tez-Tez Verilən Suallar

## Təsadüfən `.i18n/v` Silindi, Bu Da `npm` Paketin Dərc Olunmamasına Səbəb Oldu

`npm` paket tərəfindən buraxılmış tarixi versiya `.i18n/v/ol/v.hash` -da saxlanılır.

Təsadüfən `.i18n/v/ol` `npm` paket buraxılmayacaq.

Bu zaman əvvəlcə layihənizin son buraxılış versiyasının versiya nömrəsini [npmjs.com](//npmjs.com) məsələn, `0.1.9` .

Sonra faylı yaratmaq üçün aşağıdakı `bash` -a müraciət edin.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Qeyd edək ki, bu şəkildə təmir fayl tarixçəsini itirəcək, növbəti buraxılışı tədricən yeniləmək qeyri-mümkün olacaq və bütün məzmun bir dəfə yenidən paketlənəcək və yüklənəcək.