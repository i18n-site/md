# માર્કડાઉન ફોર્મેટ સંમેલન

## એન્કર પોઇન્ટ

`MarkDown` એંકરો ટેક્સ્ટ સામગ્રીના આધારે બનાવવામાં આવે છે, આ ઉકેલ શક્ય નથી.

સંમત એન્કર સોલ્યુશન એ પોઝીશનીંગ એન્કર મેન્યુઅલી બનાવવા માટે `<a rel=id href="#xxx" id="xxx"></a>` in `MarkDown` જેવું જ લખાણ દાખલ કરવું છે `i18n.site`

`<a rel=id href="#xxx" id="xxx"></a>` , અહીં `rel=id` એન્કર પોઈન્ટની પૃષ્ઠ શૈલી વ્યાખ્યાયિત કરે છે, કૃપા કરીને `xxx` તમારા વાસ્તવિક એન્કર અંગ્રેજી સંક્ષેપ સાથે બદલો.

એન્કર સામાન્ય રીતે શીર્ષકમાં ઉમેરવામાં આવે છે, જેમ કે:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

ડિસ્પ્લે અસર નીચે મુજબ છે:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` `MarkDown`

`pug` `HTML` એમ્બેડ કરી શકાય છે.

`<pre>` અંદરની સામગ્રીનો અનુવાદ કરવામાં આવશે નહીં.

આ બે બિંદુઓને જોડીને, તમે વિવિધ ડિસ્પ્લે ઇફેક્ટ્સ પ્રાપ્ત કરવા માટે સરળતાથી `HTML` `MarkDown` લખી શકો છો.

તમે અમલીકરણનો સંદર્ભ લઈ શકો છો [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) કોડ નીચે મુજબ છે :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

નોંધ કરો કે `<style>` ઉપર પણ વ્યાખ્યાયિત થયેલ છે `<pre>`
