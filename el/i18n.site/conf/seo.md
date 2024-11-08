# Βελτιστοποίηση Μηχανών Αναζήτησης (Seo)

## Αρχή

`i18n.site` υιοθετεί μια αρχιτεκτονική μιας σελίδας χωρίς ανανέωση Προκειμένου να διευκολυνθεί η δημιουργία ευρετηρίου αναζήτησης, θα δημιουργηθεί μια ξεχωριστή στατική σελίδα και `sitemap.xml` για ανίχνευση.

Όταν `User-Agent` του αιτήματος πρόσβασης χρησιμοποιείται από τον ανιχνευτή της μηχανής αναζήτησης, το αίτημα θα ανακατευθυνθεί στη στατική σελίδα μέσω `302` .

Σε στατικές σελίδες, χρησιμοποιήστε `link` για να υποδείξετε συνδέσμους σε διαφορετικές γλωσσικές εκδόσεις αυτής της σελίδας, όπως :

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```


## Τοπική Διαμόρφωση nginx

Πάρτε ως παράδειγμα το αρχείο διαμόρφωσης `.i18n/htm/main.yml` στο έργο επίδειξης

```yml
host: i18n-demo.github.io
seo: true
out:
  - fs

pkg:
  i: i18n.site
  md: i18n.site

cdn:
  v:
  jsd:
```

Τροποποιήστε πρώτα την τιμή του `host:` παραπάνω στο όνομα τομέα σας, όπως `xxx.com` .

Στη συνέχεια, `i18n.site -n` , η στατική σελίδα θα δημιουργηθεί στον κατάλογο `out/main/htm` .

Φυσικά, μπορείτε επίσης να ενεργοποιήσετε άλλα αρχεία διαμόρφωσης, όπως πρώτα να αναφερθείτε στη διαμόρφωση του `main` για να δημιουργήσετε `.i18n/htm/dist.package.json` και `.i18n/htm/dist.yml` .

Στη συνέχεια, εκτελέστε `i18n.site -n -c dist` έτσι ώστε η στατική σελίδα να δημιουργηθεί σε `out/dist/htm` .

`nginx` μπορεί να οριστεί ανατρέχοντας στην παρακάτω διαμόρφωση.

```i18n
server_name doc.flashduty.com;

ssl_certificate /root/.acme.sh/doc.flashduty.com_ecc/fullchain.cer;
ssl_certificate_key /root/.acme.sh/doc.flashduty.com_ecc/doc.flashduty.com.key;

root /mnt/doc.flashduty.com;

# Μην αποθηκεύετε προσωρινά σενάρια εργασίας διακομιστή για πολύ μεγάλο χρονικό διάστημα
location = /S.js {
  add_header Cache-Control "max-age=600";
}

# Ορίστε μεγαλύτερους χρόνους προσωρινής αποθήκευσης για άλλους στατικούς πόρους
location ~* \.(js|css|htm|html|md|avif|json|ico|xml|rss|gz|mp4|png|svg|txt|webmanifest)$ {
  add_header Cache-Control "max-age=999999";
}

