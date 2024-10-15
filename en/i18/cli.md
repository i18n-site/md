# Detailed Explanation of Command Line Parameters

## `-p` for Cleaning Files

`-p` or `--purge` will remove files that are present in each translation directory but not in the source language directory.

This is because document writing often involves frequent adjustments to Markdown file names, resulting in numerous outdated files in the translation directories.

By using this parameter, you can clean up files that are supposed to be deleted in other language directories.

## `-d` to Specify the Translation Directory

The default translation directory is the one where the current file is located.

`-d` or `--workdir` allows you to specify the translation directory, for example:

```
i18 -d ~/i18n/md
```

## `-h` to View Help

`-h` or `--help` provides command line help.