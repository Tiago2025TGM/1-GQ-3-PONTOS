import styles from "../styles/Home.module.css"
import Link from "next/link"

export default function Home() {
  return (
    <main className={styles.container}>
      <h1 className={styles.title}>Seu Nome</h1>
      
      <section className={styles.section}>
        <h2>Sobre mim</h2>
        <p>Sou desenvolvedor focado em React e Next.js.</p>
      </section>

      <section className={styles.section}>
        <h2>Habilidades</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>Next.js</li>
          <li>CSS</li>
        </ul>
      </section>

      <section className={styles.section}>
        <h2>Projeto destaque</h2>
        <Link href="/forca">🎮 Jogar Jogo da Forca</Link>
      </section>
    </main>
  )
}
