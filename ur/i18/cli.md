# کمانڈ لائن پیرامیٹرز کی تفصیلی وضاحت

## 0 فائلوں کو `-p`

`-p` یا `--purge` ان فائلوں کو صاف کردے گا جو ہر ترجمہ ڈائرکٹری میں موجود ہیں لیکن ماخذ زبان کی ڈائرکٹری میں موجود نہیں ہیں۔

کیونکہ دستاویزات لکھتے وقت، مارک ڈاؤن فائل کے ناموں کو اکثر ایڈجسٹ کیا جاتا ہے، جو ترجمہ ڈائریکٹری میں بہت سی پرانی اور لاوارث فائلوں کی طرف لے جاتا ہے۔

اس پیرامیٹر کو ان فائلوں کو صاف کرنے کے لیے استعمال کریں جنہیں دوسری زبان کی ڈائریکٹریوں میں حذف کیا جانا چاہیے۔

## `-d` ترجمہ ڈائریکٹری کی وضاحت کرتا ہے۔

ترجمہ شدہ ڈائرکٹری پہلے سے طے شدہ ڈائرکٹری میں ہے جہاں موجودہ فائل واقع ہے۔

`-d` یا `--workdir` ترجمہ ڈائریکٹری کی وضاحت کر سکتا ہے، جیسے:

```
i18 -d ~/i18n/md
```

## `-h` مدد دیکھیں

کمانڈ لائن مدد دیکھنے کے لیے `-h` یا `--help` ۔