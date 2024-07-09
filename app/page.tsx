import Image from "next/image";
import LoginPage from "./(auth)/login/page";
import { Dashboard } from "./dashboard/page";
import HomePage from "./(site)/home/page";

export default function Home() {
  return (
    <main>
      <HomePage/>
    </main>
  );
}
