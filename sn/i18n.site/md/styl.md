# Style List

[Dzvanya pano kuti utarise iro faira repeji rino](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) kuti uone manyorerwo `MarkDown` mumataera anotevera.

## Akapetwa Block

|+| Chii chinonzi MarkDown?

    MarkDown mutauro wakareruka wemakapu unobvumira vashandisi kugadzira magwaro akamisikidzwa mune yakajeka mavara fomati iri nyore kuverenga nekunyora.

    Inowanzo shandiswa kunyora zvinyorwa, zvinyorwa zveblogi, e-mabhuku, maforamu ezvinyorwa, nezvimwe.

    Iine zvinotevera zvakanakira:

    1. Zviri nyore kudzidza
    1. Inoverengwa zvakanyanya
    1. Version control hushamwari

       Sezvo `MarkDown` magwaro ari muchimiro chemavara akajeka, vanogadzira mapurogiramu vanogona kuabatanidza zviri nyore mushanduro yekudzora masisitimu ( `git` ).

       Izvi zvinoita shanduko yekutevera uye kushandira pamwe kuve nyore, kunyanya mukuvandudza kwechikwata.

|-| Chii chinonzi I18N?

    "I18N" ndiyo chidimbu che "Internationalization".

    Sezvo izwi rekuti "Internationalization" riine mavara gumi nemasere pakati pe"I" na "N", "I18N" rinoshandiswa kurerutsa kumiririra.

    Mumashoko evaraidzo, zvinoreva kutsigira mitauro yakawanda.


Folding block is an extended syntax ye `i18n.site` kusvika `MarkDown` , yakanyorwa sezvizvi :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

pamwe `|+| `或`|-| Mutsetse unotanga ne `uchagadzira chivharo chekupeta, uye zviri mukati mebhuroko rekupeta ndiyo mitsara inotevera ine mwero wakafanana weiyo indentation (ndima dzakapatsanurwa nemitsara isina chinhu).

Pass`|-| `标记的折叠块默认展开，`|+| `Tagged mabhuroko akadonha anopunzika nekusarudzika.

## & &

__ ndiyo Underscore __ ,~~ strikethrough~~ uye mashoko **akajeka** emharidzo.

Zvakanyorwa sezvinotevera:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Iyo `MarkDown` parser ye0 webhusaiti yekuvaka chishandiso yakakwenenzvera underline, strikethrough, uye yakashinga syntax Inogona kushanda pasina nzvimbo pamberi uye mushure mechiratidzo, zvichiita `i18n.site` zvive nyore kunyora magwaro mumitauro yakaita seChina, Japan, neKorea. usashandise nzvimbo sevanoparadzanisa.

