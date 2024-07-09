import Image from "next/image";
import LoginPage from "./(auth)/login/page";
import { Dashboard } from "./dashboard/page";

export default function Home() {
  return (
    <main>
      <Dashboard />
    </main>
  );
}
