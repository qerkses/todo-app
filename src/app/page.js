import TodoList from './components/todo-list'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <TodoList />
    </main>
  )
}

