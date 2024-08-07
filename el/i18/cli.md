# Λεπτομερής Επεξήγηση Των Παραμέτρων Της Γραμμής Εντολών

## `-P` Αρχεία

`-p` `--purge` θα καθαρίσει τα αρχεία που υπάρχουν σε κάθε κατάλογο μετάφρασης αλλά δεν υπάρχουν στον κατάλογο της γλώσσας προέλευσης.

Επειδή κατά τη σύνταξη εγγράφων, τα ονόματα αρχείων Markdown προσαρμόζονται συχνά, με αποτέλεσμα πολλά παλιά και εγκαταλειμμένα αρχεία στον κατάλογο μετάφρασης.

Χρησιμοποιήστε αυτήν την παράμετρο για να καθαρίσετε αρχεία που πρέπει να διαγραφούν σε καταλόγους άλλων γλωσσών.

## `-D` Τον Κατάλογο Μετάφρασης

Ο μεταφρασμένος κατάλογος είναι προεπιλεγμένος στον κατάλογο όπου βρίσκεται το τρέχον αρχείο.

`-d` `--workdir` μπορεί να καθορίσει τον κατάλογο μετάφρασης, όπως:

```
i18 -d ~/i18n/md
```

## `-H` Βοήθειας

`-h` Ή `--help` Μπορείτε να δείτε τη βοήθεια της γραμμής εντολών.