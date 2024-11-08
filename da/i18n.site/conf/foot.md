# Tilpasset Sidefod

Hvis du stadig tager demoprojektet som eksempel, definerer `.i18n/htm/foot.pug` i `md` -mappen sidefoden på webstedet.

![](https://p.3ti.site/1721286077.avif)

## Footer Stil

Der er tre `css` filer under `md/.i18n/htm` i demoprojektet.

* `foot.css` : Footer stil
* `import.css` : `i18n.site` stil for hele webstedet
* `conf.css` : Sidefodsikoner og skrifttyper

### Ikon Skrifttype

[Sidefodsikonet](https://www.iconfont.cn/?lang=en-us) genereres ved at oprette en skrifttype [med](https://www.iconfont.cn/?lang=zh) / `F` iconfont.cn

Opret venligst din egen ikonskrifttype efter behov og udskift følgende konfiguration i `conf.css` :

```
@font-face {
  font-family: "F";
  src: url(//p.3ti.site/ico1.woff2) format("woff2");
}

#Ft>b>a.site {
  background: url("//p.3ti.site/i18n.svg") 0 0 / cover;
  display: block;
  height: 24px;
  opacity: 0.8;
  width: 115px;
  flex-shrink: 0;
}
```

Henvis venligst ikke direkte til skrifttypefilen for iconfont.cn, da den ikke kan indlæses i safari-browseren.

## Web Komponenter

Du kan ikke skrive `js` i `foot.pug` Hvis interaktion er påkrævet, bedes du tilpasse webkomponenten.

[En webkomponent](https://www.freecodecamp.org/news/build-your-first-web-component/) kan defineres i `md/.i18n/htm/index.js` og derefter bruges i `foot.pug` .

Det er nemt at oprette webkomponenter, såsom brugerdefinerede `<x-img>` .

```js
customElements.define(
  'x-img',
  class extends HTMLElement {
    constructor() {
      super();
      var img = document.createElement('img');
      img.src = '//p.3ti.site/i18n.svg';
      img.style = "height:99px;width:99px;";
      this.append(img);
    }
  }
)
```

## Flersproget Sidefod

Koden i `.i18n/htm/foot.pug` er som følger :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Her svarer `${I18N.C}` til `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Ved at bruge `${I18N.xxx}` svarende til denne skrivemetode, kombineret med `i18n.yml` , kan du opnå flersproget internationalisering af sidefoden.

Tilføjelse af `class="a"` til linket er for at forhindre linket i at blive konverteret til `MarkDown` Se :
 [➔ `YAML` Sådan forhindrer : link `HTML` i at blive konverteret til `Markdown`](/i18/qa#H2) .