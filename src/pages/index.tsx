import { useAuth } from '../contexts/AuthContext';

import { Home } from './_home'
import { Landing } from './_landing';

export default function App() {
  const { currentUser, loading } = useAuth()

  return (
    <>
      {
        !currentUser
          ? <Landing />
          : <> {loading ? 'carregando' : <Home />} </>
      }
    </>
  )
}