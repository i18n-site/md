# Detailed Explanation of Command-Line Parameters

## `-p` to purge files

`-p` or `--purge` will clear the files that exist in each translation directory but not in the source language directory.

Because when writing documents, the Markdown file names are often adjusted, which leads to many obsolete old files in the translation directory.

Using this parameter, the files that should be deleted in other language directories can be cleaned up.

## `-d` to specify the translation directory

The default translation directory is the directory where the current file is located.

`-d` or `--workdir` can specify the translation directory, such as:

```
i18 -d ~/i18n/md
```

## `-h` to view help

`-h` or `--help` can be used to view the help of the command line.