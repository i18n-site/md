# FAQ

## אַקסאַדענאַלי אויסגעמעקט `.i18n/v` , קאָזינג פּעקל `npm` צו פאַרלאָזן צו זיין ארויס

די היסטארישע ווערסיע רעלעאַסעד דורך פּעקל `npm` איז געראטעוועט אין `.i18n/v/ol/v.hash` .

אויב איר אַקסאַדענאַלי ויסמעקן `.i18n/v/ol` פּעקל `npm` וועט נישט זיין באפרייט.

אין דעם צייט, ערשטער געפֿינען די ווערסיע נומער פון די לעצטע מעלדונג ווערסיע פון דיין פּרויעקט אין [npmjs.com](//npmjs.com) למשל, `0.1.9` .

דערנאָך אָפּשיקן צו `bash` אונטן צו שאַפֿן די טעקע.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

באַמערקונג אַז ריפּערינג אין דעם וועג וועט פאַרלירן די טעקע געשיכטע, מאכן עס אוממעגלעך צו ינקראַמענאַלי דערהייַנטיקן די ווייַטער מעלדונג, און אַלע אינהאַלט וועט זיין ריפּאַקידזשד און ופּלאָאַדעד אַמאָל.