import { useAuth } from '../contexts/AuthContext';

import Home from '../components/_home'
import Landing from '../components/_landing';

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