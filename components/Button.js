import Link from 'next/link'
import SouthIcon from '@mui/icons-material/South'

export default function Button(props) {
  return (
    <>
      {' '}
      <style jsx>{``}</style>
      <button className="buttons">
        <Link href={props.href} sx={{ cursor: 'pointer' }} className="buttons">
          {props.children}
        </Link>
      </button>
    </>
  )
}
