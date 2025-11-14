import Image from "next/image"
import styles from "./Footer.module.css"

export default function Footer() {
    return (
        <footer className={styles.footer}>

            <div className={styles.container}>

                {/* Módulo 1: Formulário */}
                <div className={styles.footerModule}>
                    <form className={styles.form}>
                        <label htmlFor="email">Inscreva-se para receber ofertas</label>
                        <input id="email" type="email" placeholder="Insira seu email" required />
                        <button type="submit" className={styles.button}>Quero recebê-lás!</button>
                    </form>
                </div>

                {/* Módulo 2: Contato */}
                <div className={styles.footerModule}>
                    <h4 className={styles.footerTitle}>Contato</h4>

                    <div className={styles.contactInfo}>
                        <div className={styles.contactItem}>
                            <Image
                                src="/images/envelope.svg"
                                alt="Email"
                                width={18}
                                height={18}
                            />
                            <span>contato@turix.com</span>
                        </div>

                        <div className={styles.contactItem}>
                            <Image src="/images/telephone.svg" alt="Telefone" width={18} height={18} />
                            <span>(81) 99999-9999</span>
                        </div>

                        <div className={styles.socialLinks}>
                            <a href="#" className={styles.socialLink}>Facebook</a>
                            <a href="https://www.instagram.com/turix_" target="_blank" className={styles.socialLink}>Instagram</a>
                            <a href="#" className={styles.socialLink}>LinkedIn</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.footerBottom}>
                © {new Date().getFullYear()} Turix - Todos os direitos reservados.
            </div>
        </footer>
    );
}
