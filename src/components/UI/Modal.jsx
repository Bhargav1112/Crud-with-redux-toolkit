import { Fragment } from "react"
import ReactDOM from "react-dom"

import "./style.scss"

const Backdrop = props => {
  return <div className="backdrop" onClick={props.onClose}></div>
}

const ModalBody = props => {
  return <div className="modal">{props.children}</div>
}

const Modal = props => {
  const portLocation = document.getElementById("overlay-root")
  return (
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portLocation)}
      {ReactDOM.createPortal(<ModalBody>{props.children}</ModalBody>, portLocation)}
    </Fragment>
  )
}

export default Modal;