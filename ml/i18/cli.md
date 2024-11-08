# കമാൻഡ് ലൈൻ പാരാമീറ്ററുകളുടെ വിശദമായ വിശദീകരണം

## 0 ഫയലുകൾ `-p`

`-p` അല്ലെങ്കിൽ `--purge` ഓരോ വിവർത്തന ഡയറക്ടറിയിലും ഉള്ളതും എന്നാൽ ഉറവിട ഭാഷാ ഡയറക്ടറിയിൽ ഇല്ലാത്തതുമായ ഫയലുകൾ മായ്ക്കും.

കാരണം പ്രമാണങ്ങൾ എഴുതുമ്പോൾ, മാർക്ക്ഡൗൺ ഫയലുകളുടെ പേരുകൾ പലപ്പോഴും ക്രമീകരിക്കപ്പെടുന്നു, ഇത് വിവർത്തന ഡയറക്ടറിയിലെ പഴയതും ഉപേക്ഷിക്കപ്പെട്ടതുമായ നിരവധി ഫയലുകളിലേക്ക് നയിക്കുന്നു.

മറ്റ് ഭാഷാ ഡയറക്ടറികളിൽ ഇല്ലാതാക്കേണ്ട ഫയലുകൾ വൃത്തിയാക്കാൻ ഈ പരാമീറ്റർ ഉപയോഗിക്കുക.

## `-d` വിവർത്തന ഡയറക്ടറി വ്യക്തമാക്കുന്നു

വിവർത്തനം ചെയ്ത ഡയറക്ടറി നിലവിലെ ഫയൽ സ്ഥിതി ചെയ്യുന്ന ഡയറക്ടറിയിലേക്ക് ഡിഫോൾട്ട് ചെയ്യുന്നു.

`-d` അല്ലെങ്കിൽ `--workdir` വിവർത്തന ഡയറക്ടറി വ്യക്തമാക്കാൻ കഴിയും, ഉദാഹരണത്തിന്:

```
i18 -d ~/i18n/md
```

## `-h` സഹായം കാണുക

കമാൻഡ് ലൈൻ സഹായം കാണുന്നതിന് `-h` അല്ലെങ്കിൽ `--help` .