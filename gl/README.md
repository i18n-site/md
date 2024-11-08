<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ Solucións internacionais<img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>

A liña de comandos Markdown ferramenta Yaml , axúdache a crear un sitio de documentos internacional que admite [centos de idiomas](/i18/LANG_CODE) ...

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i><i>Français</i><i>Español</i><i>Italiano</i><i>日本語</i><i>Polski</i><i>Português(Brasil)</i><i>Русский</i><i>Nederlands</i><i>Türkçe</i><i>Svenska</i><i>Čeština</i><i>Українська</i><i>Magyar</i><i>Indonesia</i><i>한국어</i><i>Română</i><i>Norsk</i><i>Slovenčina</i><i>Suomi</i><i>العربية</i><i>Català</i><i>Dansk</i><i>فارسی</i><i>Tiếng Việt</i><i>Lietuvių</i><i>Hrvatski</i><i>עברית</i><i>Slovenščina</i><i>српски језик</i><i>Esperanto</i><i>Ελληνικά</i><i>Eesti</i><i>Български</i><i>ไทย</i><i>Haitian Creole</i><i>Íslenska</i><i>नेपाली</i><i>తెలుగు</i><i>Latine</i><i>Galego</i><i>हिन्दी</i><i>Cebuano</i><i>Melayu</i><i>Euskara</i><i>Bosnian</i><i>Letzeburgesch</i><i>Latviešu</i><i>ქართული</i><i>Shqip</i><i>मराठी</i><i>Azərbaycan</i><i>Македонски</i><i>Wikang Tagalog</i><i>Cymraeg</i><i>বাংলা</i><i>தமிழ்</i><i>Basa Jawa</i><i>Basa Sunda</i><i>Беларуская</i><i>Kurdî(Navîn)</i><i>Afrikaans</i><i>Frysk</i><i>Toğikī</i><i>اردو</i><i>Kichwa</i><i>മലയാളം</i><i>Kiswahili</i><i>Gaeilge</i><i>Uzbek(Latin)</i><i>Te Reo Māori</i><i>Èdè Yorùbá</i><i>ಕನ್ನಡ</i><i>አማርኛ</i><i>Հայերեն</i><i>অসমীয়া</i><i>Aymar Aru</i><i>Bamanankan</i><i>Bhojpuri</i><i>正體中文</i><i>Corsu</i><i>ދިވެހިބަސް</i><i>Eʋegbe</i><i>Filipino</i><i>Guarani</i><i>ગુજરાતી</i><i>Hausa</i><i>Hawaiian</i><i>Hmong</i><i>Ásụ̀sụ́ Ìgbò</i><i>Iloko</i><i>Қазақ Тілі</i><i>ខ្មែរ</i><i>Kinyarwanda</i><i>سۆرانی</i><i>Кыргызча</i><i>ລາວ</i><i>Lingála</i><i>Ganda</i><i>Maithili</i><i>Malagasy</i><i>Malti</i><i>монгол</i><i>မြန်မာ</i><i>ChiCheŵa</i><i>ଓଡ଼ିଆ</i><i>Afaan Oromoo</i><i>پښتو</i><i>ਪੰਜਾਬੀ</i><i>Gagana Sāmoa</i><i>Sanskrit</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>chiShona</i><i>سنڌي</i><i>සිංහල</i><i>Soomaali</i><i>Татар</i><i>ትግር</i><i>Xitsonga</i><i>Türkmen Dili</i><i>Akan</i><i>isiXhosa</i><i>ייִדיש</i><i>Isi-Zulu</i></pre>

## Prefacio

Internet eliminou a distancia no espazo físico, pero as diferenzas lingüísticas aínda dificultan a unidade humana.

Aínda que o navegador ten tradución integrada, os motores de busca aínda non poden realizar consultas entre idiomas.

A través das redes sociais e do correo electrónico, a xente está afeita a centrarse nas fontes de información na súa propia lingua materna.

Coa explosión da información e o mercado global, para competir pola escasa atención, **admitir varios idiomas é unha habilidade básica** .

Aínda que se trate dun proxecto persoal de código aberto que quere influír nun público máis amplo, debería facer unha selección de tecnoloxía internacional desde o principio.

## <a rel=id href="#project" id="project"></a> Presentación do proxecto

Este sitio ofrece actualmente dúas ferramentas de liña de comandos de código aberto:

* [Ferramenta de tradución de liña de i18 : MarkDown](/i18/feature)
* [Xerador de sitios web estáticos i18n.site :](/i18n.site)

### <a rel=id href="#i18" id="i18"></a> i18: ferramenta de tradución da liña de comandos de MarkDown

