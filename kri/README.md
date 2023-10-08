# I18N.SITE · Dokumɛnt Dɛn We Nɔ Gɛt Bɔda<img Src="//ok0.pw/5l" Style="float:right;width:42px;margin-Top:6px">

I18N.SITE, na wan statik sayt jenɛra we de sɔpɔt ɔtomɛtik transleshɔn insay [133 difrɛn langwej dɛn](https://github.com/i18n-site/node/blob/main/lang/src/index.js) .

![](https://i-01.eu.org/2023/09/O0Tee_m.webp)

Sɔm pipul dɛn go want fɔ aks, naw we brawza dɛn gɛt transleshɔn wok dɛn we dɛn dɔn bil insay, yu tink se i nɔ nid fɔ mek di wɛbsayt intanashɔnal?

A want fɔ se **na bay we wi de intanashɔnalayz di wan ol sayt nɔmɔ wi go ebul fɔ sɔpɔt mɔlti-lingwal in-sayt ful-tɛks sɔch ɛn sɔch injin ɔptimayzeshɔn** .

## Tutoriɛl

## Fɔnkshɔn Introdyushɔn

### Kip Makdɔwn Fɔmat

### Modify Di Transleshɔn

Afta yu dɔn chenj di transleshɔn, yu nid fɔ ri-rɔn `./i18n.sh` fɔ ɔpdet di kesh.

### Transleshɔn Notis Dɛn

Transleshɔn kɔmɛnt dɛn nid fɔ sho di langwej afta \```, lɛk ` ```rust` .

Naw i de sɔpɔt kɔmɛnt transleshɔn fɔ rɔst, c, cpp, java, js, kɔfi, paytɔn, ɛn bash.

Ɛdit [tran_md/src/comment.coffee](https://github.com/i18n-site/node/blob/main/tran_md/src/comment.coffee) fɔ ad transleshɔn sɔpɔt fɔ kɔmɛnt dɛn insay mɔ langwej dɛn.

### Kɔnfigyut Prɔksi

We yu sɛt di envayrɔmɛnt vɛriɔbul dɛn we de dɔŋ ya, i de alaw Google Translate API kɔl dɛn fɔ go tru di prɔksi.

```bash
export https_proxy=http://127.0.0.1:7890


```

### Variable Ɛmbadin

```
test: 测试变量<br 0>嵌入
```

### Ɛmpti Di Kesh

```bash
rm -rf .i18n/.cache


```
