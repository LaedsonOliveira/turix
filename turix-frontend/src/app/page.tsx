import Image from "next/image";
import styles from "./page.module.css";
import DestinationList from "@/components/destination-list/DestinationList";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
      <DestinationList />

      </main>
    </div>
  );
}
