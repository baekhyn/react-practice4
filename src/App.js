import React, { useContext } from 'react';

import Login from './components/Login/Login';
import Home from './components/Home/Home';
import MainHeader from './components/MainHeader/MainHeader';
import AuthContext from './store/auth-context';

function App() {
  const ctx = useContext(AuthContext);

  return (
    <React.Fragment>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && <Home />}
      </main>
    </React.Fragment>
  );
}

export default App;

// import React, { useEffect, useState } from 'react';

// import Login from './components/Login/Login';
// import Home from './components/Home/Home';
// import MainHeader from './components/MainHeader/MainHeader';
// import AuthContext from './components/store/auth-context';

// function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   // 위치 왜???

//   useEffect(() => {
//     const storedUserLoggedInInformation = localStorage.getItem('isLoggedIn');

//     if (storedUserLoggedInInformation === '1') {
//       setIsLoggedIn(true);
//     }
//   }, []);
//   // 재평가 후에 실행

//   const loginHandler = (email, password) => {
//     // We should of course check email and password
//     // But it's just a dummy/ demo anyways
//     localStorage.setItem('isLoggedIn', '1');
//     setIsLoggedIn(true);
//   };

//   const logoutHandler = () => {
//     localStorage.removeItem('isLoggedIn');
//     setIsLoggedIn(false);
//   };

//   return (
//     <AuthContext.Provider
//       value={{
//         isLoggedIn: isLoggedIn,
//         onLogout: logoutHandler,
//       }}
//     >
//       {/* 소비 컴포넌트에 전달 */}
//       {/* propchain 중단 */}
//       <MainHeader />
//       <main>
//         {!isLoggedIn && <Login onLogin={loginHandler} />}
//         {isLoggedIn && <Home onLogout={logoutHandler} />}
//       </main>
//     </AuthContext.Provider>
//   );
// }

// export default App;