Kuwedzera kuverenga : [Nei Nuggets ' Markdown syntax ( `**……**` ) dzimwe nguva isingaite?](//juejin.cn/post/7064565848421171213)

## Quote

### Single Line Quote

> Chimiro changu kuti zvipo zvangu zvichabatsira, uye ndichadzoka mari yangu yose yapera.
<p style="text-align:right">─ Li Bai</p>

### Multiple Line Quotes

> Imwe mukana wakasarudzika wesainzi ngano kuwanda kwayo kwakatambanuka zvakanyanya.
> "Hondo neRugare", ine miriyoni yemashoko, inongotsanangura nhoroondo yedunhu kwemakumi emakore akati wandei;
> Uye mabhuku enganonyorwa esainzi akadai saAsimov “Mhinduro Yokupedzisira” anotsanangura zvakajeka mabhiriyoni amakore enhau yechisiko chose, kubatanidza vanhu, muzviuru zvishomanene zvamashoko.
> Kubatanidzwa kwakadaro uye ushingi hazvibviri kuwana mumabhuku echinyakare.
<p style="text-align:right">── Liu Cixin</p>

### `> [!TIP]`

> [!TIP]
> Rangarira kutarisa chokwadi chepasipoti yako uye vhiza magwaro akapera nguva haigone kupinda kana kubuda munyika.

Zvakanyorwa sezvinotevera

```
> [!TIP]
> YOUR CONTENT
```

### Remark `> [!NOTE]`

> [!NOTE]
> Kana mukanditumira meseji ndikapindura ipapo ipapo, zvinorevei?
> Izvi zvinoratidza kuti ndinoda chaizvo kutamba nenharembozha.


### Yambiro `> [!WARN]`

> [!WARN]
> Paunenge uchienda kune imwe nzvimbo yemusango, zvakakosha kuti ugare wakachengeteka. Heano mamwe matipi akakosha ekuchengetedza:
>
> - **Tarisa mamiriro ekunze** : Svondo rapfuura, boka revanokwira vakasangana nedutu pakati pegomo nekuti havana kutarisa mamiriro ekunze uye vakatofanira kubuda nekuchimbidza.
> - **Takura magiya anodiwa** : Ita shuwa kuti waunza chikafu chakakwana, mvura uye zvekutanga zvekubatsira.
> - **Nzwisisa iyo terrain** : Zvijairirane nenzvimbo uye nzira dzenzvimbo yekushanya pachine nguva kuti urege kurasika.
> - **Gara Wakabatana** : Ramba wakabatana kune yekunze uye ona kuti munhu wese anogona kudzoka zvakachengeteka.
>
> Yeuka, kuchengeteka nguva dzose kunouya pakutanga!

## Zvekuita List

- [x] Dhizaina chigadzirwa prototype uye chinyorwa chinyorwa
- [ ] Sarudza tekinoroji stack uye maturusi ekuvandudza
- [ ] Gadzira nguva yekugadzirwa kwechigadzirwa uye zviitiko zvakakosha

## List

### Akaodha List

1. kumhanya
   1. Katatu pavhiki, makiromita mashanu nguva imwe neimwe
   1. Mhanyai hafu marathon
1. kurovedza muviri
   1. Kaviri pavhiki, 1 awa nguva imwe neimwe
   1. Tarisa pamhasuru dzepakati

### Unordered List

* zviitiko zvevanhu
  - Tora chikamu mumisangano yekuchinjana kwemaindasitiri
    + Tekinoroji yekugovana chikamu
    + Musangano Wekuchinjana Kwemabhizinesi
  - Ronga kuungana kweshamwari
    + Kunze BBQ
    + movie usiku

## Sheet

| thinker       | Mipiro mikuru                           |
|--------------|------------------------------------|
| Confucius         | Muvambi weConfucianism |
| Socrates     | baba veWestern philosophy  |
| Nietzsche         | Superman philosophy, kutsoropodza tsika dzechinyakare uye chitendero       |
| marx       | communism |

### Hombe Tafura Kuratidza Optimization

Kune matafura akakura, nzira dzinotevera dzinogona kushandiswa kukwenenzvera mhedzisiro yekuratidzira:

1. Shandisa mavara madiki

   Semuenzaniso, peta tafura `<div style="font-size:14px">` uye `</div>` .

   Ziva kuti iyo `div` tag inofanirwa kutora mutsara wayo, uye kusiya mitsetse isina chinhu pamberi uye shure kwayo.
1. Kuti uwane mavara akareba musero, isa `<br>` kupeta mutsara
1. Kana koramu yakadzvanywa yakanyanyisa kupfupika, unogona kuwedzera `<div style="width:100px">xxx</div>` kumusoro kuti uwedzere hupamhi, uye iwe unogona zvakare kuwedzera [`<wbr>` kune musoro](//developer.mozilla.org/docs/Web/HTML/Element/wbr) kudzora mutsara wekutyora chinzvimbo.

Muenzaniso wemuenzaniso ndewokuti:

<div style="font-size:14px">

| rudzi       | <div style="width:70px;margin:auto">zita remunhu anofunga</div> | Era | Main ideological mipiro                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| China       | Confucius                                           | 551-479 BC   | Muvambi wechiConfucius akakarakadza mifungo mikuru yakadai so“runako” uye “kufanira” uye akasimbisa kusakurira tsika nenhevedzano yenzanga. |
| Girisi yekare     | Socrates                                       | 469-399 BC   | Kuongorora chokwadi kuburikidza nenhaurirano uye dialectics zvinokurudzira "kuzviziva iwe" uye kunosimbisa kufunga kwakanaka.         |
| Furanzi       | Voltaire                                         | 1694-1778       | Vamiririri veChiedza vaitsigira pfungwa, rusununguko uye kuenzana, uye vaishora kutenda mashura kwechitendero uye kutonga kwechiremera.   |
| Jerimani       | Kant                                           | 1724-1804       | Isa mberi "Kutsoropodza Kwechikonzero Chakachena"<br> Inoongorora hwaro hwetsika, rusununguko, uye ruzivo, ichisimbisa chikonzero chinoshanda     |

</div>

Iyo pseudocode yemuenzaniso wepamusoro ndeiyi inotevera:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Code

### Inline Code

Munyika yakakura yemitauro yekuronga, `Rust` , `Python` , `JavaScript` uye `Go` imwe neimwe inotora chinzvimbo chakasiyana.

### Mitsara Yakawanda Yekodhi

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Kutyora Mutsetse Mukati Mendima

Kudimburwa kwemitsara mukati mendima kunogona kuwanikwa pasina kuwedzera mitsetse isina chinhu pakati pemitsetse.
Nharaunda pakati pekudimbura mitsara mukati mendima idiki pane kupatsanurwa pakati pendima.

semuyenzaniso:

> Rarama semunhu mukuru,
> Rufu zvakare igamba remweya.
> Ndichiri kusuwa Xiang Yu,
> Kuzeza kuyambuka Jiangdong.
>
> Li Qingzhao akashandisa nyaya ya Xiang Yu inosuruvarisa kuratidza kusagona kweRwiyo Rwenziyo.
> Kuratidza kusagutsikana nedare ramambo nekukanda mapfumo pasi pasina kurwa.