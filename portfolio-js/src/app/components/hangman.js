"use client"
import { useState, useEffect } from "react"
import styles from "../styles/Hangman.module.css"

const palavras = [
  "REACT","JAVASCRIPT","NEXT","HTML","CSS","NODE",
  "PROGRAMACAO","COMPUTADOR","DESENVOLVEDOR","FRONTEND",
  "BACKEND","FULLSTACK","GITHUB","VERCEL","API",
  "ALGORITMO","BANCO","DADOS","SERVIDOR","CLIENTE",
  "WEB","APP","MOBILE","DESIGN","CODIGO",
  "DEBUG","FUNCAO","VARIAVEL","OBJETO","ARRAY"
]

export default function Hangman() {
  const [palavra, setPalavra] = useState("")
  const [letras, setLetras] = useState([])
  const [tentativas, setTentativas] = useState(6)
  const [input, setInput] = useState("")
  const [status, setStatus] = useState("jogando")

  useEffect(() => {
    iniciarJogo()
  }, [])

  function iniciarJogo() {
    const random =
      palavras[Math.floor(Math.random() * palavras.length)]

    setPalavra(random)
    setLetras([])
    setTentativas(6)
    setStatus("jogando")
  }

  function tentarLetra() {
    const letra = input.toUpperCase()

    if (!letra || letras.includes(letra)) return

    setLetras([...letras, letra])

    if (!palavra.includes(letra)) {
      setTentativas(tentativas - 1)
    }

    setInput("")
  }

  useEffect(() => {
    if (!palavra) return

    const venceu = palavra
      .split("")
      .every(l => letras.includes(l))

    if (venceu) setStatus("venceu")
    else if (tentativas <= 0) setStatus("perdeu")
  }, [letras, tentativas, palavra])

  function renderPalavra() {
    return palavra
      .split("")
      .map(l => (letras.includes(l) ? l : "_"))
      .join(" ")
  }

  return (
    <div className={styles.container}>
      <h2>{renderPalavra()}</h2>

      <p>Tentativas restantes: {tentativas}</p>

      <input
        value={input}
        maxLength={1}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={tentarLetra}>Enviar</button>

      <p>Letras usadas:</p>
      <div>{letras.join(", ")}</div>

      {status === "venceu" && (
        <p className={styles.win}>
          🎉 Você venceu! Palavra: {palavra}
        </p>
      )}

      {status === "perdeu" && (
        <p className={styles.lose}>
          ❌ Você perdeu! Palavra: {palavra}
        </p>
      )}

      <button onClick={iniciarJogo}>
        Reiniciar
      </button>
    </div>
  )
}