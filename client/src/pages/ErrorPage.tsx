import { isRouteErrorResponse, useRouteError, Link } from 'react-router-dom'

export default function ErrorPage() {
  const error = useRouteError()
  if (isRouteErrorResponse(error)) {
    // Friendly 404 page for unmatched or thrown 404 responses
    if (error.status === 404) {
      return (
        <main style={{ padding: 24 }}>
          <h1>404 Not Found</h1>
          <p>お探しのページは見つかりませんでした。</p>
          <Link to="/">トップへ戻る</Link>
        </main>
      )
    }
    return (
      <main style={{ padding: 24 }}>
        <h1>エラー {error.status}</h1>
        <p>{error.statusText || '問題が発生しました。'}</p>
        <Link to="/">トップへ戻る</Link>
      </main>
    )
  }
  return (
    <main style={{ padding: 24 }}>
      <h1>予期しないエラーが発生しました。</h1>
      <p>ページの表示中に問題が発生しました。</p>
      <Link to="/">トップへ戻る</Link>
    </main>
  )
}
