export default function NotFound() {
  return (
    <main style={{ padding: 24 }}>
      <h1>404 Not Found</h1>
      <p>ページが見つかりませんでした。</p>
      <a href={`${import.meta.env.BASE_URL}`}>トップへ戻る</a>
    </main>
  )
}
