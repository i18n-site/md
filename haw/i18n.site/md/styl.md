# Papa Papa Inoa

[Kaomi ma aneʻi no ka nānā ʻana i ka waihona kumu o kēia ʻaoʻao](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/zh/i18n.site/md/styl.md) e ʻike i ke kākau ʻana i `MarkDown` ma kēia mau ʻano.

## Poloka Pelu

|+| He aha ka MarkDown?

    ʻO MarkDown kahi ʻōlelo markup māmā e hiki ai i nā mea hoʻohana ke hana i nā palapala i hoʻohālikelike ʻia i kahi ʻano kikokikona maʻalahi e maʻalahi e heluhelu a kākau.

    Hoʻohana mau ʻia e kākau i nā palapala, nā ʻatikala blog, nā e-puke, nā pou forum, etc.

    Loaʻa iā ia nā pono penei:

    1. Maʻalahi e aʻo
    1. Hiki ke heluhelu ʻia
    1. Aloha mana mana

       No ka mea aia nā palapala `MarkDown` ma ka ʻano kikokikona maʻalahi, hiki i nā mea polokalamu ke hoʻokomo maʻalahi iā lākou i loko o nā ʻōnaehana mana mana (e like me `git` ).

       ʻOi aku ka maʻalahi o ka hoʻololi ʻana a me ka hana pū ʻana, ʻoi aku ka maʻalahi o ka hoʻomohala ʻana i ka hui.

|-| He aha ka I18N?

    ʻO "I18N" ka pōkole o "Internationalization".

    Ma muli o ka huaʻōlelo "Internationalization" he 18 mau leka ma waena o "I" a me "N", "I18N" i hoʻohana ʻia e maʻalahi i ka hōʻike.

    Ma ka ʻōlelo a ka poʻe kamaʻāina, ʻo ia hoʻi ke kākoʻo ʻana i nā ʻōlelo he nui.


ʻO ka poloka peʻa he huaʻōlelo lōʻihi o `i18n.site` a `MarkDown` , i kākau ʻia penei :

```
|+| TITLE
    MARKDOWN CONTENT
    YOUR CAN WRITE MULTI LINE CONTENT
```

