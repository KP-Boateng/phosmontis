export default function Values() {
  const values = [
    {
      icon: "💡",
      title: "Innovation",
      description:
        "We push boundaries and explore new possibilities in technology.",
    },
    {
      icon: "✨",
      title: "Excellence",
      description: "We deliver quality solutions that exceed expectations.",
    },
    {
      icon: "🤝",
      title: "Integrity",
      description: "We conduct business with honesty and Christian principles.",
    },
    {
      icon: "🌟",
      title: "Impact",
      description: "We create technology that makes a meaningful difference.",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 text-center">
          Our Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                {value.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
