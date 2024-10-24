# 명령줄 매개변수에 대한 자세한 설명

## 0파일 `-p`

`-p` 또는 `--purge` 각 번역 디렉토리에 존재하지만 소스 언어 디렉토리에는 존재하지 않는 파일을 지웁니다.

왜냐하면 문서를 작성할 때 Markdown 파일 이름이 자주 조정되어 번역 디렉터리에 오래되고 버려진 파일이 많이 있기 때문입니다.

다른 언어 디렉터리에서 삭제해야 하는 파일을 정리하려면 이 매개변수를 사용합니다.

## `-d` 번역 디렉터리를 지정합니다.

변환된 디렉터리의 기본값은 현재 파일이 있는 디렉터리입니다.

`-d` 또는 `--workdir` 다음과 같이 번역 디렉터리를 지정할 수 있습니다.

```
i18 -d ~/i18n/md
```

## `-h` 도움말 보기

명령줄 도움말을 보려면 `-h` 또는 `--help` .