# Faq

## Выпадкова Выдалены `.i18n/v` , У Выніку Чаго Пакет `npm` Не Быў Апублікаваны

Гістарычная версія, выпушчаная пакетам `npm` захоўваецца ў `.i18n/v/ol/v.hash` .

Калі вы выпадкова выдаліце `.i18n/v/ol` пакет `npm` не будзе выпушчаны.

У гэты час спачатку знайдзіце нумар версіі апошняй версіі вашага праекта ў [npmjs.com](//npmjs.com) напрыклад `0.1.9` .

Затым звярніцеся да `bash` ніжэй, каб стварыць файл.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Звярніце ўвагу, што выпраўленне такім спосабам прывядзе да страты гісторыі файлаў, што зробіць немагчымым паступовае абнаўленне наступнага выпуску, а ўвесь кантэнт будзе перапакаваны і загружаны адзін раз.