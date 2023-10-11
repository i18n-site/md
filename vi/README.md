<h1 style="justify-content:space-between">3Ti.Site · Suy nghĩ không biên giới<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, một trình tạo trang tĩnh, có thể tự động dịch Markdown [sang hơn một trăm ngôn ngữ khác nhau](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<pre class="langli" style="display:flex;flex-wrap:wrap;background:transparent;border:1px solid #eee;font-size:15px;box-shadow:0 0 3px inset #eee;padding:15px 8px 8px 15px;justify-content:space-between;"><style>pre.langli i{font-weight:300;font-family:htm;margin-right:8px;margin-bottom:8px;font-style:normal;color:#444;border-bottom:1px dashed #ccc;}</style><i>English</i><i> 简体中文 </i><i>español</i><i>français</i><i>Deutsch</i><i> 日本語 </i><i>italiano</i><i>한국어</i><i>русский</i><i>português</i><i>shqip</i><i>‫العربية‬</i><i>አማርኛ</i><i>অসমীয়া</i><i>azərbaycan</i><i>Eʋegbe</i><i>Aymar aru</i><i>Gaeilge</i><i>eesti</i><i>ଓଡ଼ିଆ</i><i>Oromoo</i><i>euskara</i><i>беларуская</i><i>bamanakan</i><i>български</i><i>íslenska</i><i>polski</i><i>bosanski</i><i>‫فارسی‬</i><i>भोजपुरी</i><i>Afrikaans</i><i>татар</i><i>dansk</i><i>‫ދިވެހިބަސް‬</i><i>ትግርኛ</i><i>डोगरी</i><i>संस्कृत भाषा</i><i>Filipino</i><i>suomi</i><i>Frysk</i><i>ខ្មែរ</i><i>ქართული</i><i>गोंयची कोंकणी</i><i>ગુજરાતી</i><i>avañe’ẽ</i><i>қазақ тілі</i><i>Kreyòl ayisyen</i><i>Hausa</i><i>Nederlands</i><i>кыргызча</i><i>galego</i><i>català</i><i>čeština</i><i>ಕನ್ನಡ</i><i>corsu</i><i>hrvatski</i><i>Runasimi</i><i>kurdî</i><i>‫کوردیی ناوەندی‬</i><i>Latina</i><i>latviešu</i><i>ລາວ</i><i>lietuvių</i><i>lingála</i><i>Luganda</i><i>Lëtzebuergesch</i><i>Kinyarwanda</i><i>română</i><i>Malagasy</i><i>Malti</i><i>मराठी</i><i>മലയാളം</i><i>Melayu</i><i>македонски</i><i>मैथिली</i><i>Māori</i><i>মৈতৈলোন্</i><i>монгол</i><i>বাংলা</i><i>Mizo ṭawng</i><i>မြန်မာ</i><i>𞄀𞄄𞄰𞄩𞄍𞄜𞄰</i><i>IsiXhosa</i><i>isiZulu</i><i>नेपाली</i><i>norsk</i><i>ਪੰਜਾਬੀ</i><i>‫پښتو‬</i><i>Nyanja</i><i>Akan</i><i>svenska</i><i>Gagana fa'a Sāmoa</i><i>српски</i><i>Sesotho sa Leboa</i><i>Sesotho</i><i>සිංහල</i><i>esperanto</i><i>slovenčina</i><i>slovenščina</i><i>Kiswahili</i><i>Gàidhlig</i><i>Cebuano</i><i>Soomaali</i><i>тоҷикӣ</i><i>తెలుగు</i><i>தமிழ்</i><i>ไทย</i><i>Türkçe</i><i>türkmen dili</i><i>Cymraeg</i><i>‫ئۇيغۇرچە‬</i><i>‫اردو‬</i><i>українська</i><i>o‘zbek</i><i>‫עברית‬</i><i>Ελληνικά</i><i>ʻŌlelo Hawaiʻi</i><i>‫سنڌي‬</i><i>magyar</i><i>chiShona</i><i>հայերեն</i><i>Igbo</i><i>Pagsasao Ilokano</i><i>‫ייִדיש‬</i><i>हिन्दी</i><i>Basa Sunda</i><i>Indonesia</i><i>Jawa</i><i>Èdè Yorùbá</i><i>Tiếng Việt</i><i> 正體中文 </i><i>Xitsonga</i></pre>

Một số người có thể hỏi, vì tất cả các trình duyệt đều có chức năng dịch thuật nên có cần thiết phải quốc tế hóa trang web không?

Tôi muốn nói rằng **chỉ những trang web tạo bản dịch tĩnh mới có thể hỗ trợ tìm kiếm toàn văn bản đa ngôn ngữ tại chỗ và tối ưu hóa công cụ tìm kiếm** .

## Giới Thiệu

Kinh thánh · Sáng thế ký :

> Vào thời cổ đại, khi các ngôn ngữ còn là một, loài người đã xây dựng một tòa tháp cao tới tận trời, cánh cổng dẫn đến lãnh địa của Chúa, tuyên bố sức mạnh của loài người.
>
> Chúa tuyên bố, "Con người đoàn kết thành một bộ tộc, có chung một ngôn ngữ, và tòa tháp này chỉ là lời mở đầu. Bây giờ họ đã đạt được mong muốn của mình và sẽ không còn sợ hãi nữa."
>
> Vì vậy, Chúa giáng trần, phân tán con người đến các ngóc ngách khác nhau, sử dụng các ngôn ngữ khác nhau.
>
> Từ đó trở đi, việc giao tiếp của con người trở nên khó khăn, tranh chấp bất tận, và không còn một tòa tháp nào chạm tới trời nữa.

Tiểu thuyết khoa học viễn tưởng &quot;Three-Body&quot; (phát âm tiếng Trung: `3Ti` ) hư cấu về một nền văn minh ngoài hành tinh giao tiếp qua sóng điện từ, không có rào cản ngôn ngữ và thịnh vượng về mặt công nghệ.

Tôi hy vọng có thể tạo ra một công cụ có thể giúp con người trên trái đất giống như con người ba cơ thể, giao tiếp mà không bị ràng buộc bởi ngôn ngữ và đoàn kết toàn nhân loại một lần nữa.

## Hướng Dẫn

## Giới Thiệu Chức Năng

### Giữ Định Dạng Đánh Dấu

### Sửa Đổi Bản Dịch

Sau khi sửa đổi bản dịch, bạn cần chạy lại `./i18n.sh` để cập nhật bộ đệm.

### Ghi Chú Dịch Thuật

Chú thích dịch cần ghi rõ ngôn ngữ sau \```, chẳng hạn như ` ```rust` .

Hiện hỗ trợ dịch nhận xét cho Rust, c, cpp, java, js, cà phê, python và bash.

Chỉnh sửa [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) để thêm hỗ trợ dịch cho nhận xét bằng nhiều ngôn ngữ hơn.

### Định Cấu Hình Proxy

Việc đặt các biến môi trường sau cho phép lệnh gọi API Google Dịch đi qua proxy.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Nhúng Biến

```
test:测试变量<br 0>嵌入
```

### Làm Sạch Bộ Nhớ Tạm

```bash
rm -rf .i18n/.cache
```
