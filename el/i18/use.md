# Εγκατάσταση Και Χρήση

## Τα windows Εγκαθιστούν Πρώτα Το git bash

windows , κάντε [κλικ εδώ για να κατεβάσετε και να εγκαταστήσετε πρώτα `git bash`](https://git-scm.com/download/win) .

Εκτελέστε τις επόμενες λειτουργίες σε `git bash` .

## Εγκαθιστώ

```sh
bash <(curl -sS https://i.i18n.site) i18
```

### Διαμόρφωση Διακριτικού Μετάφρασης

Επισκεφτείτε το [i18n.site/token](//i18n.site/token)

<img src="https://p.3ti.site/1719911689.avif" style="width:400px">

Δημιουργήστε `~/.config/i18n.site.yml` , επικολλήστε το περιεχόμενο που αντιγράφηκε σε αυτό, το περιεχόμενο είναι το εξής:

```
token: YOUR_API_TOKEN
```

Επιπλέον, πρέπει να [δεσμεύσετε](/#price) μια πιστωτική κάρτα πληρωμής στο [i18n.site/payBill](//i18n.site/payBill)

## Χρήση

### Έργο Επίδειξης

Ανατρέξτε στο έργο επίδειξης [github.com/i18n-site/demo.i18](//github.com/i18n-site/demo.i18) να μάθετε τη διαμόρφωση της μετάφρασης `i18` .

Οι χρήστες στην Κίνα μπορούν να κλωνοποιήσουν [atomgit.com/i18n/demo.i18](//atomgit.com/i18n/demo.i18)

Μετά την κλωνοποίηση, εισαγάγετε τον κατάλογο και εκτελέστε `i18` για να ολοκληρώσετε τη μετάφραση.

### Δομή Καταλόγου

Η δομή του καταλόγου αποθήκης προτύπων έχει ως εξής

```
┌── .i18n
│  └── conf.yml
└── en
   ├── _IgnoreDemoFile.md
   ├── i18n.yml
   └── README.md
```

Τα μεταφρασμένα αρχεία επίδειξης στον κατάλογο `en` είναι απλώς ένα παράδειγμα και μπορούν να διαγραφούν.

### Εκτέλεση Μετάφρασης

Εισαγάγετε τον κατάλογο και εκτελέστε `i18` για μετάφραση.

Εκτός από τη μετάφραση, το πρόγραμμα θα δημιουργήσει επίσης το φάκελο `.i18n/data` , προσθέστε τον στο αποθετήριο.

Μετά τη μετάφραση του νέου αρχείου, θα δημιουργηθεί ένα νέο αρχείο δεδομένων σε αυτόν τον κατάλογο Θυμηθείτε να προσαρτήσετε `git add . ` .

## Αρχείο Διαμόρφωσης

`.i18n/conf.yml` είναι το αρχείο διαμόρφωσης του εργαλείου μετάφρασης `i18` γραμμής εντολών

Το περιεχόμενο έχει ως εξής:

```
i18n:
  fromTo:
    en: zh ja ko de fr
    # en:

ignore:
  - _*
```

### Γλώσσα Πηγής &

Στο αρχείο διαμόρφωσης, η δευτερεύουσα του `fromTo` :

`en` είναι η γλώσσα πηγής, `zh ja ko de fr` είναι η γλώσσα στόχος της μετάφρασης.

Κωδικός γλώσσας [i18n.site/i18/LANG_CODE](https://i18n.site/i18/LANG_CODE) .

Για παράδειγμα, εάν θέλετε να μεταφράσετε τα κινέζικα στα αγγλικά, ξαναγράψτε αυτήν τη γραμμή `zh: en` .

Εάν θέλετε να μεταφράσετε σε όλες τις υποστηριζόμενες γλώσσες, αφήστε το κενό μετά `:` . για παράδειγμα

```
i18n:
  fromTo:
    en:
```

Μπορείτε να ρυθμίσετε διαφορετικές `fromTo` για / υποκαταλόγους Μια επίδειξη είναι γραμμένη ως εξής :

```
i18n:
  fromTo:
    en:
  path:
    blog:
      fromTo:
        zh:
    blog/your_file_name.md:
      fromTo:
        ja:
```

Σε αυτόν τον πίνακα διαμόρφωσης, η γλώσσα πηγής της μετάφρασης του καταλόγου `blog` είναι `zh` και η γλώσσα πηγής της μετάφρασης του καταλόγου `blog/your_file_name.md` είναι `ja` .

### Πολύγλωσσες Εικόνες/Σύνδεσμοι

Όταν οι διευθύνσεις URL στις εικόνες και οι σύνδεσμοι στα `replace:` και `MarkDown` (και τα χαρακτηριστικά `src` και `href` του ενσωματωμένου `HTML` ) διαμορφωθούν σε `.i18n/conf.yml` με αυτό το πρόθεμα, ο κώδικας της γλώσσας πηγής στη διεύθυνση URL θα αντικατασταθεί από τον κωδικό γλώσσας της μετάφρασης ( [γλώσσα λίστα κωδικών](/i18/LANG_CODE) ).

Για παράδειγμα, η διαμόρφωσή σας είναι η εξής:

```yml
i18n:
  fromTo:
    fr: ko de en zh zh-TW uk ru ja
  replace:
    https://fcdoc.github.io/img/ : ko de uk>ru zh-TW>zh >en
```

`replace: ` είναι ένα λεξικό, το κλειδί είναι το πρόθεμα URL που πρέπει να αντικατασταθεί και η τιμή είναι ο κανόνας αντικατάστασης.

Το νόημα της αντικατάστασης του κανόνα `ko de uk>ru zh-TW>zh >en` παραπάνω είναι ότι `ko de` χρησιμοποιεί την εικόνα του κώδικα της γλώσσας του, `zh-TW` και `zh` την εικόνα του `zh` , `uk` χρησιμοποιεί την εικόνα του `ru` και άλλες γλώσσες (όπως `ja` ) χρησιμοποιούν την εικόνα από `en` από προεπιλογή.

Για παράδειγμα, το αρχείο προέλευσης French ( `fr` ) του `MarkDown` είναι το εξής :

```md
![xx](https://i18n-img.github.io/fr/1.avif)
<video src="https://i18n-img.github.io/fr/1.mp4"></video>
[xx](https://i18n-img.github.io/fr/README.md)
<a style="color:red" href="https://i18n-img.github.io/fr/i18n.site.gz">xx</a>
```

Το μεταφρασμένο και δημιουργημένο αρχείο Αγγλικά ( `en` ) είναι το εξής :

```md
![xx](https://i18n-img.github.io/en/1.avif)
<video src="https://i18n-img.github.io/en/1.mp4"></video>
[xx](https://i18n-img.github.io/en/README.md)
<a style="color:red" href="https://i18n-img.github.io/en/i18n.site.gz">xx</a>
```

Εδώ, `/en/` στον κώδικα της γλώσσας πηγής αντικαθίστανται με `/zh/` στη γλώσσα προορισμού.

Σημείωση : Πρέπει να υπάρχει `/` πριν και μετά τον κωδικό γλώσσας του αντικατασταθέντος κειμένου στη διεύθυνση URL.

> [!TIP]
> Εάν `- /` έχει διαμορφωθεί σε `url:` , θα αντιστοιχιστούν μόνο οι σχετικές διαδρομές, αλλά οι διευθύνσεις URL που ξεκινούν με `//` δεν θα αντιστοιχιστούν.
>
> Εάν ορισμένοι σύνδεσμοι ενός ονόματος τομέα θέλουν να αντικατασταθούν και κάποιοι δεν θέλουν να αντικατασταθούν, μπορείτε να χρησιμοποιήσετε διαφορετικά προθέματα όπως `[x](//x.com/en/)` και `[x](https://x.com/en/)` για να τα διακρίνετε.

### Αγνοήστε Το Αρχείο

Από προεπιλογή, όλα τα αρχεία που ξεκινούν με `.md` και `.yml` στον κατάλογο της γλώσσας πηγής θα μεταφραστούν.

Εάν θέλετε να αγνοήσετε ορισμένα αρχεία και να μην τα μεταφράσετε (όπως ημιτελή πρόχειρα), μπορείτε να το διαμορφώσετε με το πεδίο `ignore` .

`ignore` χρησιμοποιεί την [globset](https://docs.rs/globset/latest/globset/#syntax) σύνταξη με το `.gitignore` αρχείο.

Για παράδειγμα, `_* ` στο παραπάνω αρχείο ρυθμίσεων σημαίνει ότι τα αρχεία που ξεκινούν με `_` δεν θα μεταφραστούν.

## Κανόνες Μετάφρασης

### Οι Συντάκτες Μετάφρασης Δεν Πρέπει Να Προσθέτουν Ή Να Διαγράφουν Γραμμές

Η μετάφραση είναι επεξεργάσιμη. Τροποποιήστε το αρχικό κείμενο και μεταφράστε το ξανά αυτόματα, οι μη αυτόματες τροποποιήσεις στη μετάφραση δεν θα αντικατασταθούν (εάν αυτή η παράγραφος του αρχικού κειμένου δεν έχει τροποποιηθεί).

> [!WARN]
> Πρέπει να υπάρχει αντιστοιχία ένας προς έναν μεταξύ των γραμμών της μετάφρασης και του αρχικού κειμένου. Δηλαδή, μην προσθέτετε ή διαγράφετε γραμμές κατά τη σύνταξη της μετάφρασης. Διαφορετικά, θα προκαλέσει σύγχυση στην κρυφή μνήμη επεξεργασίας μετάφρασης.

Εάν κάτι πάει στραβά, ανατρέξτε στις [Συνήθεις Ερωτήσεις για λύσεις.](/i18/qa#H1)

### `YAML` Μεταφράσεις

Το εργαλείο γραμμής εντολών θα βρει όλα τα αρχεία που τελειώνουν με `.yml` στον κατάλογο αρχείων της γλώσσας πηγής και θα τα μεταφράσει.

* Σημειώστε ότι το επίθημα ονόματος αρχείου πρέπει να είναι `.yml` (όχι `.yaml` ).

Το εργαλείο μεταφράζει μόνο τις τιμές του λεξικού σε `.yml` , όχι τα πλήκτρα του λεξικού.

Για παράδειγμα `i18n/en/i18n.yml`

```
apiToken: API Token
defaultToken: Default Token
```

θα μεταφραστεί ως `i18n/zh/i18n.yml`

```
apiToken: 接口令牌
defaultToken: 默认令牌
```

Η μετάφραση του `YAML` μπορεί επίσης να τροποποιηθεί χειροκίνητα (αλλά μην προσθέτετε ή διαγράφετε κλειδιά ή γραμμές στη μετάφραση).

Με βάση τη μετάφραση `YAML` , μπορείτε εύκολα να δημιουργήσετε διεθνείς λύσεις για διάφορες γλώσσες προγραμματισμού.

## Προηγμένη Χρήση

### Υποκατάλογος Μετάφρασης

Εφόσον δημιουργείται `.i18n/conf.yml` (δεν χρειάζεται να ξεκινάτε από το πρότυπο έργου επίδειξης κάθε φορά), `i18` θα λειτουργεί καλά.

Το εργαλείο γραμμής εντολών θα βρει `.i18n/conf.yml` διαμορφώσεις σε όλους τους υποκαταλόγους και θα τις μεταφράσει.

Τα έργα που χρησιμοποιούν την αρχιτεκτονική [monorepo](//monorepo.tools)

![](https://p.3ti.site/1719910016.avif)

### Προσαρμοσμένος Κατάλογος Εγκατάστασης

Θα εγκατασταθεί στο `/usr/local/bin` από προεπιλογή.

Εάν `/usr/local/bin` δεν έχει άδεια εγγραφής, θα εγκατασταθεί στο `~/.bin` .

Η ρύθμιση της μεταβλητής περιβάλλοντος `TO` μπορεί να ορίσει τον κατάλογο εγκατάστασης, για παράδειγμα :

```sh
TO=/bin sudo bash <(curl -sS https://i.i18n.site) i18
```