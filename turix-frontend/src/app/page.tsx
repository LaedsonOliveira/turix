import Image from "next/image";
import styles from "./page.module.css";
import DestinationList from "@/components/DestinationList/DestinationList";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <h2>Bem-vindo ao Turix</h2>
      <p>Uma viagem perfeita pelo Brasil, feita para você!</p>
      <DestinationList />

      </main>
    </div>
  );
}
