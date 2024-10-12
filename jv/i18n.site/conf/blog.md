# Cithakan Blog

`i18n/conf.yml` saka `use: Blog` tegese nggunakake template blog kanggo rendering.

Berkas `markdown` saka kiriman blog kudu ngatur informasi meta.

Informasi meta kudu ana ing wiwitan file, diwiwiti kanthi `---` lan diakhiri karo `---` Format informasi konfigurasi ing tengah yaiku `YAML` .

Konfigurasi file demo kaya ing ngisor iki:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` nuduhake ringkesan isi, sing bakal ditampilake ing kaca indeks blog.

Kanthi bantuan `YMAL` '|`Syntax, sampeyan bisa nulis ringkesan multi-baris.

Konfigurasi wit direktori ing sisih tengen blog uga `TOC` file (ndeleng bab sadurunge Mung artikel sing kadhaptar ing `TOC` bakal katon ing indeks homepage blog).

Artikel sing ora ngemot informasi meta ora bakal katon ing homepage blog, nanging bisa katon ing wit direktori ing sisih tengen.

Yen sampeyan kudu masang artikel menyang ndhuwur, bukak `i18n.site` lan sunting `xxx.yml` file ing ngisor iki `.i18n/data/blog` , lan ganti stempel wektu dadi nomer negatif (kanggo nomer negatif bakal diurutake saka cilik nganti gedhe kanthi nilai absolut).