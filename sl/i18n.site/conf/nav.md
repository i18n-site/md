# Prilagojena Navigacija

Vzemimo demo stran kot primer [i18n-demo.github.io](//i18n-demo.github.io) da pojasnimo, kako prilagoditi navigacijo!

![](https://p.3ti.site/1731036697.avif)

Datoteke, ki ustrezajo oštevilčenim območjem na zgornji sliki, so naslednje:

1. Levo [`.i18n/htm/t1.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t1.pug)
2. Desno [`.i18n/htm/t2.pug`](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/t2.pug)

[`pug`](https://pugjs.org) je predlogni jezik, ki generira `HTML` .

[➔ Kliknite tukaj, če želite izvedeti slovnico pug](https://pugjs.org)

Niz formata `${I18N.sponsor}` se v datoteki uporablja za izvedbo internacionalizacije, njegova vsebina pa bo nadomeščena z [i18n.yml](https://github.com/i18n-site/demo.i18n.site/blob/main/en/i18n.yml) besedilom v imeniku izvornega jezika.

**Ne pišite `css` in `js` v `pug`** , sicer bo prišlo do napake.

Slogi so zapisani v `css` , interakcija pa je dosežena z ustvarjanjem spletnih komponent.

[i18n/htm/topbar.css](https://github.com/i18n-site/demo.i18n.site/blob/main/.i18n/htm/topbar.css) je datoteka, ki ustreza slogu navigacijske vrstice :