# ናይ ብሎግ ቅጥዒ

`i18n/conf.yml` ካብ `use: Blog` ማለት ንመቕረጺ ብሎግ ቴምፕሌት ምጥቃም ማለት እዩ።

እቲ `markdown` ፋይል ናይቲ ብሎግ ፖስት ሜታ ሓበሬታ ምውቃር የድልዮ።

ሜታ ሓበሬታ ኣብ መጀመርታ ናይቲ ፋይል ክኸውን ኣለዎ፣ ብ `---` ጀሚሩ ብ `---` ይውዳእ።ቅርጺ ናይቲ ኣብ ማእከል ዘሎ ናይ ውቅር ሓበሬታ `YAML` እዩ።

ናይ ሓደ ዲሞ ፋይል ውቅር ከምዚ ዝስዕብ ይመስል፤

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` ንጽማቕ ትሕዝቶ ይሕብር፣ እዚ ድማ ኣብ ገጽ መመልከቲ ብሎግ ክረአ እዩ።

ብሓገዝ `YMAL` ' ። | `ስነ-ቓል፡ ብዙሕ መስመራት ዘለዎ ጽማቕ ክትጽሕፍ ትኽእል ኢኻ።

ኣብ የማናይ ሸነኽ ናይቲ ብሎግ ዘሎ ውቅር ገረብ ማህደር እውን `TOC` ፋይላት እዩ (ኣብ ዝሓለፈ ምዕራፍ `TOC` ዝተዘርዘሩ ጽሑፋት ጥራይ እዮም ኣብ መወከሲ መእተዊ ገጽ ብሎግ ዝረኣዩ)።

ሜታ ሓበሬታ ዘይሓዙ ጽሑፋት ኣብ መእተዊ ገጽ ብሎግ ኣይክረኣዩን እዮም፡ ግን ኣብቲ ኣብ የማን ዘሎ ገረብ ማህደር ክረኣዩ ይኽእሉ።

## ሓበሬታ ደራሲ

ሓበሬታ ደራሲ ኣብቲ ሜታ ሓበሬታ ናይቲ ጽሑፍ ክጽሓፍ ይኽእል እዩ፣ ከም፤

```yml
author: marlowe
```

ድሕሪኡ ኣብቲ ምንጪ ቋንቋ ማህደር `author.yml` ኣርትዕ እሞ ሓበሬታ ደራሲ ንውስኽ፣ ከም :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` ፣ `url` ን `title` ን ኩሎም ኣማራጺ እዮም። `name` እንተዘይተቐሚጡ፡ እቲ ስም መፍትሕ (ኣብዚ `marlowe` ) ከም `name` ክጥቀመሉ እዩ።

ዲሞ ፕሮጀክት [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) ን [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml) ን ርአ

## ፒን ዝገበረ ጽሑፍ

ነቲ ጽሑፍ ናብ ላዕሊ ፒን ምግባር እንተድኣ ኣድልዩካ፡ በጃኻ `i18n.site` ኣካይዶ እሞ ነተን ኣብ ትሕቲ `.i18n/data/blog` ዘለዉ `xxx.yml` ፋይላት ኣርትዕ፡ ነቲ ማሕተም ግዜ ድማ ናብ ኣሉታዊ ቁጽሪ ቀይሮ (ብዙሓት ኣሉታዊ ቁጽርታት ካብ ዝዓበየ ናብ ዝነኣሰ ክስርዑ እዮም)።