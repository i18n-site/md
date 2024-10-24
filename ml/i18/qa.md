# പതിവുചോദ്യങ്ങൾ

## വിവർത്തനത്തിൻ്റെ വരികൾ ചേർക്കുകയോ ഇല്ലാതാക്കുകയോ ചെയ്യുന്നത് വിവർത്തനത്തിൽ ആശയക്കുഴപ്പത്തിന് കാരണമാകുന്നു

> [!WARN]
> ഓർമ്മിക്കുക, **വിവർത്തനത്തിലെ വരികളുടെ എണ്ണം യഥാർത്ഥ വാചകത്തിലെ വരികളുമായി പൊരുത്തപ്പെടണം** .
> അതായത്, വിവർത്തനം സ്വമേധയാ ക്രമീകരിക്കുമ്പോൾ, **വിവർത്തനത്തിൻ്റെ വരികൾ ചേർക്കുകയോ ഇല്ലാതാക്കുകയോ ചെയ്യരുത്** , അല്ലാത്തപക്ഷം വിവർത്തനവും യഥാർത്ഥ വാചകവും തമ്മിലുള്ള മാപ്പിംഗ് ബന്ധം തകരാറിലാകും.

നിങ്ങൾ അബദ്ധവശാൽ ഒരു വരി ചേർക്കുകയോ ഇല്ലാതാക്കുകയോ ചെയ്ത് ആശയക്കുഴപ്പം സൃഷ്ടിക്കുകയാണെങ്കിൽ, പരിഷ്ക്കരിക്കുന്നതിന് മുമ്പ് പതിപ്പിലേക്ക് വിവർത്തനം പുനഃസ്ഥാപിക്കുക, `i18` വിവർത്തനം വീണ്ടും പ്രവർത്തിപ്പിക്കുക, ശരിയായ മാപ്പിംഗ് വീണ്ടും കാഷെ ചെയ്യുക.

വിവർത്തനത്തിനും യഥാർത്ഥ വാചകത്തിനും ഇടയിലുള്ള മാപ്പിംഗ് ടോക്കണുമായി ബന്ധിപ്പിച്ചിരിക്കുന്നു [i18n.site/token](//i18n.site/token) `.i18h/hash` മാപ്പിംഗ് മായ്ക്കുന്നതിന് വീണ്ടും വിവർത്തനം ചെയ്യുക (എന്നാൽ ഇത് വിവർത്തനത്തിലേക്കുള്ള എല്ലാ സ്വമേധയാലുള്ള ക്രമീകരണങ്ങളും നഷ്ടപ്പെടുത്തും).

## `YAML` : ലിങ്ക് `HTML` `Markdown` ആയി മാറ്റുന്നത് എങ്ങനെ ഒഴിവാക്കാം

വിവർത്തനത്തിനായി `YAML` ൻ്റെ മൂല്യം `MarkDown` ആയി കണക്കാക്കുന്നു.

ചിലപ്പോൾ `HTML` → `MarkDown` ൽ നിന്നുള്ള പരിവർത്തനം നമുക്ക് ആവശ്യമുള്ളതല്ല, ഉദാഹരണത്തിന് `<a href="/">Home</a>` `[Home](/)` ആയി പരിവർത്തനം ചെയ്യപ്പെടുന്നു.

`<a class="A" href="/">Home</a>` പോലെയുള്ള `a` ടാഗിലേക്ക് `href` ഒഴികെയുള്ള ഏതെങ്കിലും ആട്രിബ്യൂട്ട് ചേർക്കുന്നത് ഈ പരിവർത്തനം ഒഴിവാക്കാം.

## `./i18n/hash` ഫയൽ വൈരുദ്ധ്യങ്ങൾ താഴെ

വൈരുദ്ധ്യമുള്ള ഫയലുകൾ ഇല്ലാതാക്കി `i18` വിവർത്തനം വീണ്ടും പ്രവർത്തിപ്പിക്കുക.