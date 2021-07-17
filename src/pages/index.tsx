import Header from '../components/header'
import sharedStyles from '../styles/shared.module.css'

export default function Index() {
  return (
    <>
      <Header titlePre="Home" />
      <div className={sharedStyles.layout}>
        <h1>Virginie's Blog</h1>
        <h2>De dev junior à dev junior.</h2> 
      </div>
    </>
  )
}
