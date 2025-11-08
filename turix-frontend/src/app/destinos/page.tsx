import DestinationCard from "@/components/destination-card/DestinationCard";
import styles from "@/app/destinos/page.module.css"
import { destinos } from "../../data/destinos"


export default function DestinosPage(){
    return (
        <main className={styles.container}>
            <h1>Destinos Turísticos</h1>
            <div className={styles.grid}>
                { destinos.map( (destino) => (
                    <DestinationCard
                    key={destino.slug}
                    title={destino.title}
                    image={destino.image}
                    summary={destino.summary}
                    slug={destino.slug}
                    />
                ))}
            </div>
        </main>
    );
}