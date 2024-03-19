import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';


const PriceOption = ({ option }) => {
    // console.log(option)
    const { name, price, features } = option;
    // console.log(name)

    return (
        <div className='bg-gray-600 rounded-lg p-4 flex flex-col'>
            <h3 className='text-center'>
                <span className='text-6xl text-white font-extrabold'>{price}</span>
                <span className='text-2xl'>/month</span>
            </h3>
            <h4 className='text-3xl text-center my-3'>{name}</h4>
            <div className='pl-5 flex-grow'>
                {
                    features.map((feature, idx) => <Feature
                        key={idx}
                        feature={feature}
                    ></Feature>)
                } 
            </div>
            <button className='bg-orange-400 text-white font-bold p-2 w-full mt-5 rounded-lg hover:bg-orange-700 duration-500'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;