# i18n.site MarkDown Ritunarsamþykkt

## Akkerispunktur

Hefðbundnir `MarkDown` akkerispunktar eru búnir til á grundvelli textaefnis Ef um er að ræða fjöltungumál er þessi lausn ekki framkvæmanleg.

Akkerispunktslausnin sem samþykkt er með `i18n.site` er að setja inn texta svipað og `<a rel=id href="#xxx" id="xxx"></a>` í `MarkDown` til að búa til staðsetningarfestingarpunktinn handvirkt.

`<a rel=id href="#xxx" id="xxx"></a>` , hér skilgreinir `rel=id` síðustíl akkerispunktsins, vinsamlegast skiptu `xxx` út fyrir raunverulega akkerisensku skammstöfunina þína.

Akkerum er venjulega bætt við titilinn, svo sem:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Skjáráhrifin eru sem hér segir:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Skrifaðu `HTML` Á Móti `MarkDown`

`HTML` er hægt að fella inn í `pug` kóða.

Efni í `<pre>` þáttum verður ekki þýtt.

Með því að sameina þessa tvo punkta geturðu auðveldlega skrifað `HTML` á móti `MarkDown` til að ná fram ýmsum skjááhrifum.

[Smelltu hér til að i18n.site til tungumálakóðalistans á heimasíðunni HTML er skrifaður](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) og kóðinn er sem hér segir :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Athugaðu að `<style>` er einnig skilgreint í `<pre>` hér að ofan.