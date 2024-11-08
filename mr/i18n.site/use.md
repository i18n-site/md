# & स्थापित करा

## स्थापित करा

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## कॉन्फिगरेशन टोकन

`i18n.site` मध्ये अंगभूत `i18` भाषांतर साधन आहे कृपया [प्रवेश टोकन कॉन्फिगर करण्यासाठी `i18` दस्तऐवजाचा संदर्भ घेण्यासाठी येथे क्लिक करा](/i18/use) .

## डेमो प्रकल्प

`i18n.site` कसे वापरायचे ते शिकण्यासाठी डेमो प्रोजेक्टपासून सुरुवात करूया.

आम्ही प्रथम डेमो रेपॉजिटरी क्लोन करतो आणि खालीलप्रमाणे कमांड रन करतो:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

मुख्य भूप्रदेश चीनमधील वापरकर्ते हे करू शकतात:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`docker` सह स्थानिक पूर्वावलोकन सुलभ करण्यासाठी `demo.i18n.site` कोड बेस क्लोनचे निर्देशिका नाव `md` असणे आवश्यक आहे.

### भाषांतर करा

प्रथम, `md` निर्देशिका प्रविष्ट करा आणि `i18n.site` चालवा, जे `en` ते `zh` भाषांतर करेल.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

चालवल्यानंतर, भाषांतर `git add . ` कॅशे फायली तयार केल्या जातील `md`

### स्थानिक पूर्वावलोकन

`docker` स्थापित करा आणि सुरू करा ( `MAC` वापरकर्ता `docker` साठी रनटाइम म्हणून [orbstack](https://orbstack.dev) शिफारस करतो).

नंतर, `docker` डिरेक्टरी एंटर करा आणि `./up.sh` चालवा, आणि नंतर स्थानिकपणे पूर्वावलोकन करण्यासाठी भेट [https://127.0.0.1](https://127.0.0.1) .

<img src="//p.3ti.site/1721104238.avif" style="width:360px">