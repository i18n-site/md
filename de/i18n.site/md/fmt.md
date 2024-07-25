# MarkDown-Formatkonvention

## Ankerpunkt

`MarkDown` werden Anker auf der Grundlage von Textinhalten generiert. Bei Mehrsprachigkeit ist diese Lösung nicht möglich.

`i18n.site` Die vereinbarte Ankerlösung besteht darin, Text ähnlich wie `<a rel=id href="#xxx" id="xxx"></a>` in `MarkDown` einzufügen, um den Positionierungsanker manuell zu erstellen.

`<a rel=id href="#xxx" id="xxx"></a>` , hier definiert `rel=id` den Seitenstil des Ankerpunkts, bitte ersetzen Sie `xxx` durch Ihre tatsächliche englische Ankerabkürzung.

Normalerweise werden dem Titel Anker hinzugefügt, wie zum Beispiel:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Der Anzeigeeffekt ist wie folgt:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Schreiben Sie `HTML` Ein `MarkDown`

`pug` `HTML` kann in den Code eingebettet werden.

Inhalte innerhalb des `<pre>` -Elements werden nicht übersetzt.

Durch die Kombination dieser beiden Punkte können Sie ganz einfach `MarkDown` eingeben `HTML` um verschiedene Anzeigeeffekte zu erzielen.

Sie können auf die Implementierung in [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) der Code lautet wie folgt :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Beachten Sie, dass `<style>` auch `<pre>` definiert ist.
