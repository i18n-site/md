# Βελτιστοποίηση Μηχανών Αναζήτησης (SEO)

## Αρχές

Το `i18n.site` υιοθετεί μια αρχιτεκτονική μοναδικής σελίδας χωρίς ανανέωση, προκειμένου να διευκολύνει την ευρετηρίαση από τις μηχανές αναζήτησης, δημιουργώντας ξεχωριστές στατικές σελίδες και `sitemap.xml` για ανίχνευση από τα ρομπότ.

Όταν το `User-Agent` του αιτήματος πρόσβασης είναι ένα ρομπότ μηχανής αναζήτησης, το αίτημα θα ανακατευθυνθεί σε μια στατική σελίδα μέσω `302` επαναοrientării.

Στις στατικές σελίδες, χρησιμοποιούμε την ετικέτα `link` για να υποδείξουμε συνδέσμους για διαφορετικές γλωσσικές εκδόσεις αυτής της σελίδας, όπως:

```
<link rel=alternate hreflang=zh href="https://i18n.site/zh/.htm">
<link rel=alternate hreflang=en href="https://i18n.site/en/.htm">
```

## Διαμόρφωση ανεβάσματος στατικών αρχείων σε αποθήκευση αντικειμένων

Τα στατικά αρχεία μπορούν να δημιουργηθούν τοπικά, αλλά πιο συχνά ανεβαίνουν σε αποθήκευση αντικειμένων.

Με βάση το αρχείο διαμόρφωσης `.i18n/htm/ol.yml` του έργου επίδειξης

```yml
host:
seo: true
out:
  - s3
v: //unpkg.com/i18n.site
x: 18x
importmap:
  i/: //unpkg.com/@i18n.site/
```

Αλλάξτε πρώτα τη τιμή του `host:` παραπάνω σε το δικό σας όνομα τομέα, π.χ. `i18n.site`.

Στη συνέχεια, επεξεργαστείτε το `~/.config/i18n.site.yml` και προσθέστε την ακόλουθη διαμόρφωση:

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

Στη διαμόρφωση, αλλάξτε το `i18n.site` στην τιμή `host:` σε `.i18n/htm/ol.yml`, και μπορείτε να διαμορφώσετε πολλαπλές αποθήκες αντικειμένων κάτω από `s3`, το πεδίο `region` είναι προαιρετικό (πολλοί χώροι αποθήκευσης δεν απαιτούν αυτό το πεδίο).

Στη συνέχεια, εκτελέστε `i18n.site -n` για να αναδημοσιεύσετε το έργο.

Αν έχετε τροποποιήσει το `~/.config/i18n.site.yml` και θέλετε να το ανεβάσετε ξανά, χρησιμοποιήστε την ακόλουθη εντολή στον ριζικό κατάλογο του έργου για να καθαρίσετε την προσωρινή μνήμη ανεβάσματος:

```
rm -rf .i18n/data/seo .i18n/data/public
```

## Ρύθμιση Cloudflare

