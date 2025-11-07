
import  styles  from "./Header.module.css"
import Link from "next/link";




export default function Header() {


    return (
        <header className={styles.header}>
            <h1 className={styles.logo}>Turix</h1>
            <nav>
                <Link href="/">Home</Link>
                <Link href="/destinos">Destinos</Link>
                <Link href="/">Blog</Link>
                <Link href="/">Conta</Link>
            </nav>

        </header>
    );
}