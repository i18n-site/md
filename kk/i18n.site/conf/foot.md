# Төменгі Деректеме

Демонстрациялық жобаны мысал ретінде алатын болсақ, веб-сайттың төменгі деректемесі `md` `.i18n/htm/foot.pug` .

<img alt="" src="https://p.3ti.site/1721286077.avif">

[`pug`](https://pugjs.org) — `HTML` генерациялайтын үлгі тілі.

[➔ Грамматиканы білу үшін осы жерді басыңыз pug](https://pugjs.org)

**`foot.pug` `css` және `js` жазбаңыз** , әйтпесе қателер болады.

Төмендегілерді қараңыз, стиль сәйкес `.css` де жазылған және өзара әрекеттесу веб-компоненттерді жасау арқылы жүзеге асырылады.

## Колонтитул Стилі

Демо `md/.i18n/htm` 3 `css` файл бар.

* `foot.css` :
* `import.css` Бүкіл сайт үшін `i18n.site` :
* `conf.css` :

### Белгіше Шрифті

Төменгі деректеме белгішесі iconfont.cn атты қаріп жасау арқылы жасалады ( [ағылшын нұсқасы](https://www.iconfont.cn/?lang=en-us) /[中文版](https://www.iconfont.cn/?lang=zh)) `F`

Қажет болса, өзіңіздің белгіше қаріпіңізді жасаңыз және келесі : келесіде ауыстырыңыз `conf.css`

```
@font-face {
  font-family: "F";
  src: url("//at.alicdn.com/t/c/font_4281991_urfar2m2zce.woff2?t=1716188208767") format("woff2");
}
```

## Web Компоненттері

Оған `js` деп жазу мүмкін `foot.pug` . Егер өзара әрекеттесу қажет болса, веб-бет компонентін реттеңіз.

`md/.i18n/htm/index.js` ішінде [веб-компонентті](https://www.freecodecamp.org/news/build-your-first-web-component/) анықтауға болады, содан кейін компонентті `foot.pug` ішінде пайдалануға болады.

Теңшелетін тегтер сияқты веб-компоненттерді жасау оңай `<x-img>`

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

Ондағы код : `.i18n/htm/foot.pug`

```
#Ft
  b
    a.site(href="/")
    b ${I18N.C}
```

Міне `${I18N.C}` сәйкесінше `en/i18n.yml` :

```
C: Power By <a class="a" href="https://i18n.site">i18n.site</a>
```

Осы жазу әдісіне ұқсас `${I18N.xxx}` `i18n.yml` колонтитулдың көп тілді интернационализациясына қол жеткізуге болады.

Сілтемені `MarkDown` түрлендірмеу : сілтемеге қосыңыз `class="a"`
 [: Сілтеменің `HTML` `Markdown` -ға айналуын `YAML` болдырмауға болады](/i18/qa#H2) .