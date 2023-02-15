import { Editor } from './components/Editor'

export function App() {
  return (
    <div className="h-screen bg-omni-dark flex">
      <main className="flex-1 px-10 py-16 max-w-3xl mx-auto">
        <Editor />
      </main>
    </div>
  )
}
