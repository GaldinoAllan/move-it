import { useAuth } from '../contexts/AuthContext';

import { Home } from './home'
import { Landing } from './landing';

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