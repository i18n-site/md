# Masalah Umum

## Teu Kahaja Dihapus `.i18n/V` , Ngabalukarkeun `Npm` Pakét Gagal Diterbitkeun

Versi sajarah `npm` release pakét disimpen dina `.i18n/v/ol/v.hash`

Upami anjeun teu kahaja ngahapus `.i18n/v/ol` pakét `npm` moal diterbitkeun.

Dina waktos ieu, panggihan heula nomer versi versi rilis terakhir proyek anjeun dina [npmjs.com](//npmjs.com) contona `0.1.9`

Teras tingal `bash` Jieun file di handap.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Catet yén ngalereskeun ku cara ieu bakal leungit sajarah file, sahingga teu mungkin pikeun ngapdet édisi salajengna sacara bertahap, sareng sadaya eusi bakal dibungkus deui sareng diunggah sakali.

