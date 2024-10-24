# शैली सूची

निम्न शैलीहरूमा `MarkDown` कसरी लेख्ने भनेर हेर्नको लागि [यस पृष्ठको स्रोत फाइल ब्राउज गर्न यहाँ क्लिक गर्नुहोस्](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) ।

## स्ट्राइकथ्रु & &

__ हो अंडरस्कोर __ ,~~ स्ट्राइकथ्रु~~ र **बोल्ड** प्रस्तुतीकरण पाठ।

यो निम्न रूपमा लेखिएको छ:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

`i18n.site` वेबसाइट निर्माण उपकरणको `MarkDown` पार्सरले अण्डरलाइन, स्ट्राइकथ्रु, र बोल्ड सिन्ट्याक्सलाई अप्टिमाइज गरेको छ, यसले चिन, जापान र कोरिया जस्ता भाषाहरूमा कागजातहरू लेख्न सजिलो बनाउँदै मार्कको अगाडि र पछि खाली ठाउँहरू बिना प्रभाव पार्न सक्छ। जसले विभाजकको रूपमा खाली ठाउँहरू प्रयोग गर्दैन।

विस्तारित : [किन नगेट्सको Markdown वाक्य रचना ( `**……**` ) कहिलेकाहीं प्रभावकारी हुँदैन?](//juejin.cn/post/7064565848421171213)

## उद्धरण

### एकल लाइन उद्धरण

> यो मेरो स्वभाव हो कि मेरो प्रतिभा उपयोगी हुनेछ, र म मेरो सबै पैसा खर्च पछि फर्कन्छु।
<p style="text-align:right">─ लि बाई</p>

### बहु लाइन उद्धरणहरू

> विज्ञान कथा को अर्को अद्वितीय लाभ यसको अत्यन्त व्यापक दायरा हो।
> एक "युद्ध र शान्ति", लाखौं शब्दहरु संग, केवल केहि दशकहरु को लागी एक क्षेत्र को इतिहास को वर्णन गर्दछ;
> र असिमोभको "द फाइनल आन्सर" जस्ता विज्ञान कथा उपन्यासहरूले केही हजार शब्दहरूमा मानव सहित सम्पूर्ण ब्रह्माण्डको अरबौं वर्षको इतिहासलाई स्पष्ट रूपमा वर्णन गर्दछ।
> परम्परागत साहित्यमा यस्तो समावेशीता र साहस प्राप्त गर्न असम्भव छ।
<p style="text-align:right">── लिउ सिक्सिन</p>

### टिप `> [!TIP]`

> [!TIP]
> तपाईंको राहदानी र भिसाको वैधता जाँच गर्न नबिर्सनुहोस्।

निम्नानुसार लेखिएको छ

```
> [!TIP]
> YOUR CONTENT
```

### टिप्पणी `> [!NOTE]`

> [!NOTE]
> यदि तपाईंले मलाई सन्देश पठाउनुभयो र मैले तुरुन्तै जवाफ दिनुभयो भने, यसको मतलब के हो?
> यसले म मोबाइल फोनसँग खेल्न मन पराउँछु भनेर देखाउँछ।


### चेतावनी `> [!WARN]`

> [!WARN]
> जंगली साहसिक कार्यमा जाँदा, सुरक्षित रहनु महत्त्वपूर्ण छ।
> गत हप्ता, पर्वतारोहीहरूको समूहले पहाडको आधा बाटोमा आँधीको सामना गर्यो र उनीहरूले मौसम पूर्वानुमान जाँच गर्न असफल भएकाले खाली गर्नुपर्यो।
> याद गर्नुहोस्, कुनै पनि बाहिरी गतिविधिको लागि पर्याप्त तयारी र मौसममा ध्यान चाहिन्छ।

## कार्य सूची

- [x] डिजाइन उत्पादन प्रोटोटाइप र सुविधा सूची
- [ ] टेक्नोलोजी स्ट्याक र विकास उपकरणहरू निर्धारण गर्नुहोस्
- [ ] उत्पादन विकास समयरेखा र माइलस्टोनहरू विकास गर्नुहोस्

## सूची

### आदेश गरिएको सूची

1. चलिरहेको
   1. हप्तामा तीन पटक, प्रत्येक पटक 5 किलोमिटर
   1. हाफ म्याराथन दौड्नुहोस्
1. जिम प्रशिक्षण
   1. हप्तामा दुई पटक, प्रत्येक पटक 1 घण्टा
   1. कोर मांसपेशिहरु मा फोकस

### अव्यवस्थित सूची

* सामाजिक घटनाहरू
  - उद्योग विनिमय बैठकहरूमा भाग लिनुहोस्
    + प्रविधि साझेदारी सत्र
    + उद्यमशीलता आदानप्रदान बैठक
  - साथीहरूको भेला मिलाउनुहोस्
    + बाहिरी BBQ
    + चलचित्र रात

## पाना

| विचारक       | मुख्य योगदान                           |
|--------------|------------------------------------|
| कन्फ्युसियस         | कन्फ्युसियसवाद के संस्थापक |
| सुकरात     | पश्चिमी दर्शनका पिता  |
| नित्से         | सुपरम्यान दर्शन, परम्परागत नैतिकता र धर्म को आलोचना       |
| मार्क्स       | साम्यवाद |

## कोड

### इनलाइन कोड

प्रोग्रामिङ भाषाहरूको विशाल संसारमा, `Rust` , `Python` , `JavaScript` र `Go` प्रत्येकले एक अद्वितीय स्थान ओगटेको छ।

### कोड को धेरै लाइनहरु

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```