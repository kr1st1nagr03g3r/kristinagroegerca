import MultiPanel from '../components/MultiPanel'
import firstImage from '../public/images/one.png'
import secondImage from '../public/images/two.png'
import thirdImage from '../public/images/three.png'
import fourthImage from '../public/images/three.png'

export default function Temp() {
  return (
    <>
      <MultiPanel
        panelOne={{
          icon: firstImage,
          name: 'First',
          alt: 'clouds',
          header: 'Hello this is a header',
          link: '/work',
          buttonText: 'Learn More',
        }}
        panelTwo={{
          icon: secondImage,
          name: 'Second',
          alt: 'clouds',
          header: 'Hello this is a header',
          link: '/work',
          buttonText: 'Learn More',
        }}
        panelThree={{
          icon: thirdImage,
          name: 'Third',
          alt: 'clouds',
          header: 'Hello this is a header',
          link: '/work',
          buttonText: 'Learn More',
        }}
        panelFour={{
          icon: thirdImage,
          name: 'Fourth',
          alt: 'clouds',
          header: 'Hello this is a header',
          link: '/work',
          buttonText: 'Learn More',
        }}
      ></MultiPanel>
    </>
  )
}
