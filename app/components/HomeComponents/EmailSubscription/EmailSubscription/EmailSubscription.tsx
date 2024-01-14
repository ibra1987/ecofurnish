const EmailSubscription = () => {
  return (
    <section className="h-96 bg-gradient-to-t from-yellow-700 to-yellow-400 w-full p-10 rounded">
      <div className="w-full flex flex-col justify-start items-center">
        <h2 className="text-fourth font-bold text-4xl">
          Stay Updated with New Listings!
        </h2>
        <p className="w-full lg:w-3/5 text-gray-100 p-6 indent-2">
          Subscribe to our notification service, and we'll keep you informed
          whenever a new item matching your interests is listed on our
          marketplace.
        </p>
      </div>
      <form className="w-full flex flex-col justify-start items-center">
        <input
          className="w-full lg:w-3/5 m-2 p-2 rounded outline-none"
          type={"text"}
          placeholder="keywords  (e.g., 'used sofa,' 'old chair')"
        />
        <input
          className="w-full lg:w-3/5 m-2 p-2 rounded outline-none"
          type={"email"}
          placeholder="your email"
        />
        <button className="w-full bg-primary hover:bg-primary-light transition-all duration-150 text-white lg:w-3/5 m-2 p-2 rounded outline-none">Subscribe</button>
      </form>
    </section>
  );
};

export default EmailSubscription;
