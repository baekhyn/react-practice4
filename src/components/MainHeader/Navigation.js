import React, { useContext } from 'react';

import AuthContext from '../../store/auth-context';
import classes from './Navigation.module.css';

const Navigation = () => {
  const ctx = useContext(AuthContext);

  return (
    <nav className={classes.nav}>
      <ul>
        {ctx.isLoggedIn && (
          <li>
            <a href='/'>Users</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <a href='/'>Admin</a>
          </li>
        )}
        {ctx.isLoggedIn && (
          <li>
            <button onClick={ctx.onLogout}>Logout</button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;

// 소비자 사용법

// {/* <AuthContext.Consumer>
// {/* context 객체 얻기 */}
// {(ctx) => {
//   return (
//     <nav className={classes.nav}>
//       <ul>
//         {ctx.isLoggedIn && (
//           <li>
//             <a href='/'>Users</a>
//           </li>
//         )}
//         {ctx.isLoggedIn && (
//           <li>
//             <a href='/'>Admin</a>
//           </li>
//         )}
//         {ctx.isLoggedIn && (
//           <li>
//             <button onClick={props.onLogout}>Logout</button>
//           </li>
//         )}
//       </ul>
//     </nav>
//   );
// }}
// {/* context 객체 얻기 */}
// </AuthContext.Consumer> */}
