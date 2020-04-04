# deploy.sh
# 错误时停止
set -e

# 打包
npm run build

# 进入目标文件夹
cd dist

# 提交到本地仓库

git init
git add -A
git commit -m 'deploy'

# 提交到 git@github.com:niubizhao/classroom.git 项目的 master 分支
git push -f https://github.com/niubizhao/aaausername.github.io master:gh-pages

cd -