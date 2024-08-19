# Tính năng sản phẩm

`i18` là công cụ dòng lệnh dịch Markdown & YAML.

## Có thể giữ nguyên định dạng Markdown hoàn hảo

Hỗ trợ dịch bảng Markdown mà không làm hỏng định dạng; không dịch các từ trong công thức toán học và liên kết.

Hỗ trợ dịch hỗn hợp HTML Markdown, nội dung trong thẻ `<pre>` và `<code>` của HTML nhúng trong `Markdown` không được dịch

## Có thể nhận diện công thức toán học và bỏ qua việc dịch

Các công thức toán học sẽ được nhận diện và bỏ qua trong quá trình dịch.

Cách viết công thức toán học, vui lòng tham khảo [“Github về cách viết biểu thức toán học”](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions).

## Có thể dịch các nhận xét trong đoạn mã

Không dịch mã nội tuyến và đoạn mã, nhưng có thể dịch các nhận xét trong mã.

Để dịch nhận xét, cần chỉ ra ngôn ngữ sau ` ``` `, ví dụ: ` ```rust `.

Hiện tại hỗ trợ dịch nhận xét bằng `toml`, `yaml`, `json5`, `go`, `rust`, `c`, `cpp`, `java`, `js`, `coffee`, `python`, `bash`, `php` [và các ngôn ngữ khác](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14).

Nếu không có ngôn ngữ lập trình bạn cần, vui lòng [liên hệ với chúng tôi](https://groups.google.com/g/i18n-site).

## Dòng lệnh thân thiện

Có rất nhiều [công cụ hạng nặng](https://www.capterra.com/translation-management-software) có thể quản lý tài liệu dịch.

Đối với những lập trình viên đã quen với `git`, `vim`, `vscode`, việc sử dụng các công cụ này để chỉnh sửa tài liệu và quản lý phiên bản sẽ tăng chi phí học tập.

`KISS` ( `Keep It Simple, Stupid` ) Trong số những người tin tưởng nguyên tắc, các giải pháp cấp doanh nghiệp đồng nghĩa với việc cồng kềnh, kém hiệu quả và khó sử dụng.

Việc dịch chỉ cần nhập lệnh và hoàn thành bằng một cú nhấp chuột, không nên có sự phụ thuộc vào môi trường phức tạp.

Nếu không cần thiết, đừng thêm thực thể.

## Không sửa đổi, không dịch

Có một số công cụ dịch dòng lệnh khác, ví dụ như [translate-shell](https://github.com/soimort/translate-shell).

Nhưng chúng không hỗ trợ nhận diện file đã sửa đổi, chỉ dịch file đã sửa đổi để giảm chi phí và tăng hiệu quả.

## Bản dịch có thể chỉnh sửa, không bị ghi đè khi dịch lại

Bản dịch có thể chỉnh sửa.

Quando si修改原文, việc dịch máy sẽ không ghi đè các sửa đổi thủ công (nếu đoạn này của văn bản gốc chưa được sửa đổi).

## Chất lượng dịch máy tốt nhất

Chúng tôi đã phát triển một thế hệ công nghệ dịch mới, kết hợp các ưu điểm của mô hình dịch máy truyền thống và mô hình ngôn ngữ lớn, giúp bản dịch chính xác, mượt mà và trang nhã.

Blind test cho thấy chất lượng dịch của chúng tôi tốt hơn đáng kể so với các dịch vụ tương tự.

Để đạt được chất lượng tương đương, Google Translate và `ChatGPT` cần lượng chỉnh sửa thủ công gấp `2.67` lần và `3.15` lần so với chúng tôi.

## <a rel=id href="#price" id="price"></a> Giá cả cạnh tranh

|                                                                                   | USD/100.000 từ |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[Nhấp vào đây để ủy quyền tự động theo dõi kho mã nguồn GitHub của i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&scope=user:email,user:follow,public_repo), **được tặng $50**.

Lưu ý: Số ký tự tính phí = [số unicode](https://en.wikipedia.org/wiki/Unicode) trong file nguồn × số ngôn ngữ trong bản dịch

## Hỗ trợ dịch thuật ngữ pháp `YAML`

Công cụ chỉ dịch các giá trị từ điển trong `YAML`, không dịch các khóa từ điển.

Dựa trên bản dịch `YAML`, bạn có thể dễ dàng xây dựng các giải pháp quốc tế hóa cho nhiều ngôn ngữ lập trình khác nhau.

## Hỗ trợ dịch cấu hình tiêu đề trong `HOGO`

Hỗ trợ [HOGO](https://github.com/gohugoio/hugo) blog tĩnh, chỉ dịch các trường `title`, `summary` và `description`.

## Không dịch tên biến

`Markdown` được sử dụng để tạo mẫu email, `YAML` được sử dụng để cấu hình tệp ngôn ngữ, và sẽ có các tham số thay đổi (ví dụ: đã nhận được lần nạp tiền `${amount}`).

Tên biến như `${varname}` không được coi là dịch tiếng Anh.

## Optimization for Chinese, Japanese, and Korean translation

### When translating to English, the first letter of the title will be capitalized automatically

Chinese, Japanese, and Korean do not have uppercase and lowercase, but English titles conventionally capitalize the first letter.

`i18` có thể nhận dạng tiêu đề trong `Markdown` và sẽ tự động viết hoa chữ cái đầu tiên khi dịch sang ngôn ngữ phân biệt chữ hoa chữ thường.

For example, `为阅读体验而优化` will be translated to `Optimized for Reading Experience`.

### Do not translate English terms in Chinese, Japanese, and Korean

Documents in Chinese, Japanese, and Korean often contain many English terms.

Machine translation from Chinese, Japanese, and Korean to non-English languages often translates terms together, such as the following Chinese sentence:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

If using Google or DeepL, they both incorrectly translate the English terms that should be kept in the original (using Japanese and French as examples).

### Google Translate

Translated to Japanese: `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす`

![](//p.3ti.site/1720199391.avif)

Translated to French: `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique`

`Falcon` translated to `faucon`, `Llama` translated to `lama`. As proper nouns, they should not be translated.

![](//p.3ti.site/1720199451.avif)

### DeepL Translation

Translated to Japanese: `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す`

![](//p.3ti.site/1720199550.avif)

DeepL translates the above into French (also altering proper names and adding strange `... `):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### i18n.site Translation

`i18` translation will recognize English terms in Chinese, Japanese, and Korean documents and keep the terms as is.

For example, the Japanese translation result is:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

The French translation result is:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Only when there is a space between the English word and the Chinese, Japanese, or Korean text, or the English length is greater than 1, will the word be considered a term.

For example: `C罗` will be translated to `Cristiano Ronaldo`.

## Có thể kết hợp với `i18n.site` để xây dựng trang web đa ngôn ngữ

`i18` is integrated into the command-line tool for multilingual website building, [`i18n.site`](/i18n.site).

See the documentation for [`i18n.site`](/i18n.site) for details.

## Open source code

The client is fully open source, and 90% of the server-side code is open source. [Click here to view the source code](/i18n.site/src).

We are looking for volunteers to participate in open-source code development and proofreading translated texts.

If you are interested, please first [→ Click here to fill out your profile](https://ggl.link/i18n), then join the [mailing list](https://groups.google.com/u/2/g/i18n-site) for communication.

## Keep in touch

Please <button onclick="mailsub()">click here to subscribe to product updates via email</button> and <button onclick="webpush()">enable browser push notifications</button>, and we will notify you when the product is updated.

Also welcome to follow our social media accounts [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social).