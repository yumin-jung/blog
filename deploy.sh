#!/usr/bin/env bash
echo "> Blog Deploy"
sudo su
cd /home/ec2-user/blog
chmod +x ./deploy.sh
pnpm -v
pnpm install next@latest
pm2 delete blog
pm2 start "npx next start" --name blog