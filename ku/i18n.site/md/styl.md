# Lîsteya Style

[Li vir bikirtînin ku pelê çavkaniyê ya vê rûpelê bigerin](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) da ku hûn bibînin ka meriv çawa `MarkDown` di şêwazên jêrîn de dinivîse.

## Bloka Pêçandî

|+| MarkDown çi ye?

    MarkDown zimanek nîşankirinê ya sivik e ku destûrê dide bikarhêneran ku belgeyên formatkirî bi rengek nivîsek sade ku xwendin û nivîsandina hêsan e biafirînin.

    Bi gelemperî ji bo nivîsandina belge, gotarên blogê, e-pirtûk, postên forumê, hwd tê bikar anîn.

    Ew avantajên jêrîn hene:

    1. Fêrbûna hêsan
    1. Pir tê xwendin
    1. Versiyon ji kontrolkirina dostane

       Ji ber ku `MarkDown` belge di forma nivîsê ya sade de ne, bernamesaz dikarin bi hêsanî wan di pergalên kontrolkirina guhertoyê de (wek `git` ) bixin nav xwe.

       Ev şopandina guhertinan û hevkariyê pir hêsan dike, nemaze di pêşkeftina tîmê de.

|-| I18N çi ye?

    "I18N" kurteya "Internationalization" e.

    Ji ber ku peyva "Internationalization" di navbera "I" û "N" de 18 tîp hene, "I18N" ji bo hêsankirina temsîlê tê bikar anîn.

    Bi gotinên laîk, ew tê wateya piştgirîkirina pir zimanan.


Bloka pêçandî hevoksaziyek dirêjkirî ya `i18n.site` `MarkDown` ye, bi vî rengî tê nivîsandin :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

bi `|+| `或`|-| Rêza ku bi `-ê dest pê dike dê blokek pêçayî çêbike, û naveroka bloka pêçandî xêzên paşîn ên bi heman astê veqetandinê ne (paragraf bi rêzikên vala têne veqetandin).

Derbas bibin`|-| `标记的折叠块默认展开，`|+| `Blokên hilweşandî yên nîşankirî ji hêla xwerû ve têne hilweşandin.

## & Bike Strikethrough &

Ev __ __~~ strikethrough~~ û metna pêşkêşkirina **qelew** .

Bi vî awayî hatiye nivîsandin:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Parsera `MarkDown` ya amûra avakirina `i18n.site` xêzkirin, lêdan û hevoksaziya stûr xweştir kiriye. Ew dikare bêyî valahiyên berî û piştî nîşanê bandor bike, nivîsandina belgeyên bi zimanên wekî Chinaîn, Japonya û Koreya ku hêsantir dike. mekanan wekî veqetanker bi kar neynin.

