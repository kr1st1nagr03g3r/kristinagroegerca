import Image from 'next/image'

export default function Panel(props) {
  return (
    <Image src={props.cardData.icon} width={100} height={100} alt={props.alt} />
  )
}
