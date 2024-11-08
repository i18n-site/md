# התקן &

## לְהַתְקִין

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## אסימון תצורה

`i18n.site` יש כלי תרגום מובנה אנא [לחץ כאן כדי לעיין במסמך `i18` כדי להגדיר את אסימון הגישה](/i18/use) `i18`

## פרויקט הדגמה

בואו נתחיל עם פרויקט הדגמה כדי ללמוד כיצד להשתמש `i18n.site` .

אנו משכפלים תחילה את מאגר ההדגמה ונפעיל את הפקודה באופן הבא:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

משתמשים ביבשת סין יכולים:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

שם הספרייה של שיבוט בסיס קוד `demo.i18n.site` חייב להיות `md` כדי לאפשר תצוגה מקדימה מקומית עם `docker` .

### לְתַרְגֵם

ראשית, הזן את ספריית `md` והפעל `i18n.site` , אשר יתרגם `en` ל `zh` .

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

לאחר ההפעלה, יווצרו קבצי תרגום ומטמון אנא זכור להוסיף אותם למאגר `git add . ` `md` .

### תצוגה מקדימה מקומית

התקן והתחל `docker` (משתמש `MAC` ממליץ להשתמש ב- [orbstack](https://orbstack.dev) בתור זמן הריצה עבור `docker` ).

לאחר מכן, הזן את ספריית `docker` והפעל `./up.sh` , ולאחר מכן בקר ב- [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">