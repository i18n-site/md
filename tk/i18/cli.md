# Buýruk Setiriniň Parametrleriniň Jikme-Jik Düşündirilişi

## 0 Faýllary `-p`

`-p` ýa-da `--purge` her terjime katalogynda bar, ýöne çeşme dil katalogynda ýok faýllary arassalaýar.

Sebäbi resminamalar ýazylanda Markdown faýl atlary köplenç düzedilýär, netijede terjime bukjasyndaky köp köne we taşlanan faýllar bolýar.

Beýleki dil kataloglarynda pozulmaly faýllary arassalamak üçin bu parametrden peýdalanyň.

## `-d` Terjime Katalogyny Görkezýär

Terjime edilen katalog häzirki faýlyň ýerleşýän katalogyna gaýtarylmaýar.

`-d` ýa-da `--workdir` terjime katalogyny kesgitläp biler, meselem:

```
i18 -d ~/i18n/md
```

## `-h` Kömek

Buýruk setiriniň kömegini görmek üçin `-h` ýa-da `--help` .