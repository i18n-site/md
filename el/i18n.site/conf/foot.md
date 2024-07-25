# Υποσέλιδο

Παρόλα αυτά, λαμβάνοντας ως παράδειγμα το έργο επίδειξης, το υποσέλιδο του ιστότοπου `.i18n/htm/foot.pug` στον κατάλογο `md`

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) μια γλώσσα προτύπου που δημιουργεί `HTML` .

[➔ Κάντε κλικ εδώ για να μάθετε τη γραμματική του pug](https://pugjs.org)

**Μην γράφετε `css` `js` `foot.pug`** , διαφορετικά θα υπάρξουν σφάλματα.

Ανατρέξτε στα παρακάτω, το στυλ γράφεται στο αντίστοιχο `.css` και η αλληλεπίδραση επιτυγχάνεται με τη δημιουργία στοιχείων web.

## Στυλ Υποσέλιδου

Στο έργο `md/.i18n/htm` υπάρχουν 3 `css` αρχεία παρακάτω.

* : υποσέλιδου `foot.css`
* `import.css` `i18n.site` στυλ για ολόκληρο : ιστότοπο
* : `conf.css` και γραμματοσειρές

### Εικονίδιο Γραμματοσειράς

`F` εικονίδιο [του](https://www.iconfont.cn/?lang=en-us) [υποσέλιδου](https://www.iconfont.cn/?lang=zh) δημιουργείται από / iconfont.cn

Δημιουργήστε τη δική σας γραμματοσειρά εικονιδίων όπως απαιτείται και αντικαταστήστε : ακόλουθη διαμόρφωση στο `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Στοιχεία Ιστού

`foot.pug` μπορεί να γράψει `js` σε αυτό.

Μπορείτε να ορίσετε [ένα στοιχείο web](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` και στη συνέχεια να χρησιμοποιήσετε το στοιχείο στο `foot.pug` .

Είναι εύκολο να δημιουργήσετε στοιχεία ιστού, όπως προσαρμοσμένες ετικέτες `<x-img>`

```js
customElements.define(
  'x-img',
  class extends HTMLElement {
    constructor() {
      super();
      var img = document.createElement('img');
      img.src = '//p.3ti.site/i18n.svg';
      img.style = "height:99px;width:99px;";
      this.append(img);
    }
  }
)
```

## Πολύγλωσσο Υποσέλιδο

Ο κωδικός σε αυτό είναι : εξής `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Εδώ το αντίστοιχο είναι : `en/i18n.yml` `${I18N.C}`

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Χρησιμοποιώντας `${I18N.xxx}` με αυτήν τη μέθοδο γραφής, σε συνδυασμό με `i18n.yml` , μπορείτε να επιτύχετε πολυγλωσσική διεθνοποίηση του υποσέλιδου.

`class="a"` στον σύνδεσμο για να αποφύγετε τη μετατροπή του συνδέσμου σε `MarkDown` , δείτε :
 [: `YAML` να αποτρέψετε τη μετατροπή `HTML` του συνδέσμου σε `Markdown`](/i18/qa#H2) .