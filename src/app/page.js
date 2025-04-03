"use client";

import styles from "./page.module.css";
import { useState } from "react";
import PromptForm from "@/components/PromptForm";
import ReactMarkdown from 'react-markdown';
import rehypeHighlight from 'rehype-highlight';
import Image from "next/image";


export default function Home() {
  const [choices, setChoices] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <main className={styles.main}>
      <div className={styles.card}>
        <div className={styles.logoContainer}>
          <Image
            src="/concreton.webp"
            alt="Logo"
            width={145}
            height={185}
            className={styles.logo}
          />
        </div>
        <p className={styles.titulo}>ASISTENTE CONCRETON</p>
        <p className={styles.subtitulo}>Instituto Mexicano del Cemento y del Concreto A.C.</p>
        {choices.map((choice) => {
          console.log(choice);
          return (
            <div className={styles.response} key={choice.index}>
              <ReactMarkdown
                rehypePlugins={[rehypeHighlight]}
                components={{
                  pre: ({ node, ...props }) => (
                    <pre className={styles.codeBlock} {...props} />
                  ),
                  code: ({ node, inline, ...props }) => (
                    <code className={inline ? styles.inlineCode : styles.codeContent} {...props} />
                  ),
                }}
              >
                {choice.message.content}
              </ReactMarkdown>
            </div>
          );
        })}

        <PromptForm
          isLoading={isLoading}
          onSubmit={async (prompt) => {
            setIsLoading(true);
            const response = await fetch("/api/chat-gpt", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                prompt,
              }),
            });

            setIsLoading(false);
            const result = await response.json();
            setChoices(result.choices);
          }}
        />
      </div>
    </main>
  );
}