me `|+| `或`|-| ʻO ka laina e hoʻomaka ana me ka ' e hoʻohua i kahi poloka pelu, a ʻo ka ʻike o ka poloka pelu ʻo ia nā laina hope me ka pae like o ka indentation (ua hoʻokaʻawale ʻia nā paukū e nā laina hakahaka).

Holoʻ|-| `标记的折叠块默认展开，`|+| ʻO nā poloka i hāʻule ʻia i hāʻule ʻia e ka paʻamau.

## Kaha Lalo & Strikethrough &

__ kēia ka Underscore __ ,~~ hahau~~ a me ka kikokikona **hoike wiwo ole** .

Ua kakauia penei:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

ʻO ka `MarkDown` parser o ka mea hana hale pūnaewele `i18n.site` i hoʻomaikaʻi i ka underline, strikethrough, a me ka syntax wiwo ʻole hiki ke hana me ka ʻole o nā hakahaka ma mua a ma hope o ka māka, e maʻalahi ke kākau ʻana i nā palapala ma nā ʻōlelo e like me Kina, Iapana, a me Korea. mai hoʻohana i nā hakahaka ma ke ʻano he mea hoʻokaʻawale.

[Markdown `**……**`](//juejin.cn/post/7064565848421171213) :

## Kuhikuhi

### ʻōlelo Hoʻokahi Laina

> ʻO koʻu ʻano e pono ai kaʻu mau talena, a e hoʻi mai au ma hope o ka pau ʻana o kaʻu kālā.
<p style="text-align:right">─ Li Bai</p>

### Nā Huaʻōlelo Laina Lehulehu

> ʻO kekahi pōmaikaʻi ʻē aʻe o ka moʻolelo ʻepekema ʻo ia kona ākea ākea.
> ʻO "War and Peace", me ka miliona mau huaʻōlelo, e wehewehe wale ana i ka mōʻaukala o kahi ʻāina no nā makahiki he nui;
> A ʻo nā moʻolelo moʻokalaleo ʻepekema e like me ka "The Final Answer" a Asimov e wehewehe pono i nā piliona makahiki o ka mōʻaukala o ke ao holoʻokoʻa, me nā kānaka, i loko o kahi mau tausani huaʻōlelo.
> ʻAʻole hiki ke hoʻokō ʻia kēlā ʻano hoʻohui a me ka wiwo ʻole ma nā palapala kuʻuna.
<p style="text-align:right">── Liu Cixin</p>

### Manaʻo Kōkua `> [!TIP]`

> [!TIP]
> E hoʻomanaʻo e nānā i ka pono o kāu passport a ʻaʻole hiki i nā palapala hoʻopau ke komo a haʻalele i ka ʻāina.

Ua kakauia penei

```
> [!TIP]
> YOUR CONTENT
```

### ʻŌlelo `> [!NOTE]`

> [!NOTE]
> Inā hoʻouna ʻoe iaʻu i leka a pane koke wau, he aha ka manaʻo?
> Hōʻike kēia i koʻu makemake nui i ka pāʻani me nā kelepona paʻalima.


### 'Ōlelo Aʻo `> [!WARN]`

> [!WARN]
> Ke hele nei i kahi huakaʻi hihiu, he mea nui e noho palekana. Eia kekahi mau ʻōlelo aʻoaʻo palekana.
>
> - **E nānā i ka wānana ʻana i ke aniau** : I ka pule i hala aku nei, ua hālāwai kekahi pūʻulu piʻi i ka ʻino ma ka hapalua o ke kuahiwi no ka mea ʻaʻole lākou i nānā i ka wanana a pono e haʻalele koke.
> - **E lawe i nā mea e pono ai** : E hōʻoia ʻoe e lawe mai i ka meaʻai, ka wai a me nā lako kōkua mua.
> - **E hoʻomaopopo i ka ʻāina** : E hoʻomaʻamaʻa iā ʻoe iho i ka ʻāina a me nā ala o ka wahi huakaʻi ma mua e pale aku ai i ka nalowale.
> - **E hoʻopaʻa pili** : E hoʻomau i ka pili ʻana i ka honua o waho a hōʻoia i hiki i nā mea āpau ke hoʻi maluhia.
>
> E hoʻomanaʻo, hele mua ka palekana!

## Papa Inoa Hana

- [x] Hoʻolālā i ka prototype huahana a me ka papa inoa hiʻohiʻona
- [ ] E hoʻoholo i ka ʻenehana a me nā mea hana hoʻomohala
- [ ] E hoʻomohala i nā manawa hoʻomohala huahana a me nā milestones

## Papa Inoa

### Papa Inoa Kauoha

1. e holo ana
   1. ʻEkolu manawa o ka pule, 5 mau kilomita i kēlā me kēia manawa
   1. Holo i ka hapalua marathon
1. aʻo haʻuki
   1. ʻElua manawa o ka pule, 1 hola i kēlā me kēia manawa
   1. E nānā i nā ʻiʻo kumu

### Papa Inoa ʻole

* nā hanana kaiaulu
  - E komo i nā hālāwai hoʻololi ʻoihana
    + Kaʻana like ʻenehana
    + Halawai Kūkaʻi ʻoihana
  - E hoʻonohonoho i kahi hui o nā hoaaloha
    + BBQ waho
    + pō kiʻiʻoniʻoni

## Pepa

| mea noonoo       | Nā hāʻawi nui                           |
|--------------|------------------------------------|
| Confucius         | Ka mea nāna i hoʻokumu i ka Confucianism |
| Socrates     | makua kāne o ke komohana philosophy  |
| Nietzsche         | ʻO ka manaʻo noʻonoʻo Superman, e hoʻohewa ana i ka moʻomeheu kuʻuna a me ka hoʻomana       |
| marx       | komunisme |

### ʻO Ka Hoʻonui ʻana I Ka Hōʻike Papa Nui

No nā papa ʻaina nui, hiki ke hoʻohana ʻia nā ʻano hana e hoʻonui ai i ka hopena hōʻike:

1. E hoʻohana i ka font liʻiliʻi

   No ka laʻana, e kāʻei i ka pākaukau me `<div style="font-size:14px">` a me `</div>` .

   E hoʻomanaʻo pono e noho ka tag `div` i kāna laina ponoʻī, a waiho i nā laina hakahaka ma mua a ma hope.
1. No ke kikokikona lōʻihi i loko o ke kelepona, e hoʻokomo i `<br>` e ʻōwili i ka laina
1. Inā pōkole loa ke kolamu, hiki iā ʻoe ke hoʻohui i `<div style="width:100px">xxx</div>` i ke poʻo e hoʻonui i ka laulā, a hiki iā ʻoe ke hoʻohui i [`<wbr>` i ke poʻo](//developer.mozilla.org/docs/Web/HTML/Element/wbr) e hoʻomalu i ke kūlana hoʻomaha laina.

ʻO kahi laʻana hōʻikeʻike penei:

<div style="font-size:14px">

| lāhui       | <div style="width:70px;margin:auto">inoa noonoo</div> | Era | Nā hāʻawi manaʻo nui                                                       |
|------------|------------------------------------------------|-----------------|--------------------------------------------------------------------|
| Kina       | Confucius                                           | 551-479 BC   | Ua hoʻokumu ka mea nāna i hoʻokumu i ka Confucianism i nā manaʻo koʻikoʻi e like me "benevolence" a me "propriety" a hoʻoikaika i ka hoʻoulu pono a me ka hoʻonohonoho pilikanaka. |
| Helene kahiko     | Socrates                                       | 469-399 BC   | ʻO ka ʻimi ʻana i ka ʻoiaʻiʻo ma o ke kamaʻilio ʻana a me ka dialectics e manaʻo nei e "ʻike iā ʻoe iho" a hoʻoikaika i ka noʻonoʻo noʻonoʻo.         |
| Palani       | Voltaire                                         | 1694-1778       | Ua kākoʻo nā lunamakaʻāinana o ka Enlightenment i ka noʻonoʻo, ke kūʻokoʻa a me ke kaulike, a ua hoʻohewa i ka hoʻomana hoʻomana a me ka mana aupuni.   |
| Kelemānia       | Kant                                           | 1724-1804       | E waiho i mua i ka "Critique of Pure Reason"<br> E ʻimi i nā kumu o ka pono, ke kūʻokoʻa, a me ka ʻike, e hoʻoikaika ana i ke kumu kūpono     |

</div>

ʻO ka pseudocode no ka laʻana i luna nei penei:

```md

