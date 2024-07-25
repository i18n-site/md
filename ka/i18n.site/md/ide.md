# Რედაქტორის Რეკომენდაცია

ყველას აქვს თავისი საყვარელი რედაქტორი, მოდით გავუზიაროთ აქ ჩვენი საუკეთესო პრაქტიკა `Markdown`

ჩვენ [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) `MarkDown` [vscode](https://code.visualstudio.com/)

როგორც ქვემოთ ნაჩვენებია, დააწკაპუნეთ მაუსის მარჯვენა ღილაკით რედაქტორში გადახედვის ფანჯრის გასახსნელად.

<img alt="" src="https://p.3ti.site/1720775216.avif">
<img alt="" src="https://p.3ti.site/1720775043.avif">

`code xxx.md` ბრძანების სტრიქონზე, რათა გამოიძახოთ `vscode` open `Markdown` ფაილი.

გამოიყენეთ [PicList](https://github.com/Kuingsmile/PicList) სურათების ასატვირთად, გახსოვდეთ ატვირთვის მალსახმობის ღილაკის დაყენება და ერთი დაწკაპუნებით ატვირთეთ ეკრანის სურათი.

იგი მხარს უჭერს ფაილის `Markdown` ავტომატურად კოპირებას ატვირთვის შემდეგ, რაც მნიშვნელოვნად აუმჯობესებს ეფექტურობას.

ამავდროულად, შეგიძლიათ მიმართოთ შემდეგ კონფიგურაციას, შეცვალოთ ფაილი და დააკონფიგურიროთ ატვირთული ფაილი ავტომატურად `avif` სურათის ზომის შესამცირებლად.

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
