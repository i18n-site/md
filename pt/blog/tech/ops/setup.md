# Inicialize o servidor (usando partição BTRFS e snapshots agendados com Snapper)

## Compra de servidor Contabo

O Contabo é um fornecedor de VPS barato na Alemanha, com uma história longa (mais de 20 anos) e muitos usuários (mais de 200 mil), sem risco de desvio.

Compra do VPS em [contabo.com](//contabo.com) - lembre-se de escolher a moeda Euro para um preço mais vantajoso.

![](https://i-01.eu.org/1718285782.avif)

O Contabo cobra uma taxa de instalação única.
Contudo, há alguns dias do mês com instalação gratuita; basta se cadastrar e ficar atento aos e-mails promocionais.

Além da área franca na Europa, há diferentes níveis de acréscimo de preços em outras regiões.

Escolhi um servidor na Europa, pois, com o Cloudflare, a localização do servidor não faz muita diferença.

A configuração final é a seguinte: 16GB de memória, 6 CPUs, 200GB NVMe, por 9,50 euros por mês, equivalente a 74,43 RMB.

![](https://i-01.eu.org/1718286008.avif)

**Este preço é quase um décimo do preço da Alibaba Cloud e da Amazon**.

![](https://i-01.eu.org/1718356956.avif)

Usei [Yet-Another-Bench-Script](https://github.com/masonr/yet-another-bench-script) para testar o desempenho e os parâmetros:

```
curl -sL yabs.sh | bash -s -- -s https://www.vpsbenchmarks.com/yabs/upload
```

Exibe o modelo de CPU `AMD EPYC 9224 24-Core Processor`, com pontuação de desempenho de núcleo único de 1285
, e pontuação de desempenho multi-núcleo de 4277. Mais resultados em [vpsbenchmarks.com](https://www.vpsbenchmarks.com/yabs/contabo-6c-16gb-3fb7d8)

Comprei três servidores ao mesmo tempo e os ativei simultaneamente, garantindo que todos estivessem na mesma sala para facilitar a configuração de alta disponibilidade no futuro.

O servidor ocasionalmente desliga, mas a alta disponibilidade garante a acessibilidade do site.

Novos usuários precisam fornecer carteira de identidade para verificação de identidade na hora da compra.

## Configuração de login sem senha

Alguns minutos após, todos os servidores foram ativados

A primeira ação é editar o arquivo `~/.ssh/config` na máquina local para definir um alias, e então usar `ssh-copy-id root@c2` para configurar o login sem senha.

![](https://i-01.eu.org/1718287198.avif)

Você pode ajustar este script [ssh-copy-id.sh](https://github.com/i18n-ops/ubuntu/blob/main/ssh-copy-id.sh) para concluir a configuração inicial mais rapidamente.

Após a configuração sem senha, é possível usar [pdsh](https://github.com/chaos/pdsh) para operações em lote, o que é conveniente.

Primeiro, habilite manualmente o IPv6 e faça o teste

```bash
pdsh -w 'c0 c1 c2' 'bash -i -c enable_ipv6'
pdsh -w 'c0 c1 c2' 'curl -s 6.ipw.cn;echo'
```

![](https://i-01.eu.org/1718287969.avif)

Em seguida, atualize o sistema para Ubuntu 24 e instale os softwares comuns.

```bash
pdsh -w 'c0 c1 c2' 'curl -s https://raw.githubusercontent.com/i18n-ops/ubuntu/main/boot.sh | CN=1 bash'
```

CN=1 indica mudar o idioma para chinês e o fuso horário para Pequim.

O software instalado por padrão é configurado de acordo com meus hábitos de uso pessoal, como [mise](https://github.com/jdx/mise) e [direnv](https://direnv.net/). Se necessário, você pode replicar o repositório [i18n-ops/ubuntu](https://github.com/i18n-ops/ubuntu) e fazer as alterações conforme necessário.

Essa etapa leva algum tempo; após esperar meia hora, a atualização e a instalação do software comum serão concluídas. Você pode confirmar isso com o seguinte comando:

```bash
pdsh -w 'c0 c1 c2' 'cat /etc/issue'
```

![](https://i-01.eu.org/1718290346.avif)

## Acelere o SSH usando mosh

A rede da Europa para a China não é estável. Recomenda-se usar [mosh](//mosh.org) para melhorar a velocidade do `ssh`.

Crie o script `c0` no diretório local `~/.bin` (adicionado principalmente à variável de ambiente `PATH`) da seguinte forma:

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

Após a criação, atribua permissões de execução e crie links simbólicos para `c1` e `c2`.

```bash
chmod +x c0
ln -s c0 c1
ln -s c0 c2
```

Daqui em diante, você pode simplesmente digitar `c0` ou `c1` para se conectar rapidamente via `mosh` e entrar no [tmux](https://www.ruanyifeng.com/blog/2019/10/tmux.html).

## Converter o formato de partição de ext4 para btrfs

[Btrfs](https://wikipedia.org/wiki/Btrfs) pode fazer snapshots de disco, facilitando o backup.

Primeiro, entre no sistema de resgate

![](https://i-01.eu.org/1718300448.avif)

Escolha o Debian Rescue

![](https://i-01.eu.org/1718300753.avif)

Aguarde o servidor reiniciar

Quando usar o SSH, pode haver mudanças na impressão digital; use `ssh-keygen -R ip` para limpar

Em seguida, execute o seguinte script para converter a partição:

```bash
nohup bash -c "bash <(curl -s https://raw.githubusercontent.com/i18n-ops/ops/main/contabo/ext4_btrfs.sh) >/tmp/nohup.out 2>&1 && reboot" &
sleep 1 && tail -f /tmp/nohup.out
```

O script reiniciará automaticamente o sistema após a conversão ser bem-sucedida.

### Verifique a taxa de compressão do btrfs

Por padrão, ele será compactado automaticamente. O comando para verificar a taxa de compressão é:

```bash
if ! command -v compsize &>/dev/null; then
apt install -y  btrfs-compsize
fi
compsize -x /
```

### Compactação manual

Se você é um perfeccionista, também pode fazer uma compactação manual completa do disco

```bash
btrfs filesystem defragment -r -czstd /
```

Como mostrado na figura abaixo, após a compactação manual no novo sistema, quase 100 MB a mais foram compactados.

![](https://i-01.eu.org/2023/12/8NWlr4c.webp)

### Crie um backup de snapshot Btrfs com Snapper

[Snapper](https://manual.siduction.org/sys-admin-btrfs-snapper_en.html) é o melhor companheiro para backups Btrfs.

O script de inicialização criará o diretório `~/ubuntu`; execute o seguinte comando para continuar:

```
~/ubuntu/snapper/init.sh
```

O conteúdo do script pode ser encontrado em [github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh](https://github.com/i18n-ops/ubuntu/blob/main/snapper/init.sh)

Use `snapper list-configs` para ver os subvolumes configurados para snapshots

![](https://i-01.eu.org/1718302689.avif)

Use `snapper -c mnt list` para ver os snapshots de um subvolume específico

`/etc/snapper/configs/mnt` permite ver as configurações específicas de backup para esse subvolume

Mais referências:

[Brincar facilmente com a função de snapshot de Btrfs com Snapper](https://zhuanlan.zhihu.com/p/31082518)

## Instantâneos do servidor Contabo

O Contabo oferece a função de snapshot do servidor, mas não suporta snapshots agendados. Escrevi um [script de GitHub Actions](https://github.com/i18n-cron/cron/actions/workflows/contabo.snapshot.yml) para fazer snapshots diários.

![](https://i-01.eu.org/1718304206.avif)

Para restaurar um snapshot do servidor, clique em "Control" no menu de administração

![](https://i-01.eu.org/1718304275.avif)

Em seguida, clique em "Snapshots" para restaurar.

![](https://i-01.eu.org/1718304063.avif)

No entanto, o granularity desse snapshot é muito grande; se restaurado, todos os dados adicionados recentemente serão perdidos, use com cuidado.

Normalmente, é mais conveniente usar snapshots Btrfs.

## Detalhes do sistema de resgate

Quando a porta 22 estiver acessível via [tcping](https://github.com/paradiseduo/tcping), haverá um período de 2-3 minutos onde você não poderá acessar com a senha configurada.

```
tcping ip 22 -c 9999
```

Você pode monitorar a acessibilidade da porta.

### Como acessar o disco rígido após entrar no resgate e restaurar o snapshot

```
mkdir -p /mnt/os
mount  /dev/sda3 /mnt/os -t btrfs -o "defaults,ssd,discard,noatime,compress=zstd:3,space_cache=v2"
mount --bind /dev /mnt/os/dev
mount --bind /proc /mnt/os/proc
mount --bind /sys /mnt/os/sys
mount --bind /run /mnt/os/run
chroot /mnt/os zsh -c "mount -a && dbus-daemon --system 2>/dev/null; exec zsh"
```

Você pode visualizar os snapshots, por exemplo:

```
snapper -c etc list
```

Ver as mudanças no arquivo de snapshot

```
snapper -c etc status 5..6
```

Ver o texto específico das diferenças

```
snapper -c etc diff 3..5
```

Restaurar o snapshot: por exemplo, desfazer todas as alterações após o snapshot 5

```
snapper -c etc undochange 1..0
snapper -c disk undochange 1..0
```

### Habilitar a persistência de logs

Para habilitar a persistência de logs no sistema de resgate, você precisa criar manualmente o diretório correspondente e executar algumas etapas adicionais, pois pode não haver serviços systemd em execução. Aqui estão as etapas que você pode tentar:

Primeiro, execute o chroot, e em seguida,

```
mkdir -p /var/log/journal
chown root:systemd-journal /var/log/journal
chmod 2755 /var/log/journal
sed -i 's/^#\?\s*Storage=.*/Storage=persistent/' /etc/systemd/journald.conf
```

Reinicie para o seu sistema Ubuntu: Após fazer as alterações acima, você precisa reiniciar sua máquina normalmente e entrar no seu sistema Ubuntu, em vez do sistema de resgate.

Desta forma, o systemd-journald iniciará com a nova configuração e começará a armazenar logs de forma persistente no disco rígido.

Lembre-se de que as operações acima são realizadas no sistema de resgate, portanto, essas alterações não terão efeito até que o sistema seja reinicializado e não esteja mais no modo de resgate.

Isso significa que você não verá imediatamente os logs existentes se tornarem persistentes, mas todos os logs gerados a partir daquele momento serão armazenados de forma persistente.

Dessa forma, você pode visualizar os logs do serviço SSH

```
journalctl --directory=/var/log/journal  _SYSTEMD_UNIT=ssh.service
```

## Notas sobre problemas difíceis e complicados

### Resolver o problema estranho: o servidor não pode fazer SSH

Antes, usei um script de compilação e implantação automática do GitHub Actions, mas descobri que não conseguia fazer SSH após a implantação do serviço.

Entre no sistema de resgate e consulte os logs; é um problema de permissão:

`Missing privilege separation directory: /run/sshd`

Você pode criar este diretório com o seguinte comando:

```
chown root:root /
systemd-tmpfiles --create
```

Após várias investigações, descobri que o usuário `uid` do tar no GitHub Actions é `1001`

Se o tar for descompactado sem o parâmetro `--no-same-owner`, ele será descompactado como usuário `uid` `1001`

Como resultado, o rsync alterará o grupo de usuários do diretório raiz, e você não poderá fazer login via SSH após a reinicialização.

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