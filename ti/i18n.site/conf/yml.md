# .i18n/conf.yml ዝብል ጽሑፍ ኣሎ።

እቲ ናይ ውቅር ፋይል `.i18n/conf.yml` `i18n.site`

ብዘይካ `ignore:` ን `i18n:` [`i18`](/i18) ቅጥዕታት ፡ እቲ ናይ ውቅር ፋይል ከምዚ ዝስዕብ ይመስል፤

```yaml
upload:
  ext:
    - md
nav:
  - i18n: home
    use: Toc
    url: /
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
  - i18n: blog
    use: Doc
```

ካብዚኦም እቲ `ext:` configuration item of `upload` ማለት ኣብ እዋን ምሕታም `.md` ጥራይ እዩ ዝስቀል ማለት እዩ።

## ላዕለዋይ ናይ ምድህሳስ ናቭ

`nav:`

<img src="//p.3ti.site/1721051426.avif" style="width:320px">

ካብኣቶም ድማ ምስ `en/i18n.yml`中`home: Home` ይሰማማዕ `i18n: home`

ናብ ብዙሓት ቋንቋታት ክትርጎም እዩ፣ ከም `zh/i18n.yml` `en/i18n.yml`

<img src="//p.3ti.site/1721051689.avif" style="width:320px">

እቲ ትርጉም ምስተዛዘመ፡ ኣብቲ `yml` ዘሎ ዋጋ ናይ `yml`

### `use: Toc` , ንጽል ፋይል ቅጥዒ (ምስ ኣውታር)

: `nav`

```
  - i18n: home
    use: Toc
    url: /
```

`use: Toc` ማለት `Toc` rendering ምጥቃም ማለት እዩ፣ እዚ ድማ ሓደ `Markdown` template ምቕራብ እዩ።

`TOC` `Table of Contents` `Markdown`

`url:` ንመገዲ ፋይል `Markdown` ( `/` ምስ ሱር ማህደር ይሰማማዕ `/README.md` , እዚ ስም ፋይል ዓቢ ፊደላት ቅድመ-ጥብቆን ንእሽቶ ድሕረ-ባይታን ይሓትት)።

### `use: Md` ንጽል ፋይል ቅጥዒ (ኣውታር የለን)

`Md` Template ምስ `Toc` ሓደ እዩ፣ ክልቲኦም ንሓደ `Markdown` ፋይል ንምቕራብ ይጥቀሙ። ይኹን እምበር `Md` እቲ ቅጥዒ ኣብቲ ጎድናዊ መስመር ዘሎ ኣውታር ኣየርእን እዩ።

ኣብዚ ኣብ ላዕሊ ዘሎ ውቅር ናብ `use: Md` `use: Toc` ትኽእል ኢኻ፣ run `i18n.site` ኣብቲ `md` ማህደር እንደገና፣ ድሕሪኡ ናብቲ ናይ ምዕባለ ቅድመ-ምርኢት URL ብምኻድ ኣብቲ መበገሲ ገጽ ዘሎ ለውጢ ክትዕዘብ ትኽእል ኢኻ።

### ነባሪ ጽዕነት ብዘይ ናይ ውቅር መንገዲ

ናይ ሓደ ዝተወሰነ መንገዲ ቅድመ-ጥብቆ መንገዲ ኣብ `nav:` እንተዘይተዋቒሩ፡ እቲ ምስቲ መንገዲ ዝሰማማዕ `MarkDown` ፋይል ብነባሪ ይጽዓንን `Md` template ተጠቒሙ ክቐርጽን እዩ።

`nav:` `/test` `en` `/en/test.md` `Md`

እዚ ፋይል እዚ `/en/test.md` ፡ እቲ ነባሪ `404` ገጽ ክረአ እዩ።

<img src="https://p.3ti.site/1721184299.avif" style="width:360px">

### `use: Doc` , ብዙሕ ፋይላት ዘለዎ ቅጥዒ

ኣብቲ ናይ ውቅር ፋይል፤

```
  - i18n: blog
    use: Doc
```

ንናይ ቅጥዒ ምቕራብ `Doc`

`Doc` `MarkDown`

#### ሓደ ፕሮጀክት (ብዙሓት ፋይላት)

ኣብዚ ኣብ ላዕሊ `blog` ንጽል-ፕሮጀክት ሞድ `Doc` .

```
  - i18n: blog
    url: blog
    use: Doc
```

##### url ባዶ ምስ ዝኸውን ብነባሪ ናብ ዋጋ i18n ይኸውን።

`url` `url` `i18n`

እዚ ኣብ ላዕሊ ዘሎ ኣገባብ ጽሕፈት ምስ `url: blog` ተዛማዲ ፋይሉ ድማ `en/blog/TOC` እዩ።

#### ብዙሓት ፕሮጀክትታት

`.i18n/conf.yml` እቲ ኣብ `i18n:doc` ዘሎ ውቅር ብዙሕ ፕሮጀክትታት ዘለዎ ሞድ እዩ።

```
  - i18n: doc
    menu: NB demo1,demo2
    use: Doc
```

<img src="https://p.3ti.site/1721275191.avif" width="320px">

ኣብዚ `menu: NB demo1,demo2` እቲ ንቑልቁል ዝወርድ ዝርዝር ንምቕራጽ `NB` ምጥቃም ማለት እዩ።

`NB` `Name Breif`

`NB` `demo1,demo2`
ኣስተውዕል ** ድሕሪን ኮማ `,` `demo1,demo2` : **

