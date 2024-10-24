# Faq

## Přidávání Nebo Odstraňování Řádků Překladu, Což Vede Ke Zmatkům v Překladu

> [!WARN]
> Pamatujte, **že počet řádků v překladu musí odpovídat řádkům v původním textu** .
> To znamená, že při ruční úpravě překladu **nepřidávejte ani neodstraňujte řádky překladu** , jinak bude mapovací vztah mezi překladem a původním textem narušen.

Pokud omylem přidáte nebo odstraníte řádek, což způsobí zmatek, obnovte prosím překlad na verzi před úpravou, spusťte znovu překlad `i18` a znovu uložte správné mapování.

Mapování mezi překladem a původním textem je svázáno s tokenem Vytvořte nový token v [i18n.site/token](//i18n.site/token) smažte `.i18h/hash` a přeložte znovu, abyste vymazali matoucí mapování (to však způsobí ztrátu všech ručních úprav překladu).

## `YAML` : Zabránit Převedení Odkazu `HTML` Na `Markdown`

Hodnota `YAML` se pro překlad považuje za `MarkDown` .

Někdy převod z `HTML` → `MarkDown` není to, co chceme, například `<a href="/">Home</a>` se převádí na `[Home](/)` .

Přidáním jakéhokoli jiného atributu než `href` ke značce `a` , například `<a class="A" href="/">Home</a>` , se můžete vyhnout této konverzi.

## `./i18n/hash` Konfliktů Souborů Níže

Odstraňte konfliktní soubory a znovu spusťte překlad `i18` .