import React from 'react'

function Card(props) {
  return (
    <div id={props.id} className={props.show ? 'cards' : 'cards hide'} onClick={props.show ? props.onFlip : undefined}>
      {/* Show the card when state == 1 and hide the card when 'show' == false */}
      {props.state == 0 && props.show ? <img className='bot' src='/images/default.png' width='100%' /> : props.state == 1 && props.show ? <img className='top' src={props.img} width='100%'/> : <img className='bot' src='/images/blank.png' width='100%' />}
		</div>
  )
}

export default Card