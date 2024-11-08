# Versi Proyek

Njupuk proyek demo minangka conto:

`en/demo2/v` minangka nomer versi proyek saiki, sing bakal ditampilake ing sisih tengen jeneng proyek ing garis garis sidebar.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Ing kene `en/` yaiku kode basa sing cocog karo basa sumber terjemahan sing dikonfigurasi dening `.i18n/conf.yml` .

Yen basa sumber sampeyan dudu basa Inggris, file `v` kudu diselehake ing direktori proyek basa sumber sampeyan.

Kemampuan kanggo browsing versi sejarah dokumen lagi dikembangake.

Disaranake mung ngowahi nomer versi dokumen nalika nganyari utama dirilis (kayata `v1` , `v2` ) kanggo ngindhari nomer versi akeh banget sing nyebabake kekacauan ing kaca sing diindeks dening mesin telusur.

## Gunakake File `v` Kosong Kanggo Pamisah Indeks File Saka Macem-Macem Proyek

Ing proyek demo, saliyane `en/demo2/v` , sampeyan uga bisa ndeleng manawa ana `v` file kosong ing direktori `en/blog` lan `en/demo1` .

`v` kosong ora bakal ditampilake ing outline sidebar, nanging anggere ana `v` file, indeks independen bakal digawe kanggo file ing direktori lan subdirektori.

Kanthi pamisah indeks proyek sing beda-beda, sampeyan bisa ngindhari akses alon amarga ngemot indeks kabeh file ing kabeh situs bebarengan.

Contone, file indeks sing cocog karo `blog` ing proyek demo yaiku [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :