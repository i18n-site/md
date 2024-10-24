# Stilu Saraksts

[Noklikšķiniet šeit, lai pārlūkotu šīs lapas avota failu,](//raw.githubusercontent.com/i18n-site/md/refs/heads/main/$LANG/i18n.site/md/styl.md) lai redzētu, kā rakstīt `MarkDown` šādos stilos.

## & &

Tas ir pasvītrojums __ __~~ pārsvītrots~~ un **treknrakstā** prezentācijas tekstu.

Tas ir rakstīts šādi:

```txt
这是__下划线__、~~删除线~~和**加粗**的演示文本。
```

Vietņu veidošanas rīka `i18n.site` `MarkDown` ir optimizējis pasvītrojumu, pārsvītrojumu un treknrakstu. Tas var darboties bez atstarpēm pirms un pēc atzīmes, tādējādi atvieglojot dokumentu rakstīšanu tādās valodās kā Ķīna, Japāna un Koreja. kas neizmanto atstarpes kā atdalītājus.

Paplašināta : [Kāpēc Nuggets Markdown sintakse ( `**……**` ) dažkārt nedarbojas?](//juejin.cn/post/7064565848421171213)

## Citāts

### Vienas Rindas Citāts

> Man ir raksturīgi, ka mani talanti noderēs, un es atgriezīšos, kad visa mana nauda būs iztērēta.
<p style="text-align:right">─ Li Bai</p>

### Vairāku Rindiņu Citāti

> Vēl viena unikāla zinātniskās fantastikas priekšrocība ir tās ārkārtīgi plašais apjoms.
> "Karš un miers" ar miljoniem vārdu tikai apraksta reģiona vēsturi vairāku gadu desmitu garumā;
> Un tādi zinātniskās fantastikas romāni kā Asimova "Galīgā atbilde" tikai dažos tūkstošos vārdu spilgti apraksta visa Visuma, tostarp cilvēku, miljardu gadu vēsturi.
> Tradicionālajā literatūrā tādu iekļautību un drosmi nav iespējams sasniegt.
<p style="text-align:right">── Liu Čiksins</p>

### Padoms `> [!TIP]`

> [!TIP]
> Neaizmirstiet pārbaudīt pases derīgumu, un dokumenti, kuriem beidzies derīguma termiņš, nevar ieceļot vai izbraukt no tās.

Tas ir rakstīts šādi

```
> [!TIP]
> your content
```

### Piezīme `> [!NOTE]`

> [!NOTE]
> Ja nosūtāt man ziņojumu un es uzreiz atbildu, ko tas nozīmē?
> Tas parāda, ka man ļoti patīk spēlēties ar mobilajiem tālruņiem.


### Brīdinājums `> [!WARN]`

> [!WARN]
> Dodoties mežonīgā piedzīvojumā, ir svarīgi saglabāt drošību.
> Pagājušajā nedēļā alpīnistu grupa pusceļā kalnā saskārās ar vētru un nācās evakuēties, jo viņiem neizdevās pārbaudīt laika prognozi.
> Atcerieties, ka jebkurai āra aktivitātei ir nepieciešama atbilstoša sagatavošanās un uzmanība laikapstākļiem.

## Darāmo Darbu Saraksts

- [x] Dizaina produkta prototips un funkciju saraksts
- [ ] Nosakiet tehnoloģiju kaudzi un izstrādes rīkus
- [ ] Izstrādājiet produktu izstrādes termiņus un atskaites punktus

## Sarakstu

### Pasūtītais Saraksts

1. skrienot
   1. Trīs reizes nedēļā, katru reizi 5 kilometri
   1. Noskrien pusmaratonu
1. trenažieru zāles treniņš
   1. Divas reizes nedēļā, katru reizi 1 stunda
   1. Koncentrējieties uz galvenajiem muskuļiem

### Nesakārtots Saraksts

* saviesīgi pasākumi
  - Piedalīties nozares apmaiņas sanāksmēs
    + Tehnoloģiju apmaiņas sesija
    + Uzņēmējdarbības apmaiņas sanāksme
  - Organizējiet draugu salidojumu
    + Āra BBQ
    + filmu vakars

## Lapa

| domātājs       | Galvenie ieguldījumi                           |
|--------------|------------------------------------|
| Konfūcijs         | Konfūcisma dibinātājs |
| Sokrāts     | Rietumu filozofijas tēvs  |
| Nīče         | Supermena filozofija, kritizējot tradicionālo morāli un reliģiju       |
| marx       | komunisms |

## Kodu

### Iekļauts Kods

Plašajā programmēšanas valodu pasaulē `Rust` , `Python` , `JavaScript` un `Go` katra ieņem unikālu vietu.

### Vairākas Koda Rindiņas

```rust
fn main() {
  let x = 10;
  println!("Hello, world! {}", x);
}
```