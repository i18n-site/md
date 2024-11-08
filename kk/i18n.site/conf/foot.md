# Реттелетін Төменгі Деректеме

Демонстрациялық жобаны мысал ретінде ала отырып, `md` каталогындағы `.i18n/htm/foot.pug` веб-сайттың төменгі деректемесін анықтайды.

![](https://p.3ti.site/1721286077.avif)

## Колонтитул Стилі

Демонстрациялық жобада `md/.i18n/htm` ден төмен үш `css` файл бар.

* `foot.css` :
* `import.css` : сайт үшін `i18n.site` стиль
* `conf.css` : Төменгі деректеме белгішелері және қаріптер

### Белгіше Шрифті

Төменгі деректеме белгішесі iconfont.cn `F` аталатын қаріп жасау арқылы жасалады ( [ағылшын нұсқасы](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)).

Қажет болса, өзіңіздің белгіше қаріпіңізді жасаңыз және келесі конфигурацияны `conf.css` -ге ауыстырыңыз :

```
@font-face {
  font-family: "F";
  src: url(//p.3ti.site/ico1.woff2) format("woff2");
}

#Ft>b>a.site {
  background: url("//p.3ti.site/i18n.svg") 0 0 / cover;
  display: block;
  height: 24px;
  opacity: 0.8;
  width: 115px;
  flex-shrink: 0;
}
```

iconfont.cn қаріп файлына тікелей сілтеме жасамаңыз, себебі оны Safari браузеріне жүктеу мүмкін емес.

## Web Компоненттері

`foot.pug` ге `js` жаза алмайсыз. Егер өзара әрекеттесу қажет болса, веб-компонентті теңшеңіз.

[Веб-компонентті](https://www.freecodecamp.org/news/build-your-first-web-component/) `md/.i18n/htm/index.js` -де анықтауға болады, содан кейін `foot.pug` -де қолдануға болады.

Теңшелетін `<x-img>` сияқты веб-компоненттерді жасау оңай.

```js
customElements.define(
  'x-img',
  class extends HTMLElement {
    constructor() {
      super();
      var img = document.createElement('img');
      img.src = '//p.3ti.site/i18n.svg';
      img.style = "height:99px;width:99px;";
      this.append(img);
    }
  }
)
```

## Көптілді Төменгі Деректеме

`.i18n/htm/foot.pug` -дегі код келесідей :

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Мұнда `${I18N.C}` `en/i18n.yml` -ге сәйкес келеді :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Осы жазу әдісіне ұқсас `${I18N.xxx}` `i18n.yml` мен біріктіріп пайдалану арқылы төменгі деректемені көп тілді интернационалдандыруға қол жеткізуге болады.

Сілтемеге `class="a"` қосу сілтеменің `MarkDown` ге айналуын болдырмау болып табылады. Қараңыз :
 [: `YAML` `HTML` сілтеменің `Markdown` -ге айналуын қалай болдырмауға болады](/i18/qa#H2) .