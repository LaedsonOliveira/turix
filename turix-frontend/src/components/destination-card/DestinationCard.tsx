import Link from "next/link";
import styles from "./DestinationCard.module.css"
import Image from "next/image"

type Props = {
    slug: string;
    title: string;
    summary: string;
    image: string;
}

export default function DestinationCard ({ slug, title, summary, image } : Props) {
    return(
        <div className={styles.card}>
            <Image src={image} alt={title} width={300} height={180} className={styles.image}/>
            <div className={styles.content}>
                <h3>{title}</h3>
                <p>{summary}</p>
                <Link href={`/destinos/${slug}`} className={styles.link}>
                    ver mais
                </Link>
            </div>
            
        </div>
    );
}