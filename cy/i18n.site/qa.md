# Broblem Gyffredin

## Wedi'i Ddileu Yn Ddamweiniol `.i18n/V` , Gan Achosi I'r Pecyn `Npm` Fethu Â Chael Ei Gyhoeddi

`.i18n/v/ol/v.hash` fersiwn hanesyddol o `npm` rhyddhau pecyn yn cael ei gadw yn !

Os byddwch yn dileu'n ddamweiniol `.i18n/v/ol` ni fydd y pecyn `npm` yn cael ei gyhoeddi.

Ar yr adeg hon, yn gyntaf dewch o hyd i rif fersiwn fersiwn olaf eich prosiect yn [npmjs.com](//npmjs.com) , er enghraifft `0.1.9`

Yna cyfeiriwch at y ffeil Creu `bash`

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Sylwch y bydd atgyweirio fel hyn yn colli hanes y ffeil, gan ei gwneud hi'n amhosibl diweddaru'r datganiad nesaf yn raddol, a bydd yr holl gynnwys yn cael ei ail-becynnu a'i uwchlwytho unwaith.

