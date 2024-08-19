
## 绑定 CNAME 域名

بعد ربط域名 لـ Cloudflare Worker عبر `SSL/TLS` → "تعيين اسم المضيف" بربط域名 CNAME، عند محاولة الوصول المباشر سيظهر خطأ `error code: 522`

في هذه الحالة، يجب استخدام توجيه HTTP → توجيه Workers لربط مسار، كما هو موضح في الصورة أدناه

![](https://p.3ti.site/1719625477.avif)
![](https://p.3ti.site/1719625385.avif)