# Детално Објаснување На Параметрите На Командната Линија

## `-P` Ги Датотеките

`-p` `--purge` ќе ги исчисти датотеките што постојат во секој директориум за превод, но не постојат во директориумот на изворниот јазик.

Бидејќи при пишување документи, имињата на датотеките Markdown често се прилагодуваат, што резултира со многу стари и напуштени датотеки во директориумот за превод.

Користете го овој параметар за да ги исчистите датотеките што треба да се избришат во директориуми на други јазици.

## `-D` Директориум За Превод

Преведениот директориум стандардно е во директориумот каде што се наоѓа тековната датотека.

`-d` `--workdir` може да го наведе директориумот за превод, како што е:

```
i18 -d ~/i18n/md
```

## `-H` Помош

`-h` `--help` Можете да ја видите помошта на командната линија.