Unha ferramenta de liña de comandos ( [código fonte](https://github.com/i18n-site/rust/tree/main/i18) ) que traduce `Markdown` e `YAML` a varios idiomas.

Pode manter perfectamente o formato de `Markdown` . Pode identificar modificacións de ficheiros e só traducir ficheiros modificados.

A tradución é editable.

Modifique o texto orixinal e tradúceo de novo, as modificacións manuais da tradución non se sobrescribirán (se este parágrafo do texto orixinal non foi modificado).

Podes usar as ferramentas máis coñecidas para editar `Markdown` tradución (pero non podes engadir nin eliminar parágrafos) e utilizar o xeito máis familiar de facer o control de versións.

Pódese crear unha base de código como fonte aberta para ficheiros de idiomas e, coa axuda de procesos `Pull Request` , os usuarios globais poden participar na optimización continua das traducións. Conexión perfecta [github](//github.com) outras comunidades de código aberto.

> [!TIP]
> Adoptamos a filosofía UNIX de "todo é un ficheiro" e podemos xestionar traducións a centos de idiomas sen introducir solucións empresariais complexas e engorrosas.

[→ Para obter instrucións de uso, lea a documentación do proxecto](/i18) .

## Tradución Automática De Mellor Calidade

Desenvolvemos unha nova xeración de tecnoloxía de tradución que combina as vantaxes técnicas dos modelos tradicionais de tradución automática e os grandes modelos de linguaxe para que as traducións sexan precisas, suaves e elegantes.

As probas a cegas mostran que a nosa calidade de tradución é significativamente mellor en comparación con servizos similares.

Para conseguir a mesma calidade, a cantidade de edición manual requirida por Google Translate e `ChatGPT` é `2.67` veces e `3.15` veces a nosa, respectivamente.

#### <a rel=id href="#price" id="price"></a> Prezos moi competitivos

|                                                                                   | USD/millón de palabras |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ Fai clic aquí para autorizar e seguir i18n.site a biblioteca github](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) e **recibir unha bonificación $50** .

Nota: O número de caracteres facturables = [o número de unicode](https://en.wikipedia.org/wiki/Unicode) no ficheiro fonte × o número de idiomas na tradución

### i18n.site: Xerador De Sitios Estáticos Multilingüe

Ferramenta de liña de comandos ( [código fonte](https://github.com/i18n-site/rust/tree/main/i18n-site) ) para xerar sitios estáticos multilingües.

Puramente estático, optimizado para a experiencia de lectura, integrado coa tradución de [i18](#i18) é a mellor opción para construír un sitio de documentos do proxecto.

O marco front-end subxacente adopta unha arquitectura de complemento completa, que é fácil para o desenvolvemento secundario, se é necesario, pódense integrar funcións de back-end.

Este sitio web desenvólvese con base neste marco e inclúe funcións de usuario, pago e outras ( [código fonte](/i18n.site/c/src) ).

[→ Para obter instrucións de uso, lea a documentación do proxecto](/i18n.site) .

## Manter O Contacto

Fai <button onclick="mailsub()">clic neste correo electrónico para subscribirte ás actualizacións do produto</button> e <button onclick="webpush()">activar o push do navegador</button> . Notificarémosche cando se realicen as actualizacións do produto.

Benvido tamén a seguir as nosas contas [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) .

Se atopas problemas [→ publícao no foro de usuarios](https://groups.google.com/u/1/g/i18n) .

## Sobre Nós

> Eles dixeron: Veña, constrúe unha torre que chegue ao ceo e fai famosa á raza humana.
>
> O Señor viu isto e dixo: "Todos os seres humanos teñen a mesma lingua e raza. Agora que se fixo isto, todo se fará".
>
> Logo chegou, facendo que os seres humanos non se entendesen a lingua dos outros e se dispersaron en varios lugares.

<p style="text-align:right">──Biblia·Xénese</p>

Queremos construír unha Internet sen illamento da comunicación lingüística.
Agardamos que toda a humanidade se xunte cun soño común.

Os sitios de tradución e documentación de Markdown son só o comezo.
Sincronizar a publicación de contido nas redes sociais;
Admite comentarios bilingües e salas de chat;
Un sistema de billetes multilingüe que pode pagar recompensas;
Un mercado de vendas de compoñentes front-end internacionais;
Hai moito máis que queremos facer.

Cremos no código aberto e amamos compartir,
Benvido a crear xuntos un futuro sen fronteiras.

> [!NOTE]
> Agardamos coñecer xente afín no vasto mar de xente.
> Buscamos voluntarios para participar no desenvolvemento de código fonte aberto e corrección de textos traducidos.
> Se estás interesado, [→ Fai clic aquí para cubrir o teu perfil](https://ggl.link/i18n) e logo únete [á lista de correo](https://groups.google.com/u/2/g/i18n-site) para comunicarte.