# કસ્ટમાઇઝ નેવિગેશન

નેવિગેશનને કેવી રીતે કસ્ટમાઇઝ કરવું તે સમજાવવા માટે ડેમો સાઇટને ઉદાહરણ તરીકે લઈએ [i18n-demo.github.io](//i18n-demo.github.io)

![](https://p.3ti.site/1731036697.avif)

ઉપરોક્ત આકૃતિમાં ક્રમાંકિત વિસ્તારોને અનુરૂપ ફાઇલો નીચે મુજબ છે:

1. ડાબે [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. અધિકાર [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) એ ટેમ્પલેટ ભાષા છે જે `HTML` 's જનરેટ કરે છે.

[➔ નું વ્યાકરણ શીખવા માટે અહીં ક્લિક કરો pug](https://pugjs.org)

ફોર્મેટ સ્ટ્રિંગ `${I18N.sponsor}` નો ઉપયોગ આંતરરાષ્ટ્રીયકરણને અમલમાં મૂકવા માટે થાય છે, અને તેની સામગ્રીને સ્રોત ભાષા નિર્દેશિકામાં અનુરૂપ ટેક્સ્ટ સાથે બદલવામાં આવશે [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml)

**`pug` માં `css` અને `js` લખશો નહીં** , નહીં તો ભૂલ થશે.

શૈલીઓ `css` માં લખવામાં આવે છે, અને ક્રિયાપ્રતિક્રિયા વેબ ઘટકો બનાવીને પ્રાપ્ત થાય છે.

અહીં, નેવિગેશન બારની શૈલીને અનુરૂપ છે : [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css)