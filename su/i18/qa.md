# Faq

## Nambahkeun Atanapi Ngahapus Baris Tarjamahan, Nyababkeun Kabingungan Dina Tarjamahan

> [!WARN]
> Inget, **jumlah garis dina tarjamahan kudu luyu jeung garis dina téks aslina** .
> Nyaéta, nalika nyaluyukeun tarjamahan sacara manual, **ulah nambihan atanapi mupus garis tarjamahan** , upami henteu hubungan pemetaan antara tarjamahan sareng téks asli bakal kaganggu.

Upami anjeun teu kahaja nambihan atanapi ngahapus garis, nyababkeun kabingungan, mangga balikkeun tarjamahan kana vérsi sateuacan modifikasi, jalankeun `i18` tarjamahan deui, sareng cache ulang pemetaan anu leres.

Pemetaan antara tarjamahan jeung téks aslina kabeungkeut kana token nu Jieun token anyar dina [i18n.site/token](//i18n.site/token) Hapus `.i18h/hash` , sarta tarjamahkeun deui pikeun mupus pemetaan ngabingungkeun (tapi ieu bakal ngabalukarkeun sagala pangaluyuan manual pikeun tarjamahan leungit).

## `YAML` : Kumaha Ngahindarkeun Tautan `HTML` Dirobih Kana `Markdown`

Nilai `YAML` dianggap `MarkDown` pikeun tarjamahan.

Kadang-kadang konvérsi tina `HTML` → `MarkDown` sanés anu dipikahoyong, sapertos `<a href="/">Home</a>` dirobih janten `[Home](/)` .

Nambahkeun atribut naon waé lian ti `href` kana tag `a` , sapertos `<a class="A" href="/">Home</a>` , tiasa nyingkahan konvérsi ieu.

## `./i18n/hash` Konflik File Di Handap

Pupus file anu bertentangan sareng jalankeun deui `i18` terjemahan.