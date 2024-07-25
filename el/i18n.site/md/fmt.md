# Σύμβαση Μορφής MarkDown

## Αγκυροβόλι

`MarkDown` αγκυρώσεις δημιουργούνται με βάση το περιεχόμενο κειμένου.

`i18n.site` συμφωνημένη λύση αγκύρωσης είναι να εισαγάγετε κείμενο παρόμοιο με `<a rel=id href="#xxx" id="xxx"></a>` σε `MarkDown` για να δημιουργήσετε με μη αυτόματο τρόπο την άγκυρα τοποθέτησης.

`<a rel=id href="#xxx" id="xxx"></a>` εδώ `rel=id` ορίζει το στυλ σελίδας του σημείου αγκύρωσης, αντικαταστήστε `xxx` με την πραγματική συντομογραφία αγκύρωσης.

Συνήθως προστίθενται άγκυρες στον τίτλο, όπως:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Το εφέ εμφάνισης έχει ως εξής:

<img src="//p.3ti.site/1721381136.avif" width="350">

## `HTML` Σε `MarkDown`

`pug` `HTML` μπορεί να ενσωματωθεί στον κώδικα.

Το περιεχόμενο εντός του `<pre>` δεν θα μεταφραστεί.

Συνδυάζοντας αυτά τα δύο σημεία, μπορείτε εύκολα να γράψετε `HTML` σε `MarkDown`

Μπορείτε να ανατρέξετε στην υλοποίηση στο [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md) ο κώδικας είναι ο ακόλουθος :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Σημειώστε ότι το `<style>` ορίζεται επίσης στο `<pre>`
