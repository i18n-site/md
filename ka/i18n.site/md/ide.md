# Რედაქტორის Რეკომენდაცია

ყველას აქვს თავისი საყვარელი რედაქტორი აქ ჩვენ ვიზიარებთ ჩვენს `Markdown` საუკეთესო პრაქტიკას.

ჩვენ [vscode](https://code.visualstudio.com/) `MarkDown` დასაწერად და წერის დროს დაყენებული დანამატის [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) წინასწარი გადახედვისთვის.

როგორც ქვემოთ ნაჩვენებია, დააწკაპუნეთ მაუსის მარჯვენა ღილაკით რედაქტორში გადახედვის ფანჯრის გასახსნელად.

![](https://p.3ti.site/1720775216.avif)
![](https://p.3ti.site/1720775043.avif)

შეიყვანეთ `code xxx.md` ბრძანების სტრიქონში, რათა დარეკოთ `vscode` ფაილი `Markdown` -ის გასახსნელად.

გამოიყენეთ [PicList](https://github.com/Kuingsmile/PicList) სურათების ასატვირთად, გახსოვდეთ ატვირთვის მალსახმობის ღილაკის დაყენება და ერთი დაწკაპუნებით ატვირთეთ ეკრანის სურათი.

მას მხარს უჭერს ფაილის სახელის ავტომატურად კოპირება `Markdown` ფორმატში ატვირთვის შემდეგ, რაც მნიშვნელოვნად აუმჯობესებს ეფექტურობას.

ამავდროულად, შეგიძლიათ მიმართოთ შემდეგ კონფიგურაციას, შეცვალოთ ფაილი და დააკონფიგურიროთ ატვირთული ფაილის ავტომატურად შეკუმშვა `avif` მდე, სურათის ზომის შესამცირებლად.

```json
"buildIn": {
  "compress": {
    "quality": 99,
    "isConvert": true,
    "convertFormat": "avif",
    "isReSize": false,
    "reSizeWidth": 0,
    "reSizeHeight": 0,
    "skipReSizeOfSmallImg": false,
    "isReSizeByPercent": false,
    "reSizePercent": 50,
    "isRotate": false,
    "rotateDegree": 0,
    "isRemoveExif": true,
    "isFlip": false,
    "isFlop": false,
    "formatConvertObj": {}
  },
  … …
```