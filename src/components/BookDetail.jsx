import { Component } from 'react'
import { Col, Row } from 'react-bootstrap'
import Button from 'react-bootstrap/Button'
import { connect } from 'react-redux'
import { addToCartAction } from '../redux/actions'

const mapStateToProps = (state) => ({
  userName: state.user.name,
})

const mapDispatchToProps = (dispatch) => ({
  // here we're going to write method for DISPATCHING ACTIONS in BookDetail
  // for adding an element to the products array into the cart slice of the store we need to dispatch an action!
  addToCart: (bookToAdd) => {
    dispatch(addToCartAction(bookToAdd))
  },
})

class BookDetail extends Component {
  state = {
    book: null,
  }

  componentDidUpdate(prevProps) {
    if (prevProps.bookSelected !== this.props.bookSelected) {
      this.setState({
        book: this.props.bookSelected,
      })
    }
  }

  render() {
    return (
      <div className='mt-3'>
        {this.state.book ? (
          <>
            <Row>
              <Col sm={12}>
                <h1>{this.state.book.title}</h1>
              </Col>
            </Row>
            <Row className='mt-3'>
              <Col sm={4}>
                <div className='mt-3'>
                  <img
                    className='book-cover'
                    src={this.state.book.imageUrl}
                    alt='book selected'
                  />
                </div>
              </Col>
              <Col sm={8}>
                <p>
                  <span className='font-weight-bold'>Description:</span>
                  {this.state.book.description}
                </p>
                <p>
                  <span className='font-weight-bold'>Price:</span>
                  {this.state.book.price}
                </p>
                {/* I want to hide the button from a non-loggedin user */}
                {/* has_the_user_logged_in ? show_button : show_message */}
                {this.props.userName ? (
                  <Button
                    color='primary'
                    onClick={() => this.props.addToCart(this.state.book)}
                  >
                    ADD TO CART
                  </Button>
                ) : (
                  <div>You need to log in for purchasing this book!</div>
                )}
              </Col>
            </Row>
          </>
        ) : (
          <Row>
            <Col sm={12}>
              <h3>Please select a book!</h3>
            </Col>
          </Row>
        )}
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetail)
// here we need to dispatch an action, because we need to add elements to the cart
// so we need the SECOND argument of connect, mapDispatchToProps
