# I18N.SITE · Kan Min Tɛ Dancɛ Ye<img Src="//i-01.eu.org/i18n/logo.svg" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, n’o ye kan caman ka yɔrɔ jɔlen ye, o bɛ se ka Markdown baara a yɛrɛma ka kɛ [kan suguya kɛmɛ ni kɔ ye](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Mɔgɔ dɔw bɛ se k’a fɛ k’a ɲininka, sisan, ikomi bamanankan baarakɛcogo dɔw bɛ navigatɔrɔw kɔnɔ, yala a man kan ka siti in kɛ diɲɛ kɔnɔ wa?

N b’a fɛ k’a fɔ ko **n’an ye siti bɛɛ kɛ diɲɛ kɔnɔ dɔrɔn, an bɛ se ka dɛmɛ don kan caman na yɔrɔ kɔnɔ sɛbɛnni dafalen ɲinini ni ɲininikɛlanw ɲɛnabɔli la** .

## Kalansen

## Baarakɛcogo Dajirali

### Markdown Format Mara

### Yɛlɛma Don Bamanankan Baarakɛcogo La

Bamanankan baarakɛcogo sɛmɛntiyalen kɔfɛ, i ka kan ka `./i18n.sh` segin ka baara kɛ walasa ka cakɛda kura.

### Bamanankan Baarakɛcogo Ɲɛfɔli Sɛbɛnw

Bamanankan bamanankanfɔlenw ka kan ka kan jira \``` kɔfɛ, i n&#39;a fɔ ` ```rust` .

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
