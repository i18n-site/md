# i18n.site Coinbhinsiún Scríbhneoireachta MarkDown

## Pointe Ancaire

Gintear `MarkDown` phointe ancaire traidisiúnta bunaithe ar ábhar téacs I gcás iltheanga, níl an réiteach seo indéanta.

Is é an réiteach pointe ancaire a comhaontaíodh le `i18n.site` ná téacs cosúil le `<a rel=id href="#xxx" id="xxx"></a>` in `MarkDown` a chur isteach chun an pointe ancaire suite a chruthú de láimh.

`<a rel=id href="#xxx" id="xxx"></a>` , sainmhíníonn anseo `rel=id` stíl leathanaigh an phointe ancaire, le do thoil cuir do ghiorrúchán Béarla ancaire iarbhír in ionad `xxx` .

De ghnáth cuirtear ancairí leis an teideal, mar:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Is é seo a leanas an éifeacht taispeána:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Scríobh `HTML` in `MarkDown`

Is féidir `HTML` a neadú i `pug` cód.

Ní aistreofar ábhar i `<pre>` eilimint.

Agus an dá phointe seo á gcomhcheangal, is féidir leat `HTML` in `MarkDown` a scríobh go héasca chun éifeachtaí taispeána éagsúla a bhaint amach.

[Cliceáil anseo le haghaidh tagartha i18n.site Tá liosta na gcód teanga ar an leathanach baile HTML scríofa](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) , agus is é seo a leanas an cód :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Tabhair faoi deara go bhfuil `<style>` sainmhínithe freisin i `<pre>` thuas.