import Image from "next/image";
import LoginPage from "./(auth)/login/page";
import HomePage from "./(site)/home/page";
import Dashboard from "./(backend)/dashboard/page";

export default function Home() {
  return (
    <main>
      <Dashboard />
    </main>
  );
}
