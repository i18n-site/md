# Faq

## Eliminouse Accidentalmente `.i18n/v` , O Que Provocou Que O Paquete `npm` Non Se Publicase

A versión histórica publicada polo paquete `npm` gárdase en `.i18n/v/ol/v.hash` .

Se eliminas `.i18n/v/ol` o paquete `npm` non se liberará.

Neste momento, primeiro busca o número de versión da última versión do teu proxecto en [npmjs.com](//npmjs.com) por exemplo, `0.1.9` .

A continuación, consulte `bash` a continuación para crear o ficheiro.

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

Teña en conta que a reparación deste xeito perderá o historial de ficheiros, polo que será imposible actualizar gradualmente a seguinte versión e todo o contido volverase a empaquetar e cargarse unha vez.