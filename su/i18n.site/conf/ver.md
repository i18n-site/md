# Vérsi Proyék

Candak proyék demo salaku conto:

`en/demo2/v` nyaéta nomer vérsi proyék ayeuna, anu bakal dipintonkeun di sisi katuhu nami proyék dina outline sidebar.

<img src="https://p.3ti.site/1721290486.avif" width="320px">

Ieu `en/` mangrupikeun kode basa anu cocog sareng basa sumber tarjamahan anu dikonpigurasi ku `.i18n/conf.yml` .

Upami basa sumber anjeun sanés Inggris, file `v` kedah disimpen dina diréktori proyék basa sumber anjeun.

Kamampuhan pikeun ngotéktak vérsi sajarah dokumén nuju dikembangkeun.

Disarankeun pikeun ngan ukur ngarobih nomer vérsi dokumén nalika apdet utama dileupaskeun (sapertos `v1` , `v2` ) pikeun ngahindarkeun seueur teuing nomer vérsi anu nyababkeun kacau dina halaman anu diindeks ku mesin pencari.

## Anggo File `v` Kosong Pikeun Ngabagi Indéks File Tina Sababaraha Proyék

Dina proyék demo, salian `en/demo2/v` , anjeun ogé tiasa ningali yén aya kosong `v` file dina `en/blog` sareng `en/demo1` diréktori.

`v` kosong moal dipintonkeun dina outline sidebar, tapi salami aya file `v` , hiji indéks bebas bakal dihasilkeun pikeun file dina diréktori na subdirectories.

Ku ngabagi indéks tina proyék anu béda, anjeun tiasa ngahindarkeun aksés anu laun disababkeun ku ngamuat indéks sadaya file dina sadaya situs sakaligus.

Contona, file indéks pakait jeung `blog` dina proyék demo nyaeta [https://unpkg.com/i18n.site/en/blog.json](https://unpkg.com/i18n.site/en/blog.json) :