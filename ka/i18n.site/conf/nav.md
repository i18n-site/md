# Მორგებული Ნავიგაცია

ავიღოთ დემო საიტი [i18n-demo.github.io](//i18n-demo.github.io) როგორც მაგალითი, რათა აგიხსნათ ნავიგაციის მორგება.

![](https://p.3ti.site/1731036697.avif)

ზემოთ მოცემულ ფიგურაში დანომრილი უბნების შესაბამისი ფაილები შემდეგია:

1. მარცხენა [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. მარჯვნივ [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) არის შაბლონის ენა, რომელიც ქმნის `HTML` -ებს.

[➔ დააწკაპუნეთ აქ გრამატიკის შესასწავლად pug](https://pugjs.org)

ფორმატის სტრიქონი `${I18N.sponsor}` გამოიყენება ფაილში ინტერნაციონალიზაციის განსახორციელებლად და მისი შინაარსი შეიცვლება [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) ტექსტით წყაროს ენის დირექტორიაში.

**ნუ ჩაწერთ `css` და `js` `pug` -ში** , წინააღმდეგ შემთხვევაში იქნება შეცდომა.

სტილები იწერება `css` ში და ურთიერთქმედება მიიღწევა ვებ კომპონენტების შექმნით.

აქ, ნავიგაციის ზოლის შესაბამისი ფაილი არის : [i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css)