# I18N.SITE · બોર્ડર્સ વિના દસ્તાવેજો<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, એક સ્થિર સાઇટ જનરેટર જે [133 વિવિધ ભાષાઓમાં](https://github.com/i18n-site/node/blob/main/lang/src/index.js) સ્વચાલિત અનુવાદને સપોર્ટ કરે છે.

<img src="https://i-01.eu.org/2023/09/O0Tee_m.webp" alt="" />

કેટલાક લોકો પૂછવા માગે છે કે, હવે જ્યારે બ્રાઉઝર્સમાં બિલ્ટ-ઇન ટ્રાન્સલેશન ફંક્શન્સ છે, તો શું વેબસાઇટનું આંતરરાષ્ટ્રીયકરણ કરવું બિનજરૂરી છે?

હું કહેવા માંગુ છું કે **સમગ્ર સાઇટનું આંતરરાષ્ટ્રીયકરણ કરીને જ આપણે બહુભાષી ઇન-સાઇટ ફુલ-ટેક્સ્ટ સર્ચ અને સર્ચ એન્જિન ઓપ્ટિમાઇઝેશનને સમર્થન આપી શકીએ છીએ** .

## ટ્યુટોરીયલ

## કાર્ય પરિચય

### માર્કડાઉન ફોર્મેટ રાખો

### અનુવાદમાં ફેરફાર કરો

અનુવાદમાં ફેરફાર કર્યા પછી, તમારે કેશ અપડેટ કરવા માટે `./i18n.sh` ફરીથી ચલાવવાની જરૂર છે.

### અનુવાદ નોંધો

અનુવાદની ટિપ્પણીઓમાં \``` પછીની ભાષા દર્શાવવી જરૂરી છે, જેમ કે ` ```rust` .

હાલમાં રસ્ટ, c, cpp, java, js, coffee, python અને bash માટે ટિપ્પણી અનુવાદને સપોર્ટ કરે છે.

વધુ ભાષાઓમાં ટિપ્પણીઓ માટે અનુવાદ સપોર્ટ ઉમેરવા [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) સંપાદિત કરો.

### પ્રોક્સી ગોઠવો

નીચેના પર્યાવરણ ચલો સેટ કરવાથી Google અનુવાદ API કૉલ્સ પ્રોક્સીમાંથી પસાર થઈ શકે છે.

```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
export https_proxy=http://127.0.0.1:7890
```

### વેરિયેબલ એમ્બેડિંગ

```
test: 测试变量<br 0>嵌入
```

### કેશ ખાલી કરો

```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
rm -rf .i18n/.cache
```
