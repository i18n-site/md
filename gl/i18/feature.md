# Características Do Produto

`i18` é a ferramenta de liña de comandos para a tradución Markdown & Yaml

## Pode Manter Perfectamente O Formato De Markdown

Admite a tradución de táboas de Markdown sen danar o formato non traduce palabras en fórmulas matemáticas ou ligazóns.

Admite Markdown HTML o contido das etiquetas `<pre>` e `<code>` incrustadas en HTML `MarkDown` non se traduce

## Pode Recoñecer Fórmulas Matemáticas E Ignorar a Tradución

Recoñécense fórmulas matemáticas e sáltase a tradución.

Para saber como escribir fórmulas matemáticas, consulte [" Github Acerca de escribir expresións matemáticas"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Capacidade De Traducir Comentarios en Fragmentos De Código

O código en liña e os fragmentos de código non se traducen, pero os comentarios do código pódense traducir.

Os comentarios ` ```rust ` tradución deben indicar o idioma despois de ` ``` ` , como : .

Actualmente, admite a tradución de anotacións en `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [e noutros idiomas](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Se queres traducir todos os caracteres non ingleses do código, marca o segmento do código con ` ```i18n ` .

Se a linguaxe de programación que precisa non está dispoñible, póñase [en contacto connosco](https://groups.google.com/g/i18n-site) .

## Liña De Comando Amigable

Hai moitas [ferramentas pesadas](https://www.capterra.com/translation-management-software) dispoñibles para xestionar documentos de tradución.

Para os programadores que estean familiarizados con `git` , `vim` e `vscode` , o uso destas ferramentas para editar documentos e xestionar versións aumentará sen dúbida o custo da aprendizaxe.

`KISS` ( `Keep It Simple, Stupid` ) Entre os principais crentes, as solucións a nivel empresarial son sinónimo de ser engorrosas, ineficientes e difíciles de usar.

A tradución debe facerse introducindo ordes e completándoa cun clic.

Non engadas entidades a non ser que sexa necesario.

## Sen Modificación, Sen Tradución

Tamén hai algunhas ferramentas de tradución de liña de comandos, como [translate-shell](https://github.com/soimort/translate-shell)

Non obstante, non admiten a identificación de modificacións de ficheiros e só traducen ficheiros modificados para reducir custos e aumentar a eficiencia.

## A Tradución Pódese Editar E a Tradución Automática Non Sobrescribirá as Modificacións Existentes.

A tradución é editable.

Modifique o texto orixinal e tradúceo de novo, as modificacións manuais da tradución non se sobrescribirán (se este parágrafo do texto orixinal non foi modificado).

## Tradución Automática De Mellor Calidade

Desenvolvemos unha nova xeración de tecnoloxía de tradución que combina as vantaxes técnicas dos modelos tradicionais de tradución automática e os grandes modelos de linguaxe para que as traducións sexan precisas, suaves e elegantes.

As probas a cegas mostran que a nosa calidade de tradución é significativamente mellor en comparación con servizos similares.

Para conseguir a mesma calidade, a cantidade de edición manual requirida por Google Translate e `ChatGPT` é `2.67` veces e `3.15` veces a nosa, respectivamente.

## <a rel=id href="#price" id="price"></a> Prezos moi competitivos

|                                                                                   | USD/millón de palabras |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Fai clic aquí para autorizar e seguir i18n.site a biblioteca github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) e **recibir unha bonificación $50** .

Nota: O número de caracteres facturables = [o número de unicode](https://en.wikipedia.org/wiki/Unicode) no ficheiro fonte × o número de idiomas na tradución

## Admite Tradución `YAML`

A ferramenta só traduce os valores do dicionario en `YAML` , non as claves do dicionario.

Baseado na tradución `YAML` , pode facilmente crear solucións internacionais para varias linguaxes de programación.

## Admite a Configuración De Cabeceira De Tradución `HOGO`

Admite a configuración de cabeceira de [HOGO](https://github.com/gohugoio/hugo) blog estático e só traduce os campos `title` , `summary` , `brief` e `description` .

## Non Traducir Os Nomes De Variables

`Markdown` úsase como modelo de correo electrónico, `YAML` úsase como configuración de ficheiro de idioma e haberá parámetros variables (por exemplo: recibiuse a recarga `${amount}` ).

Os nomes de variables como `${varname}` non se considerarán como traducións ao inglés.

## Optimización Da Tradución Para China, Xapón E Corea

### Cando Se Traduce Ao Inglés, a Primeira Letra Do Título Ponse Automaticamente en Maiúscula.

China, Xapón e Corea non teñen letras maiúsculas e minúsculas, pero a convención para os títulos en inglés é escribir a primeira letra en maiúscula.

`i18` pode recoñecer o título en `MarkDown` e escribirá automaticamente a primeira letra en maiúscula ao traducir a un idioma que distinga entre maiúsculas e minúsculas.

Por exemplo, `为阅读体验而优化` traducirase a `Optimized for Reading Experience` .

### Os Termos Ingleses en Chinés, Xaponés, Coreano E Chinés Non Se Traducen

Os documentos de China, Xapón e Corea a miúdo conteñen moitos termos en inglés.

A tradución automática dos idiomas chinés, xaponés e coreano converteuse nunha lingua non inglesa, e os termos adoitan traducirse xuntos, como a seguinte frase en chinés:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Se usas Google ou DeepL, ambos traducen incorrectamente termos en inglés que deberían seguir sendo orixinais (toma xaponés e francés como exemplos).

### Tradutor De Google

Traducido ao `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

![](//p.3ti.site/1720199391.avif)

`Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` ao francés :

`Falcon` tradúcese como `faucon` e `Llama` tradúcese como `lama` . Como nomes propios, non deben traducirse.

![](//p.3ti.site/1720199451.avif)

### Tradución DeepL

Traducido ao `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

![](//p.3ti.site/1720199550.avif)

DeepL do anterior ao francés (reescribindo tamén os nomes propios e engadindo o impar `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### Tradución i18n.site

A tradución de `i18` recoñecerá os termos en inglés nos documentos chinés, xaponés e coreano e deixará os termos intactos.

Por exemplo, o resultado da tradución ao xaponés anterior é:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

A tradución ao francés é:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Só cando hai un espazo entre a palabra inglesa e o texto en chinés, xaponés e coreano ou a lonxitude en inglés é superior a 1, a palabra considerarase un termo.

Por exemplo: `C罗` traducirase como `Cristiano Ronaldo` .

## Pódese Combinar Con Máis De `i18n.site` Idiomas Para Construír Un Sitio Web

`i18` está integrado na ferramenta de liña de comandos de creación de sitios web multilingüe [`i18n.site`](/i18n.site) .

Consulte a documentación de [`i18n.site`](/i18n.site) para obter máis detalles.

## Código De Código Aberto

O cliente é de código 90 e o % do código é de código aberto [Fai clic aquí para ver o código fonte](/i18n.site/c/src) .

Buscamos voluntarios para participar no desenvolvemento de código fonte aberto e corrección de textos traducidos.

Se estás interesado, [→ Fai clic aquí para cubrir o teu perfil](https://ggl.link/i18n) e logo únete [á lista de correo](https://groups.google.com/u/2/g/i18n-site) para comunicarte.

## Manter O Contacto

Fai <button onclick="mailsub()">clic neste correo electrónico para subscribirte ás actualizacións do produto</button> e <button onclick="webpush()">activar o push do navegador</button> . Notificarémosche cando se realicen as actualizacións do produto.

Benvido tamén a seguir as nosas contas [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) .