# Website Ngodingo
...
## struktur
```md
.
├── common/
│   ├── components/
│   ├── layouts/
│   ├── hooks/
│   └── utilts/
├── public/
│   └── static-db/
│       ├── assets/
│       ├── home/
│       ├── blog/
│       └── portfolio/
├── services/
│   ├── blog/
│   └── portfolio/
└── pages/
    ├── _app/
    ├── home/
    ├── blog/
    │   └── [post_slug]/
    ├── portfolio/
    │   └── [project_slug]/
    ├── _app.page.js
    ├── document.page.js
    └── index.page.js
```
website ini menggunakan skema layered architecture yang mana memiliki 3 layer/lapisan:
- **view-layer** `pages/` sebagai user-interface dan routing
- **logic-layer** `services/` untuk abstraksi logika program, misal: memfilter data atau mengambil data dari data-layer
- **data-layer** `public/static-db/` sebagai penyimpanan data statis

note: setiap request yang dikirim harus melewati layer per layer secara berurutan (data -> logic -> view atau sebaliknya)

direktori `common/` berisi kode reusable

## setup di workspace
pastikan komputer sudah terinstall nodejs dan git
```
node --version
git --version
```
clone repo
```
git clone https://github.com/ngodingo/landing-page.git
```
masuk ke direktori
```
cd landing-page
```
install dependency yang dibutuhkan
```
npm install
```
menjalankan development server
```
npm run dev
```

## menambahkan halaman
...
## styling
...


<details>
  <summary>nextjs readme</summary>
  
  This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

  ## Getting Started

  First, run the development server:

  ```bash
  npm run dev
  # or
  yarn dev
  ```

  Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

  You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

  [API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

  The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

  This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

  ## Learn More

  To learn more about Next.js, take a look at the following resources:

  - [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
  - [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

  You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

  ## Deploy on Vercel

  The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

  Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

</details>
