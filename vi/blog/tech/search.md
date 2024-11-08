---

brief: |
  i18n.site hiện hỗ trợ tìm kiếm toàn văn không có máy chủ.

  Bài viết này giới thiệu việc triển khai công nghệ tìm kiếm toàn văn bản thuần túy ở mặt trước, bao gồm chỉ mục đảo ngược được xây dựng bởi IndexedDB, tìm kiếm tiền tố, tối ưu hóa phân đoạn từ và hỗ trợ đa ngôn ngữ.

  So với các giải pháp hiện có, tìm kiếm toàn văn bản thuần túy ở giao diện người dùng của i18n.site có kích thước nhỏ và nhanh, phù hợp với các trang web vừa và nhỏ như tài liệu và blog và khả dụng ngoại tuyến.

---

# Tìm Kiếm Toàn Văn Đảo Ngược Thuần Túy Ở Mặt Trước

## Sự Liên Tiếp

Sau vài tuần phát triển, [i18n.site](//i18n.site) (một công cụ xây dựng trang web markdown dịch đa ngôn ngữ & hoàn toàn tĩnh) hiện hỗ trợ tìm kiếm toàn văn bản thuần túy ở giao diện người dùng.

<p style="display:flex;flex-wrap:wrap;justify-content:center"><img src="//p.3ti.site/1727600475.avif" style="width:320px"><img src="//p.3ti.site/1727602760.avif" style="width:320px"></p>

Bài viết này sẽ chia sẻ cách triển khai kỹ thuật của `i18n.site` tìm kiếm toàn văn bản thuần túy Hãy truy cập [i18n.site](//i18n.site)

Mã nguồn mở : [Tìm kiếm kernel](//github.com/i18n-site/ie/tree/main/qy) / [giao diện tương tác](//github.com/i18n-site/plugin/tree/main/qy)

## Đánh Giá Về Các Giải Pháp Tìm Kiếm Toàn Văn Không Có Máy Chủ

Đối với các trang web tĩnh hoàn toàn vừa và nhỏ như tài liệu/blog cá nhân, việc xây dựng chương trình phụ trợ tìm kiếm toàn văn bản tự xây dựng là quá nặng nề và tìm kiếm toàn văn bản miễn phí dịch vụ là lựa chọn phổ biến hơn.

Các giải pháp tìm kiếm toàn văn bản không có máy chủ thuộc hai loại chính:

Đầu tiên, tương tự như vậy [algolia.com](//algolia.com) Các nhà cung cấp dịch vụ tìm kiếm bên thứ ba cung cấp các thành phần giao diện người dùng cho tìm kiếm toàn văn bản.

Những dịch vụ như vậy yêu cầu thanh toán dựa trên lượng tìm kiếm và thường không được cung cấp cho người dùng ở Trung Quốc đại lục do các vấn đề như tuân thủ trang web.

Nó không thể sử dụng ngoại tuyến, không thể sử dụng trên mạng nội bộ và có những hạn chế lớn. Bài viết này không thảo luận nhiều.

Thứ hai là tìm kiếm toàn văn thuần túy ở mặt trước.

Hiện tại, các tìm kiếm toàn văn bản thuần túy phổ biến ở mặt trước bao gồm [lunrjs](//lunrjs.com) và [ElasticLunr.js](//github.com/weixsong/elasticlunr.js) (dựa trên `lunrjs` sự phát triển thứ cấp).

`lunrjs` Có hai cách để xây dựng chỉ mục và cả hai cách đều có vấn đề riêng.

1. Tệp chỉ mục dựng sẵn

   Bởi vì chỉ mục chứa các từ trong tất cả các tài liệu nên nó có kích thước lớn.
   Bất cứ khi nào một tài liệu được thêm vào hoặc sửa đổi, một tệp chỉ mục mới phải được tải.
   Nó sẽ làm tăng thời gian chờ đợi của người dùng và tiêu tốn nhiều băng thông.

2. Tải tài liệu và xây dựng chỉ mục một cách nhanh chóng

   Xây dựng chỉ mục là một công việc đòi hỏi nhiều tính toán. Việc xây dựng lại chỉ mục mỗi khi bạn truy cập sẽ gây ra độ trễ rõ ràng và trải nghiệm người dùng kém.

---

Ngoài `lunrjs` , còn có một số giải pháp tìm kiếm toàn văn bản khác, chẳng hạn như :

[fusejs](//www.fusejs.io) , tính toán độ giống nhau giữa các chuỗi để tìm kiếm.

Hiệu suất của giải pháp này cực kỳ kém và không thể sử dụng cho tìm kiếm toàn văn bản (xem [Fuse.js Truy vấn dài mất hơn 10 giây, làm cách nào để tối ưu hóa nó?](//stackoverflow.com/questions/70984437/fuse-js-takes-10-seconds-with-semi-long-queries) ).

[TinySearch](//github.com/tinysearch/tinysearch) , sử dụng bộ lọc Bloom để tìm kiếm, không thể sử dụng để tìm kiếm tiền tố (ví dụ: nhập `goo` , tìm kiếm `good` , `google` ) và không thể đạt được hiệu ứng hoàn thành tự động tương tự.

Do những thiếu sót của các giải pháp hiện có, `i18n.site` đã phát triển một giải pháp tìm kiếm toàn văn bản thuần túy mới ở mặt trước, có các đặc điểm sau :

1. Hỗ trợ tìm kiếm đa ngôn ngữ và có kích thước nhỏ. Kích thước của hạt nhân tìm kiếm sau khi đóng gói `gzip` là `6.9KB` (để so sánh, kích thước của `lunrjs` là `25KB` )
1. Xây dựng chỉ mục đảo ngược dựa trên `indexedb` , chiếm ít bộ nhớ hơn và nhanh hơn.
1. Khi tài liệu được thêm/sửa đổi, chỉ những tài liệu được thêm hoặc sửa đổi mới được lập chỉ mục lại, giúp giảm số lượng tính toán.
1. Hỗ trợ tìm kiếm tiền tố và có thể hiển thị kết quả tìm kiếm theo thời gian thực trong khi người dùng đang gõ.
1. Có sẵn ngoại tuyến

Dưới đây, `i18n.site` chi tiết triển khai kỹ thuật sẽ được giới thiệu chi tiết.

## Phân Đoạn Từ Đa Ngôn Ngữ

Phân đoạn từ sử dụng phân đoạn từ gốc của trình duyệt `Intl.Segmenter` và tất cả các trình duyệt chính đều hỗ trợ giao diện này.

![](//p.3ti.site/1727667759.avif)

Mã phân đoạn từ `coffeescript` như sau

```coffee
SEG = new Intl.Segmenter 0, granularity: "word"

seg = (txt) =>
  r = []
  for {segment} from SEG.segment(txt)
    for i from segment.split('.')
      i = i.trim()
      if i and !'| `'.includes(i) and !/\p{P}/u.test(i)
        r.push i
  r

export default seg

export segqy = (q) =>
  seg q.toLocaleLowerCase()
```

TRONG:

* `/\p{P}/` là biểu thức chính quy khớp với các dấu chấm câu. Các ký hiệu khớp cụ thể bao gồm: `! " # $ % & ' ( ) * + , - . / : ; < = > ? @ [ \ ] ^ _` { | } ~. `.</p><ul><li> `split('.')` là do `Firefox` từ trình duyệt không phân đoạn `. ` .</li>


## Xây Dựng Chỉ Số

5 bảng lưu trữ đối tượng đã được tạo trong `IndexedDB` :

* `word` : id -
* `doc` : id - Số tài liệu url - phiên bản tài liệu
* `docWord` : Mảng tài liệu id - từ id
* `prefix` : Mảng tiền tố - từ id
* `rindex` : Word id - Document id : Mảng số dòng

Truyền vào mảng tài liệu `url` và phiên bản số `ver` và tìm kiếm xem tài liệu có tồn tại trong bảng `doc` hay không. Nếu nó không tồn tại, hãy tạo một chỉ mục đảo ngược. Đồng thời, loại bỏ chỉ mục đảo ngược đối với những tài liệu không được chuyển vào.

Bằng cách này, có thể đạt được chỉ mục tăng dần và giảm số lượng tính toán.

Trong tương tác giao diện người dùng, thanh tiến trình tải của chỉ mục có thể được hiển thị để tránh độ trễ khi tải lần đầu tiên Xem "Thanh tiến trình có hoạt ảnh, dựa trên một đơn progress + Thực hiện css thuần túy" [Tiếng Anh](//dev.to/i18n-site/a-single-progress-uses-pure-css-to-achieve-animation-effects-2oo) / [Tiếng Trung](//juejin.cn/post/7413586285954154522) .

### IndexedDB Viết Đồng Thời Cao

Dự án được [idb](//www.npmjs.com/package/idb) dựa trên việc đóng gói không đồng bộ của IndexedDB

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

## Độ Chính Xác Và Thu Hồi

Việc tìm kiếm trước tiên sẽ phân đoạn các từ khóa được người dùng nhập vào.

Giả sử có `N` từ sau khi phân đoạn từ. Khi trả về kết quả, kết quả chứa tất cả từ khóa sẽ được trả về trước, sau đó kết quả chứa `N-1` , `N-2` ,..., `1` từ khóa sẽ được trả về.

Kết quả tìm kiếm hiển thị đầu tiên đảm bảo tính chính xác của truy vấn và kết quả được tải sau đó (nhấp vào nút tải thêm) đảm bảo tỷ lệ thu hồi.

![](//p.3ti.site/1727684564.avif)

## Tải Theo Yêu Cầu

Để cải thiện tốc độ phản hồi, tìm kiếm sử dụng trình tạo `yield` để triển khai tải theo yêu cầu và trả về `limit` khi có kết quả được truy vấn.

Lưu ý rằng mỗi lần bạn tìm kiếm lại sau `yield` , bạn cần mở lại giao dịch truy vấn `IndexedDB` .

## Tiền Tố Tìm Kiếm Thời Gian Thực

Để hiển thị kết quả tìm kiếm trong khi người dùng đang gõ, ví dụ: khi nhập `wor` , các từ có tiền tố `wor` như `words` và `work` sẽ được hiển thị.

![](//p.3ti.site/1727684944.avif)

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

Làm nổi bật kết quả tìm kiếm yêu cầu tải lại văn bản gốc và việc khớp `service worker` có thể tránh được các yêu cầu mạng lặp lại.

Đồng thời, vì `service worker` lưu trữ tất cả các bài viết nên khi người dùng thực hiện tìm kiếm, toàn bộ trang web, bao gồm cả tìm kiếm, sẽ khả dụng ngoại tuyến.

## Tối Ưu Hóa Hiển Thị Tài Liệu MarkDown

Giải pháp tìm kiếm front-end thuần túy của `i18n.site` được tối ưu hóa cho `MarkDown` tài liệu.

Khi hiển thị kết quả tìm kiếm, tên chương sẽ được hiển thị và chương đó sẽ được điều hướng khi nhấn vào.

![](//p.3ti.site/1727686552.avif)

## Tóm Tắt

Tìm kiếm toàn văn đảo ngược được thực hiện hoàn toàn ở giao diện người dùng, không cần máy chủ. Nó rất phù hợp cho các trang web vừa và nhỏ như tài liệu và blog cá nhân.

`i18n.site` Mã nguồn mở tìm kiếm thuần túy giao diện người dùng tự phát triển, kích thước nhỏ và phản hồi nhanh, giải quyết những thiếu sót của tìm kiếm toàn văn bản thuần túy giao diện người dùng hiện tại và cung cấp trải nghiệm người dùng tốt hơn.