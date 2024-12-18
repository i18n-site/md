# Დანამატი

დანამატების კონფიგურაცია შესაძლებელია `.i18n/conf.yml` -ში, როგორიცაა:

```yml
addon:
  - i18n.addon/toc
```

## Ოფიციალური Დანამატი

* `i18n.addon/toc` :
  `TOC` -ზე დაფუძნებული დირექტორია `json` -ის ინდექსის გენერირება, რომელიც ჩართულია ნაგულისხმევად

* `i18n.addon/mouse` :

## Ფაილის Სახელის Კონვენცია

დანამატები არის ყველა `npm` პაკეტი.

`i18n.addon/toc` -ის შესაბამისი პაკეტი არის [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

მოდული ნაგულისხმევად იყენებს უახლეს ვერსიას და ყოველკვირეულად ამოწმებს განახლებებს.

თუ გსურთ ვერსიის გამოსწორება, შეგიძლიათ დაწეროთ `i18n.addon/toc@0.1.3` .

თარგმანის ბრძანების ხაზი `i18n.site` დააინსტალირებს დანამატის პაკეტის კონვენციურ ფაილს და შემდეგ შეასრულებს მას.

შეთანხმებული ფაილების სახელები შემდეგია

### htmIndex.js

`htmIndex.js` იქნება ინექცია `.i18n/htm/index.js` ის ბოლომდე.

სადაც `__CONF__` შეიცვლება მიმდინარე კონფიგურაციის სახელით (როგორიცაა `dev` ან `ol` ).

### afterTran.js

ის გამოიძახება თარგმანის დასრულების შემდეგ და გადაცემული პარამეტრები შემდეგია.

* `lang_li` : სია, პირველი ენა არის საწყისი ენა
* `changed` : ფაილი
* `root` :

დაბრუნებული მნიშვნელობა არის ლექსიკონი, როგორიცაა

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` არის გამომავალი ფაილების სია, `path` არის ფაილის გზა და `txt` არის ფაილის შინაარსი.

## Ჩაშენებული Ფუნქციები

ჩაშენებული `js` გაშვების დრო ეფუძნება მეორად განვითარებას და ჩაშენებული ფუნქციები შემდეგია : [boa](https://github.com/boa-dev/boa)

* `wPath(path, txt)` : ფაილში
* `rTxt(path)` : წაიკითხეთ ტექსტური ფაილი
* `rBin(path)` : წაიკითხეთ ორობითი ფაილი
* `rDir(dirpath)` : წაიკითხეთ დირექტორია, დაბრუნებული მნიშვნელობა არის მასივი : სია, ფაილების სია

## Განვითარების Გზამკვლევი

დანამატის განვითარება შეიძლება იყოს მინიშნება [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)