Xwendina : [Çima hevoksaziya Markdown ( `**……**` ) ya Nuggets carinan bandor nake?](//juejin.cn/post/7064565848421171213)

## Girtebêjîn

### Quote Yek Line

> Xwezaya min ev e ku jêhatîbûna min bikêr be, û piştî ku hemî dravê xwe xerc kirin ez ê vegerim.
<p style="text-align:right">─ Li Bai</p>

### Gotinên Rêzikên Pirjimar

> Feydeyek din a bêhempa ya çîroka zanistî qada wê ya pir berfireh e.
> "Şer û Aştî", bi milyonek peyvan, tenê dîroka herêmekê ya çend dehsalan vedibêje;
> Û romanên xeyalî yên zanistî yên mîna Asimov "Bersiva Dawî" bi awayekî zindî dîroka bi mîlyaran salên tevahiya gerdûnê, tevî mirovan, tenê bi çend hezar peyvan vedibêjin.
> Di wêjeya kevneşopî de pêkvebûn û wêrekiyeke wiha ne pêkan e.
<p style="text-align:right">── Liu Cixin</p>

### Serişte `> [!TIP]`

> [!TIP]
> Ji bîr mekin ku hûn derbasbûna pasaport û vîzeya xwe kontrol bikin.

Bi vî awayî hatiye nivîsandin

```
> [!TIP]
> YOUR CONTENT
```

### Nîşe `> [!NOTE]`

> [!NOTE]
> Ger hûn ji min re peyamek bişînin û ez tavilê bersiv bidim, ev tê çi wateyê?
> Ev nîşan dide ku ez bi rastî ji lîstina bi têlefonên desta hez dikim.


### Hişyarî `> [!WARN]`

> [!WARN]
> Dema ku hûn diçin serpêhatiyek çolê, girîng e ku hûn ewle bimînin. Li vir çend serişteyên ewlehiyê yên sereke hene:
>
> - **Pêşbîniya hewayê kontrol bikin** : Hefteya borî, komek hilkişîn li nîvê çiyê rastî bahozê hat ji ber ku pêşbîniya hewayê kontrol nekiribûn û neçar bûn ku bi lezgînî xwe vala bikin.
> - **Amûrên pêwîst hilgirin** : Pê bawer bin ku hûn bi têra xwe xwarin, av û pêdiviyên yekem bi xwe re tînin.
> - **Erdê fam bikin** : Ji bo ku wenda nebin, berê xwe bi erd û rêçên devera serpêhatiyê nas bikin.
> - **Têkilî Bimînin** : Bi cîhana derve ve girêdayî bimînin û piştrast bikin ku her kes dikare bi ewlehî vegere.
>
> Bînin bîra xwe, ewlehî her gav yekem e!

## Lîsteya to-Do

- [x] Prototîpa hilberê û navnîşa taybetmendiyê sêwirînin
- [ ] Amûrên pêvek û pêşkeftinê yên teknolojiyê diyar bikin
- [ ] Demjimêr û qonaxên pêşveçûna hilberê pêşve bibin

## Rêzkirin

### Lîsteya Fermankirî

1. diherike
   1. Di hefteyê de sê caran, her carê 5 kîlometre
   1. Nîv maratonê bimeşînin
1. perwerdeya sporê
   1. Hefteyê du caran, her carê 1 saet
   1. Li ser masûlkeyên bingehîn bisekinin

### Lîsteya Nerêkûpêk

* bûyerên civakî
  - Beşdarî civînên pevguhertina pîşesaziyê bibin
    + Danişîna parvekirina teknolojiyê
    + Civîna Veguheztina Karsaziyê
  - Kombûna hevalan organîze bikin
    + BBQ li derve
    + şeva fîlmê

## Lewha

| ramanwer       | Beşdariyên sereke                           |
|--------------|------------------------------------|
| Konfuçyûs         | Damezrînerê Konfuçyûsîzmê |
| Sokrates     | bavê felsefeya rojava  |
| Nietzsche         | Felsefeya Superman, exlaq û olê kevneşopî rexne dike       |
| marx       | komûnîzm |

### Optimîzasyona Pêşandana Tabloya Mezin

Ji bo tabloyên bi nisbet mezin, rêbazên jêrîn dikarin werin bikar anîn da ku bandora xuyangê xweştir bikin:

1. Fontek piçûktir bikar bînin

   Mînakî, tabloyê bi `<div style="font-size:14px">` û `</div>` bipêçin.

   Bala xwe bidinê ku divê etîketa `div` rêza xwe dagir bike, û berî û piştî wê rêzên vala bihêle.
1. Ji bo nivîsa dirêjtir di hucreyekê de, `<br>` têxin ku rêzê bipêçin
1. Ger stûnek pir kurt were kişandin, hûn dikarin `<div style="width:100px">xxx</div>` li sernivîsê zêde bikin da ku firehiyê berfireh bikin, û hûn dikarin [`<wbr>` jî li sernivîsê](//developer.mozilla.org/docs/Web/HTML/Element/wbr) zêde bikin da ku pozîsyona veqetandina rêzê kontrol bikin.

Mînaka xwenîşandanê wiha ye:

<div style="font-size:14px">

| netewe       | <div style="width:70px;margin:auto">navê ramanwer</div> | Era | Beşdariyên sereke yên îdeolojîk                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| çîn       | Konfuçyûs                                           | 551-479 BZ   | Damezrênerê Konfûçyûsîzmê têgehên bingehîn ên wekî "xêrxwazî" û "xwestî" pêşniyar kir û bal kişand ser çandiniya exlaqî û nîzama civakî. |
| yûnanistana kevnar     | Sokrates                                       | 469-399 BZ   | Vekolîna rastiyê bi diyalog û diyalektîkê "xwe nas bike" pêşniyar dike û ramana aqilane tîne ziman.         |
| Fransa       | Voltaire                                         | 1694-1778       | Nûnerên kesayetên Ronakbîrî alîgirê rasyonelbûn, azadî û wekheviyê bûn û xurafetiya olî û desthilatdariya otorîter rexne kirin.   |
| Almanya       | Kant                                           | 1724-1804       | "Rexneya Eqlê Saf" bidin pêş<br> Bingehên ehlaq, azadî û zanînê dikole, giraniyê dide aqilê pratîk     |

</div>

Ji bo nimûneya jorîn pseudokod wiha ye:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Navê Dizî

### Koda Hundurîn

Di cîhana berfireh a zimanên bernamesaziyê de, `Rust` , `Python` , `JavaScript` û `Go` her yek cîhek bêhempa digire.

### Gelek Rêzikên Kodê

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Veqetîna Rêzê Di Nav Paragrafê De

Veqetandina rêzan di nav paragrafan de bêyî lê zêdekirina xêzên vala di navbera rêzan de dikare were bidestxistin.
Cûrahiya navbera rêzikên di nav paragrafan de ji valahiya di navbera paragrafan de piçûktir e.

bo nimûne:

> Wek mirovek mezin bijî,
> Mirin di heman demê de lehengek ruh e.
> Ez hîn jî bêriya Xiang Yu dikim,
> Dixwazin ji Jiangdong derbas bibin.
>
> Li Qingzhao çîroka trajîk a Xiang Yu bikar anî da ku li ser bêkêmasiya Xanedaniya Song destnîşan bike.
> Li hemberî dîwana împaratoriyê ji ber ku bê şer teslîm bûne nerazîbûn nîşan didin.