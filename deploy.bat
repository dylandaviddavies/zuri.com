call npm run build
call cd build/
call git init
call git add -A
call git commit -m 'deploy'
call git push -f git@github.com:dylandaviddavies/zuri.com.git master:gh-pages