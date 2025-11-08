import styles from "@/components/criar-conta/CriarConta.module.css"

export default function CriarConta() {
    return (
        <body>
            <main className={styles.container}>
                <div className={styles.card}>
                    <h2>Criar Conta</h2>
                    <form className={styles.formgrid} action="dashboard.html" method="get">
                        <div>
                            <label>Nome</label>
                            <input className={styles.input} type="text" name="nome" required/>
                        </div>
                        <div>
                            <label>Email</label>
                            <input className={styles.input} type="email" name="email" required/>
                        </div>
                        <div className={styles.full}>
                            <button className={styles.btn} type="submit">Salvar</button>
                        </div>
                    </form>
                </div>
            </main>
        </body>
    );
}