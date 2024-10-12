# Faq

## U Fshi Rastësisht `.i18n/v` , Duke Bërë Që Paketa `npm` Të Mos Publikohej

Versioni historik i lëshuar nga paketa `npm` ruhet në `.i18n/v/ol/v.hash` .

Nëse fshini aksidentalisht `.i18n/v/ol` paketa `npm` nuk do të lëshohet.

Në këtë kohë, së pari gjeni numrin e versionit të versionit të fundit të lëshimit të projektit tuaj në [npmjs.com](//npmjs.com) për shembull, `0.1.9` .

Pastaj referojuni `bash` më poshtë për të krijuar skedarin.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Vini re se riparimi në këtë mënyrë do të humbasë historikun e skedarëve, duke e bërë të pamundur përditësimin në mënyrë të vazhdueshme të versionit të ardhshëm dhe e gjithë përmbajtja do të ripaketohet dhe ngarkohet një herë.