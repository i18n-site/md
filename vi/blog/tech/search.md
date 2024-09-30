# Tìm Kiếm Toàn Văn Đảo Ngược Thuần Túy Ở Mặt Trước

## Thứ tự

Sau vài tuần phát triển, [i18n.site](//i18n.site) (một công cụ xây dựng trang web markdown dịch đa ngôn ngữ & hoàn toàn tĩnh) hiện hỗ trợ tìm kiếm toàn văn bản thuần túy ở giao diện người dùng.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Bài viết này sẽ chia sẻ việc thực hiện công nghệ tìm kiếm toàn văn thuần túy của `i18n.site`, và bạn có thể trải nghiệm hiệu quả tìm kiếm tại [i18n.site](//i18n.site).

[Mã hạt nhân tìm kiếm](//github.com/i18n-site/ie/tree/main/qy) / [Giao diện tương tác](//github.com/i18n-site/plugin/tree/main/qy) - Mã nguồn mở

## Tổng Quan Về Các Giải Pháp Tìm Kiếm Toàn Văn Không Dựa Trên Máy Chủ

Đối với các trang web nhỏ như tài liệu/blog cá nhân hoàn toàn tĩnh, chắc chắn là quá nặng nề nếu bạn tự mình xây dựng một chương trình phụ trợ tìm kiếm toàn văn bản và tìm kiếm toàn văn bản không có dịch vụ chắc chắn sẽ có trọng lượng tốt hơn.

Có hai loại giải pháp tìm kiếm toàn văn bản không có máy chủ hiện có.

Thứ nhất, là các nhà cung cấp dịch vụ tìm kiếm bên thứ ba như [algolia.com](//algolia.com), cung cấp các thành phần tìm kiếm toàn văn bản ở giao diện người dùng.

Những dịch vụ này yêu cầu付费 và không thể sử dụng được ở Trung Quốc đại lục do các vấn đề về tuân thủ pháp luật của trang web.

Nó không thể sử dụng ngoại tuyến, không thể sử dụng trên mạng nội bộ và có những hạn chế lớn. Chúng ta sẽ không thảo luận nhiều về vấn đề này.

Thứ hai, là tìm kiếm toàn văn thuần túy ở giao diện người dùng.

Các tìm kiếm toàn văn thuần túy ở mặt trước nổi tiếng hơn bao gồm [lunrjs](/0) và [ ElasticLunr.js ] [https://github.com/weixsong/elasticlunr.js](%E5%9F%BA%E4%BA%8E%60lunrjs%60%E4%BA%8C%E6%AC%A1%E5%BC%80%E5%8F%91) .

`lunrjs` có hai cách để xây dựng chỉ mục, nhưng cả hai đều có những nhược điểm riêng.

1. Tệp chỉ mục dựng sẵn

   Bởi vì chỉ mục chứa tất cả các từ trong tất cả các tài liệu, nó có kích thước lớn.
   Bất cứ khi nào một tài liệu được thêm vào hoặc sửa đổi, một tệp chỉ mục mới phải được tải lại.
   Nó sẽ làm tăng thời gian chờ đợi của người dùng và tiêu tốn nhiều băng thông.

2. Tải tài liệu và xây dựng chỉ mục một cách nhanh chóng

   Xây dựng chỉ mục là một công việc đòi hỏi nhiều tính toán. Việc xây dựng lại chỉ mục mỗi khi truy cập sẽ gây ra độ trễ rõ ràng và trải nghiệm người dùng kém.

Ngoài `lunrjs`, còn có một số giải pháp tìm kiếm toàn văn bản khác, chẳng hạn như:

[fusejs](https://www.fusejs.io), tính toán độ giống nhau giữa các chuỗi để tìm kiếm.

Hiệu suất của giải pháp này rất kém và không thể sử dụng cho tìm kiếm toàn văn bản (xem [Fuse.js Truy vấn dài mất hơn 10 giây, làm cách nào để tối ưu hóa nó?](https://stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries)).

[TinySearch](https://github.com/tinysearch/tinysearch), sử dụng bộ lọc Bloom để tìm kiếm, không thể sử dụng để tìm kiếm tiền tố (ví dụ: nhập `goo`, tìm kiếm `good`, `google`) và không thể thực hiện hiệu ứng tự động hoàn thành.

Vì không hài lòng với những nhược điểm của các giải pháp hiện có, `i18n.site` đã phát triển một giải pháp tìm kiếm toàn văn bản thuần túy mới, có những đặc điểm sau:

1. Hỗ trợ tìm kiếm đa ngôn ngữ, kích thước nhỏ gọn. Kích thước của kernel tìm kiếm sau khi đóng gói `gzip` là `6.9KB` (so sánh với `lunrjs` có kích thước `25KB`)
1. Xây dựng chỉ mục đảo ngược dựa trên `indexedb`, chiếm ít bộ nhớ hơn và nhanh hơn
1. Khi tài liệu được thêm/sửa đổi, chỉ những tài liệu được thêm hoặc sửa đổi mới được lập chỉ mục lại, giúp giảm số lượng tính toán
1. Hỗ trợ tìm kiếm tiền tố và có thể hiển thị kết quả tìm kiếm theo thời gian thực trong khi người dùng đang gõ
1. Có sẵn ngoại tuyến

Dưới đây, chúng ta sẽ详细介绍 chi tiết về cách thực hiện công nghệ của `i18n.site`.

## Phân Đoạn Từ Đa Ngôn Ngữ

Phân đoạn từ sử dụng phân đoạn từ gốc của trình duyệt `Intl.Segmenter`, và hầu hết các trình duyệt chính đều hỗ trợ giao diện này.

![](https://p.3ti.site/1727667759.avif)

Mã phân đoạn từ `coffeescript` như sau

```coffee
SEG = new Intl.Segmenter 0, granularity: "word"

seg = (txt) =>
  r = []
  for {segment} from SEG.segment(txt)
    for i from segment.split('.')
      i = i.trim()
      if i and !'|`'.includes(i) and !/\p{P}/u.test(i)
        r.push i
  r

export default seg

export segqy = (q) =>
  seg q.toLocaleLowerCase()
```

TRONG:

* `/\p{P}/` là biểu thức chính quy khớp với các dấu chấm câu. Các ký hiệu khớp cụ thể bao gồm: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _ ` { | } ~. `.</p><ul><li> `split('.')` là do `Firefox` từ trình duyệt không phân đoạn `.` .</li>


## Xây Dựng Chỉ Số

5 bảng lưu trữ đối tượng đã được tạo trong `IndexedDB` :

* `word` : id - từ
* `doc` : id - URL tài liệu - phiên bản tài liệu
* `docWord` : Mảng tài liệu id - từ id
* `prefix` : Mảng tiền tố - từ id
* `rindex` : từ id - Document id : Mảng số dòng

Truyền vào mảng tài liệu `url` và phiên bản số `ver`, tìm kiếm xem tài liệu có tồn tại trong bảng `doc` hay không. Nếu nó không tồn tại, hãy tạo một chỉ mục đảo ngược. Đồng thời, loại bỏ chỉ mục đảo ngược đối với những tài liệu không được chuyển vào.

Bằng cách này, có thể đạt được chỉ mục tăng dần và giảm số lượng tính toán.

Trong tương tác giao diện người dùng, thanh tiến trình tải của chỉ mục có thể được hiển thị để tránh độ trễ khi tải lần đầu tiên. Xem "Thanh tiến trình có hoạt ảnh, dựa trên một đơn progress + Thực hiện css thuần túy" [Tiếng Anh](https://dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Tiếng Trung](https://juejin.cn/post/7413586285954154522).

### IndexedDB Viết Đồng Thời Cao

Dự án được [idb](https://www.npmjs.com/package/idb) dựa trên việc đóng gói không đồng bộ của IndexedDB

Việc đọc và ghi IndexedDB không đồng bộ. Khi tạo chỉ mục, các tài liệu sẽ được tải đồng thời để tạo chỉ mục.

Để tránh mất dữ liệu một phần do cạnh tranh ghi, bạn có thể tham khảo mã `coffeescript` bên dưới và thêm bộ đệm `ing` giữa đọc và ghi để chặn việc ghi cạnh tranh.

```coffee
pusher = =>
  ing = new Map()
  (table, id, val)=>
    id_set = ing.get(id)
    if id_set
      id_set.add val
      return

    id_set = new Set([val])
    ing.set id, id_set
    pre = await table.get(id)
    li = pre?.li or []

    loop
      to_add = [...id_set]
      li.push(...to_add)
      await table.put({id,li})
      for i from to_add
        id_set.delete i
      if not id_set.size
        ing.delete id
        break
    return

rindexPush = pusher()
prefixPush = pusher()
```

## Tiền Tố Tìm Kiếm Thời Gian Thực

Để hiển thị kết quả tìm kiếm trong khi người dùng đang gõ, ví dụ: khi nhập `wor`, các từ có tiền tố `wor` như `words` và `work` sẽ được hiển thị.

![](https://p.3ti.site/1727684944.avif)

Hạt nhân tìm kiếm sẽ sử dụng bảng `prefix` cho từ cuối cùng sau khi phân đoạn từ để tìm tất cả các từ có tiền tố đó và tìm kiếm theo trình tự.

Chức năng chống rung `debounce` cũng được sử dụng trong tương tác giao diện người dùng (được triển khai như sau) để giảm tần suất tìm kiếm kích hoạt đầu vào của người dùng và giảm lượng tính toán.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Độ Chính Xác Và Thu Hồi

Việc tìm kiếm trước tiên sẽ phân đoạn các từ khóa được người dùng nhập vào.

Giả sử sau khi phân đoạn từ có `N` từ. Khi trả về kết quả, kết quả chứa tất cả từ khóa sẽ được trả về trước, sau đó kết quả chứa `N-1`, `N-2`,…, `1` từ khóa sẽ được trả về.

Kết quả tìm kiếm hiển thị đầu tiên đảm bảo tính chính xác của truy vấn và kết quả được tải sau đó (nhấp vào nút tải thêm) đảm bảo tỷ lệ thu hồi.

![](https://p.3ti.site/1727684564.avif)

## Tải Theo Yêu Cầu

Để cải thiện tốc độ phản hồi, tìm kiếm sử dụng trình tạo `yield` để triển khai tải theo yêu cầu và trả về `limit` khi có kết quả được truy vấn.

Lưu ý rằng mỗi lần bạn tìm kiếm lại sau `yield`, bạn cần mở lại giao dịch truy vấn `IndexedDB`.

## Tiền Tố Tìm Kiếm Thời Gian Thực

Để hiển thị kết quả tìm kiếm trong khi người dùng đang gõ, ví dụ: khi nhập `wor`, các từ có tiền tố `wor` như `words` và `work` sẽ được hiển thị.

![](https://p.3ti.site/1727684944.avif)

Hạt nhân tìm kiếm sẽ sử dụng bảng `prefix` cho từ cuối cùng sau khi phân đoạn từ để tìm tất cả các từ có tiền tố đó và tìm kiếm theo trình tự.

Chức năng chống rung `debounce` cũng được sử dụng trong tương tác giao diện người dùng (được triển khai như sau) để giảm tần suất tìm kiếm kích hoạt đầu vào của người dùng và giảm lượng tính toán.

```js
export default (wait, func) => {
  var timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(func.bind(this, ...args), wait);
  };
}
```

## Có Sẵn Ngoại Tuyến

Bảng chỉ mục không lưu trữ văn bản gốc mà chỉ lưu trữ các từ, điều này làm giảm dung lượng lưu trữ.

Việc làm nổi bật kết quả tìm kiếm yêu cầu tải lại văn bản gốc và việc khớp số `service worker` có thể tránh được các yêu cầu mạng lặp lại.

Đồng thời, vì `service worker` lưu trữ tất cả các bài viết nên khi người dùng thực hiện tìm kiếm, toàn bộ trang web, bao gồm cả tìm kiếm, sẽ khả dụng ngoại tuyến.

## Tối Ưu Hóa Hiển Thị Tài Liệu MarkDown

Giải pháp tìm kiếm front-end thuần túy của `i18n.site` được tối ưu hóa cho `MarkDown` tài liệu.

Khi hiển thị kết quả tìm kiếm, tên chương sẽ được hiển thị và chương đó sẽ được điều hướng khi nhấn vào.

![](https://p.3ti.site/1727686552.avif)

## Tóm Tắt

Tìm kiếm toàn văn bản đảo ngược được triển khai hoàn toàn ở giao diện người dùng, với phản hồi nhanh và không cần máy chủ.

Nó rất phù hợp cho các trang web vừa và nhỏ như tài liệu và blog cá nhân.