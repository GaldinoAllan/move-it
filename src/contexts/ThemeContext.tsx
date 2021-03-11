import {
  useContext,
  createContext,
  useState,
  useEffect,
} from 'react';

import { ThemeProvider } from 'styled-components';
import { dark, light } from '../styles/theme';

interface DefaultTheme {
  title: string;
}

interface ThemeContextData {
  theme: DefaultTheme;
  ToggleTheme(): void;
}

const ThemeContext = createContext({} as ThemeContextData);

export function ThemesProvider({ children }) {
  const [theme, setTheme] = useState<DefaultTheme>(light);

  useEffect(() => {
    const themeLocal = localStorage.getItem('@MoveIt:theme');

    setTheme(themeLocal === 'light' ? light : dark);
  }, []);

  const ToggleTheme = () => {
    if (theme.title === 'light') {
      localStorage.setItem('@MoveIt:theme', dark.title);
      setTheme(dark);
    } else {
      localStorage.setItem('@MoveIt:theme', light.title);
      setTheme(light);
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, ToggleTheme }} >
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext);

  return context;
}