# FAQ

## צוגעבן אָדער אויסמעקן שורות פון דער איבערזעצונג, ריזאַלטינג אין צעמישונג אין דער איבערזעצונג

> [!WARN]
> געדענקט, **די נומער פון שורות אין דער איבערזעצונג מוזן שטימען צו די שורות אין דער אָריגינעל טעקסט** .
> דאָס הייסט, ווען מאַניואַלי סטרויערן די איבערזעצונג, **טאָן ניט לייגן אָדער ויסמעקן שורות פון די איבערזעצונג** , אַנדערש די מאַפּינג שייכות צווישן די איבערזעצונג און דער אָריגינעל טעקסט וועט זיין דיסאָרדערד.

אויב איר אַקסאַדענאַלי לייגן אָדער ויסמעקן אַ שורה, קאָזינג צעמישונג, ביטע צוריקקריגן די איבערזעצונג צו דער ווערסיע איידער מאָדיפיקאַטיאָן, לויפן `i18` איבערזעצונג ווידער, און שייַעך-קאַש די ריכטיק מאַפּינג.

די מאַפּינג צווישן די איבערזעצונג און דער אָריגינעל טעקסט איז געבונדן צו די סימען שאַפֿן אַ נייַ טאָקען אין [i18n.site/token](//i18n.site/token) ויסמעקן `.i18h/hash` , און איבערזעצן ווידער צו ויסמעקן די קאַנפיוזינג מאַפּינג (אָבער דאָס וועט מאַכן אַלע מאַנואַל אַדזשאַסטמאַנץ צו די איבערזעצונג פאַרפאַלן).

## `YAML` : `HTML` `Markdown`

א ווערט פון `YAML` איז באהאנדלט ווי `MarkDown` פֿאַר איבערזעצונג.

מאל די קאַנווערזשאַן פון `HTML` → `MarkDown` איז נישט וואָס מיר ווילן, אַזאַ ווי `<a href="/">Home</a>` איז קאָנווערטעד צו `[Home](/)` .

אַדינג קיין אַטריביוט אנדערע ווי `href` צו די `a` קוויטל, אַזאַ ווי `<a class="A" href="/">Home</a>` , קענען ויסמיידן דעם קאַנווערזשאַן.

## `./i18n/hash` טעקע קאָנפליקט אונטן

ויסמעקן די קאַנפליקטינג טעקעס און לויפן `i18` איבערזעצונג ווידער.