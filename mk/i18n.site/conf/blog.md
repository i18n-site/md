# Шаблон За Блог

`i18n/conf.yml` од `use: Blog` значи користење на шаблонот за блог за рендерирање.

Датотеката `markdown` од објавата на блогот треба да ги конфигурира мета информациите.

Мета информациите мора да бидат на почетокот на датотеката, почнувајќи со `---` и завршувајќи со `---` Форматот на конфигурациските информации во средината е `YAML` .

Демо-датотеката е конфигурирана на следниов начин:

```yml
---

brief: |
  this is a demo brief
  you can write multiline

---

# title

… …
```

`brief` го означува резимето на содржината, кое ќе биде прикажано на страницата со индекс на блог.

Со помош на `YMAL` '|`Синтакса, можете да пишувате резимеа во повеќе линии.

Конфигурацијата на дрвото на директориуми на десната страна на блогот е исто така `TOC` датотеки (видете го претходното поглавје Само статиите наведени во `TOC` ќе се појават во индексот на почетната страница на блогот).

Написите што не содржат мета информации нема да се појават на почетната страница на блогот, но може да се појават во дрвото на директориуми десно.

Ако треба да ја прикачите статијата на врвот, извршете `i18n.site` и уредете ги `xxx.yml` те датотеки под `.i18n/data/blog` , и сменете го временскиот печат во негативен број (повеќе негативни броеви ќе се подредат од мали до големи во апсолутна вредност).