import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: "1",
      name: "Basic Plan",
      price: 30.0,
      features: [
        "Access to gym equipment",
        "Locker room access",
        "Group fitness classes",
        "Free Wi-Fi access",
        "Monthly fitness assessments",
      ],
    },
    {
      id: "2",
      name: "Standard Plan",
      price: 50.0,
      features: [
        "All Basic Plan features",
        "Unlimited group classes",
        "One personal training session per month",
        "Discounts on merchandise",
        "Access to the sauna and steam room",
        "Priority booking for classes",
      ],
    },
    {
      id: "3",
      name: "Premium Plan",
      price: 75.0,
      features: [
        "All Standard Plan features",
        "Access to specialized classes (yoga, spin, etc.)",
        "Two personal training sessions per month",
        "Nutrition consultation",
        "Complimentary guest passes (2/month)",
        "Access to exclusive events and workshops",
      ],
    },
    {
      id: "4",
      name: "Family Plan",
      price: 120.0,
      features: [
        "All Premium Plan features",
        "Up to 4 family members included",
        "Free childcare during workouts",
        "Family fitness assessments",
        "Family-oriented classes and events",
      ],
    },
    {
      id: "5",
      name: "Student Plan",
      price: 25.0,
      features: [
        "Access to gym equipment",
        "Discounted group classes",
        "Free Wi-Fi access",
        "Access to study/work spaces",
        "Monthly fitness workshops",
      ],
    },
  ];
  return (
    <div className="w-11/12 mx-auto md:grid grid-cols-3 gap-4 mt-12">
      {priceOptions.map((option) => (
        <PriceOption key={option.id} option={option}></PriceOption>
      ))}
    </div>
  );
};

export default PriceOptions;
