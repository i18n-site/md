# Ընդհանուր Խնդիր

## Պատահաբար Ջնջվել Է `.i18n/V` Որի Պատճառով `Npm` Փաթեթը Չի Հրապարակվել

`npm` փաթեթի թողարկման պատմական տարբերակը պահված է `.i18n/v/ol/v.hash`

Եթե ​​պատահաբար ջնջեք `.i18n/v/ol` `npm` փաթեթը չի հրապարակվի:

Այս պահին նախ գտեք ձեր նախագծի վերջին թողարկման տարբերակի համարը, օրինակ [npmjs.com](//npmjs.com) -ում `0.1.9`

Այնուհետև դիմեք ստորև բերված `bash` :

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Նկատի ունեցեք, որ այս կերպ վերանորոգումը կկորցնի ֆայլի պատմությունը՝ անհնարին դարձնելով հաջորդ թողարկումն աստիճանաբար թարմացնելը, և ամբողջ բովանդակությունը կվերափաթեթավորվի և կվերբեռնվի մեկ անգամ:

