# Tính Năng Sản Phẩm

`i18` là công cụ dòng lệnh để dịch thuật Markdown & Yaml

## Có Thể Duy Trì Hoàn Hảo Định Dạng Của Markdown

Hỗ trợ dịch bảng Markdown mà không làm hỏng định dạng; không dịch từ trong công thức toán học hoặc liên kết.

Hỗ trợ dịch hỗn hợp HTML Markdown , nội dung trong thẻ `<pre>` và `<code>` được nhúng trong HTML `MarkDown` không được dịch

## Có Thể Nhận Biết Công Thức Toán Học Và Bỏ Qua Việc Dịch Thuật

Các công thức toán học được nhận dạng và bản dịch bị bỏ qua.

Để biết cách viết công thức toán học, vui lòng tham khảo phần [" Github Về cách viết biểu thức toán học"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions) .

## Khả Năng Dịch Nhận Xét Trong Đoạn Mã

Mã nội tuyến và đoạn mã không được dịch nhưng các nhận xét trong mã có thể được dịch.

Nhận xét bản dịch cần chỉ ra ngôn ngữ sau ` ``` ` , ` ```rust ` hạn như :

Hiện tại, nó hỗ trợ dịch chú thích bằng `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [và các ngôn ngữ khác](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14) .

Nếu bạn muốn dịch tất cả các ký tự không phải tiếng Anh trong mã, hãy đánh dấu đoạn mã bằng ` ```i18n ` .

Nếu ngôn ngữ lập trình bạn cần không có sẵn, vui lòng [liên hệ với chúng tôi](https://groups.google.com/g/i18n-site) .

## Dòng Lệnh Thân Thiện

Có rất nhiều [công cụ hạng nặng](https://www.capterra.com/translation-management-software) có sẵn để quản lý tài liệu dịch thuật.

Đối với những lập trình viên đã quen với `git` , `vim` và `vscode` , việc sử dụng các công cụ này để chỉnh sửa tài liệu và quản lý phiên bản chắc chắn sẽ làm tăng chi phí học tập.

`KISS` ( `Keep It Simple, Stupid` ) Trong số những người tin tưởng nguyên tắc, các giải pháp cấp doanh nghiệp đồng nghĩa với việc cồng kềnh, kém hiệu quả và khó sử dụng.

Việc dịch phải được thực hiện bằng cách nhập lệnh và hoàn thành nó bằng một cú nhấp chuột. Không nên có sự phụ thuộc môi trường phức tạp.

Không thêm thực thể trừ khi cần thiết.

## Không Sửa Đổi, Không Dịch Thuật

Ngoài ra còn có một số công cụ dịch dòng lệnh, chẳng hạn như [translate-shell](https://github.com/soimort/translate-shell)

Tuy nhiên, chúng không hỗ trợ nhận dạng file sửa đổi mà chỉ dịch các file sửa đổi để giảm chi phí và tăng hiệu quả.

## Bản Dịch Có Thể Được Chỉnh Sửa Và Bản Dịch Máy Sẽ Không Ghi Đè Các Sửa Đổi Hiện Có.

Bản dịch có thể chỉnh sửa được.

Sửa đổi văn bản gốc và dịch lại bằng máy, những sửa đổi thủ công đối với bản dịch sẽ không bị ghi đè (nếu đoạn này của văn bản gốc chưa được sửa đổi).

## Dịch Máy Chất Lượng Tốt Nhất

Chúng tôi đã phát triển một thế hệ công nghệ dịch mới kết hợp các ưu điểm kỹ thuật của mô hình dịch máy truyền thống và mô hình ngôn ngữ lớn để tạo ra các bản dịch chính xác, mượt mà và trang nhã.

Các thử nghiệm mù cho thấy chất lượng dịch thuật của chúng tôi tốt hơn đáng kể so với các dịch vụ tương tự.

Để đạt được chất lượng như nhau, lượng chỉnh sửa thủ công mà Google Translate yêu cầu và `ChatGPT` lần lượt gấp `2.67` lần và `3.15` lần so với chúng tôi.

## <a rel=id href="#price" id="price"></a> Giá cả cực kỳ cạnh tranh

|                                                                                   | USD/triệu từ |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [Microsoft](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [Amazon](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

➤ Nhấn vào đây để ủy quyền và tự động theo dõi **$50** [viện github của i18n.site](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo)

Lưu ý: Số ký tự được xuất hóa đơn = [số unicode](https://en.wikipedia.org/wiki/Unicode) trong file nguồn × số ngôn ngữ trong bản dịch

## Hỗ Trợ Dịch Thuật `YAML`

Công cụ chỉ dịch các giá trị từ điển về `YAML` chứ không dịch các khóa từ điển.

Dựa trên `YAML` bản dịch, bạn có thể dễ dàng xây dựng các giải pháp quốc tế cho nhiều ngôn ngữ lập trình khác nhau.

## Hỗ Trợ Dịch Cấu Hình Tiêu Đề `HOGO`

Hỗ trợ cấu hình tiêu đề của blog tĩnh loại [HOGO](https://github.com/gohugoio/hugo) và chỉ dịch các trường `title` , `summary` , `brief` và `description` .

## Không Dịch Tên Biến

`Markdown` được sử dụng làm mẫu email, `YAML` được sử dụng làm cấu hình tệp ngôn ngữ và sẽ có các tham số thay đổi (ví dụ: đã nhận được lần nạp tiền `${amount}` ).

Các tên biến như `${varname}` sẽ không được coi là bản dịch tiếng Anh.

## Tối Ưu Hóa Dịch Thuật Cho Trung Quốc, Nhật Bản Và Hàn Quốc

### Khi Dịch Sang Tiếng Anh, Chữ Cái Đầu Tiên Của Tiêu Đề Sẽ Tự Động Được Viết Hoa.

Trung Quốc, Nhật Bản, Hàn Quốc không có chữ hoa và chữ thường nhưng quy ước cho tiêu đề tiếng Anh là viết hoa chữ cái đầu tiên.

`i18` có thể nhận dạng tiêu đề bằng `MarkDown` và sẽ tự động viết hoa chữ cái đầu tiên khi dịch sang ngôn ngữ phân biệt chữ hoa chữ thường.

Ví dụ: `为阅读体验而优化` sẽ được dịch thành `Optimized for Reading Experience` .

### Thuật Ngữ Tiếng Anh Bằng Tiếng Trung, Tiếng Nhật, Tiếng Hàn Và Tiếng Trung Không Được Dịch

Các tài liệu từ Trung Quốc, Nhật Bản, Hàn Quốc thường chứa nhiều thuật ngữ tiếng Anh.

Bản dịch máy của các ngôn ngữ Trung Quốc, Nhật Bản và Hàn Quốc đã trở thành ngôn ngữ không phải tiếng Anh và các thuật ngữ thường được dịch cùng nhau, chẳng hạn như câu tiếng Trung sau:

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

Nếu bạn sử dụng Google hoặc DeepL, cả hai đều dịch sai các thuật ngữ tiếng Anh cần được giữ nguyên (lấy tiếng Nhật và tiếng Pháp làm ví dụ).

### Google Dịch

Đã dịch sang tiếng Nhật `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

![](//p.3ti.site/1720199391.avif)

Đã dịch sang tiếng Pháp `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` :

`Falcon` được dịch là `faucon` và `Llama` được dịch là `lama` . Là danh từ riêng, chúng không nên được dịch.

![](//p.3ti.site/1720199451.avif)

### Bản Dịch DeepL

Đã dịch sang tiếng Nhật `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

![](//p.3ti.site/1720199550.avif)

DeepL Dịch phần trên sang tiếng Pháp (đồng thời viết lại tên riêng và thêm số lẻ `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### Bản Dịch i18n.site

Bản dịch của `i18` sẽ nhận dạng các thuật ngữ tiếng Anh trong tài liệu tiếng Trung, tiếng Nhật, tiếng Hàn và giữ nguyên các điều khoản.

Ví dụ kết quả dịch tiếng Nhật ở trên là:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

Bản dịch tiếng Pháp là:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

Chỉ khi có khoảng cách giữa từ tiếng Anh và văn bản tiếng Trung, tiếng Nhật, tiếng Hàn hoặc độ dài tiếng Anh lớn hơn 1 thì từ đó mới được coi là một thuật ngữ.

Ví dụ: `C罗` sẽ được dịch là `Cristiano Ronaldo` .

## Có Thể Kết Hợp Với Hơn `i18n.site` Ngôn Ngữ Để Xây Dựng Website

`i18` được tích hợp vào công cụ dòng lệnh xây dựng trang web đa ngôn ngữ [`i18n.site`](/i18n.site) .

Xem tài liệu về [`i18n.site`](/i18n.site) để biết chi tiết.

## Mã Nguồn Mở

Máy khách hoàn toàn là nguồn mở và % phía máy chủ là nguồn mở 90 [Nhấp vào đây để xem mã nguồn](/i18n.site/c/src) .

Chúng tôi đang tìm kiếm tình nguyện viên tham gia phát triển mã nguồn mở và hiệu đính các văn bản đã dịch.

Nếu bạn quan tâm, vui lòng [→ Bấm vào đây để điền vào hồ sơ của bạn](https://ggl.link/i18n) và sau đó tham gia [danh sách gửi thư](https://groups.google.com/u/2/g/i18n-site) để liên lạc.

## Giữ Liên Lạc

Vui lòng <button onclick="mailsub()">nhấp vào email này để đăng ký nhận bản cập nhật sản phẩm</button> và <button onclick="webpush()">bật tính năng đẩy trình duyệt</button> . Chúng tôi sẽ thông báo cho bạn khi cập nhật sản phẩm được thực hiện.

Cũng hoan nghênh theo dõi [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social) tài khoản xã hội của chúng / [X.COM: @i18nSite](https://x.com/i18nSite)