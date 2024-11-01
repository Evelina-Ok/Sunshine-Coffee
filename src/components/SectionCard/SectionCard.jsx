import style from "./SectionCard.module.scss"

export function SectionCard ({title, text, img, alt}) {
    return (
        <section className={style.cardStyle}>
            <h2>{title}</h2>
            <p>{text}</p>
            <img src={`src/assets/${img}`} alt={alt} />
        </section>
    ) 
}