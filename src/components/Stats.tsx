import { TrendingUp, Users, Award, Briefcase } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: "150+",
    label: "Projects Delivered",
    color: "text-accent",
  },
  {
    icon: Award,
    value: "14+",
    label: "Years Industry Experience",
    color: "text-primary",
  },
  {
    icon: TrendingUp,
    value: "95%",
    label: "Client Retention",
    color: "text-accent",
  },
];

const Stats = () => {
  return (
    <section className="py-12 lg:py-16 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/2 translate-y-1/2" />
      
      <div className="container mx-auto px-6 lg:px-8 max-w-7xl relative z-10">
        <h2 className="text-2xl lg:text-3xl font-bold text-center mb-12 text-primary-foreground">Our Track Record</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 lg:w-16 lg:h-16 bg-white/10 rounded-2xl mb-3 lg:mb-4 hover:bg-white/20 transition-colors duration-300">
                <stat.icon className="w-7 h-7 lg:w-8 lg:h-8" />
              </div>
              <h3 className="text-3xl lg:text-4xl font-bold mb-2">{stat.value}</h3>
              <p className="text-base lg:text-lg text-primary-foreground/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;