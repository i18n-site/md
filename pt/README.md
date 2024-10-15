<h1 style="display:flex;justify-content:space-between">i18n.site ⋅ Soluções Internacionais <img src="//p.3ti.site/logo.svg" style="user-select:none;margin-top:-1px;width:42px"></h1>

linha de comando Markdown, ferramenta Yaml, ajuda a construir um site de documentos internacional, com suporte [a centenas de idiomas](/i18/LANG_CODE)…

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:12px;box-shadow:0 0 3px inset #eee;padding:12px 5px 4px 12px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:s;margin-right:2px;margin-bottom:8px;font-style:normal;color:#666;border-bottom:1px dashed #ccc;}</style><i>English</i><i>简体中文</i><i>Deutsch</i><i>Français</i><i>Español</i><i>Italiano</i><i>日本語</i><i>Polski</i><i>Português(Brasil)</i><i>Русский</i><i>Nederlands</i><i>Türkçe</i><i>Svenska</i><i>Čeština</i><i>Українська</i><i>Magyar</i><i>Indonesia</i><i>한국어</i><i>Română</i><i>Norsk</i><i>Slovenčina</i><i>Suomi</i><i>العربية</i><i>Català</i><i>Dansk</i><i>فارسی</i><i>Tiếng Việt</i><i>Lietuvių</i><i>Hrvatski</i><i>עברית</i><i>Slovenščina</i><i>српски језик</i><i>Esperanto</i><i>Ελληνικά</i><i>Eesti</i><i>Български</i><i>ไทย</i><i>Haitian Creole</i><i>Íslenska</i><i>नेपाली</i><i>తెలుగు</i><i>Latine</i><i>Galego</i><i>हिन्दी</i><i>Cebuano</i><i>Melayu</i><i>Euskara</i><i>Bosnian</i><i>Letzeburgesch</i><i>Latviešu</i><i>ქართული</i><i>Shqip</i><i>मराठी</i><i>Azərbaycan</i><i>Македонски</i><i>Wikang Tagalog</i><i>Cymraeg</i><i>বাংলা</i><i>தமிழ்</i><i>Basa Jawa</i><i>Basa Sunda</i><i>Беларуская</i><i>Kurdî(Navîn)</i><i>Afrikaans</i><i>Frysk</i><i>Toğikī</i><i>اردو</i><i>Kichwa</i><i>മലയാളം</i><i>Kiswahili</i><i>Gaeilge</i><i>Uzbek(Latin)</i><i>Te Reo Māori</i><i>Èdè Yorùbá</i><i>ಕನ್ನಡ</i><i>አማርኛ</i><i>Հայերեն</i><i>অসমীয়া</i><i>Aymar Aru</i><i>Bamanankan</i><i>Bhojpuri</i><i>正體中文</i><i>Corsu</i><i>ދިވެހިބަސް</i><i>Eʋegbe</i><i>Filipino</i><i>Guarani</i><i>ગુજરાતી</i><i>Hausa</i><i>Hawaiian</i><i>Hmong</i><i>Ásụ̀sụ́ Ìgbò</i><i>Iloko</i><i>Қазақ Тілі</i><i>ខ្មែរ</i><i>Kinyarwanda</i><i>سۆرانی</i><i>Кыргызча</i><i>ລາວ</i><i>Lingála</i><i>Ganda</i><i>Maithili</i><i>Malagasy</i><i>Malti</i><i>монгол</i><i>မြန်မာ</i><i>ChiCheŵa</i><i>ଓଡ଼ିଆ</i><i>Afaan Oromoo</i><i>پښتو</i><i>ਪੰਜਾਬੀ</i><i>Gagana Sāmoa</i><i>Sanskrit</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>chiShona</i><i>سنڌي</i><i>සිංහල</i><i>Soomaali</i><i>Татар</i><i>ትግር</i><i>Xitsonga</i><i>Türkmen Dili</i><i>Akan</i><i>isiXhosa</i><i>ייִדיש</i><i>Isi-Zulu</i></pre>

## Prefácio

A internet eliminou a distância do espaço físico, mas as diferenças linguísticas ainda impedem a unidade humana.

Embora os navegadores já venham com tradução integrada, os mecanismos de busca ainda não conseguem realizar buscas entre idiomas.

Redes sociais, e-mails, o público está habituado a focar em fontes de informação em sua própria língua materna.

Com a explosão de informações e o mercado global, para competir por essa atenção escassa, **suportar múltiplos idiomas é fundamental**.

Mesmo projetos pessoais de código aberto que pretendem alcançar um público mais amplo devem escolher uma tecnologia internacional desde o início.

## <a rel=id href="#project" id="project"></a> Introdução ao Projeto

Atualmente, este site oferece duas ferramentas de linha de comando de código aberto:

* [i18 : Ferramenta de Tradução de Markdown via Linha de Comando](/i18/feature)
* [i18n.site : Gerador de Sites Estáticos Multilíngues](/i18n.site)

