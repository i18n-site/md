# Сораулар

## Көтмәгәндә `.i18n/v` Бетерелде, `npm` Пакет Бастырылмады

`npm` пакет белән чыгарылган тарихи версия `.i18n/v/ol/v.hash` белән сакланган.

Әгәр сез очраклы рәвештә `.i18n/v/ol` `npm` пакет чыгарылмый.

Бу вакытта башта сезнең проектның соңгы чыгарылыш версиясенең версия номерын табыгыз [npmjs.com](//npmjs.com) Мәсәлән, `0.1.9` .

Аннары файл ясау өчен түбәндәге `bash` ка карагыз.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Игътибар итегез, бу рәвешле ремонтлау файл тарихын югалтачак, киләсе чыгарылышны яңартып булмый, һәм барлык эчтәлек бер тапкыр йөкләнәчәк һәм йөкләнәчәк.