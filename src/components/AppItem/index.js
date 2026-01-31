// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl, title} = appDetails
  return (
    <li className="app-item-container">
      <img className="app-item-image" src={imageUrl} alt={appName} />

      <p className="app-item-title">{title}</p>
    </li>
  )
}

export default AppItem
