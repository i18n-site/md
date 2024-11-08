# Ανάπτυξη Και Online

`i18n.site` υιοθετεί μια αρχιτεκτονική [εφαρμογής μιας σελίδας](https://developer.mozilla.org/docs/Glossary/SPA) και η σελίδα εισόδου του ιστότοπου και το περιεχόμενο του ιστότοπου αναπτύσσονται ανεξάρτητα.

Μετά την εκτέλεση της παραπάνω μετάφρασης, οι κατάλογοι `htm` και `v` θα δημιουργηθούν στον κατάλογο `md/out/dev` .

Εδώ, `dev` σημαίνει ότι έχει χτιστεί με βάση το `.i18n/htm/dev.yml` αρχείο διαμόρφωσης.

`dev` κατάλογος :

Ο κατάλογος `htm` είναι η σελίδα εισόδου του ιστότοπου.

Ο κατάλογος `v` περιέχει περιεχόμενο ιστότοπου με αριθμούς έκδοσης.

Η τοπική προεπισκόπηση δεν ενδιαφέρεται για τον αριθμό έκδοσης και θα αντιγράψει όλα τα αρχεία στον κατάλογο `out/dev/v/0.1.0` .

Για επίσημη κυκλοφορία, τα τροποποιημένα αρχεία θα αντιγραφούν στον νέο κατάλογο αριθμών έκδοσης.

## Καθορίστε Το Αρχείο Διαμόρφωσης Με `-c`

Διαφορετικά αρχεία διαμόρφωσης θα δημιουργήσουν αντίστοιχους καταλόγους στον κατάλογο `out` .

Για παράδειγμα, `.i18n/htm/main.yml` θα δημιουργήσει τον κατάλογο `out/main` .

`dev.yml` και `main.yml` είναι οι προεπιλεγμένες διαμορφώσεις.

`dev` είναι η συντομογραφία του `development` , που υποδεικνύει το περιβάλλον ανάπτυξης, που χρησιμοποιείται για τοπική προεπισκόπηση και είναι επίσης το προεπιλεγμένο αρχείο διαμόρφωσης.
`ol` είναι η συντομογραφία του `online` , που `-n` το διαδικτυακό περιβάλλον, το οποίο χρησιμοποιείται για την επίσημη έκδοση `npm`

Μπορείτε επίσης να δημιουργήσετε άλλα αρχεία διαμόρφωσης Χρησιμοποιήστε `--htm_conf` στη γραμμή εντολών για να καθορίσετε το όνομα του αρχείου διαμόρφωσης που θα χρησιμοποιήσετε:

για παράδειγμα:
```
i18n.site --htm_conf dist --save
```

Εδώ `--save` αντιπροσωπεύει τον αριθμό έκδοσης της έκδοσης ενημέρωσης.

## <a rel=id href="#npm" id="npm"></a> Δημοσιεύστε περιεχόμενο στο npmjs.com

[Η](/i18n.site/feature#ha) δημοσίευση περιεχομένου στο [npmjs.com](//npmjs.com)

### npm & Ανάρτηση

Εγκαταστήστε `nodejs` , συνδεθείτε με `npm login` .

Επεξεργαστείτε `md/.i18n/htm/main.yml` και αλλάξτε την τιμή του [`md:`](//github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/main.yml#L7) `YOUR_NPM_PACKAGE` [npmjs.com](//npmjs.com) το δικό σας όνομα `npm` .

Στη συνέχεια, τροποποιήστε `md/.i18n/htm/main.package.json`

Εκτελέστε `i18n.site --npm` ή `i18n.site -n` στον κατάλογο `md` για μετάφραση και δημοσίευση.

Εάν χρησιμοποιείτε περιβάλλον συνεχούς ενοποίησης για δημοσίευση, δεν χρειάζεται να εγκαταστήσετε `nodejs` Απλώς αντιγράψτε τα δικαιώματα σύνδεσης και δημοσίευσης `~/.npmrc` στο περιβάλλον.

Εάν τροποποιήσετε το όνομα πακέτου `v:` προς `main.yml` , **φροντίστε πρώτα να διαγράψετε `.i18n/v/main`** και μετά να το δημοσιεύσετε.

#### Διακομιστής Μεσολάβησης Που Δημοσιεύτηκε Από Το npm

Εάν οι χρήστες στην ηπειρωτική Κίνα αντιμετωπίσουν προβλήματα δικτύου και δεν μπορούν να δημοσιεύσουν `npm` πακέτα, μπορούν να ορίσουν τη μεταβλητή περιβάλλοντος `https_proxy` για να ρυθμίσουν τις παραμέτρους του διακομιστή μεσολάβησης.

Υποθέτοντας ότι η θύρα διακομιστή μεσολάβησης είναι `7890` , μπορείτε να γράψετε:

```
https_proxy=http://127.0.0.1:7890 i18n.site -n
```

## Αυτο-Φιλοξενούμενο Περιεχόμενο

Εάν θέλετε να φιλοξενήσετε μόνοι σας το περιεχόμενο, επεξεργαστείτε πρώτα `md/.i18n/htm/main.yml` και αλλάξτε `v: //unpkg.com/i18n.site` στο πρόθεμα URL σας, όπως `v: //i18n-v.xxx.com` .

Εισαγάγετε τον κατάλογο `md` και εκτελέστε

```
i18n.site --htm_conf ol --save
```

ή συντομογραφία

```
i18n.site -c ol -s
```

Στη συνέχεια, διαμορφώστε το περιεχόμενο στον κατάλογο `md/out/main/v` στη διαδρομή του προθέματος URL που έχει οριστεί στο `v:` .

Τέλος, **διαμορφώστε τον χρόνο προσωρινής αποθήκευσης της διαδρομής που τελειώνει σε `/.v` έως `1s`** , διαφορετικά δεν είναι δυνατή η άμεση πρόσβαση στο περιεχόμενο που κυκλοφόρησε πρόσφατα.

Ο χρόνος προσωρινής αποθήκευσης για άλλες διαδρομές μπορεί να οριστεί σε ένα έτος ή περισσότερο για να μειωθούν τα περιττά αιτήματα.

## Φιλοξενία Περιεχομένου Στο s3

Για να φιλοξενήσετε μόνοι σας περιεχόμενο, εκτός από τη χρήση του δικού σας διακομιστή, μια άλλη κοινή επιλογή είναι να χρησιμοποιήσετε `CDN` `S3` +

Μπορείτε να χρησιμοποιήσετε [rclone](https://rclone.org) για να συνδεθείτε στον διακομιστή `S3` , στη συνέχεια να ανατρέξετε και να τροποποιήσετε το ακόλουθο σενάριο και να αντιγράψετε μόνο τις σταδιακές αλλαγές στο `S3` για κάθε έκδοση.

```bash
i18n.site -c ol -s
s3=your-s3
bucket=your-bucket
ver=$(head -1 .i18n/v/main/v.hash | cut -c 2-)
rclone copy --overwrite-dir out/main/htm/v/$ver $s3:/$bucket/$ver
rclone copy out/main/v/.v "$s3:/$bucket/"
```

Θυμηθείτε να διαμορφώσετε `CDN` έτσι ώστε ο χρόνος προσωρινής αποθήκευσης της διαδρομής που τελειώνει σε `/.v` να είναι `1s` , διαφορετικά δεν είναι δυνατή η άμεση πρόσβαση στο περιεχόμενο που κυκλοφόρησε πρόσφατα.

## Δημοσίευση Ιστότοπου

Ο ιστότοπος μπορεί να αναπτυχθεί οπουδήποτε [github page](https://pages.github.com) και [cloudflare page](https://pages.cloudflare.com) είναι καλές επιλογές.

Επειδή ο ιστότοπος χρησιμοποιεί μια αρχιτεκτονική [εφαρμογής μιας σελίδας](https://developer.mozilla.org/docs/Glossary/SPA) , θυμηθείτε να ξαναγράψετε διαδρομές URL που δεν περιέχουν `. ` έως `index.html` .

Η σελίδα καταχώρισης ιστότοπου χρειάζεται να αναπτυχθεί μόνο μία φορά και δεν χρειάζεται να αναπτυχθεί εκ νέου η σελίδα καταχώρισης ιστότοπου για επακόλουθες ενημερώσεις περιεχομένου.

### Ανάπτυξη Στη Σελίδα github

Πρώτα [κάντε κλικ github για να δημιουργήσετε έναν οργανισμό](https://github.com/account/organizations/new?plan=free) Το παρακάτω όνομα οργανισμού είναι `i18n-demo` ως παράδειγμα.

Στη συνέχεια, δημιουργήστε την αποθήκη `i18n-demo.github.io` σε αυτόν τον οργανισμό (αντικαταστήστε `i18n-demo` με το όνομα του οργανισμού που δημιουργήσατε):

![](https://p.3ti.site/1721098657.avif)

Κατά τη δημοσίευση του περιεχομένου στο προηγούμενο άρθρο, έχει δημιουργηθεί `out/main/htm` Εισαγάγετε αυτόν τον κατάλογο και εκτελέστε το :

```
ln -s index.html 404.html
```


Επειδή `github page` δεν υποστηρίζει την επανεγγραφή διαδρομής URL, χρησιμοποιείται αντ' αυτού `404.html` .

Στη συνέχεια, εκτελέστε την ακόλουθη εντολή στον κατάλογο `htm` (θυμηθείτε να αντικαταστήσετε `i18n-demo/i18n-demo.github.io.git` με τη δική σας διεύθυνση αποθήκης) :

```
git init
git branch -M main
git remote add origin git@github.com:i18n-demo/i18n-demo.github.io.git
git push -u origin main -f
```

Αφού πιέσετε τον κώδικα, περιμένετε να εκτελεστεί με επιτυχία η ανάπτυξη του `github page` (όπως φαίνεται παρακάτω) για να μπορέσετε να αποκτήσετε πρόσβαση σε αυτόν.

<img src="//p.3ti.site/1721116586.avif" width="350px">

Για τη σελίδα επίδειξης, δείτε:

[https://i18n-demo.github.io](https://i18n-demo.github.io)

### Ανάπτυξη Στη Σελίδα cloudflare

[cloudflare page](//pages.cloudflare.com) σύγκριση με `github page` , παρέχει επαναγραφή διαδρομής και είναι πιο φιλικό προς την ηπειρωτική Κίνα και συνιστάται η χρήση του.

Η ανάπτυξη του `cloudflare page` βασίζεται συνήθως στην ανάπτυξη του `github page` παραπάνω.

Δημιουργήστε ένα έργο και δεσμεύστε την αποθήκη `i18n-demo.github.io` παραπάνω.

Η διαδικασία φαίνεται στο παρακάτω σχήμα:
![](https://p.3ti.site/1721117897.avif)
![](https://p.3ti.site/1721118239.avif)

Κάντε κλικ στο `Add Account` για να παραχωρήσετε πρόσβαση στον οργανισμό `i18n-demo` .

Εάν έχετε δεσμεύσει την αποθήκη άλλου οργανισμού, ίσως χρειαστεί να κάνετε κλικ στο `Add Account` δύο φορές για εξουσιοδότηση δύο φορές πριν εμφανιστεί ο νέος οργανισμός.

![](https://p.3ti.site/1721118306.avif)

Στη συνέχεια, επιλέξτε αποθήκη `i18n-demo.github.io` , κάντε κλικ στο `Begin setup` και χρησιμοποιήστε τις προεπιλεγμένες τιμές για τα επόμενα βήματα.

![](https://p.3ti.site/1721118490.avif)

Μετά το δέσιμο για πρώτη φορά, πρέπει να περιμένετε μερικά λεπτά για να μπορέσετε να αποκτήσετε πρόσβαση σε αυτό.

Μετά την ανάπτυξη, μπορείτε να δεσμεύσετε ένα προσαρμοσμένο όνομα τομέα.

![](https://p.3ti.site/1721119459.avif)

Αφού δεσμεύσετε το προσαρμοσμένο όνομα τομέα, μεταβείτε στο όνομα τομέα για να διαμορφώσετε την επαναγραφή διαδρομής της εφαρμογής μιας σελίδας, όπως φαίνεται παρακάτω:

![](https://p.3ti.site/1721119320.avif)

Οι κανόνες στην παραπάνω εικόνα είναι οι εξής. Αντικαταστήστε `i18n.site` στην πρώτη γραμμή παρακάτω με το όνομα τομέα που δεσμεύσατε.

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

Επιπλέον, διαμορφώστε τους κανόνες της προσωρινής μνήμης, όπως φαίνεται παρακάτω, και ορίστε τη διάρκεια της προσωρινής μνήμης σε έναν μήνα.

![](https://p.3ti.site/1721125111.avif)

Αλλάξτε το όνομα τομέα που αντιστοιχεί στο δεύτερο βήμα στην παραπάνω εικόνα στο όνομα τομέα που δεσμεύσατε.

### Βελτιστοποίηση Της Ανάπτυξης Ιστοτόπων Στην Ηπειρωτική Κίνα

Εάν θέλετε να αποκτήσετε καλύτερη απόδοση προσβασιμότητας στο περιβάλλον δικτύου της ηπειρωτικής Κίνας, [καταχωρίστε πρώτα ένα όνομα τομέα](//beian.aliyun.com) .

Στη συνέχεια, χρησιμοποιήστε την `out/main/htm` αντικειμένων των προμηθευτών cloud στην ηπειρωτική Κίνα + Αναπτύξτε το ακόλουθο περιεχόμενο `CDN` .

Μπορείτε να χρησιμοποιήσετε το edge computing για να ξαναγράψετε τη διαδρομή για προσαρμογή σε εφαρμογές μιας σελίδας Για παράδειγμα, [το Baidu Smart Cloud `CDN`](//cloud.baidu.com/product/cdn.html) μπορεί να διαμορφωθεί ως εξής:

```js
const uri = r.uri, p = uri.lastIndexOf(".");
if (
  p < 0 ||
  !"|js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest|".includes(
    "|" + uri.slice(p + 1) + "|",
  )
) {
  const ua = r.headersIn["User-Agent"].toLowerCase()
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(
      302,
      (/baidu|yisou|sogou|360|byte/.test(ua) ? "/zh" : "/en") + r.uri + ".htm",
    )
  } else {
    r.uri = "/index.html"
  }
}

r.respHeader(() => {
  const t = [], out = r.headersOut;
  ["Content-MD5", "Age", "Expires", "Last-Modified"].forEach(
    i => delete out[i]
  )
  r.rawHeadersOut.forEach(i => {
    const key = i[0].toLowerCase()
    if (key.startsWith("x-") || key.startsWith("ohc-")) {
      delete out[key]
    }
  })
  out["Cache-Control"] = "max-age=" + 9e5
  // Μπορείτε να ορίσετε την κεφαλίδα απόκρισης για εντοπισμό σφαλμάτων στην έξοδο, όπως out.XXX = 'MSG';
})
```

![](https://p.3ti.site/1721121273.avif)

Επειδή η εγγραφή `MX` και η εγγραφή `CNAME` δεν μπορούν να συνυπάρχουν, εάν θέλετε να λαμβάνετε μηνύματα ηλεκτρονικού ταχυδρομείου με όνομα τομέα ταυτόχρονα, πρέπει να συνεργαστείτε με το [cname_flatten](https://github.com/i18n-site/lib/tree/main/cname_flatten) στο επίπεδο `CNAME` στην εγγραφή `A` .

Επιπλέον, επειδή τα τέλη κυκλοφορίας στο εξωτερικό των προμηθευτών cloud στην ηπειρωτική Κίνα είναι σχετικά ακριβά, εάν θέλετε να βελτιστοποιήσετε το κόστος, μπορείτε να χρησιμοποιήσετε [DNS δωρεάν γεωγραφική ανάλυση του Huawei Cloud](https://support.huaweicloud.com/usermanual-dns/dns_usermanual_0041.html) και το προσαρμοσμένο όνομα τομέα του [Cloudflare for SaaS](https://developers.cloudflare.com/cloudflare-for-platforms/cloudflare-for-saas) (όπως φαίνεται παρακάτω). εκτροπή κυκλοφορίας──Δρομολόγηση κυκλοφορίας στην ηπειρωτική Κίνα Baidu Cloud `CDN` , η διεθνής κίνηση πηγαίνει cloudflare .

![](https://p.3ti.site/1721119788.avif)

Αυτές οι λύσεις βελτιστοποίησης ανάπτυξης είναι πιο περίπλοκες και θα παρουσιαστούν σε ξεχωριστά κεφάλαια στο μέλλον.

### Γενική Ανακατεύθυνση Ονόματος Τομέα

Εάν χρησιμοποιείτε `i18n.site` για να δημιουργήσετε έναν ιστότοπο ως τον κύριο ιστότοπό σας, συνήθως πρέπει να ρυθμίσετε τις παραμέτρους της ανακατεύθυνσης παντόπου, δηλαδή να ανακατευθύνετε την πρόσβαση στο `*.xxx.com` (συμπεριλαμβανομένων των `www.xxx.com` ) στο `xxx.com` .

Αυτή η απαίτηση μπορεί να επιτευχθεί με τη βοήθεια του Alibaba Cloud `CDN` `EdgeScript` ( [Αγγλικό έγγραφο](https://www.alibabacloud.com/help/en/cdn/developer-reference/how-edgescript-works) / [Κινέζικο έγγραφο](https://help.aliyun.com/zh/cdn/developer-reference/edgescript) )

Προσθέστε το όνομα τομέα στο [Alibaba CDN](https://cdn.console.aliyun.com/domain/list) και τοποθετήστε το όνομα τομέα `*.xxx.com` `CNAME` στο Alibaba Cloud `CDN` .

![](https://p.3ti.site/1721122000.avif)

Για παράδειγμα, η ρύθμιση παραμέτρων ανακατεύθυνσης του ονόματος παντόπου `*.i18n.site` στην παραπάνω εικόνα είναι η εξής:

```
rewrite(concat('https://i18n.site',$uri), 'redirect',301)
```

![](https://p.3ti.site/1721121934.avif)

### Αναπτύξτε Με Το nginx

Προσθέστε `out/main/htm` διαμόρφωση παρόμοια με την ακόλουθη στην `/root/i18n/md/out/main/htm` `server` του nginx

```
location / {
  root  /root/i18n/md/out/main/htm;
  add_header Cache-Control "max-age=9999999";
  if ($uri !~* \.(avif|css|html|ico|js|json|png|svg|txt|webmanifest|xml)$) {
     rewrite ^ /index.html last;
  }
}
```

## Βασίζεται Στη Συνεχή Ολοκλήρωση `github action`

Μπορείτε να ανατρέξετε στα παρακάτω για να διαμορφώσετε το `github action` σας:

```
name: i18n.site

on:
  workflow_dispatch:
  push:
    branches:
      - main
      - dist

jobs:
  i18n:

    permissions:
      repository-projects: write
      contents: write

    runs-on: ubuntu-latest

    steps:
      - name: checkout
        uses: actions/checkout@v4

      - name: https://i18n.site
        uses: i18n-site/github-action-i18n.site@main
        with:
          I18N_SITE_TOKEN: ${{ secrets.I18N_SITE_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

Όπως φαίνεται στη διαμόρφωση, αυτή η ροή εργασίας ενεργοποιείται όταν πιέζετε προς τον κλάδο `main` και τον κλάδο `dist` .

Η ροή εργασίας θα χρησιμοποιήσει το αρχείο διαμόρφωσης που αντιστοιχεί στο όνομα του κλάδου για να δημοσιεύσει το έγγραφο Εδώ, `.i18n/htm/main.yml` και `.i18n/htm/dist.yml` θα χρησιμοποιηθούν ως διαμόρφωση δημοσίευσης αντίστοιχα.

Συνιστούμε τις ακόλουθες βέλτιστες πρακτικές για τη διαδικασία έκδοσης εγγράφων:

Όταν οι αλλαγές προωθούνται στον κλάδο `main` , το έγγραφο ενεργοποιείται για να κατασκευαστεί και να αναπτυχθεί στον σταθμό προεπισκόπησης (ο σταθμός προεπισκόπησης είναι διαθέσιμος [github page](//pages.github.com) ).

Αφού επιβεβαιώσετε ότι το έγγραφο είναι σωστό στον ιστότοπο προεπισκόπησης, ο κώδικας θα συγχωνευθεί και θα προωθηθεί στον κλάδο `dist` και η επίσημη κατασκευή και ανάπτυξη θα συνδεθεί στο διαδίκτυο.

Φυσικά, η υλοποίηση της παραπάνω διαδικασίας απαιτεί τη σύνταξη περισσότερων διαμορφώσεων.

Μπορείτε να ανατρέξετε στο πραγματικό έργο για δέσμες ενεργειών ροής [github.com/fcdoc/doc](//github.com/fcdoc/doc/blob/main/.github/workflows/i18n.site.yml) .

`secrets.I18N_SITE_TOKEN` και `secrets.NPM_TOKEN` στη διαμόρφωση απαιτούν να διαμορφώσετε μυστικές μεταβλητές στη βάση κώδικα.

![](//p.3ti.site/1730970199.avif)

`I18N_SITE_TOKEN` [i18n.site/token](//i18n.site/token)

`NPM_TOKEN` είναι το διακριτικό δημοσίευσης του πακέτου `npm` στη διαμόρφωση Επισκεφτείτε [npmjs.com](//npmjs.com) και δημιουργήστε ένα διακριτικό με δικαιώματα δημοσίευσης (όπως φαίνεται παρακάτω).

![](//p.3ti.site/1730969906.avif)


## Δομή Καταλόγου

### `public`

Στατικά αρχεία του ιστότοπου, όπως `favicon.ico` , `robots.txt` , κ.λπ.

Τα αρχεία εικονιδίων εδώ μπορούν να δημιουργηθούν με [realfavicongenerator.net](https://realfavicongenerator.net)

### `.i18n`

Κάτω από τον κατάλογο `.i18n` βρίσκονται τα αρχεία διαμόρφωσης, η προσωρινή μνήμη μετάφρασης κ.λπ. του `i18n.site` Δείτε το επόμενο κεφάλαιο ["Διαμόρφωση"](/i18n.site/conf) για λεπτομέρειες.

### `en`

Κατάλογος γλώσσας πηγής, που αντιστοιχεί σε αρχείο διαμόρφωσης `en` από `fromTo` σε `.i18n/conf.yml`

```yaml
i18n:
  fromTo:
    en: zh
```

Ανατρέξτε στη διαμόρφωση της μετάφρασης [i18](/i18/use)