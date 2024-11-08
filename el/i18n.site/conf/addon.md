# Plug-In

Τα πρόσθετα μπορούν να ρυθμιστούν σε `.i18n/conf.yml` , όπως:

```yml
addon:
  - i18n.addon/toc
```

## Επίσημο Plug-In

* `i18n.addon/toc` :
  Δημιουργήστε ευρετήριο καταλόγου `json` με βάση `TOC` , ενεργοποιημένο από προεπιλογή

* `i18n.addon/mouse` :

## Σύμβαση Ονόματος Αρχείου

Τα πρόσθετα είναι και τα `npm` πακέτα.

Το πακέτο που αντιστοιχεί στο `i18n.addon/toc` παραπάνω είναι [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

Η προσθήκη χρησιμοποιεί την πιο πρόσφατη έκδοση από προεπιλογή και ελέγχει για ενημερώσεις εβδομαδιαία.

Εάν θέλετε να διορθώσετε την έκδοση, μπορείτε να γράψετε `i18n.addon/toc@0.1.3` .

Η γραμμή εντολών μετάφρασης `i18n.site` θα εγκαταστήσει το αρχείο σύμβασης του πακέτου προσθήκης και στη συνέχεια θα το εκτελέσει.

Τα συμφωνηθέντα ονόματα αρχείων είναι τα ακόλουθα

### htmIndex.js

`htmIndex.js` θα εγχυθεί μέχρι το τέλος του `.i18n/htm/index.js` .

Όπου `__CONF__` θα αντικατασταθεί με το όνομα της τρέχουσας διαμόρφωσης (όπως `dev` ή `ol` ).

### afterTran.js

Θα κληθεί μετά την ολοκλήρωση της μετάφρασης και οι παράμετροι που μεταβιβάζονται είναι οι εξής.

* `lang_li` Λίστα : , η πρώτη γλώσσα είναι η γλώσσα πηγής
* `changed` Τροποποιημένα :
* `root` :

Η τιμή επιστροφής είναι ένα λεξικό, όπως π.χ

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` είναι η λίστα αρχείων εξόδου, `path` είναι η διαδρομή του αρχείου και `txt` το περιεχόμενο του αρχείου.

## Ενσωματωμένες Λειτουργίες

Ο ενσωματωμένος χρόνος εκτέλεσης `js` βασίζεται στη δευτερεύουσα ανάπτυξη του [boa](https://github.com/boa-dev/boa) και οι ενσωματωμένες λειτουργίες είναι οι εξής :

* `wPath(path, txt)` : στο αρχείο
* `rTxt(path)` : Διαβάστε το αρχείο κειμένου
* `rBin(path)` : Διαβάστε το δυαδικό αρχείο
* `rDir(dirpath)` : Διαβάστε τον κατάλογο, η επιστρεφόμενη τιμή είναι μια λίστα : καταλόγου, λίστα αρχείων

## Οδηγός Ανάπτυξης

Η ανάπτυξη plug-in μπορεί να είναι μια αναφορά [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)