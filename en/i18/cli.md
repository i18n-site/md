# Detailed Explanation of Command Line Parameters

## `-P` Clean Files

`-p` Or `--purge` will clean up files that exist in each translation directory but do not exist in the source language directory.

Because when writing documents, Markdown file names are often adjusted, resulting in many old and abandoned files in the translation directory.

Use this parameter to clean up files that should be deleted in other language directories.

## `-D` Specify Translation Directory

The translated directory defaults to the directory where the current file is located.

`-d` Or `--workdir` can specify the translation directory, such as:

```
i18 -d ~/i18n/md
```

## `-H` View Help

`-h` Or `--help` can view the command line help.