import style from "./SectionTestimoniesCard.module.scss"

export function SectionTestimoniesCard ({name, text}) {
  return (
    <section>
        <h2>{name}</h2>
        <p>{text}</p>
    </section>
  )
}
