import {
  useState,
  createContext,
  useContext,
  useEffect,
  type PropsWithChildren,
} from 'react'

/**
 * We need to know which questionnaire is currently used to redirect the user when he logs out
 *
 * ## Example
 *
 * - For "LOG2021X11" we will redirect the user to domain.ltd/log after logout
 * - For "rece2021X11" we will redirect the user to domain.ltd/rece
 */
const SetLogoutPathContext = createContext((() => {}) as (s: string) => void)
const LogoutPathContext = createContext('')

export const LogoutPathProvider = ({ children }: PropsWithChildren) => {
  const [logoutPath, setLogoutPath] = useState('')
  return (
    <SetLogoutPathContext.Provider value={setLogoutPath}>
      <LogoutPathContext.Provider value={logoutPath}>
        {children}
      </LogoutPathContext.Provider>
    </SetLogoutPathContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLogoutUrl(): string {
  return `${import.meta.env.VITE_PORTAIL_URL}/${useContext(LogoutPathContext)}`
}

// eslint-disable-next-line react-refresh/only-export-components
export function useSetLogoutQuestionnaire(questionnaireId: string): void {
  const setLogoutPath = useContext(SetLogoutPathContext)
  useEffect(() => {
    setLogoutPath(
      (RegExp(/^[^2]+/).exec(questionnaireId) ?? '')[0].toLowerCase()
    )
  }, [questionnaireId, setLogoutPath])
}
