const Pricing = () => {
  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-semibold mb-8 text-primary text-center">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Basic Plan */}
        <div className="card bg-base-100 shadow-lg border border-gray-200 p-6 text-center transform transition-transform hover:scale-105">
          <div className="card-body">
            <h2 className="text-2xl font-bold mb-4">Basic Plan</h2>
            <p className="text-3xl font-semibold text-neutral-content mb-4">Free</p>
            <p className="text-base mb-6 text-gray-600">
              Essential features for small businesses.
            </p>
            <a href="#" className="btn btn-primary btn-block">Get Started</a>
          </div>
        </div>
        
        {/* Pro Plan */}
        <div className="card bg-base-100 shadow-lg border border-gray-200 p-6 text-center transform transition-transform hover:scale-105">
          <div className="card-body">
            <h2 className="text-2xl font-bold mb-4">Pro Plan</h2>
            <p className="text-3xl font-semibold text-neutral-content mb-4">$49/month</p>
            <p className="text-base mb-6 text-gray-600">
              Advanced features for growing businesses.
            </p>
            <a href="#" className="btn btn-primary btn-block">Choose Plan</a>
          </div>
        </div>
        
        {/* Enterprise Plan */}
        <div className="card bg-base-100 shadow-lg border border-gray-200 p-6 text-center transform transition-transform hover:scale-105">
          <div className="card-body">
            <h2 className="text-2xl font-bold mb-4">Enterprise Plan</h2>
            <p className="text-3xl font-semibold text-neutral-content mb-4">$99/month</p>
            <p className="text-base mb-6 text-gray-600">
              All features for large enterprises.
            </p>
            <a href="#" className="btn btn-primary btn-block">Choose Plan</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
