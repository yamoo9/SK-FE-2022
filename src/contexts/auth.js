import React from 'react';

// [x] Context 생성
const AuthContext = React.createContext();

const initialState = {
  currentUser: null,
  permission: 'normal-one',
  isSigned: false,
};

// pure function
const authReducer = (state, action) => {
  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        currentUser: action.payload,
        isSigned: true,
      };
    case 'SIGN_OUT':
      return initialState;
    case 'ADMIN':
      return {
        ...state,
        permission: 'ADMINISTRATOR',
      };
    default:
      return state;
  }
};

// [x] 생성된 컨텍스트를 공급 (값: value)
// [x] 컨텍스트 프로바이더를 래핑하는 컴포넌트 내보내기
export const AuthProvider = ({ children }) => {
  const [auth, dispatch] = React.useReducer(authReducer, initialState);

  const signIn = (authUser) => dispatch({ type: 'SIGN_IN', payload: authUser });
  const signOut = () => dispatch({ type: 'SIGN_OUT' });
  const setAdmin = () => dispatch({ type: 'ADMIN' });

  const value = React.useMemo(
    () => ({
      auth,
      signIn,
      signOut,
      setAdmin,
    }),
    [auth]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
// ...
// ...
// ...
// ...
// 컴포넌트 <- 공급된 값을 전달
// - useContext 훅
// - 컨텍스트 컨서머
// - 컨텍스트 타입

// useAuth 커스텀 훅 내보내기
export const useAuth = () => {
  const value = React.useContext(AuthContext);

  if (!value)
    throw new Error('useAuth 훅은 AuthProvider 영역 내에서만 사용 가능합니다.');
  return value;
};
