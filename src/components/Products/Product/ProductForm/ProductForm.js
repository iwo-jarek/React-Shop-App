import styles from "./ProductForm.module.scss"
import OptionSize from "./OptionSize/OptionSize"
import OptionColor from "./OptionColor/OptionColor"
import Button from "./Button/Button"
import PropTypes from 'prop-types';

const ProductForm = props => {
  return (
    <form>
      <OptionSize sizes={props.sizes} currentSize={props.currentSize.name} setCurrentSize={props.setCurrentSize} />
      <OptionColor colors={props.colors} currentColor={props.currentColor} setCurrentColor={props.setCurrentColor} />
      <Button onClick={props.handleSubmit} className={styles.button}>
        <span className="fa fa-shopping-cart" />
      </Button>
    </form>

  )
}

ProductForm.propTypes = { sizes: PropTypes.array.isRequired, currentSize: PropTypes.object.isRequired, setCurrentSize: PropTypes.func.isRequired,
  colors: PropTypes.array.isRequired, currentColor: PropTypes.string.isRequired, setCurrentColor : PropTypes.func.isRequired }
  
export default ProductForm;