import Avatar from '../img/img001.jpg'

import '../styles/components/sidebar.sass'
import InformationContainer from './InformationContainer'
import SocialNetworks from './SocialNetworks'

const Sidebar = () => {
  return <aside id="sidebar">
    <img src={Avatar} alt="Avatar" />
    <p className="title">Desenvolvedor Sênior</p>
    <SocialNetworks />
    <InformationContainer />
    <a href="" className="btn">Download currículo</a>

  </aside>
}

export default Sidebar