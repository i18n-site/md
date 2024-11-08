# Faq

## Випадково Видалено `.i18n/v` , Через Що Пакет `npm` Не Вдалося Опублікувати

Історична версія, випущена пакетом `npm` зберігається в `.i18n/v/ol/v.hash` .

Якщо ви випадково видалите `.i18n/v/ol` пакет `npm` не буде випущено.

У цей час спочатку знайдіть номер версії останнього випуску вашого проекту в [npmjs.com](//npmjs.com) наприклад, `0.1.9` .

Потім зверніться до `bash` нижче, щоб створити файл.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Зауважте, що відновлення таким чином призведе до втрати історії файлів, що унеможливить поступове оновлення наступного випуску, а весь вміст буде переупаковано та завантажено один раз.