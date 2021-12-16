import Link from "next/link";
import PropTypes from "prop-types";

/**
 * @component
 * @example
 * const text = "Go to dashboard"
 * const redirectTo = "/dashboard"
 * const color = "black"
 * return (
 *  <Button
 *      text={text}
 *      redirectTo={redirectTo}
 *      color={color}
 *  />
 * )
 */

const Button = ({ text, redirectTo, color }) => {
  return (
    <Link href={redirectTo}>
      <a className={`btn-${color}`}>{text}</a>
    </Link>
  );
};

Button.propTypes = {
  /**
   * Text to display on button
   * @type {String}
   * @default "Go to dashboard"
   * @required
   */
  text: PropTypes.string.isRequired,
  /**
   * Path to redirect to
   * @type {String}
   * @default "/dashboard"
   * @required
   */
  redirectTo: PropTypes.string.isRequired,
  /**
   * Color of the button
   * @type {String}
   * @default "black"
   * @required
   */
  color: PropTypes.string.isRequired,
};

Button.defaultProps = {
  text: "Button",
  redirectTo: "/",
  color: "black",
};

export default Button;
