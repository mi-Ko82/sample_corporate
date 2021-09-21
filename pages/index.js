import Head from 'next/head'

const siteName = '明るいHOUSE';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>{siteName}</title>
        <meta name="description" content={siteName + 'のホームページです'} />
        <meta name="format-detection" content="telephone=no" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:url" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteName} />
        <meta property="og:description" content={siteName + 'のホームページです'} />
        <meta property="og:image" content="" />
        <meta property="og:locale" content="ja_JP" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      </main>
    </div>
  )
}
