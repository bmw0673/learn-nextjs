"use client";

import Link from "next/link"
import styles from "../styles/movie.module.css"
import { useRouter } from "next/navigation"

export default function Movie({id, poster_path, title}) {
  const router = useRouter();
  const clickHandeler = ()=>{
    router.push(`/movies/${id}`);
  }

  return (
    <div key={id} className={styles.movie}>
      <img src={poster_path} alt={title} onClick={clickHandeler} />
      <Link prefetch href={`/movies/${id}`}>{title}</Link>
    </div>
  )
}