<div style="font-size:14px">

| xx | <div style="width:70px;margin:auto">xx<wbr>xx</div> | xx | xx |
|----|----|-----------|----|
| xx | xx | xx<br>xxx | xx |

</div>

```

## Code

### Code Inline

Ma ka honua ākea o nā ʻōlelo hoʻolālā, `Rust` , `Python` , `JavaScript` a me `Go` e noho i kahi kūlana kūʻokoʻa.

### Laina Helu He Nui

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```

## Hoʻokaʻawale Laina I Loko O Ka Paukū

Hiki ke hoʻokō ʻia nā haki laina i loko o nā paukū me ka hoʻohui ʻole ʻana i nā laina hakahaka ma waena o nā laina.
ʻOi aku ka liʻiliʻi o ke kaawale ma waena o nā kaha laina i loko o nā paukū.

ʻo kahi laʻana:

> E ola me he kanaka nui,
> He meʻe ʻuhane hoʻi ka make.
> Ke minamina nei au iā Xiang Yu,
> ʻAʻole makemake e hele i Jiangdong.
>
> Ua hoʻohana ʻo Li Qingzhao i ka moʻolelo pōʻino o Xiang Yu e hōʻike i ka hemahema o ka Song Dynasty.
> E hōʻike ana i ka hauʻoli i ka ʻaha emepera no ka hāʻawi ʻana me ka hakakā ʻole.