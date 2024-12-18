# คุณสมบัติของผลิตภัณฑ์

`i18` เป็นเครื่องมือบรรทัดคำสั่งสำหรับการแปล Markdown & Yaml

## สามารถรักษารูปแบบของ Markdown ได้อย่างสมบูรณ์แบบ

รองรับการแปลตาราง Markdown โดยไม่ทำลายรูปแบบ ไม่แปลคำในสูตรทางคณิตศาสตร์หรือลิงก์

รองรับการแปลแบบผสม HTML Markdown เนื้อหาในแท็ก `<pre>` และ `<code>` ที่ฝังอยู่ใน HTML `MarkDown` จะไม่ถูกแปล

## สามารถจดจำสูตรทางคณิตศาสตร์และข้ามการแปลได้

รู้จักสูตรทางคณิตศาสตร์และข้ามการแปล

สำหรับวิธีการเขียนสูตรทางคณิตศาสตร์ โปรดดูที่ [" Github เกี่ยวกับการเขียนนิพจน์ทางคณิตศาสตร์"](https://docs.github.com/get-started/writing-on-github/working-with-advanced-formatting/writing-mathematical-expressions#about-writing-mathematical-expressions)

## ความสามารถในการแปลความคิดเห็นในตัวอย่างโค้ด

โค้ดอินไลน์และข้อมูลโค้ดไม่ได้รับการแปล แต่ความคิดเห็นในโค้ดสามารถแปลได้

ความคิดเห็นการแปลต้อง ` ```rust ` ภาษาหลัง ` ``` ` เช่น :

ปัจจุบันรองรับการแปลคำอธิบายประกอบใน `toml` , `yaml` , `json5` , `go` , `rust` , `c` , `cpp` , `java` , `js` , `coffee` , `python` , `bash` , `php` [และภาษาอื่นๆ](https://github.com/i18n-site/rust/blob/main/getc/src/style.rs#L14)

หากคุณต้องการแปลอักขระที่ไม่ใช่ภาษาอังกฤษทั้งหมดในโค้ด ให้ทำเครื่องหมายส่วนของโค้ดด้วย ` ```i18n `

หากไม่มีภาษาการเขียนโปรแกรมที่คุณต้องการ โปรด [ติดต่อเรา](https://groups.google.com/g/i18n-site)

## บรรทัดคำสั่งเป็นมิตร

มี [เครื่องมือ](https://www.capterra.com/translation-management-software) จำนวนมากสำหรับจัดการเอกสารการแปล

สำหรับโปรแกรมเมอร์ที่คุ้นเคยกับ `git` , `vim` และ `vscode` การใช้เครื่องมือเหล่านี้เพื่อแก้ไขเอกสารและจัดการเวอร์ชันจะทำให้ต้นทุนการเรียนรู้เพิ่มขึ้นอย่างไม่ต้องสงสัย

`KISS` ( `Keep It Simple, Stupid` ) ในบรรดาผู้ศรัทธาในหลักการ โซลูชันระดับองค์กรมีความหมายเหมือนกันกับความยุ่งยาก ไม่มีประสิทธิภาพ และใช้งานยาก

การแปลควรทำโดยการป้อนคำสั่งและดำเนินการให้เสร็จสิ้นด้วยคลิกเดียว ไม่ควรมีการอ้างอิงสภาพแวดล้อมที่ซับซ้อน

อย่าเพิ่มเอนทิตีเว้นแต่จำเป็น

## ไม่มีการดัดแปลง ไม่มีการแปล

นอกจากนี้ยังมีเครื่องมือแปลบรรทัดคำสั่งเช่น [translate-shell](https://github.com/soimort/translate-shell)

อย่างไรก็ตาม ไม่รองรับการระบุการแก้ไขไฟล์ และแปลเฉพาะไฟล์ที่แก้ไขเพื่อลดต้นทุนและเพิ่มประสิทธิภาพ

## การแปลสามารถแก้ไขได้ และการแปลด้วยเครื่องจะไม่เขียนทับการแก้ไขที่มีอยู่

การแปลสามารถแก้ไขได้

แก้ไขข้อความต้นฉบับและแปลด้วยเครื่องอีกครั้ง การแก้ไขการแปลด้วยตนเองจะไม่ถูกเขียนทับ (หากย่อหน้านี้ของข้อความต้นฉบับไม่ได้รับการแก้ไข)

## การแปลด้วยเครื่องคุณภาพดีที่สุด

เราได้พัฒนาเทคโนโลยีการแปลรุ่นใหม่ที่รวมเอาข้อดีทางเทคนิคของโมเดลการแปลด้วยเครื่องแบบดั้งเดิมและโมเดลภาษาขนาดใหญ่เข้าด้วยกัน เพื่อให้การแปลมีความแม่นยำ ราบรื่น และสวยงาม

การทดสอบแบบ Blind Test แสดงให้เห็นว่าคุณภาพการแปลของเราดีขึ้นอย่างมากเมื่อเทียบกับบริการที่คล้ายคลึงกัน

เพื่อให้บรรลุถึงคุณภาพเดียวกัน จำนวนการแก้ไขด้วยตนเองที่ Google Translate ต้องการและ `ChatGPT` คือ `2.67` เท่าและ `3.15` เท่าของของเราตามลำดับ

## <a rel=id href="#price" id="price"></a> ราคาที่แข่งขันได้อย่างมาก

|                                                                                   | USD/ล้านคำ |
| --------------------------------------------------------------------------------- | ------------- |
| [i18n.site](https://i18n.site)                                                    | 9             |
| [ไมโครซอฟต์](https://azure.microsoft.com/pricing/details/cognitive-services/translator) | 10            |
| [อเมซอน](https://aws.amazon.com/translate/pricing)                                | 15            |
| [Google](https://cloud.google.com/translate/pricing)                                | 20            |
| [DeepL](https://www.deepl.com/zh/pro#developer)                                  | 25            |

[➤ คลิกที่นี่เพื่ออนุญาตและติดตาม i18n.site Library github อัตโนมัติ](https://github.com/login/oauth/authorize?client_id=Ov23liuGAmK0plc9FgB3&amp;scope=user:email,user:follow,public_repo) และ **รับโบนัส $50**

หมายเหตุ: จำนวนอักขระที่เรียกเก็บเงินได้ = [จำนวน unicode](https://en.wikipedia.org/wiki/Unicode) ในไฟล์ต้นฉบับ × จำนวนภาษาในการแปล

## รองรับการแปล `YAML`

เครื่องมือจะแปลค่าพจนานุกรมเป็น `YAML` เท่านั้น ไม่ใช่คีย์พจนานุกรม

จากการแปล `YAML` คุณสามารถสร้างโซลูชันระดับสากลสำหรับภาษาการเขียนโปรแกรมต่างๆ ได้อย่างง่ายดาย

## รองรับการกำหนดค่าส่วนหัวการแปล `HOGO`

รองรับการกำหนดค่าส่วนหัวของบล็อกแบบคงที่ประเภท [HOGO](https://github.com/gohugoio/hugo) และแปลเฉพาะฟิลด์ `title` , `summary` , `brief` และ `description`

## ห้ามแปลชื่อตัวแปร

`Markdown` ใช้เป็นเทมเพลตอีเมล `YAML` ใช้เป็นการกำหนดค่าไฟล์ภาษา และจะมีพารามิเตอร์ตัวแปร (เช่น ได้รับการเติมเงิน `${amount}` แล้ว)

ชื่อตัวแปรเช่น `${varname}` จะไม่ถือเป็นการแปลภาษาอังกฤษ

## การเพิ่มประสิทธิภาพการแปลสำหรับจีน ญี่ปุ่น และเกาหลี

### เมื่อแปลเป็นภาษาอังกฤษ ตัวอักษรตัวแรกของชื่อจะเปลี่ยนเป็นตัวพิมพ์ใหญ่โดยอัตโนมัติ

จีน ญี่ปุ่น และเกาหลีไม่มีอักษรตัวพิมพ์ใหญ่และตัวพิมพ์เล็ก แต่ธรรมเนียมสำหรับชื่อภาษาอังกฤษคือการทำให้ตัวอักษรตัวแรกเป็นตัวพิมพ์ใหญ่

`i18` สามารถจดจำชื่อหัวเรื่องได้ใน `MarkDown` และจะใช้ตัวอักษรตัวแรกให้เป็นตัวพิมพ์ใหญ่โดยอัตโนมัติเมื่อแปลเป็นภาษาที่คำนึงถึงตัวพิมพ์เล็กและตัวพิมพ์ใหญ่

ตัวอย่างเช่น `为阅读体验而优化` จะถูกแปลเป็น `Optimized for Reading Experience`

### ไม่มีการแปลคำศัพท์ภาษาอังกฤษในภาษาจีน ญี่ปุ่น เกาหลี และจีน

เอกสารจากประเทศจีน ญี่ปุ่น และเกาหลี มักประกอบด้วยคำศัพท์ภาษาอังกฤษหลายคำ

เครื่องแปลภาษาจีน ญี่ปุ่น และเกาหลี กลายเป็นภาษาที่ไม่ใช่ภาษาอังกฤษ และคำศัพท์ต่างๆ มักแปลร่วมกัน เช่น ประโยคภาษาจีนต่อไปนี้

`Falcon 得分超 Llama ？Hugging Face 排名引发争议`

หากคุณใช้ Google หรือ DeepL ทั้งคู่จะแปลคำศัพท์ภาษาอังกฤษไม่ถูกต้องซึ่งควรจะคงความเป็นต้นฉบับ (ใช้ภาษาญี่ปุ่นและฝรั่งเศสเป็นตัวอย่าง)

### Google แปลภาษา

แปลเป็นภาษา `ファルコンがラマを上回る？ハグ顔ランキングが論争を巻き起こす` :

![](//p.3ti.site/1720199391.avif)

แปลเป็นภาษา `Le faucon surpasse le lama ? Le classement Hugging Face suscite la polémique` :

`Falcon` แปลเป็น `faucon` และ `Llama` แปลเป็น `lama` เนื่องจากเป็นคำนามเฉพาะ จึงไม่ควรแปล

![](//p.3ti.site/1720199451.avif)

### การแปล DeepL

แปลเป็นภาษา `ファルコンがラマに勝利、ハグ顔ランキングが物議を醸す` :

![](//p.3ti.site/1720199550.avif)

DeepL แปลข้างต้นเป็นภาษาฝรั่งเศส (เขียนชื่อที่ถูกต้องใหม่และเพิ่มเลขคี่ `... ` ):

`Un faucon marque un point sur un lama... Le classement des visages étreints suscite la controverse. `

![](//p.3ti.site/1720199603.avif)

### การแปล i18n.site

การแปลด้วย `i18` จะจดจำคำศัพท์ภาษาอังกฤษในเอกสารภาษาจีน ญี่ปุ่น และเกาหลี และคงข้อกำหนดไว้ครบถ้วน

ตัวอย่างเช่น ผลลัพธ์การแปลภาษาญี่ปุ่นด้านบนคือ:

`Falcon のスコアが Llama よりも高かったですか ? Hugging Face ランキングが論争を引き起こす`

คำแปลภาษาฝรั่งเศสคือ:

`Falcon a obtenu un score supérieur à Llama ? Hugging Face Le classement suscite la controverse`

เฉพาะเมื่อมีการเว้นวรรคระหว่างคำภาษาอังกฤษกับข้อความภาษาจีน ญี่ปุ่น และเกาหลี หรือความยาวของภาษาอังกฤษมากกว่า 1 เท่านั้น คำนั้นจึงจะถือเป็นคำศัพท์

ตัวอย่างเช่น: `C罗` จะถูกแปลเป็น `Cristiano Ronaldo`

## สามารถรวมได้มากกว่า `i18n.site` ภาษาเพื่อสร้างเว็บไซต์

`i18` ถูกรวมเข้ากับเครื่องมือบรรทัดคำสั่งการสร้างเว็บไซต์หลายภาษา [`i18n.site`](/i18n.site)

ดูเอกสารประกอบของ [`i18n.site`](/i18n.site) สำหรับรายละเอียด

## รหัสโอเพ่นซอร์ส

ไคลเอนต์เป็นโอเพ่นซอร์สโดยสมบูรณ์ 90 % ของโค้ดฝั่งเซิร์ฟเวอร์เป็น [โอเพ่นซอร์ส](/i18n.site/c/src)

เรากำลังมองหาอาสาสมัครที่จะมีส่วนร่วมในการพัฒนาโค้ดโอเพ่นซอร์สและการพิสูจน์อักษรข้อความที่แปล

หากคุณสนใจ กรุณา [→ คลิกที่นี่เพื่อกรอกโปรไฟล์ของคุณ](https://ggl.link/i18n) จากนั้นเข้าร่วม [รายชื่ออีเมล](https://groups.google.com/u/2/g/i18n-site) เพื่อการสื่อสาร

## ให้ติดต่อกัน

กรุณา <button onclick="mailsub()">คลิกอีเมลนี้เพื่อสมัครรับการอัปเดตผลิตภัณฑ์</button> และ <button onclick="webpush()">เปิดใช้งานการพุชเบราว์เซอร์</button> เราจะแจ้งให้คุณทราบเมื่อมีการอัปเดตผลิตภัณฑ์

ยินดีติดตามบัญชีโซเชียลของเรา [X.COM: @i18nSite](https://x.com/i18nSite) / [i18n-site.bsky.social](https://bsky.app/profile/i18n-site.bsky.social)