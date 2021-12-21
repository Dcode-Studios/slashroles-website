# abort on errors
set -e

npm run build

cd dist

echo 'slashroles.dcode.site' > CNAME

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/Dcode-Studios/slashroles-website.git master:gh-pages

cd -