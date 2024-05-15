import PropTypes from 'prop-types'; 
import css from './Background.module.css';

const Background = ({ isAuthenticated, children }) => {
  return (
    <div className={css.whiteBackground}>       
        <div className={css.greyBackground}>          
                <div className={isAuthenticated ? css.backgroundAuth : css.backgroundGuest}>
                {children}
                </div>
            <div className={css.multiCabbage}></div>
        </div>
        <div className={css.coupleCabbage}></div>
    </div>
  );
};


Background.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  children: PropTypes.node 
};

export default Background;
