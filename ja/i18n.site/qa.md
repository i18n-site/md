# よくある質問

## `.i18n/v`を不注意で削除してしまい、`npm`パッケージの公開に失敗しました

`.i18n/v/ol/v.hash`には、`npm`パッケージの公開履歴のバージョンが保存されています。

`.i18n/v/ol`を不注意で削除すると、`npm`パッケージが公開されなくなります。

この段階で、まずは[npmjs.com](//npmjs.com)にあなたのプロジェクトの最終リリース版のバージョン番号を探してください。たとえば、`0.1.9`といった形です。

その後、以下の`bash`スクリプトを参考にしてファイルを作成してください。

```bash
mkdir -p .i18n/v/ol
echo @0.1.9 > .i18n/v/ol/v.hash
```

この方法で修正を行うと、ファイルの履歴が失われるため、次回の公開時にインクリメンタルな更新ができなくなり、すべてのコンテンツが再パッケージ化されて一度にアップロードされることに注意してください。