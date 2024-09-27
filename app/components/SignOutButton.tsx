import { useAuth } from '@clerk/nextjs';

const SignOutButton = () => {
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
    window.location.href = '/'; // Redirect after sign out
  };

  return <button onClick={handleSignOut}>Sign Out</button>;
};

export default SignOutButton;
