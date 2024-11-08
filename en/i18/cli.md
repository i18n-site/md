# Detailed Explanation of Command Line Parameters

## `-p` Purge Files

`-p` or `--purge` will remove files that exist in each translation directory but not in the source language directory.

Since writing documentation often involves renaming Markdown files, this can lead to many obsolete files in the translation directories.

Using this parameter, you can clean up files that should be deleted from other language directories.

## `-d` Specify Translation Directory

The translation directory defaults to the directory where the current file is located.

`-d` or `--workdir` can specify the translation directory, for example:

```
i18 -d ~/i18n/md
```

## `-h` View Help

`-h` or `--help` can be used to view the command line help.