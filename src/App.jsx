import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(1)
  const [article, setArticle] = useState("")

  function nextPage() {
    setCount(count + 1)
  }

  function prevPage() {
    setCount(count - 1)
  }

  useEffect (() => {
    fetch('https://dummyjson.com/posts/' + count).then((res => res.json())).then(data => setArticle(data))
  }, [count])

  return (
    <>
    <main>
      <header>
        <h3>Useeffect and Data Fetching</h3>
        <p>{count}</p>
      </header>
      <div className="button">
        <button onClick={prevPage}>Prev Page</button>
        <button onClick={nextPage}>Next Page</button>
      </div>
      <article>
        <h3>{article.title}</h3>
        <p>{article.body}</p>
      </article>
    </main>
    </>
  )
}

export default App
