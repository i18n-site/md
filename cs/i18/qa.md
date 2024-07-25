# Společný Problém

## Přidávání Nebo Odstraňování Řádků Překladu, Což Vede Ke Zmatkům v Překladu

Pamatujte, **že počet řádků v překladu musí odpovídat řádkům v původním textu** .

To znamená, že při ruční úpravě překladu **nepřidávejte ani neodstraňujte řádky překladu** , jinak bude mapovací vztah mezi překladem a původním textem narušen.

Pokud omylem přidáte nebo odstraníte řádek, což způsobí zmatek, obnovte prosím překlad na verzi před úpravou, spusťte překlad `i18` a znovu uložte správné mapování.

Mapování mezi překladem a původním textem je svázáno s tokenem Vytvořte nový token v [i18n.site/token](//i18n.site/token) , smažte `.i18h/hash` a přeložte znovu, abyste vymazali matoucí mapování (to však způsobí ztrátu všech ručních úprav překladu).

## `YAML` : Zabránit Převedení `HTML` Odkazu Na `Markdown`

Hodnota `YAML` bude pro překlad považována za `MarkDown` .

Někdy konverze `HTML` → `MarkDown` není to, co chceme, například `<a href="/">Home</a>` je převedeno na `[Home](/)` .

Chcete-li se této konverzi vyhnout, přidejte do značky `a` jakýkoli jiný atribut než `href` , například `<a class="A" href="/">Home</a>` .

## `./I18n/Hash` Následující Soubory Jsou v Konfliktu

Odstraňte konfliktní soubory a znovu spusťte aplikaci Překladač `i18`
