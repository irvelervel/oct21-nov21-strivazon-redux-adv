import { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { FaShoppingCart } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { connect } from 'react-redux'
import { setUsernameAction } from '../redux/actions'

// the goal of mapStateToProps is defining which new props your component is going to receive
// every property of the object mapStateToProps is returning will be a new prop for CartIndicator!
const mapStateToProps = (state) => ({
  // every property in this object will be a prop for CartIndicator
  cartLength: state.cart.products.length,
  userName: state.user.name,
})

const mapDispatchToProps = (dispatch) => ({
  setUsername: (name) => {
    dispatch(setUsernameAction(name))
  },
})

// const mapStateToProps = (state) => state

const CartIndicator = (props) => {
  const navigate = useNavigate()
  const [name, setName] = useState('')

  return (
    <div className='ml-auto mt-2'>
      {props.userName ? (
        <Button color='primary' onClick={() => navigate('/cart')}>
          <FaShoppingCart />
          <span className='ml-2'>{props.cartLength}</span>
        </Button>
      ) : (
        <Form.Control
          placeholder='Insert your username'
          value={name}
          onChange={(e) => setName(e.target.value)}
          // now I should invoke my prop of setUsername when I press enter
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              // you just pressed the enter key!
              props.setUsername(name)
            }
          }}
        />
      )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIndicator)
// connect creates a HOC -> Higher Order Component
// connect can take up to 2 arguments
// the first argument will allow CartIndicator to READ from the store
// the second argument will allow CartIndicator to WRITE to the store
// CartIndicator just needs to READ from the redux store

// how can we connect CartIndicator to the Redux Store?
// with the connect function!
