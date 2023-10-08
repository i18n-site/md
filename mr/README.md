# I18N.SITE · बॉर्डर्सशिवाय कागदपत्रे<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, एक स्थिर साइट जनरेटर जो [133 भिन्न भाषांमध्ये](https://github.com/i18n-site/node/blob/main/lang/src/index.js) स्वयंचलित अनुवादास समर्थन देतो.

<img src="https://i-01.eu.org/2023/09/O0Tee_m.webp" alt="" />

काही लोक विचारू शकतात, आता ब्राउझरमध्ये अंतर्भूत भाषांतर कार्ये आहेत, वेबसाइटचे आंतरराष्ट्रीयीकरण करणे अनावश्यक आहे का?

मला असे म्हणायचे आहे की **संपूर्ण साइटचे आंतरराष्ट्रीयीकरण करूनच आम्ही बहु-भाषिक इन-साइट पूर्ण-मजकूर शोध आणि शोध इंजिन ऑप्टिमायझेशनला समर्थन देऊ शकतो** .

## ट्यूटोरियल

## कार्य परिचय

### मार्कडाउन फॉरमॅट ठेवा

### भाषांतर सुधारित करा

भाषांतर सुधारित केल्यानंतर, कॅशे अपडेट करण्यासाठी तुम्हाला `./i18n.sh` पुन्हा चालवावे लागेल.

### भाषांतर नोट्स

भाषांतर टिप्पण्यांमध्ये \``` नंतरची भाषा सूचित करणे आवश्यक आहे, जसे की ` ```rust` .

सध्या रस्ट, c, cpp, java, js, coffee, python आणि bash साठी टिप्पणी भाषांतरास समर्थन देते.

अधिक भाषांमधील टिप्पण्यांसाठी भाषांतर समर्थन जोडण्यासाठी [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) संपादित करा.

### प्रॉक्सी कॉन्फिगर करा

खालील पर्यावरण व्हेरिएबल्स सेट केल्याने Google Translate API कॉल्स प्रॉक्सीद्वारे जाऊ शकतात.

```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
export https_proxy=http://127.0.0.1:7890
```

### व्हेरिएबल एम्बेडिंग

```
test: 测试变量<br 0>嵌入
```

### कॅशे रिक्त करा

```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
```bash
rm -rf .i18n/.cache
```
