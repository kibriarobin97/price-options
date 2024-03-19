import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Basic Membership",
            "price": 30,
            "features": [
                "Access to cardio equipment",
                "Limited access to weightlifting area",
                "Group fitness classes",
                "Locker rental available",
                "Access to swimming pool (limited hours)",
                "Discounts on merchandise"
            ]
        },
        {
            "id": 2,
            "name": "Standard Membership",
            "price": 50,
            "features": [
                "Full access to cardio and weightlifting areas",
                "Access to sauna and steam room",
                "Discounts on personal training sessions",
                "Unlimited access to swimming pool",
                "Nutrition consultation included"
            ]
        },
        {
            "id": 3,
            "name": "Premium Membership",
            "price": 80,
            "features": [
                "All features of Standard Membership",
                "Access to exclusive fitness classes",
                "Complimentary towel service",
                "Priority booking for classes and facilities",
                "Unlimited guest passes",
                "Personalized workout plan"
            ]
        }
    ]

    return (
        <div className="p-5">
            <h3 className="text-4xl font-bold mb-8">Best prices in the town</h3>
            <div className="grid md:grid-cols-3 gap-5">
                {
                    priceOptions.map(option => <PriceOption
                        key={option.id}
                        option={option}
                    ></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;