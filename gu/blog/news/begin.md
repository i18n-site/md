---

brief: |
  હાલમાં, બે ઓપન સોર્સ કમાન્ડ લાઇન ટૂલ્સ લાગુ કરવામાં આવ્યા છે: i18 (માર્કડાઉન કમાન્ડ લાઇન ટ્રાન્સલેશન ટૂલ) અને i18n.site (મલ્ટી-લેંગ્વેજ સ્ટેટિક ડોક્યુમેન્ટ સાઇટ જનરેટર)

---


# i18n.site · માર્કડાઉન અનુવાદ અને વેબસાઇટ નિર્માણ સાધન હવે ઓનલાઈન છે!

અડધા વર્ષથી વધુ વિકાસ પછી, ઓનલાઇન છે [https://i18n.site](//i18n.site)

હાલમાં, બે ઓપન સોર્સ કમાન્ડ લાઇન ટૂલ્સ અમલમાં છે:

* `i18` : MarkDown વાક્ય અનુવાદ સાધન
* `i18n.site` : મલ્ટિ-લેંગ્વેજ સ્ટેટિક ડોક્યુમેન્ટ સાઇટ જનરેટર, **વાંચવાના અનુભવ માટે ઑપ્ટિમાઇઝ**

અનુવાદ સંપૂર્ણપણે `Markdown` ના ફોર્મેટને જાળવી શકે છે. ફાઇલ ફેરફારોને ઓળખી શકે છે અને ફક્ત ફેરફારો સાથે ફાઇલોનું ભાષાંતર કરી શકે છે.

અનુવાદ સંપાદનયોગ્ય છે; જો તમે મૂળ લખાણને સંશોધિત કરો છો અને મશીન તેને ફરીથી અનુવાદિત કરો છો, તો અનુવાદમાં મેન્યુઅલ ફેરફારો ફરીથી લખવામાં આવશે નહીં (જો મૂળ ટેક્સ્ટના આ ફકરામાં ફેરફાર કરવામાં આવ્યો નથી).

[➤ ની github Library ને અધિકૃત કરવા અને આપમેળે i18n.site માટે અહીં ક્લિક કરો](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) અને **$50 બોનસ પ્રાપ્ત કરો** .

## મૂળ

ઈન્ટરનેટ યુગમાં, આખું વિશ્વ બજાર છે, અને બહુભાષીવાદ અને સ્થાનિકીકરણ એ મૂળભૂત કુશળતા છે.

વર્તમાન અનુવાદ વ્યવસ્થાપન સાધનો ખૂબ જ હેવીવેઇટ છે જેઓ વર્ઝન `git` મેનેજમેન્ટ પર આધાર રાખે છે, તેઓ હજુ પણ આદેશ વાક્યને પસંદ કરે છે.

તેથી, મેં અનુવાદ સાધન `i18` વિકસાવ્યું અને અનુવાદ સાધનના આધારે બહુ-ભાષા સ્થિર સાઇટ જનરેટર `i18n.site` બનાવ્યું.

![](https://p.3ti.site/1723777556.avif)

આ તો માત્ર શરૂઆત છે, હજુ ઘણું કરવાનું બાકી છે.

ઉદાહરણ તરીકે, સ્ટેટિક ડોક્યુમેન્ટ સાઇટને સોશિયલ મીડિયા અને ઈમેલ સબ્સ્ક્રિપ્શન્સ સાથે કનેક્ટ કરીને, જ્યારે અપડેટ્સ રીલીઝ થાય ત્યારે વપરાશકર્તાઓ સુધી સમયસર પહોંચી શકાય છે.

ઉદાહરણ તરીકે, મલ્ટિ-લેંગ્વેજ ફોરમ્સ અને વર્ક ઓર્ડર સિસ્ટમ્સ કોઈપણ વેબ પૃષ્ઠમાં એમ્બેડ કરી શકાય છે, જે વપરાશકર્તાઓને અવરોધો વિના વાતચીત કરવાની મંજૂરી આપે છે.

## ઓપન સોર્સ

ફ્રન્ટ-એન્ડ, બેક-એન્ડ અને કમાન્ડ લાઇન [કોડ તમામ ઓપન સોર્સ છે](https://i18n.site/i18n.site/c/src) (અનુવાદ મોડલ હજુ સુધી ઓપન સોર્સ નથી).

વપરાયેલ ટેક્નોલોજી સ્ટેક નીચે મુજબ છે:

ફ્રન્ટએન્ડ [svelte](https://svelte.dev) [stylus](https://stylus-lang.com) , [pug](https://github.com/pugjs/pug) , [vite](https://github.com/vitejs/vite)

કમાન્ડ લાઇન અને બેકએન્ડ રસ્ટ પર આધારિત છે.

પાછળનો છેડો [axum](https://github.com/tokio-rs/axum) [tower-http](https://github.com/tower-rs/tower-http/releases) .

કમાન્ડ લાઇન [js એન્જિન boa_engine](https://docs.rs/boa_engine) , [એમ્બેડેડ ડેટાબેઝ fjall](https://github.com/fjall-rs/fjall) .

[contabo](https://my.contabo.com) VPS

ડેટાબેઝ [kvrocks](https://kvrocks.apache.org) [mariadb](https://mariadb.org) .

સ્વ-નિર્મિત પર મેઇલ [chasquid](https://github.com/albertito/chasquid) SMTP

## અમારો સંપર્ક કરો

જ્યારે નવા ઉત્પાદનો લોન્ચ કરવામાં આવે છે, ત્યારે સમસ્યાઓ અનિવાર્ય છે.

Google ફોરમ [groups.google.com/u/2/g/i18n-site](https://groups.google.com/u/2/g/i18n-site) દ્વારા અમારો સંપર્ક કરવા માટે મફત લાગે :