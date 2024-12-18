# ब्लॉग टेम्पलेट

`use: Blog` पैकी `i18n/conf.yml` म्हणजे प्रस्तुतीकरणासाठी ब्लॉग टेम्पलेट वापरणे.

ब्लॉग पोस्टच्या `markdown` फाइलला मेटा माहिती कॉन्फिगर करणे आवश्यक आहे.

मेटा माहिती फाईलच्या सुरूवातीस `---` ने सुरू होणारी आणि `---` ने समाप्त होणे आवश्यक आहे. मध्यभागी कॉन्फिगरेशन माहितीचे स्वरूप `YAML` आहे.

डेमो फाइलचे कॉन्फिगरेशन खालीलप्रमाणे आहे:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` सामग्री सारांश दर्शविते, जो ब्लॉग अनुक्रमणिका पृष्ठावर प्रदर्शित केला जाईल.

`YMAL` ' च्या मदतीने | `वाक्यरचना, तुम्ही मल्टी-लाइन सारांश लिहू शकता.

ब्लॉगच्या उजव्या बाजूला असलेल्या डिरेक्टरी ट्रीचे कॉन्फिगरेशन देखील `TOC` फाइल्स आहे ( `TOC` प्रकरण पहा).

मेटा माहिती नसलेले लेख ब्लॉगच्या मुख्यपृष्ठावर दिसणार नाहीत, परंतु उजवीकडील निर्देशिकेच्या झाडावर दिसू शकतात.

## लेखक माहिती

लेखाच्या मेटा माहितीमध्ये लेखकाची माहिती लिहिली जाऊ शकते, जसे की:

```yml
author: marlowe
```

नंतर स्त्रोत भाषा निर्देशिकेत `author.yml` संपादित करा आणि लेखक माहिती जोडा, जसे की :

```yml
marlowe:
  name: Eleanor Marlowe
  title: Senior Translator
  url: https://github.com/i18n-site
```

`name` , `url` आणि `title` सर्व पर्यायी आहेत. `name` सेट न केल्यास, की नाव (येथे `marlowe` ) `name` म्हणून वापरले जाईल.

डेमो प्रोजेक्ट [`begin.md`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/blog/news/begin.md?plain=1) आणि [`author.yml`](https://github.com/i18n-site/demo.i18n.site/blob/main/en/author.yml) पहा

## पिन केलेला लेख

तुम्हाला लेख शीर्षस्थानी पिन करायचा असल्यास, कृपया `i18n.site` चालवा आणि `.i18n/data/blog` खाली असलेल्या `xxx.yml` फाइल्स संपादित करा आणि टाइमस्टॅम्पला ऋण क्रमांकावर बदला (एकाधिक ऋण संख्या सर्वात मोठ्या ते सर्वात लहान अशी क्रमवारी लावली जातील).