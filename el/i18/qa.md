# Faq

## Προσθήκη ή αφαίρεση γραμμών στη μετάφραση, που προκαλεί σύγχυση

Καταγράψτε, **οι γραμμές της μετάφρασης πρέπει να αντιστοιχούν ακριβώς στις γραμμές του πρωτότυπου κειμένου**.

Άρα, κατά την χειροκίνητη προσαρμογή της μετάφρασης, **μην προσθέτετε ή αφαιρείτε γραμμές**· αλλιώς θα διαταραχθεί η αντιστοιχία μεταξύ μετάφρασης και πρωτότυπου.

Αν κατά λάθος προσθέσετε ή αφαιρέσετε μια γραμμή, προκαλώντας σύγχυση, επαναφέρετε τη μετάφραση στην προηγούμενη έκδοση και εκτελέστε ξανά τη διαδικασία `i18` για να ανανεώσετε την σωστή αντιστοιχία.

Η αντιστοιχία μεταξύ μετάφρασης και πρωτότυπου είναι δεμένη με το διακριτικό. Δημιουργήστε ένα νέο διακριτικό στο [i18n.site/token](//i18n.site/token), διαγράψτε το αρχείο `.i18h/hash` και μεταφράστε ξανά για να καθαρίσετε την σύγχυση (αλλά αυτό θα διαγράψει όλες τις χειροκίνητες προσαρμογές).

## `YAML`: Πώς να αποφύγετε τη μετατροπή των συνδέσμων `HTML` σε `Markdown`

Οι τιμές `YAML` θεωρούνται ως `Markdown` για τη μετάφραση.

Μερικές φορές η μετατροπή από `HTML` σε `Markdown` δεν είναι επιθυμητή, όπως το `<a href="/">Home</a>` που μετατρέπεται σε `[Home](/)`.

Προσθέστε οποιοδήποτε χαρακτηριστικό εκτός από `href` στην ετικέτα `a`, όπως `<a class="A" href="/">Home</a>`, για να αποφύγετε αυτή τη μετατροπή.

## Σύγκρουση αρχείων στον κατάλογο `./i18n/hash`

Διαγράψτε τα αρχεία που βρίσκονται σε σύγκρουση και εκτελέστε ξανά τη μετάφραση `i18`.