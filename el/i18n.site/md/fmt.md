# Σύμβαση μορφο typing για Markdown

## Ανchor

Τα παραδοσιακά `MarkDown` σημεία αγκύρωσης δημιουργούνται με βάση το περιεχόμενο κειμένου.

Η λύση για τα σημεία αγκύρωσης που έχει συμφωνηθεί από το `i18n.site` προβλέπει την εισαγωγή κειμένου του τύπου `<a rel=id href="#xxx" id="xxx"></a>` στο `Markdown`, ώστε να δημιουργούνται χειροκίνητα σημεία αγκύρωσης τοποθέτησης.

`<a rel=id href="#xxx" id="xxx"></a>`, εδώ το `rel=id` καθορίζει το στυλ της σελίδας για τον anchor, αντικαταστήστε το `xxx` με το πραγματικό σας σύντομο αγγλικό όνομα για τον anchor.

Οι anchors συνήθως τοποθετούνται στους τίτλους, π.χ.:

```md
### <a rel=id href="#i18" id="i18"></a>i18 : MarkDown Command Line Translation Tool
```

Η εμφάνιση είναι ως εξής:

<img src="//p.3ti.site/1721381136.avif" width="350">

## Γράψτε `HTML` μέσα στο `Markdown`

Ο κώδικας `pug` επιτρέπει την ενσωμάτωση `HTML`.

Το περιεχόμενο μέσα στο στοιχείο `<pre>` δεν θα μεταφραστεί.

Συνδυάζοντας αυτά τα δύο, μπορείτε να γράψετε `HTML` στο `Markdown` με ευκολία, επιτυγχάνοντας διάφορα εφέ εμφάνισης.

Μπορείτε να ανατρέξετε στην υλοποίηση στο [github.com/i18n-site/md/en/README.md](https://raw.githubusercontent.com/i18n-site/md/main/en/README.md), ο κώδικας είναι ο εξής:

```html
<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ International Solutions<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>
<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i> … …</pre>
```

Σημειώστε ότι στο προηγούμενο `<pre>` έχει οριστεί επίσης `<style>`.