# Problem I Përbashkët

## U Fshi Rastësisht `.i18n/V` Duke Bërë Që Paketa `Npm` Të Mos Publikohej

Versioni historik i lëshimit të `npm` paketës është ruajtur në `.i18n/v/ol/v.hash`

Nëse e fshini aksidentalisht `.i18n/v/ol` paketa `npm` nuk do të publikohet.

Në këtë kohë, së pari gjeni numrin e versionit të versionit të fundit të projektit tuaj në [npmjs.com](//npmjs.com) `0.1.9`

Pastaj referojuni `bash` skedarit më poshtë.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Vini re se riparimi në këtë mënyrë do të humbasë historikun e skedarëve, duke e bërë të pamundur përditësimin në mënyrë të vazhdueshme të versionit të ardhshëm dhe e gjithë përmbajtja do të ripaketohet dhe ngarkohet një herë.

