import Hero from '../components/Hero'
import Images from '../public/home/index.js'

export default function Work({ children }) {
  return (
    <>
      <Hero
        header="Work Experience"
        content="In my decade as a web developer and designer, I've had the opportunity to work with a variety of large brands. Often, brands within brands. I'm familiar with adhearing to strict brand guidelines, AODA standards, style guides, writing documentation, and mentoring. In addition to development and design, I love working with animation, interaction design, UX review, & illustration."
        src={Images.growth}
        alt="Illustration of a woman climbing the stairs of success"
        width="500"
        height="500"
        buttonLink="/work"
        buttonContent="Learn More&nbsp;"
      />
    </>
  )
}
