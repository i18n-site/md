# Masalah Umum

## Nambahkeun Atanapi Ngahapus Baris Tarjamahan, Nyababkeun Kabingungan Dina Tarjamahan

Inget, **jumlah garis dina tarjamahan kudu luyu jeung garis dina téks aslina** .

Nyaéta, nalika nyaluyukeun tarjamahan sacara manual, **ulah nambihan atanapi mupus garis tarjamahan** , upami henteu hubungan pemetaan antara tarjamahan sareng téks asli bakal kaganggu.

Upami anjeun teu kahaja nambihan atanapi ngahapus garis, nyababkeun kabingungan, mangga balikkeun tarjamahan kana vérsi sateuacan modifikasi, jalankeun `i18` tarjamahan , sareng cache ulang pemetaan anu leres.

Pemetaan antara tarjamahan jeung téks aslina dihijikeun ka token Jieun token anyar dina [i18n.site/token](//i18n.site/token) , Hapus `.i18h/hash` sarta tarjamahkeun deui pikeun mupus pemetaan ngabingungkeun (tapi ieu bakal ngabalukarkeun sagala pangaluyuan manual pikeun tarjamahan leungit).

## `YAML` : Nyegah `HTML` Tina Tautan Dirobih Janten `Markdown`

Nilai `YAML` bakal dianggap `MarkDown` pikeun tarjamahan.

Kadang-kadang konvérsi tina `HTML` → `MarkDown` sanés anu urang pikahoyong, sapertos `<a href="/">Home</a>` dirobih kana `[Home](/)` .

Tambihkeun atribut salian ti `href` kana tag `a` , sapertos `<a class="A" href="/">Home</a>` , pikeun nyegah konversi ieu.

## `./I18n/Hash`

Pupus file anu bertentangan sareng jalankeun `i18` Tarjamahkeun.
