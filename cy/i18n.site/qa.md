# Faq

## Wedi'i Ddileu Yn Ddamweiniol `.i18n/v` , Gan Achosi I Becyn `npm` Fethu Â Chael Ei Gyhoeddi

Mae'r fersiwn hanesyddol a ryddhawyd gan becyn `npm` yn cael ei gadw mewn `.i18n/v/ol/v.hash` .

Os byddwch yn dileu `.i18n/v/ol` ni fydd pecyn `npm` yn cael ei ryddhau.

Ar yr adeg hon, yn gyntaf dewch o hyd i rif fersiwn fersiwn rhyddhau olaf eich prosiect yn [npmjs.com](//npmjs.com) megis `0.1.9` .

Yna cyfeiriwch at `bash` isod i greu'r ffeil.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Sylwch y bydd atgyweirio fel hyn yn colli hanes y ffeil, gan ei gwneud hi'n amhosibl diweddaru'r datganiad nesaf yn raddol, a bydd yr holl gynnwys yn cael ei ail-becynnu a'i uwchlwytho unwaith.