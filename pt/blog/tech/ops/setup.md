# Inicialize O Servidor (Use Partição BTRFS, Instantâneo Agendado Do Snapper)

## Servidor De Compra contabo

contabo é um provedor VPS barato na Alemanha com uma longa história (mais de 20 anos) e muitos usuários (mais de 200.000), então não há necessidade de se preocupar em fugir.

VPS comprar [contabo.com](//contabo.com) Lembre-se de escolher o preço em Euro, que é mais barato.

<img alt="" src="https://i-01.eu.org/1718285782.avif">

Há uma taxa única de instalação para contabo.
Porém, há alguns dias do mês em que a taxa de instalação é gratuita. Basta se cadastrar e ficar atento aos e-mails promocionais.

Além da taxa de área franca na Europa, outras regiões apresentam diferentes níveis de aumento de preços.

Escolhi um servidor europeu Enfim, depois de usar o cloudflare não há muita diferença entre os servidores.

A configuração final é a seguinte, 16GB de memória, 6CPU, 200 GB NVMe, 9,50 euros mensais, equivalente a 74,43 RMB.

<img alt="" src="https://i-01.eu.org/1718286008.avif">

**Este preço é quase um décimo do preço do Alibaba Cloud e Amazon** .

<img alt="" src="https://i-01.eu.org/1718356956.avif">

Eu usei [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) para executar o desempenho e os parâmetros:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Exibir CPU Modelo `AMD EPYC 9224 24-Core Processor` pontuação de desempenho de núcleo único 1285
, pontuação multi-core 4277 Veja mais resultados [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Comprei três servidores ao mesmo tempo e os ativei ao mesmo tempo. Isso garante que os servidores estejam na mesma sala de computadores, facilitando a construção de alta disponibilidade no futuro.

Seus servidores ocasionalmente desligam, garantindo acessibilidade ao site por meio de alta disponibilidade.

Novos usuários precisam enviar seus cartões de identificação para autenticação de nome real no momento da compra.

## Configurar Login Sem Senha

Depois de alguns minutos, todos os servidores foram ativados.

A primeira coisa é editar o `~/.ssh/config` Defina um alias para IP e depois usar `ssh-copy-id root@c2` para configurar o login sem senha.

<img alt="" src="https://i-01.eu.org/1718287198.avif">

Você pode modificar este [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) para concluir a configuração de inicialização mais rapidamente.

Depois que a configuração sem senha for concluída, você poderá usá-la [pdsh](https://github.com/chaos/pdsh) Ela pode ser operada em lotes, o que é conveniente.

A primeira é habilitar manualmente o ipv6 e testar

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

<img alt="" src="https://i-01.eu.org/1718287969.avif">

Em seguida, atualize o sistema para o Ubuntu 24 com um clique e instale o software comumente usado.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 significa mudar o idioma para chinês e o fuso horário para Pequim.

O software instalado por padrão é configurado de acordo com meus hábitos pessoais de uso, como [mise](https://github.com/jdx/mise) [direnv](https://direnv.net/) , etc. Se necessário, você pode copiar o [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) warehouse e modificá-lo conforme necessário.

Esta etapa leva muito tempo. Depois de esperar meia hora, a atualização e instalação do software comumente usado serão bem-sucedidas. Você pode confirmar com o seguinte comando:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

<img alt="" src="https://i-01.eu.org/1718290346.avif">

## mosh Acelera O ssh

A rede da Europa para a China não é estável. Recomenda `ssh` se usar [mosh](//mosh.org)

Crie um script `c0` no diretório `~/.bin` da máquina local (adicionado principalmente à variável de ambiente `PATH` ) da seguinte forma:

```bash
#!/usr/bin/env bash

if [ -z "$1" ]; then
arg=/root/.tmux_default
else
arg=${@:1:$#}
fi

vps=$(basename $0)
set -ex
mosh $vps -p 60000:60009 $arg
```

Após a criação, conceda permissões executáveis ​​e soft-link , `c2` `c1`

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

No futuro, você pode inserir diretamente `c0` , `c1` e usar `mosh` conexão direta de alta velocidade e inserir [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html)

## Converter Formato De Partição De ext4 Para btrfs

[btrfs](https://wikipedia.org/wiki/Btrfs) Pode tirar instantâneos de disco para facilitar o backup.

Primeiro entre no sistema de resgate

<img alt="" src="https://i-01.eu.org/1718300448.avif">

Escolha o Resgate Debian

<img alt="" src="https://i-01.eu.org/1718300753.avif">

Aguarde o servidor reiniciar

Mudanças na impressão `ssh-keygen -R ip` ocorrerão quando ssh

Em seguida, execute o seguinte script para converter a partição

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

O script reiniciará automaticamente o sistema após a conversão ser bem-sucedida.

### Ver Taxa De Compressão btrfs

Ele será compactado automaticamente por padrão. O comando para verificar a taxa de compactação é o seguinte:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Compressão Manual

Se você é um perfeccionista, também pode realizar uma compactação completa do disco manualmente.

```bash
btrfs filesystem defragment -r -czstd /
```

Conforme mostrado na figura abaixo, você pode ver que após a compactação manual no novo sistema, quase 100 MB a mais foram compactados.

<img alt="" src="https://i-01.eu.org/2023/12/8NWlr4c.webp">

### Crie Um Backup De Instantâneo Btrfs Com snapper

[snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) é o melhor parceiro para backup Btrfs .

O script de inicialização criará o diretório `~/ubuntu` , basta executar o seguinte comando:

```
~/ubuntu/snapper/init.sh
```

Vejo você no conteúdo do roteiro [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Use `snapper list-configs` para visualizar os subvolumes para os quais os instantâneos estão definidos.

<img alt="" src="https://i-01.eu.org/1718302689.avif">

Use `snapper -c mnt list` para visualizar um instantâneo de um subvolume

`/etc/snapper/configs/mnt` Você pode visualizar as configurações de backup específicas deste subvolume!

Mais referências:

[Brinque facilmente com a função de instantâneo de Btrfs snapper](https://zhuanlan.zhihu.com/p/31082518)

## Instantâneo Do Servidor contabo

contabo Fornece função de snapshot do servidor, mas não oferece suporte a snapshots agendados. Escrevi um [github action](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) para tirar snapshots diários.

<img alt="" src="https://i-01.eu.org/1718304206.avif">

Para restaurar um instantâneo do servidor, primeiro clique em Crontol no menu de gerenciamento

<img alt="" src="https://i-01.eu.org/1718304275.avif">

Em seguida, clique em Instantâneos para restaurar.

<img alt="" src="https://i-01.eu.org/1718304063.avif">

No entanto, a granularidade deste instantâneo é muito grande. Depois de restaurado, os dados recém-adicionados serão completamente perdidos, portanto, use-o com cuidado.

Geralmente é mais conveniente usar instantâneos btrfs.

## Detalhes Do Sistema De Resgate

Entre no sistema de 22 Depois que a porta estiver [tcping](https://github.com/paradiseduo/tcping) acessível, você não poderá acessá-la com a senha definida por 2-3 minutos.

```
tcping ip 22 -c 9999
```

A acessibilidade portuária pode ser monitorada.

### Como Acessar O Disco Rígido Após Entrar No Resgate Restaurar Instantâneo &

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Você pode visualizar o instantâneo, por exemplo

```
snapper -c etc list
```

Ver alterações no arquivo de instantâneo

```
snapper -c etc status 5..6
```

Ver texto de comparação específico

```
snapper -c etc diff 3..5
```

Restaurar instantâneo: por exemplo, desfazer todas as alterações após o instantâneo 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Habilitar Persistência De Log

Habilitar a persistência de log em um sistema de recuperação requer que você crie manualmente o diretório correspondente e execute algumas etapas adicionais, porque você pode não ter um serviço systemd em execução. Aqui estão as etapas que você pode tentar:

Primeiro chroot, então

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Reinicialize em seu sistema Ubuntu: Depois de fazer as alterações acima, você precisa reinicializar sua máquina normalmente e em seu sistema Ubuntu em vez do sistema de recuperação.

Desta forma, o systemd-journald iniciará a nova configuração e começará a armazenar logs de forma persistente no disco rígido.

Lembre-se de que as operações acima são executadas em um sistema de recuperação, portanto, essas alterações só terão efeito quando o sistema for reinicializado e não estiver mais no modo de recuperação.

Isso significa que você não verá imediatamente nenhuma alteração nos logs existentes se tornar persistente, mas todos os logs gerados depois disso serão persistidos.

Desta forma você pode visualizar os logs do serviço ssh

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Notas Sobre Doenças Difíceis E Complicadas

### Resolva O Problema Estranho: O Servidor Não Pode Fazer ssh

Eu usei a ação do github para criar um script automático de compilação e implantação antes, mas descobri que o serviço de implantação não conseguia fazer ssh.

Entrar no sistema de resgate e consultar os logs é um problema de permissão:

`Missing privilege separation directory: /run/sshd`

Você pode criar este diretório com o seguinte comando

```
chown root:root /
systemd-tmpfiles --create
```

Após repetidas investigações, é github action o usuário que carregou tar é `1001` `uid`

tar A descompactação deve ser feita sem parâmetros `--no-same-owner` ela será descompactada em `uid` para `1001` usuário

Como resultado, o rsync alterará o grupo de usuários do diretório raiz e você não conseguirá fazer login no ssh após reiniciar.

Modifique o script de descompactação da seguinte forma:

```bash
tar --no-same-owner -xvf $TZT
rm $TZT

if [ -f "init.sh" ]; then
  ./init.sh
  rm init.sh
fi

rsync --remove-source-files -av . /
```

