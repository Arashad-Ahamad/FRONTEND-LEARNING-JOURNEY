import { MdPlace } from 'react-icons/md'
import { IoCallSharp } from 'react-icons/io5'
import { TbMailPlus } from 'react-icons/tb'
import footerContact from '../api/footerContact.json'
import './Footer.css'

const Footer = () => {
    const iconMap = {
        MdPlace: <MdPlace/>,
        IoCallSharp:<IoCallSharp/>,
        TbMailPlus: <TbMailPlus/>
    }
  return (
    <footer className="footer-section">
      <div className="container">
        <div className="grid grid-three-cols">
          {footerContact.map((curData) => {
            const {icon, title, details} = curData
            return (
              <>
                <div className="footer-contact">
                  <div className="icon">
                   {iconMap[icon]}
                  </div>
                  <div className="footer-contact-text">
                    <p>{title}</p>
                    <p>{details}</p>
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    </footer>
  )
}
export default Footer
