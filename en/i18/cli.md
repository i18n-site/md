# In - depth Explanation of Command - line Parameters

## `-p` for File Cleaning

`-p` or `--purge` will clean up the files that exist in each translation directory but not in the source - language directory.

Since the file names of Markdown are often adjusted during document writing, many obsolete old files are thus left in the translation directories.

With this parameter, files that should be removed in other language directories can be cleaned up.

## `-d` for Specifying the Translation Directory

The translation directory is by default the one where the current file is located.

`-d` or `--workdir` can be used to specify the translation directory, for example:

```
i18 -d ~/i18n/md
```

## `-h` for Viewing Help

`-h` or `--help` can be used to view the command - line help.