# Plug-In

Os complementos pódense configurar en `.i18n/conf.yml` , como:

```yml
addon:
  - i18n.addon/toc
```

## Complemento Oficial

* `i18n.addon/toc` : de directorio
  Xera un índice de directorio de `json` baseado en `TOC` , activado por defecto

* `i18n.addon/mouse` : Efectos do rato

## Convención De Nome De Ficheiro

Os complementos son `npm` paquetes.

O paquete correspondente a `i18n.addon/toc` anterior é [https://www.npmjs.com/package/@i18n.addon/toc](https://www.npmjs.com/package/@i18n.addon/toc)

O complemento usa a versión máis recente de forma predeterminada e verifica se hai actualizacións semanalmente.

Se queres corrixir a versión, podes escribir `i18n.addon/toc@0.1.3` .

A liña de comandos de tradución `i18n.site` instalará o ficheiro de convención do paquete de complementos e despois executarao.

Os nomes de ficheiros acordados son os seguintes

### htmIndex.js

`htmIndex.js` inxectarase ata o final de `.i18n/htm/index.js` .

Onde `__CONF__` substituirase polo nome da configuración actual (como `dev` ou `ol` ).

### afterTran.js

Chamarase despois de que se complete a tradución e os parámetros que se pasan son os seguintes.

* `lang_li` Lista de : , o primeiro idioma é o idioma de orixe
* `changed` : Arquivos modificados
* `root` directorio raíz : proxecto

O valor de retorno é un dicionario, como

```json
{
  file:{
    //  path: txt, for example :
    // "_.json": "[]"
  }
}
```

`file` é a lista de ficheiros de saída, `path` é a ruta do ficheiro e `txt` é o contido do ficheiro.

## Funcións Incorporadas

O tempo de execución `js` integrado baséase no desenvolvemento secundario de [boa](https://github.com/boa-dev/boa) e as funcións integradas son as seguintes :

* `wPath(path, txt)` : Escribe no ficheiro
* `rTxt(path)` : Ler o ficheiro de texto
* `rBin(path)` : Ler o ficheiro binario
* `rDir(dirpath)` Le o directorio : o valor de retorno é unha matriz : list, lista de ficheiros

## Guía De Desenvolvemento

O desenvolvemento de complementos pode ser unha referencia [https://github.com/i18n-site/addon](https://github.com/i18n-site/addon)