Το όνομα τομέα φιλοξενείται στο [cloudflare](//www.cloudflare.com).

### Κανόνες Μετατροπής

Προσθέστε τους κανόνες μετατροπής όπως φαίνεται στην εικόνα:

![](//p.3ti.site/1725436822.avif)

Ο κώδικας του κανόνα είναι ο εξής, αλλάξτε τον κωδικό "i18n.site" στο δικό σας όνομα τομέα:

```
(http.host in {"i18n.site"}) and not (
substring(http.request.uri.path,-3) in {".js" ".gz"} or
substring(http.request.uri.path,-4) in {".htm" ".rss" ".css" ".svg" ".ico" ".png" ".xml" ".txt"} or
substring(http.request.uri.path,-5) in {".html" ".avif" ".json"} or
ends_with(http.request.uri.path,".webmanifest")
)
```

### Κανόνες Προσωρινής Αποθήκευσης

Προσθέστε τους κανόνες προσωρινής αποθήκευσης ως εξής:

![](//p.3ti.site/1725437039.avif)

```
(substring(http.request.uri.path,-4) in {".htm" ".rss"}) or ends_with(http.request.uri.path,"/sitemap.xml") or ends_with(http.request.uri.path,".xml.gz")
```

### Κανόνες Ανακατεύθυνσης

Ορίστε τους κανόνες ανακατεύθυνσης ως εξής, αλλάζοντας τον κωδικό "i18n.site" στο δικό σας όνομα τομέα:

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

## Ρύθμιση Baidu Intelligent Cloud

Αν χρειάζεται να παρέχετε υπηρεσίες στην ηπειρωτική Κίνα, μπορείτε να χρησιμοποιήσετε [Baidu Intelligent Cloud](//cloud.baidu.com).

Τα δεδομένα μεταφορτώνονται στο Baidu Object Storage και συνδέονται με το Baidu Content Delivery Network.

Στη συνέχειa, δημιουργήστε το σενάριο στην [EdgeJS edge](//console.bce.baidu.com/cdn/#/cdn/ejs/list) ως εξής:

```js
var uri=r.uri,p=uri.lastIndexOf('.');

if(
  p<0 || !/html?|css|rss|avif|md|ico|gz|js|json|png|svg|txt|webmanifest|xml/.test(uri.slice(p+1))
){
  const ua = r.headersIn['User-Agent'].toLowerCase();
  if (/facebookexternalhit|slurp|bot|spider|curl/.test(ua)) {
    r.return(302,(/baidu|yisou|sogou|360|byte/.test(ua)?'/zh':'/en')+r.uri+'.htm')
    return
  }
  r.uri = '/index.html'
}

r.respHeader(()=>{
var t = [];
r.rawHeadersOut.forEach((i)=>{
    var out = r.headersOut;
    var key = i[0].toLowerCase();
    if(key.startsWith('x-')||key.startsWith('ohc-')){
        delete out[key]
    }
    out['Cache-Control']='max-age='+9e5;
    ['Content-MD5','Age','Expires','Last-Modified'].forEach((i)=>delete out[i])
})

})
```

Κάντε κλικ `Debug` και, στη συνέχεια, κάντε κλικ στην επιλογή Δημοσίευση σε ολόκληρο το δίκτυο.

![](//p.3ti.site/1725437754.avif)

## Προχωρημένη Χρήση: Κατανομή της κυκλοφορίας με βάση την περιφερειακή ανάλυση

Αν θέλετε να παρέχετε υπηρεσίες τόσο στην ηπειρωτική Κίνα όσο και να επωφεληθείτε από τη δωρεάν διεθνή κυκλοφορία του `cloudflare`, μπορείτε να χρησιμοποιήσετε `DNS` με περιφερειακή ανάλυση.

Για παράδειγμα, το [Huawei Cloud DNS](https://www.huaweicloud.com) προσφέρει δωρεάν περιφερειακή ανάλυση, η οποία επιτρέπει στην κυκλοφορία της ηπειρωτικής Κίνας να περνάει από το Baidu Intelligent Cloud και τη διεθνή κυκλοφορία να περνάει από το `cloudflare`.

Υπάρχουν πολλές παγίδες στη ρύθμιση του `cloudflare`, εδώ είναι μερικά σημεία που πρέπει να προσέξετε:

### Πώς να χρησιμοποιήσετε `cloudflare` όταν το όνομα τομέα φιλοξενείται σε άλλο `DNS`

Πρώτα δεσμεύστε ένα αυθαίρετο όνομα τομέα στο `cloudflare` και, στη συνέχεια, χρησιμοποιήστε `SSL/TLS` → Προσαρμοσμένο Όνομα Τομέα για να συσχετίσετε το κύριο όνομα τομέα με αυτό το όνομα τομέα.

![](https://p.3ti.site/1725438658.avif)

### Το `cloudflare R2` δεν είναι προσβάσιμο μέσω προσαρμοσμένου ονόματος τομέα

Επειδή το `R2` του `cloudflare` δεν είναι προσβάσιμο μέσω προσαρμοσμένου ονόματος τομέα, πρέπει να χρησιμοποιήσετε αποθήκευση αντικειμένων τρίτου κατασκευαστή για να τοποθετήσετε τα στατικά αρχεία.

Εδώ δείχνουμε με παράδειγμα το `cloudflare` πώς μπορείτε να συνδέσετε έναν τρίτο οντόμο αποθήκευσης στο [backblaze.com](https://www.backblaze.com).

Δημιουργήστε έναν κάδο στο `backblaze.com`, μεταφορτώστε οποιοδήποτε αρχείο, κάντε κλικ για να περιηγηθείτε στο αρχείο και λάβετε το όνομα τομέα `Friendly URL`, το οποίο είναι `f003.backblazeb2.com` εδώ.

![](//p.3ti.site/1725440783.avif)

Αλλάξτε το όνομα τομέα από `CNAME` σε `f003.backblazeb2.com` στο `cloudflare` και ενεργοποιήστε τον διακομιστή μεσολάβησης.

![](//p.3ti.site/1725440896.avif)

Αλλάξτε το `cloudflare` από `SSL` → Λειτουργία Κρυπτογράφησης σε `Full`

![](//p.3ti.site/1725438572.avif)

Προσθέστε τον κανόνα μετατροπής όπως φαίνεται στην εικόνα, τοποθετώντας τον πρώτο (ο πρώτος έχει τη χαμηλότερη προτεραιότητα):

![](//p.3ti.site/1725443232.avif)

Επιλέξτε `Rewrite to` για δυναμική μετατροπή και τροποποιήστε το `your_bucketname` σε `concat("/file/your_bucketname",http.request.uri.path)` για το όνομα του κάδου σας.

Επιπλέον, στον παραπάνω κανόνα μετατροπής `cloudflare`, αλλάξτε το `index.html` σε `file/your_bucketname/index.html` και διατηρήστε τις άλλες ρυθμίσεις όπως είναι.

![](//p.3ti.site/1725441384.avif)