import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/20/solid'
import ContactForm from "../contact-us/contactForm"
import Navbar from '../Component/navbar'
import HeaderAll from '../Component/blogHeader'
import Cta from '../Component/Cta'
import Map from "./Map"
const cards = [
  {
    name: 'Sales',
    description: 'Consectetur vel non. Rerum ut consequatur nobis unde. Enim est quo corrupti consequatur.',
    icon: PhoneIcon,
  },
  {
    name: 'Technical Support',
    description: 'Quod possimus sit modi rerum exercitationem quaerat atque tenetur ullam.',
    icon: LifebuoyIcon,
  },
  {
    name: 'Media Inquiries',
    description: 'Ratione et porro eligendi est sed ratione rerum itaque. Placeat accusantium impedit eum odit.',
    icon: NewspaperIcon,
  },
]

export default function Example() {
  return (
    <>
 <Navbar/>
    <HeaderAll/>
    <ContactForm/>
    <Map/>
    <Cta/>

    </>
  )
}
