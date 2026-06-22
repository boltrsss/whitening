export default function ReviewCards() {
  const reviews = [
    {
      initial: 'R',
      name: 'Renee',
      verified: true,
      title: 'Dramatic Change in 3 Uses!',
      content: [
        "The product itself is amazing! After three uses my teeth have made a dramatic change. My teeth are also very sensitive prone, and I've have yet to have an issue!",
        "This was my first ever purchase from this company and they still haven't given me a reason to be dissatisfied with my order.",
        "If you're thinking about getting it yourself, it's definitely worth the money!!"
      ]
    },
    {
      initial: 'SC',
      name: 'Skyler Connor',
      verified: true,
      title: 'Great price & fast results!',
      content: [
        "First of all I got this for a great price and noticed results after just one use which is exactly what I wanted!"
      ]
    },
    {
      initial: 'PM',
      name: 'Presley McKnight',
      verified: true,
      title: 'Purely white is SUPERIOR',
      content: [
        "No sensitivity, and instant white results! I love love purely white!!!!!"
      ]
    },
    {
      initial: 'N',
      name: 'Natalie',
      verified: true,
      title: 'Best Whitening Ever',
      content: [
        "My teeth are so white it is insane !!! I never used to want to smile, but now I can !! The results are amazing and so quick!! Do yourself a favor and get yourself this whitening powder!"
      ]
    },
    {
      initial: 'T',
      name: 'Taylor',
      verified: true,
      title: 'Much Easier Than Whitening Strips!',
      content: [
        "So far I'm loving this product! Arrived quick and super easy to use. I can't wait to see how white my teeth get for my wedding! So much easier then whitening strips too!!"
      ]
    },
    {
      initial: 'J',
      name: 'Jared',
      verified: true,
      title: 'Whiter Teeth = Confidence',
      content: [
        "I love this product. I took a break and just decided to buy it again b/c I missed it & it just always does an amazing job & gives so much more confidence knowing you have beautiful white teeth."
      ]
    }
  ];

  return (
    <div className="space-y-6 my-10">
      {reviews.map((review, i) => (
        <div key={i} className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm">
          <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-100">
            <div className="w-12 h-12 rounded-full bg-green-100 text-green-800 flex items-center justify-center font-bold text-lg">
              {review.initial}
            </div>
            <div>
              <div className="font-bold text-gray-900">{review.name}</div>
              {review.verified && <div className="text-sm text-gray-500">Verified Buyer</div>}
            </div>
          </div>
          <div className="mb-4">
            <img src="/images/greenstarts.jpg" alt="5 stars rating" className="h-5 w-auto mix-blend-multiply" />
          </div>
          <h4 className="font-bold text-gray-900 mb-3 text-lg">{review.title}</h4>
          <div className="space-y-3">
            {review.content.map((paragraph, index) => (
              <p key={index} className="text-gray-700 leading-relaxed m-0">{paragraph}</p>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
