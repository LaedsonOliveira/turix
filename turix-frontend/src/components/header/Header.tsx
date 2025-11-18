
import styles from "./Header.module.css"
import Link from "next/link";

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.headerSuperior}>
                <h1 className={styles.logo}>Turix.com</h1>

                <nav>
                    <Link href="/blog">Cadastrar Propriedade</Link>
                    <Link href="/login">Login</Link>
                    <Link href="/criar-conta">Criar Conta</Link>
                </nav>
            </div>

            <div className={styles.boasVindas}>
                <h2>Bem-vindo ao Turix o seu guia Turistico</h2>
                <p>Uma viagem perfeita pelo Brasil, feita para você!</p>

            </div>



            <nav>
                <Link href="/">Home</Link>
                <Link href="/destinos">Destinos</Link>
                <Link href="/blog">Blog</Link>
            </nav>

        </header>
    );
}