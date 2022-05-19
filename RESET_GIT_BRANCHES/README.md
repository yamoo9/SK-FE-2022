# 멀티 브랜치 일괄 제거

CLI 명령어를 사용해 로컬(local), 원격(origin) 저장소의 특정 브랜치를 일괄 제거하는 방법입니다. ([참고](https://stackoverflow.com/a/54697830))

## 로컬 저장소 멀티 브렌치 일괄 제거

로컬(local)의 특정 멀티 브렌치 목록을 터미널에 출력하려면 아래 명령을 사용합니다.

```sh
git branch --list 'lecture/*'
```

로컬(local) 멀티 브랜치를 일괄 제거할 경우, 아래 명령을 사용합니다.

```sh
git branch -D $(git branch --list 'lecture/*')
```

## 원격 저장소 멀티 브랜치 일괄 제거

원격(origin) 멀티 브렌치 목록을 터미널에 출력하려면 아래 명령을 사용합니다.

```sh
git branch -r # --remotes
```

원격(origin)의 특정 멀티 브렌치 목록을 터미널에 출력하려면 아래 명령을 사용합니다.

```sh
git branch -r | grep -Eo 'lecture/.*'
```

원격(origin) 멀티 브랜치를 일괄 제거할 경우, 아래 명령을 사용합니다.

```sh
git branch -r | grep -Eo 'lecture/.*' | xargs -I {} git push origin :{}
```

txt 파일에서 제거할 목록을 읽어 처리 원격(origin) 멀티 브랜치를 일괄 제거하고자 한다면 다음 명령을 사용할 수 있습니다.

```sh
cat will-delete-remote-branches.txt | xargs -I  {} git push origin :{}
```