import Link from 'next/link'

export default function Button(props) {
  return (
    <button className="buttons">
      <Link href={props.href} sx={{ cursor: 'pointer' }} className="buttons">
        {props.children}
      </Link>
    </button>
  )
}
