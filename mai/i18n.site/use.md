# पूर्वावलोकन स्थापित करू &

## लगानाइ

```sh
bash <(curl -sS https://i.i18n.site) i18n.site
```

## विन्यास टोकन

`i18n.site` मे एकटा अंतर्निहित `i18` अनुवाद उपकरण अछि, कृपया [एतय क्लिक करू जे `i18` दस्तावेज क संदर्भ द' क' एक्सेस टोकन क' कॉन्फ़िगर करू](/i18/use) .

## डेमो परियोजना

`i18n.site` उपयोग करब सीखबाक लेल एकटा डेमो प्रोजेक्ट स शुरू करी।

हम पहिने डेमो रिपोजिटरी के क्लोन करैत छी आ कमांड के निम्नलिखित तरीका स चलाबैत छी:

```
git clone https://github.com/i18n-site/demo.i18n.site.git md
git clone https://github.com/i18n-site/demo.i18n.site.docker.git docker
```

मुख्य भूमि चीन मे उपयोगकर्ता क सकैत अछि:

```
git clone https://atomgit.com/i18n/demo.i18n.site.git md
git clone https://atomgit.com/i18n/demo.i18n.site.docker.git docker
```

`demo.i18n.site` कोड बेस क्लोन कें डायरेक्टरी नाम `md` होबाक चाही `docker` कें साथ स्थानीय पूर्वावलोकन कें सुविधा कें लेल.

### भाषांतर केनाइ

पहिने `md` डाइरेक्टरी दर्ज करू आओर `i18n.site` चलाउ, जे `en` कए `zh` मे अनुवाद करत.

<img src="https://p.3ti.site/1721114619.avif" style="width:350px">

चललाक बाद अनुवाद आओर कैश फाइल उत्पन्न कएल जाएत कृपया ओकरा `md` `git add . ` मे भंडार मे जोड़ब मोन राखू.

### स्थानीय पूर्वावलोकन

`docker` इंस्टॉल करू आओर शुरू करू ( `MAC` उपयोगकर्ता `docker` क लेल रनटाइम क रूप मे [orbstack](https://orbstack.dev) क उपयोग करबाक अनुशंसा करैत अछि ).

तखन, `docker` निर्देशिका दर्ज करू आओर `./up.sh` चलाउ, आओर फेर स्थानीय रूप सँ पूर्वावलोकन करबाक लेल [https://127.0.0.1](https://127.0.0.1)

<img src="//p.3ti.site/1721104238.avif" style="width:360px">