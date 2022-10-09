import Cardnew from '../components/Cardnew'
import ThreePanel from '../components/ThreePanel'
import firstImage from '../public/images/one.png'
import secondImage from '../public/images/two.png'
import thirdImage from '../public/images/three.png'

export default function Temp() {
  return (
    <>
      <ThreePanel
        panelOne={{
          icon: firstImage,
          name: 'First',
          alt: 'clouds',
          header: 'Hello this is a header',
          link: '/work',
          buttonText: 'Learn More',
        }}
        panelTwo={{ icon: secondImage, content: 'Second' }}
        panelThree={{ icon: thirdImage, content: 'Third' }}
      ></ThreePanel>
    </>
  )
}
