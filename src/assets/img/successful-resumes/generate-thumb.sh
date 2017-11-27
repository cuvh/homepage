FILES=$(ls -1 | grep 1.jpg)

for i in $FILES; do gm convert -resize 240x340 $i ./thumb/$i; done
for i in $FILES; do gm convert -resize 480x680 $i ./thumb/2x-$i; done