<h1 style="justify-content:space-between">3Ti.Site · Miiri ko Dan tɛ<img src="//i-01.eu.org/i18n/logo.svg" style="margin-top:-1px;width:42px"></h1>

3Ti.Site, n’o ye kan caman ka yɔrɔ jɔlen ye, o bɛ se ka Markdown baara a yɛrɛma ka kɛ [kan suguya kɛmɛ ni kɔ ye](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

<img src="//i-01.eu.org/i18n/lang.webp" alt="" />

Mɔgɔ dɔw bɛ se k’a fɛ k’a ɲininka, sisan, ikomi bamanankan baarakɛcogo dɔw bɛ navigatɔrɔw kɔnɔ, yala a man kan ka siti in kɛ diɲɛ kɔnɔ wa?

N b’a fɛ k’a fɔ ko **n’an ye siti bɛɛ kɛ diɲɛ kɔnɔ dɔrɔn, an bɛ se ka dɛmɛ don kan caman na yɔrɔ kɔnɔ sɛbɛnni dafalen ɲinini ni ɲininikɛlanw ɲɛnabɔli la** .

## Dasigi

Bibulu · Jenɛse :

> Fɔlɔ la, tuma min na kanw tun ye kelen ye, hadamadenw ye sankanso dɔ jɔ min bɛ se sankolo ma, da min bɛ don Ala ka mara kɔnɔ, ka hadamadenw ka sebaaya weleweleda.
>
> Ala y'a jira ko: "Cɛw bɛ jɛ i n'a fɔ kabila kelen, ni kan kelen ye, wa nin sankanso in ye kumasen fɔlɔ dɔrɔn de ye. Sisan, u b'u nege sɔrɔ, bonya si tɛna to."
>
> O cogo la, Ala jigira, ka mɔgɔw jɛnsɛn ka taa nkɔni wɛrɛw la, ka baara kɛ ni kan wɛrɛw ye.
>
> Kabini o waati, hadamadenw ka kumaɲɔgɔnya kɛra gɛlɛya ye, sɔsɔliw tun tɛ ban, wa sankanso tun tɛ yen tugun min bɛ maga sankolo la.

Dɔnniya gafe min tɔgɔ ye ko &quot;Three-Body&quot; (Sinuwakan fɔcogo: `3Ti` ) bɛ dunan siwili dɔ labɛn min bɛ kumaɲɔgɔnya kɛ ni kuran-magnetiki-fiɲɛw ye, kanko gɛlɛya tɛ min na, wa a bɛ ɲɛtaa sɔrɔ fɛɛrɛko siratigɛ la.

N jigi b’a kan ka baarakɛminɛn dɔ da min bɛna kɛ sababu ye dugukolo mɔgɔw ka kɛ i n’a fɔ farikolo saba, ka kumaɲɔgɔnya kɛ k’a sɔrɔ u ma siri kan na, ka hadamaden bɛɛ fara ɲɔgɔn kan kokura.

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
