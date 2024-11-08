# Faq

## Ngahaja Dihapus `.i18n/v` , Ngabalukarkeun Pakét `npm` Gagal Diterbitkeun

Versi sajarah anu dikaluarkeun ku pakét `npm` disimpen dina `.i18n/v/ol/v.hash` .

Upami anjeun teu kahaja ngahapus `.i18n/v/ol` pakét `npm` moal dileupaskeun.

Dina waktos ieu, panggihan heula nomer vérsi versi rilis terakhir proyék anjeun dina [npmjs.com](//npmjs.com) contona, `0.1.9` .

Teras tingal `bash` di handap pikeun nyiptakeun file.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Catet yén ngalereskeun ku cara ieu bakal leungit sajarah file, sahingga teu mungkin pikeun ngamutahirkeun édisi salajengna, sareng sadaya eusi bakal dibungkus deui sareng diunggah sakali.