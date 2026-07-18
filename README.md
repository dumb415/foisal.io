# Terminal Portfolio — Foisal Islam (Niloy)

Amber CRT-themed portfolio built with React + Vite.

## Run locally
    npm install
    npm run dev

## Deploy to GitHub Pages
1. Create a repo named `dumb415.github.io` on GitHub
2. Push this folder to it:
       git init
       git add .
       git commit -m "portfolio site"
       git branch -M main
       git remote add origin https://github.com/dumb415/dumb415.github.io.git
       git push -u origin main
3. Deploy:
       npm install
       npm run deploy
4. On GitHub: Settings → Pages → Source: Deploy from a branch → branch `gh-pages`, folder `/ (root)`

Site: https://dumb415.github.io

If you use a repo named `portfolio` instead, change `base` in vite.config.js to `/portfolio/`.
