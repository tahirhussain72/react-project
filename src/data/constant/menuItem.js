import { BsClock, BsHeadphones, BsMailbox2 } from 'react-icons/bs'
import {FaFacebookF, FaTwitter, FaPinterestP} from 'react-icons/fa'
import {AiFillSetting} from 'react-icons/ai'
import {MdLeaderboard} from 'react-icons/md'


export const topMenuLeft=[
   {
      icon: <BsClock/>,
      text: 'Mon - Fri 10:00-18:00'
   },
   {
      icon: <BsHeadphones/>,
      text: '888-454-567-55'
   },
   {
      icon: <BsMailbox2/>,
      text: 'Phlox@averta.net'
   },
]

export const settingIcon =[
   {
      icon: <AiFillSetting/>,
      text:'Best Finance Brand',
      para:'Our mission is to provide quality English language instruction.'
   }
]
export const leaderIcon= [
   {
      icon:<MdLeaderboard/>,
      text:'Best Leadership Ideas',
      para:'Our mission is to provide quality English language instruction.'

   }
]

export const topMenuRight = [
   <FaFacebookF/>,
   <FaTwitter/>,
   <FaPinterestP/>
]



export const menuItem =[
   {
      title:"home",
      path:"/"
   },
   {
      title:"about",
      path:"/about"
   },
   {
      title:"services",
      path:"/services"
   },
   {
      title:"our cases",
      path:"/our-case"
   },
   {
      title:"blog",
      path:"/blog"
   },
   {
      title:"contact us",
      path:"/contact-us"
   }
]