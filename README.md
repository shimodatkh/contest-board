# contest-board
ISUCON用解析ダッシュボード


# proto生成
```sh
./proto.sh
```

# サービス単体のDocker動作確認

```shell
sudo docker build .
sudo docker run --publish 3000:3000 --detach eb6ae530ed90
sudo docker run --publish 9090:9090 --detach 928c7a362bb6
sudo docker ps

sudo docker exec -it determined_villani bash

```
