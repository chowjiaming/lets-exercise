import {type NextPage} from 'next';
// import Link from 'next/link';
// import {signIn, signOut, useSession} from 'next-auth/react';
import {Meta} from '@/Meta';

// import {api} from '@/utils/api';

const Home: NextPage = () => {
  // const hello = api.example.hello.useQuery({text: 'from tRPC'});

  return (
    <>
      <Meta />
    </>
  );
};

export default Home;

// const AuthShowcase: React.FC = () => {
//   const {data: sessionData} = useSession();

//   const {data: secretMessage} = api.example.getSecretMessage.useQuery(
//     undefined, // no input
//     {enabled: sessionData?.user !== undefined}
//   );

//   return (
//     <div className={styles.authContainer}>
//       <p className={styles.showcaseText}>
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className={styles.loginButton}
//         onClick={sessionData ? () => void signOut() : () => void signIn()}
//       >
//         {sessionData ? 'Sign out' : 'Sign in'}
//       </button>
//     </div>
//   );
// };
