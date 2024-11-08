# i18n.site માર્કડાઉન લેખન સંમેલન

## એન્કર પોઇન્ટ

પરંપરાગત `MarkDown` એન્કર પોઈન્ટ્સ ટેક્સ્ટ સામગ્રીના આધારે બનાવવામાં આવે છે, બહુ-ભાષાના કિસ્સામાં, આ ઉકેલ શક્ય નથી.

`i18n.site` સાથે સંમત થયેલ એન્કર પોઈન્ટ સોલ્યુશન મેન્યુઅલી પોઝીશનીંગ એન્કર પોઈન્ટ બનાવવા માટે `<a rel=id href="#xxx" id="xxx"></a>` માં `MarkDown` જેવું લખાણ દાખલ કરવું છે.

`<a rel=id href="#xxx" id="xxx"></a>` , અહીં `rel=id` એન્કર પોઈન્ટની પૃષ્ઠ શૈલીને વ્યાખ્યાયિત કરે છે, કૃપા કરીને `xxx` તમારા વાસ્તવિક એન્કર અંગ્રેજી સંક્ષેપ સાથે બદલો.

એન્કર સામાન્ય રીતે શીર્ષકમાં ઉમેરવામાં આવે છે, જેમ કે:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

ડિસ્પ્લે અસર નીચે મુજબ છે:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `MarkDown` માં `HTML` લખો

`HTML` `pug` કોડમાં એમ્બેડ કરી શકાય છે.

`<pre>` ઘટકોમાંની સામગ્રીનું ભાષાંતર કરવામાં આવશે નહીં.

આ બે બિંદુઓને સંયોજિત કરીને, તમે વિવિધ પ્રદર્શન અસરો પ્રાપ્ત કરવા માટે સરળતાથી `HTML` માં `MarkDown` લખી શકો છો.

[HTML માટે અહીં ક્લિક i18n.site](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

નોંધ કરો કે `<style>` ઉપર `<pre>` માં પણ વ્યાખ્યાયિત થયેલ છે.