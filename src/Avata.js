import {getImageSrc} from './ulitity.js'
export default function Avatar({mobile, size}) {
    return (
      <img
        className="avatar"
        src = {getImageSrc(mobile)}
        alt = {mobile.name}
        width = {size}
        height = {size}
      />
    )
  }