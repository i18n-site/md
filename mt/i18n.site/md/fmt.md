# i18n.site Konvenzjoni Tal-Kitba MarkDown

## Punt Tal-Ankra

Il-punti ta' ankra tradizzjonali `MarkDown` huma ġġenerati abbażi tal-kontenut tat-test Fil-każ ta' multi-lingwa, din is-soluzzjoni mhix fattibbli.

Is-soluzzjoni tal-punt tal-ankra miftiehma ma ' `i18n.site` hija li daħħal test simili għal `<a rel=id href="#xxx" id="xxx"></a>` `MarkDown` biex jinħoloq manwalment il-punt tal-ankra tal-pożizzjonament.

`<a rel=id href="#xxx" id="xxx"></a>` , hawn `rel=id` jiddefinixxi l-istil tal-paġna tal-punt tal-ankra, jekk jogħġbok ibdel `xxx` bl-abbrevjazzjoni Ingliża tal-ankra attwali tiegħek.

L-ankri ġeneralment jiżdiedu mat-titlu, bħal:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

L-effett tal-wiri huwa kif ġej:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Ikteb `HTML` `MarkDown`

`HTML` jista 'jiġi inkorporat fil-kodiċi `pug` .

Il-kontenut `<pre>` elementi mhux se jiġi tradott.

Meta tgħaqqad dawn iż-żewġ punti, tista 'faċilment tikteb `HTML` `MarkDown` biex tikseb diversi effetti tal-wiri.

[Ikklikkja hawn għal i18n.site Il-lista tal-kodiċi tal-lingwa fuq il-homepage HTML hija miktuba](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , u l-kodiċi huwa kif ġej :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Innota li `<style>` huwa definit ukoll `<pre>` hawn fuq.