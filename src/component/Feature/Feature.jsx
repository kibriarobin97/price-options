import PropTypes from 'prop-types';
import { FaCheckCircle } from "react-icons/fa";

const Feature = ({ feature }) => {
    return (
        <div className='flex items-center gap-1'>
            <FaCheckCircle className='text-orange-400' />
            <p className=''>{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;