ነዞም ኣብ ላዕሊ ዝተጠቕሱ መለክዒታት፡ እቲ ተዛማዲ ማህደር መመልከቲ ፋይል፤

* `en/demo1/TOC`
* `en/demo2/TOC`

#### TOC ትሕዝቶ ሰሌዳ መመልከቲ

`i18n.site` ነቲ `js` ፕላግ-ኢን `.i18n/hook/after.tran/TOC.js` ኣብቲ ናይ ዲሞ መኽዘን ብምፍጻም ነቲ ናይ ማህደር መመልከቲ ፋይል `doc` ምስቲ ናይ ቅጥዒ ውቅር ዝሰማማዕ `TOC` ከንብቦ እዩ `json` ናይቲ ማህደር ኣውታር ንምፍጣር።

`doc`

`.i18n` `i18n.site`

እቲ ቅጥዒ ነቲ ናይ ትሕዝቶ ሰሌዳ ኣውታር ኣብቲ ዝፈጠሮ `json` ተመርኲሱ ክቐርብ እዩ `Doc`

##### ዝርዝር ትሕዝቶ መብርሂ

እቲ ትሕዝቶ ከምዚ ዝስዕብ : `en/blog/TOC`

```
README.md

news/README.md
  news/begin.md
```

##### ደረጃታት ንምምልካት ኢንደንቴሽን ተጠቐም

ኣብ ላዕሊ `en/blog/TOC` ኣብ ቀዳማይ መስመር `README.md` ምስቲ ኣብ ታሕቲ ዘሎ ስእሊ ዘሎ `i18n.site` ይሰማማዕ፡ እዚ ድማ ስም ፕሮጀክት እዩ።

እተን ዝቕጽላ ክልተ መስመራት ከምቲ ኣብ ታሕቲ ዘሎ ስእሊ ስክሪን ዝረኣያ እየን።

<img src="https://p.3ti.site/1721097381.avif" style="width:320px">

ምስ `News` , ይሰማማዕ `news/README.md`
ምስ `Our Product is Online !` ይሰማማዕ `news/begin.md`

`TOC`

##### ብደረጃ ወላዲ ነቲ ኣርእስቲ ጥራይ እዩ ዝጽሕፍ እምበር ነቲ ትሕዝቶ ኣይጽሕፎን።

ብዙሕ ደረጃታት ምውጥዋጥ ምስ ዝህሉ፡ እቲ ወላዲ ደረጃ ነቲ ኣርእስቲ ጥራይ እዩ ዝጽሕፍ እምበር ነቲ ትሕዝቶ ኣይጽሕፎን። እንተዘይኮይኑ ታይፖግራፊ ክዕንቀፍ እዩ።

##### ፕሮጀክት README.md 

`README.md` ፕሮጀክት ንኣብነት ትሕዝቶ ኣብ `en/demo2/README.md` ክትጽሕፍ ትኽእል ኢኻ።

ኣስተውዕል ትሕዝቶ ናይዚ ፋይል ናይ ትሕዝቶ ዝርዝር ኣውታር ስለዘየርኢ ንውሓቱ ደረት ምግባርን ሓጺር መእተዊ ምጽሓፍን ይምከር።

###### ጭርሖ ፕሮጀክት

`Deme Two` ትርእይዎ ዘለኹም፡ ኣብ ትሕቲ እቲ ንቑልቁል ዝወርድ ዝርዝርን ካታሎግ ኣውታር ስም ፕሮጀክትን `Your Project slogan` ፕሮጀክትኡ ኣሎ :

<img alt="" src="https://p.3ti.site/1721276842.avif">

: ምስ ቀዳማይ መስመር ይሰማማዕ `en/demo2/README.md`

```
# Demo Two : Your Project slogan
```

ፕሮጀክት `README.md` ኣብ ቀዳማይ ደረጃ ኣርእስቲ ድሕሪ ቀዳመይቲ ኮሎን `:` ዘሎ ትሕዝቶ ከም ጭርሖ ፕሮጀክት ክውሰድ እዩ።

ካብ ቻይና፡ ጃፓንን ኮርያን ዝመጹ ተጠቀምቲ፡ ኣብ ክንዲ ምሉእ ስፍሓት ዘለዎ ኮሎን ክትጥቀሙ ከምዘለኩም ኣስተውዕሉ `:`

##### ከመይ ጌርና TOC ብጅምላ ነግዕዞ?

`TOC` እቲ ፋይል ኣብ ማህደር ናይቲ ምንጪ ቋንቋ ክቕመጥ ኣለዎ።

ንኣብነት እቲ ምንጪ ቋንቋ ቻይንኛ እንተኾይኑ `TOC` ላዕሊ ዘሎ `zh/blog/TOC` .

እቲ ምንጪ ቋንቋ እንተተቐይሩ፡ ኣብቲ ፕሮጀክት ብዝተወሰነ ቋንቋ ንዘለዉ `TOC` ናብ ካልእ ቋንቋ ብእኩብ ክትግዕዝ ኣለካ።

ነዞም ዝስዕቡ ትእዛዛት ክትውከስ ትኽእል ኢኻ፤

```
rsync -av --remove-source-files --include='*/' \
--include='TOC' --exclude='*' en/ zh/
```

በጃኹም ኣብዚ ኣብ ላዕሊ ዘሎ ትእዛዝ ናብ ናይ ቋንቋ ኮድኩም !ን `zh/` ኣዐርዩዎ `en/`


