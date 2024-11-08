# i18n.site Σύμβαση Γραφής MarkDown

## Σημείο Αγκύρωσης

Τα παραδοσιακά `MarkDown` σημεία αγκύρωσης δημιουργούνται με βάση το περιεχόμενο κειμένου.

Η λύση του σημείου αγκύρωσης που συμφωνήθηκε με `i18n.site` είναι να εισαγάγετε κείμενο παρόμοιο με `<a rel=id href="#xxx" id="xxx"></a>` σε `MarkDown` για να δημιουργήσετε με μη αυτόματο τρόπο το σημείο αγκύρωσης τοποθέτησης.

`<a rel=id href="#xxx" id="xxx"></a>` , εδώ `rel=id` ορίζει το στυλ σελίδας του σημείου αγκύρωσης, αντικαταστήστε `xxx` με την πραγματική συντομογραφία αγκύρωσης στα αγγλικά.

Συνήθως προστίθενται άγκυρες στον τίτλο, όπως:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Το εφέ εμφάνισης έχει ως εξής:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Γράψε `HTML` Στο `MarkDown`

`HTML` μπορεί να ενσωματωθεί σε κώδικα `pug` .

Το περιεχόμενο σε `<pre>` στοιχεία δεν θα μεταφραστεί.

Συνδυάζοντας αυτά τα δύο σημεία, μπορείτε εύκολα να γράψετε `HTML` σε `MarkDown` για να επιτύχετε διάφορα εφέ οθόνης.

[Κάντε κλικ εδώ για i18n.site Η λίστα κωδικών γλώσσας στην αρχική σελίδα HTML είναι γραμμένη](//raw.githubusercontent.com/i18n-site/md/main/zh/README.md) και ο κώδικας είναι ο ακόλουθος :

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Σημειώστε ότι `<style>` ορίζεται επίσης στο `<pre>` παραπάνω.