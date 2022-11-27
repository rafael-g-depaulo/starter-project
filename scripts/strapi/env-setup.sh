#!/bin/bash

# user data

# THIS SHOULD BE RUN FROM THE PROJECT ROOT! (i.e. as ./scripts/strapi/env-setup.sh)
sudo yum update -y
sudo yum install git -y

# install codedeploy agent
sudo yum update 
sudo yum install -y ruby
sudo yum install wget
wget https://aws-codedeploy-ap-southeast-1.s3.ap-southeast-1.amazonaws.com/latest/install
chmod +x ./install
sudo ./install auto
sudo service codedeploy-agent start

# install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.2/install.sh | bash

# load nvm
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion

git clone https://github.com/rafael-g-depaulo/starter-project.git project
cd project

# install node
nvm install
nvm use
# nvm install 16.15.1

cd

# install yarn
npm i -g yarn

# setup permissions for whole all files in project folder. this sometimes is necessary
mkdir /home/ec2-user/app
sudo chmod -R 777 /home/ec2-user/app
