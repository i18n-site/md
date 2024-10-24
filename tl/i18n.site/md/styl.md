# Listahan Ng Istilo

[Mag-click dito upang i-browse ang source file ng pahinang ito](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) upang makita kung paano magsulat `MarkDown` sa mga sumusunod na istilo.

## Salungguhitan & Strikethrough &

__ ay __~~ strikethrough~~ at **naka-bold** na teksto ng presentasyon.

Ito ay nakasulat tulad ng sumusunod:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Na-optimize ng `MarkDown` parser ng tool sa pagbuo ng `i18n.site` website ang underline, strikethrough, at bold na syntax. Maaari itong magkabisa nang walang mga puwang bago at pagkatapos ng marka, na ginagawang mas madali ang pagsulat ng mga dokumento sa mga wika tulad ng China, Japan, at Korea. na hindi gumagamit ng mga puwang bilang mga separator.

Pinahabang pagbabasa : [Bakit minsan hindi nagkakabisa ang Markdown syntax ( `**……**` ) ng Nuggets?](//juejin.cn/post/7064565848421171213)

## Quote

### Isang Linyang Quote

> Likas sa akin na ang aking mga talento ay magiging kapaki-pakinabang, at babalik ako pagkatapos ng lahat ng aking pera ay magastos.
<p style="text-align:right">─ Li Bai</p>

### Mga Quote Ng Maramihang Linya

> Ang isa pang natatanging bentahe ng science fiction ay ang napakalawak nitong saklaw.
> Ang isang "Digmaan at Kapayapaan", na may isang milyong salita, ay naglalarawan lamang ng kasaysayan ng isang rehiyon sa loob ng ilang dekada;
> At ang mga nobelang science fiction tulad ng "The Final Answer" ni Asimov ay malinaw na naglalarawan sa bilyun-bilyong taon ng kasaysayan ng buong sansinukob, kabilang ang mga tao, sa ilang libong salita lamang.
> Ang ganitong pagiging inklusibo at katapangan ay imposibleng makamit sa tradisyonal na panitikan.
<p style="text-align:right">── Liu Cixin</p>

### Tip `> [!TIP]`

> [!TIP]
> Tandaan na suriin ang bisa ng iyong pasaporte at visa ay hindi maaaring pumasok o lumabas sa bansa.

Ito ay nakasulat tulad ng sumusunod

```
> [!TIP]
> YOUR CONTENT
```

### Puna `> [!NOTE]`

> [!NOTE]
> Kung padadalhan mo ako ng mensahe at agad akong tumugon, ano ang ibig sabihin nito?
> Ipinakikita nito na talagang mahilig akong maglaro ng mga mobile phone.


### Babala `> [!WARN]`

> [!WARN]
> Kapag nagpapatuloy sa isang ligaw na pakikipagsapalaran, mahalagang manatiling ligtas.
> Noong nakaraang linggo, isang grupo ng mga umaakyat ang nakasagupa ng bagyo sa kalagitnaan ng bundok at kinailangang lumikas dahil hindi nila nasuri ang taya ng panahon.
> Tandaan, ang anumang aktibidad sa labas ay nangangailangan ng sapat na paghahanda at atensyon sa lagay ng panahon.

## Listahan Ng Gagawin

- [x] Idisenyo ang prototype ng produkto at listahan ng tampok
- [ ] Tukuyin ang stack ng teknolohiya at mga tool sa pag-unlad
- [ ] Bumuo ng mga timeline at milestone sa pagbuo ng produkto

## Listahan

### Iniutos Na Listahan

1. tumatakbo
   1. Tatlong beses sa isang linggo, 5 kilometro bawat oras
   1. Magpatakbo ng kalahating marathon
1. pagsasanay sa gym
   1. Dalawang beses sa isang linggo, 1 oras bawat oras
   1. Tumutok sa mga pangunahing kalamnan

### Hindi Ayos Na Listahan

* mga kaganapang panlipunan
  - Makilahok sa mga pagpupulong ng palitan ng industriya
    + Sesyon ng pagbabahagi ng teknolohiya
    + Pagpupulong ng pagpapalitan ng entrepreneurship
  - Ayusin ang isang pagtitipon ng mga kaibigan
    + Panlabas na BBQ
    + gabi ng pelikula

## Sheet

| palaisip       | Pangunahing kontribusyon                           |
|--------------|------------------------------------|
| Confucius         | Tagapagtatag ng Confucianism |
| Socrates     | ama ng pilosopiyang kanluranin  |
| Nietzsche         | Pilosopiya ng Superman, pinupuna ang tradisyonal na moralidad at relihiyon       |
| si marx       | komunismo |

## Code

### Inline Na Code

Sa malawak na mundo ng mga programming language, `Rust` , `Python` , `JavaScript` at `Go` ang bawat isa ay sumasakop sa isang natatanging posisyon.

### Maraming Linya Ng Code

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```