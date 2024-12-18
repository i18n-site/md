# Προσαρμοσμένο Υποσέλιδο

Παρόλα αυτά, λαμβάνοντας ως παράδειγμα το έργο επίδειξης, `.i18n/htm/foot.pug` στον κατάλογο `md` ορίζει το υποσέλιδο του ιστότοπου.

![](https://p.3ti.site/1721286077.avif)

## Στυλ Υποσέλιδου

Υπάρχουν τρία αρχεία `css` κάτω από `md/.i18n/htm` στο έργο επίδειξης.

* `foot.css` στυλ :
* `import.css` : στυλ για ολόκληρο `i18n.site` ιστότοπο
* `conf.css` Εικονίδια : και γραμματοσειρές

### Εικονίδιο Γραμματοσειράς

Το εικονίδιο υποσέλιδου δημιουργείται δημιουργώντας μια γραμματοσειρά με `F` iconfont.cn [Αγγλική έκδοση](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Δημιουργήστε τη δική σας γραμματοσειρά εικονιδίων όπως απαιτείται και αντικαταστήστε την παρακάτω διαμόρφωση σε `conf.css` :

```
@font-face {
  font-family: "F";
  src: url(//p.3ti.site/ico1.woff2) format("woff2");
}

#Ft>b>a.site {
  background: url("//p.3ti.site/i18n.svg") 0 0 / cover;
  display: block;
  height: 24px;
  opacity: 0.8;
  width: 115px;
  flex-shrink: 0;
}
```

Μην αναφέρετε απευθείας το αρχείο γραμματοσειράς του iconfont.cn επειδή δεν μπορεί να φορτωθεί στο πρόγραμμα περιήγησης σαφάρι.

## Στοιχεία Ιστού

Δεν μπορείτε να γράψετε `js` σε `foot.pug` Εάν απαιτείται αλληλεπίδραση, προσαρμόστε το στοιχείο web.

[Ένα στοιχείο web](https://www.freecodecamp.org/news/build-your-first-web-component/) μπορεί να οριστεί στο `md/.i18n/htm/index.js` και στη συνέχεια να χρησιμοποιηθεί στο `foot.pug` .

Είναι εύκολο να δημιουργήσετε στοιχεία ιστού, όπως προσαρμοσμένες `<x-img>` .

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

Ο κωδικός στο `.i18n/htm/foot.pug` είναι ο εξής :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Εδώ `${I18N.C}` αντιστοιχεί σε `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Χρησιμοποιώντας `${I18N.xxx}` παρόμοια με αυτήν τη μέθοδο γραφής, σε συνδυασμό με `i18n.yml` , μπορείτε να επιτύχετε πολυγλωσσική διεθνοποίηση του υποσέλιδου.

Η προσθήκη `class="a"` στον σύνδεσμο είναι για να αποτρέψει τη μετατροπή του συνδέσμου σε `MarkDown` Δείτε :
 [: `YAML` Πώς να αποτρέψετε τη μετατροπή του συνδέσμου `HTML` σε `Markdown`](/i18/qa#H2) .