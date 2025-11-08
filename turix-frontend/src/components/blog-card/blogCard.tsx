import styles from "@/components/blog-card/blogCard.module.css";
export default function BlogCard() {
    return (
        <div className={styles.card}>
            <h1> Blog</h1>
            <h2>Rio de Janeiro com WeexPass: O guia definitivo para viajar sozinho com conforto e economia!</h2>
            <p>Viajar sozinho pelo Rio de Janeiro nunca foi tão fácil! Com o WeexPass, você descobre os melhores roteiros, economiza em hospedagem e transporte, e ainda aproveita cada canto da Cidade Maravilhosa com total segurança e liberdade. Seja para curtir o pôr do sol no Arpoador, explorar trilhas secretas ou conhecer novos amigos em cada parada, o WeexPass é o seu companheiro ideal nessa jornada.</p>
            <button type='button'> Compartilhar</button>          <button type="button"> Ler mais</button>
        </div>

    );
}