# Ορίστε ποιο στατικό αρχείο θα χρησιμοποιεί ο ανιχνευτής ως καταχώρηση αρχικής σελίδας
location = / {
  # Εάν το $botLang
  if ($botLang) {
      return 301 $botLang/flashduty.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}

# Διαμόρφωση εφαρμογής μιας σελίδας
location / {
  if ($botLang) {
    return 302 $botLang$request_uri.htm;
  }
  add_header Cache-Control "max-age=600";
  rewrite ^ /index.html break;
}
```


## Διαμόρφωση Αποθήκευσης Αντικειμένων Για Τη Μεταφόρτωση Στατικών Αρχείων

Στατικά αρχεία μπορούν να δημιουργηθούν τοπικά, αλλά μια πιο κοινή προσέγγιση είναι η αποστολή τους σε αποθήκευση αντικειμένων.

Τροποποιήστε `out` που διαμορφώθηκε παραπάνω σε :

```
out:
  - s3
```

Στη συνέχεια, επεξεργαστείτε `~/.config/i18n.site.yml` και προσθέστε την ακόλουθη διαμόρφωση :

```yml
site:
  i18n.site:
    s3:
      - endpoint: s3.eu-central-003.backblazeb2.com
        ak: # access key
        sk: # secret key
        bucket: # bucket name
        # region:
```

Στη διαμόρφωση, αλλάξτε `i18n.site` στην τιμή `host:` σε `.i18n/htm/main.yml` , πολλαπλές αποθήκες αντικειμένων μπορούν να διαμορφωθούν κάτω από `s3` και το πεδίο `region` είναι προαιρετικό (πολλοί χώροι αποθήκευσης αντικειμένων δεν χρειάζεται να ορίσουν αυτό το πεδίο).

Στη συνέχεια, εκτελέστε `i18n.site -n` για να αναδημοσιεύσετε το έργο.

Εάν έχετε τροποποιήσει `~/.config/i18n.site.yml` και θέλετε να το ανεβάσετε ξανά, χρησιμοποιήστε την ακόλουθη εντολή στον ριζικό κατάλογο του έργου για να διαγράψετε την προσωρινή μνήμη μεταφόρτωσης :

```
rm -rf .i18n/data/seo .i18n/data/public
```


## Διαμόρφωση cloudflare

Όνομα τομέα που φιλοξενείται στο [cloudflare](//www.cloudflare.com)

### Κανόνες Μετατροπής

Προσθέστε τους κανόνες μετατροπής όπως φαίνεται παρακάτω:

![](//p.3ti.site/1725436822.avif)

Ο κώδικας κανόνα είναι ο ακόλουθος, τροποποιήστε τον κωδικό "i18n.site" στο όνομα τομέα σας:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Κανόνες Προσωρινής Αποθήκευσης

Προσθέστε κανόνες προσωρινής μνήμης ως εξής:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Κανόνες Ανακατεύθυνσης

Ορίστε τους κανόνες ανακατεύθυνσης ως εξής, τροποποιήστε τον κωδικό "i18n.site" στο όνομα τομέα σας

![](//p.3ti.site/1725437096.avif)

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
) and (
http.user_agent wildcard "*bot*" or
http.user_agent wildcard "*spider*" or
http.user_agent wildcard "*facebookexternalhit*" or
http.user_agent wildcard "*slurp*" or
http.user_agent wildcard "curl*" or
http.user_agent wildcard "*InspectionTool*"
)
```

`URL redirect` Επιλέξτε δυναμική ανακατεύθυνση, τροποποιήστε `/en` στη διαδρομή ανακατεύθυνσης `concat("/en",http.request.uri.path,".htm")` στην προεπιλεγμένη γλώσσα που θέλετε να συμπεριλάβουν οι μηχανές αναζήτησης.

## Baidu Intelligent Cloud Configuration

Εάν χρειάζεται να παρέχετε υπηρεσίες στην ηπειρωτική Κίνα, μπορείτε να χρησιμοποιήσετε [το Baidu Smart Cloud](//cloud.baidu.com) .

Τα δεδομένα μεταφορτώνονται στο Baidu Object Storage και συνδέονται στο δίκτυο διανομής περιεχομένου Baidu.

Στη συνέχεια, δημιουργήστε το σενάριο στην [υπηρεσία EdgeJS](//console.bce.baidu.com/cdn/#/cdn/ejs/list) ως εξής

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
  // Οι κεφαλίδες απόκρισης μπορούν να ρυθμιστούν σε έξοδο σφαλμάτων, όπως out.XXX = 'MSG';
})
```

Κάντε κλικ στο `Debug` και, στη συνέχεια, κάντε κλικ στην επιλογή Δημοσίευση σε ολόκληρο το δίκτυο.

![](//p.3ti.site/1725437754.avif)

## Προηγμένη Χρήση: Κατανείμετε Την Κυκλοφορία Με Βάση Την Περιφερειακή Ανάλυση

Εάν θέλετε να παρέχετε υπηρεσίες στην ηπειρωτική Κίνα και θέλετε επίσης `cloudflare` δωρεάν διεθνή κυκλοφορία, μπορείτε να χρησιμοποιήσετε `DNS` με περιφερειακή ανάλυση.

Για παράδειγμα, [το Huawei DNS](https://www.huaweicloud.com) παρέχει δωρεάν περιφερειακή ανάλυση, με την οποία η κυκλοφορία στην ηπειρωτική Κίνα μπορεί να περάσει μέσω του Baidu Smart Cloud και η διεθνής κίνηση μπορεί να περάσει από `cloudflare` .

Υπάρχουν πολλές παγίδες στη διαμόρφωση του `cloudflare` Ακολουθούν μερικά σημεία που πρέπει να σημειώσετε :

### Το Όνομα Τομέα Φιλοξενείται Σε Άλλα `DNS` , Πώς Να Χρησιμοποιήσετε `cloudflare`

Πρώτα δεσμεύστε ένα αυθαίρετο όνομα τομέα στο `cloudflare` και, στη συνέχεια, χρησιμοποιήστε το `SSL/TLS` → προσαρμοσμένο όνομα τομέα για να συσχετίσετε το κύριο όνομα τομέα με αυτό το όνομα τομέα.

![](https://p.3ti.site/1725438658.avif)

### `cloudflare R2` Δεν Είναι Προσβάσιμο Μέσω Ενός Προσαρμοσμένου Ονόματος Τομέα

Επειδή η `cloudflare` αποθήκευση αντικειμένων `R2` δεν είναι προσβάσιμη από ένα προσαρμοσμένο όνομα τομέα, πρέπει να χρησιμοποιηθεί χώρος αποθήκευσης αντικειμένων τρίτου κατασκευαστή για την τοποθέτηση στατικών αρχείων.

Εδώ `cloudflare` ως παράδειγμα [backblaze.com](https://www.backblaze.com)

Δημιουργήστε έναν κάδο στο `backblaze.com` , μεταφορτώστε οποιοδήποτε αρχείο, κάντε κλικ για να περιηγηθείτε στο αρχείο και λάβετε το όνομα τομέα `Friendly URL` , το οποίο είναι το `f003.backblazeb2.com` εδώ.

![](//p.3ti.site/1725440783.avif)

Αλλάξτε το όνομα τομέα από `CNAME` σε `f003.backblazeb2.com` στο `cloudflare` και ενεργοποιήστε τον διακομιστή μεσολάβησης.

![](//p.3ti.site/1725440896.avif)

Τροποποίηση `cloudflare` από `SSL` → λειτουργία κρυπτογράφησης, ορίστε στο `Full`

![](//p.3ti.site/1725438572.avif)

Προσθέστε τον κανόνα μετατροπής όπως φαίνεται παρακάτω, βάλτε τον πρώτο (ο πρώτος έχει τη χαμηλότερη προτεραιότητα):

![](//p.3ti.site/1725443232.avif)

`Rewrite to` επιλέξτε δυναμική και τροποποιήστε `your_bucketname` σε `concat("/file/your_bucketname",http.request.uri.path)` στο όνομα του κάδου σας.

Επιπλέον, στον παραπάνω κανόνα μετατροπής `cloudflare` , `index.html` αλλάζει σε `file/your_bucketname/index.html` και οι άλλες διαμορφώσεις παραμένουν οι ίδιες.

![](//p.3ti.site/1725441384.avif)