import { useSession, signIn, signOut } from "next-auth/react";
export default function Dashboard() {
  const { data: session } = useSession({ required: true });
  if (!session) {
    return (
      <>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </>
    );
  }

  return (
    <>
      Signed in as {session?.user?.email} <br />
      <button onClick={() => signOut()}>Sign out</button>
    </>
  );
}
