# Blogi Mall

`i18n/conf.yml` tähendab ajaveebi malli `use: Blog` renderdamiseks.

Blogipostituse `markdown` fail peab konfigureerima metateabe.

Metateave peab olema faili alguses, alustades `---` ja lõpetades `---` Keskel oleva seadistusteabe formaat on `YAML` .

Demofaili konfiguratsioon on järgmine:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` tähistab sisu kokkuvõtet, mis kuvatakse ajaveebi registrilehel.

`YMAL` ' abiga|`Süntaks, saate kirjutada mitmerealisi kokkuvõtteid.

Ajaveebi paremas servas oleva kataloogipuu konfiguratsioon on samuti `TOC` faili (vt eelmist peatükki, mis ilmuvad ainult punktis `TOC` loetletud artiklid).

Artiklid, mis ei sisalda metainfot, ei ilmu ajaveebi avalehel, vaid võivad ilmuda paremal asuvas kataloogipuus.

Kui peate artikli ülaossa kinnitama, käivitage `i18n.site` ja redigeerige `xxx.yml` faili allpool `.i18n/data/blog` ja muutke ajatempel negatiivseks (mitu negatiivset arvu sorteeritakse absoluutväärtuses väikestest suurteni).