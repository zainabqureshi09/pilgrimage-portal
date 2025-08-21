import { Star, Users, Shield, Clock, MapPin, Plane } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import heroImage from '@/assets/hero-kaaba.jpg';

const Home = () => {
  const features = [
    {
      icon: <MapPin className="h-8 w-8 text-secondary" />,
      title: "Luxury Hotels",
      description: "Stay in premium hotels near the Haram with 5-star amenities and comfort."
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "Guided Tours",
      description: "Expert religious guides to enhance your spiritual journey and understanding."
    },
    {
      icon: <Plane className="h-8 w-8 text-secondary" />,
      title: "Transport",
      description: "Comfortable air-conditioned transportation for all your travel needs."
    },
    {
      icon: <Shield className="h-8 w-8 text-secondary" />,
      title: "Visa Support",
      description: "Complete visa processing assistance with 100% approval guarantee."
    },
    {
      icon: <Clock className="h-8 w-8 text-secondary" />,
      title: "24/7 Support",
      description: "Round-the-clock customer support throughout your sacred journey."
    },
    {
      icon: <Star className="h-8 w-8 text-secondary" />,
      title: "Affordable Packages",
      description: "Competitive pricing without compromising on quality and service."
    }
  ];

  const stats = [
    { number: "10,000+", label: "Pilgrims Served" },
    { number: "500+", label: "Successful Trips" },
    { number: "15+", label: "Years of Trust" }
  ];

  const testimonials = [
    {
      name: "Ahmed Hassan",
      location: "New York, USA",
      rating: 5,
      comment: "Absolutely exceptional service! The team made our Hajj journey seamless and spiritually fulfilling. Highly recommended for anyone seeking a premium experience."
    },
    {
      name: "Fatima Khan",
      location: "London, UK", 
      rating: 5,
      comment: "Professional, caring, and well-organized. Every detail was taken care of, allowing us to focus completely on our worship and spiritual connection."
    },
    {
      name: "Mohammad Ali",
      location: "Toronto, Canada",
      rating: 5,
      comment: "Outstanding experience from start to finish. The accommodations were excellent and the guidance provided was invaluable for our first Umrah."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-primary to-secondary overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={heroImage} 
            alt="Sacred Kaaba in Mecca" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-secondary/60"></div>
        </div>
        
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-up">
            Your Sacred Journey <br />
            <span className="text-secondary">Awaits</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-up" style={{animationDelay: '0.2s'}}>
            Experience the spiritual journey of a lifetime with our premium Hajj and Umrah packages. 
            Trusted by thousands of pilgrims worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{animationDelay: '0.4s'}}>
            <Button size="lg" className="btn-hero text-lg px-8 py-4">
              Explore Packages
            </Button>
            <Button size="lg" variant="outline" className="btn-outline-premium border-white text-white hover:bg-white hover:text-primary">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-elegant">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Why Choose Sacred Journey?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We provide comprehensive services to ensure your pilgrimage is comfortable, 
              spiritual, and memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-premium text-center">
                <CardContent className="pt-8">
                  <div className="flex justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="animate-scale-in" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="text-5xl font-bold text-secondary mb-2">{stat.number}</div>
                <div className="text-xl opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">What Our Pilgrims Say</h2>
            <p className="text-xl text-muted-foreground">
              Hear from those who have completed their sacred journey with us.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-premium">
                <CardContent className="pt-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-secondary fill-current" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">"{testimonial.comment}"</p>
                  <div>
                    <div className="font-semibold text-primary">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-hero text-white relative overflow-hidden">
        <div className="absolute inset-0 islamic-pattern"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Begin Your Sacred Journey Today
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of pilgrims who have trusted us with their spiritual journey. 
            Contact us today for personalized packages and expert guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 font-semibold px-8 py-4">
              Book Your Package
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Get Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;