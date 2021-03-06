import { Layout } from './components/Layout'
import { BadgeCheckIcon } from '@heroicons/react/solid'

function App() {
  return (
    <Layout>
      <p className="my-5 text-xl font-bold">React basic lesson</p>
      <BadgeCheckIcon className="h-12 w-12 text-blue-500" />
    </Layout>
  )
}

export default App
