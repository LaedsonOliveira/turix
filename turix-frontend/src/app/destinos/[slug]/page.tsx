import { destinos } from "@/data/destinos";
import styles from "@/app/destinos/[slug]/page.module.css"
import Image from "next/image";

interface DestinoPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function DestinoPage( { params }: DestinoPageProps) {

    const { slug } = await params;

    console.log("slug recebido:", slug);

    const destino = destinos.find( (d) => d.slug === slug);

    console.log("Slug recebido:", params);
    console.log("Todos os destinos:", destinos);
    console.log("Destino encontrado:", destino);

    if (!destino) {
        return <p>Destino não encontrado</p>;
    }

    return (
        <main className={styles.slug_destino}>
            <h1 className={styles.title}>{destino.title}</h1>
            <Image src={destino.image} alt={destino.title} width={270} height={183} className={styles.image}></Image>
            <p className={styles.details}>{destino.summary}</p>
        </main>
    );
}