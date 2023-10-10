<h1 style="justify-content:space-between">3Ti.Site · Miiri ko Dan tɛ<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, n’o ye kan caman ka yɔrɔ jɔlen ye, o bɛ se ka Markdown baara a yɛrɛma ka kɛ [kan suguya kɛmɛ ni kɔ ye](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Mɔgɔ dɔw bɛ se k’a fɛ k’a ɲininka, sisan, ikomi bamanankan baarakɛcogo dɔw bɛ navigatɔrɔw kɔnɔ, yala a man kan ka siti in kɛ diɲɛ kɔnɔ wa?

N b’a fɛ k’a fɔ ko **n’an ye siti bɛɛ kɛ diɲɛ kɔnɔ dɔrɔn, an bɛ se ka dɛmɛ don kan caman na yɔrɔ kɔnɔ sɛbɛnni dafalen ɲinini ni ɲininikɛlanw ɲɛnabɔli la** .

## Dasigi

"Bibulu·Jenɛse".:

> Fɔlɔw tun tɛ danfara don kanw ni ɲɔgɔn cɛ. U ye sankansobaw jɔ minnu bɛ se sankolo la walasa ka se Ala ka da la walasa ka hadamadenw ka bonya yiriwa.
>
> Ala ko mɔgɔw ye u yɛrɛ ka kabila ye, u ka laadalakow ni u suguya ye kelen ye. Sankanso jɔli ye daminɛ dɔrɔn de ye. Sisan, i b’a fɛ fɛn o fɛn na, i bɛ se k’o kɛ, wa i tɛna siran foyi ɲɛ.
>
> O kɔ, Ala nana mɔgɔw jɛnsɛn yɔrɔ caman na, u ma se ka ɲɔgɔn faamu.
>
> Kabini o waati, hadamadenw ye gɛlɛya sɔrɔ ka kumaɲɔgɔnya kɛ, bɛnbaliya donna dan tɛ min na, diɲɛ ma sankanso ye tugun min bɛ se sankolo la.

Dɔnniya gafe min tɔgɔ ye ko &quot;Three-Body&quot; (Sinuwakan fɔcogo: `3Ti` ) bɛ dunan siwili dɔ labɛn min bɛ kumaɲɔgɔnya kɛ ni kuran-magnetiki-fiɲɛw ye, kanko gɛlɛya tɛ min na, wa a bɛ ɲɛtaa sɔrɔ fɛɛrɛko siratigɛ la.

N jigi b’a kan ko nin baarakɛminɛn in dɛmɛni fɛ, dugukolo mɔgɔw bɛna kɛ i n’a fɔ farikolo saba, kumaɲɔgɔnya tɛna dan kan fɛ, hadamaden bɛɛ bɛna fara ɲɔgɔn kan tugun.

## Kalansen

## Baarakɛcogo Dajirali

### Markdown Format Mara

### Yɛlɛma Don Bamanankan Baarakɛcogo La

Bamanankan baarakɛcogo sɛmɛntiyalen kɔfɛ, i ka kan ka `./i18n.sh` segin ka baara kɛ walasa ka cakɛda kura.

### Bamanankan Baarakɛcogo Ɲɛfɔli Sɛbɛnw

Bamanankan bamanankanfɔlenw ka kan ka kan jira \``` kɔfɛ, i n'a fɔ ` ```rust` .

Sisan a bɛ dɛmɛ don commentaires bamanankan na rust, c, cpp, java, js, coffee, python, ani bash kama.

[Tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) ladilan walasa ka bamanankan bamanankan dɛmɛni fara kuma fɔlenw kan kan caman na.

### Proxy (Proxy) Labɛn

Nin sigida fɛn caman sɛgɛsɛgɛli bɛ kɛ sababu ye ka Google Translate API weleli kɛ ka tɛmɛ proxy fɛ.

```bash
export https_proxy=http://127.0.0.1:7890
```

### Variable Embedding (daɲɛ Caman Sɛgɛsɛgɛli).

```
test: 测试变量<br 0>嵌入
```

### Lankolo La Cache

```bash
rm -rf .i18n/.cache
```
