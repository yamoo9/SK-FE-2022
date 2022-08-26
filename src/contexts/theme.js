import { createContext, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const theme = {
    currentTheme: 'light',
    themeConfig: {
      primary: {},
      secondary: {},
      accent: {},
      negative: {},
      positive: {},
    },
  };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const theme = useContext(ThemeContext);
  if (!theme)
    throw new Error(
      'useTheme 훅은 ThemeProvider 영역 내에서만 사용 가능합니다.'
    );
  return theme;
};
