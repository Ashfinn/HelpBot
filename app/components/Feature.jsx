const Features = () => {
  const featureData = [
    {
      title: "Instant Feedback",
      description: "Get instant feedback to all your queries."
    },
    {
      title: "24/7 Availability",
      description: "We are available around the clock."
    },
    {
      title: "Seamless Integration",
      description: "Easily integrate with your existing systems."
    }
  ];

  return (
    <div className="container mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featureData.map((feature, index) => (
          <div key={index} className="w-full p-4 transform transition-transform duration-300 hover:scale-105">
            <div className="p-6 h-full bg-primary text-primary-content rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-base">{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
