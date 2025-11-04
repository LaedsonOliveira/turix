import styles from "./DestinationList.module.css"
import { destinos } from "@/data/destinos"
import DestinationCard from "../DestinationCard/DestinationCard";


export default function DestinationList( ) {
    return (
        <div className={styles.grid}>
            {destinos.map( (destino) => (
                <DestinationCard key={destino.slug} {...destino}/>
            ))}
        </div>
    );
}