### <a rel=id href="#i18" id="i18"></a> i18 : Ferramenta de Tradução de Markdown via Linha de Comando

Uma ferramenta de linha de comando ([código-fonte](https://github.com/i18n-site/rust/tree/main/i18)) que traduz `Markdown` e `YAML` em vários idiomas.

Pode manter perfeitamente o formato de `Markdown`. Pode identificar modificações de arquivos e traduzir apenas os arquivos alterados.

A tradução é editável.

Se modificar o texto original e traduzi-lo automaticamente novamente, as modificações manuais na tradução não serão substituídas (se este parágrafo do texto original não tiver sido modificado).

Aderimos à filosofia `UNIX` "Tudo é um arquivo" e podemos gerenciar traduções em centenas de idiomas sem introduzir soluções complexas e pesadas de nível empresarial.

Você pode usar as ferramentas mais familiares para editar a tradução de `Markdown` (mas não pode adicionar ou excluir parágrafos) e usar a maneira mais familiar para fazer o controle de versão.

Uma base de código pode ser criada como código aberto para arquivos de idioma e, com a ajuda do processo de `Pull Request`, usuários globais podem participar da otimização contínua das traduções. Conexão perfeita com [github](//github.com) e outras comunidades de código aberto.

[→ Guia de uso, leia a documentação do projeto](/i18).

## Oferece a melhor qualidade de tradução automática

Desenvolvemos uma nova geração de tecnologia de tradução, integrando as vantagens dos modelos tradicionais de tradução automática e dos grandes modelos de idiomas, para fornecer traduções precisas, suaves e elegantes.

Os testes cegos indicam que a qualidade da nossa tradução é significativamente melhor em comparação com serviços similares.

Para alcançar a mesma qualidade, a quantidade de edição manual exigida pelo Google Translate e `ChatGPT` é de `2.67` vezes e `3.15` vezes maior que a nossa, respectivamente.

#### <a rel=id href="#price" id="price"></a> Preços altamente competitivos

|                                                                                   | USD/milhão de palavras |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Clique aqui para autorizar automaticamente o acompanhamento do repositório开源 do i18n.site no GitHub](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo), **e receba $50 de bônus**.

Nota: O número de caracteres cobrados = [número de caracteres Unicode](https://en.wikipedia.org/wiki/Unicode) do arquivo de origem × número de idiomas na tradução

### i18n.site : Gerador de Sites Estáticos Multilíngues

Ferramenta de linha de comando ( [código-fonte](https://github.com/i18n-site/rust/tree/main/i18n-site) ) para gerar sites estáticos multilíngues.

Puro e estático, otimizado para experiência de leitura, integrado com a tradução de [i18](#i18), é a escolha ideal para construir sites de documentos de projetos.

Arquitetura de front-end completa com plugins, fácil para desenvolvimento adicional, e pode integrar funções de back-end se necessário.

Esse site foi desenvolvido com base nesta estrutura, incluindo funções de usuário e pagamento ( [código-fonte](/i18n.site/src) ), e um tutorial detalhado será escrito em breve.

[→ Guia de uso, leia a documentação do projeto](/i18n.site).

## Mantenha o contato

<button onclick="mailsub()">Clique aqui para assinar atualizações de produtos por e-mail</button> e <button onclick="webpush()">ative as notificações do navegador</button>, e seremos notificados quando os produtos forem atualizados.

Também siga nossas contas em [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social).

Se você encontrar problemas, [→ post no fórum de usuários](https://groups.google.com/u/1/g/i18n).

## Sobre Nós

> Eles disseram: "Vamos construir uma torre até o céu para glorificar a raça humana".
>
> O Senhor viu e disse: "A raça humana tem a mesma língua e origem, e agora que isso é possível, nada será impossível".
>
> Então Ele veio, fez com que os seres humanos não pudessem se entender e os espalhou por toda parte.

<p style="text-align:right">— Bíblia, Gênesis</p>

Desejamos construir uma Internet sem barreiras linguísticas.
Esperamos que toda a humanidade se una por um sonho comum.

O tradutor Markdown e o site de documentação são apenas o começo.
Sincronize o conteúdo publicado nas redes sociais;
Suporte a comentários e salas de chat bilíngues;
Sistema de tickets multilíngues com possibilidade de recompensas;
Mercado de componentes front-end internacional;
Temos muito mais a fazer.

Estamos ansiosos para encontrar você, que pensa como nós, no vasto mar de pessoas.
Estamos procurando voluntários para participar do desenvolvimento do código-fonte aberto e na revisão de textos traduzidos.
Se você estiver interessado, por favor [clique aqui para preencher seu perfil](https://ggl.link/i18n) e depois se inscreva [na lista de discussão](https://groups.google.com/u/2/g/i18n-site) para comunicação.

Creemos no código aberto e no amor pelo compartilhamento,
Bem-vindo para juntos criarmos um futuro sem fronteiras.