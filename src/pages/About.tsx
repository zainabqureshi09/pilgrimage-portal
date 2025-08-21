import { Users, Award, Globe, Heart } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-secondary" />,
      title: "Spiritual Excellence",
      description: "We are committed to providing spiritually enriching experiences that deepen your connection with Allah and enhance your journey of faith."
    },
    {
      icon: <Users className="h-8 w-8 text-secondary" />,
      title: "Customer Care",
      description: "Every pilgrim is family to us. We provide personalized attention and care to ensure your comfort and peace of mind throughout your journey."
    },
    {
      icon: <Award className="h-8 w-8 text-secondary" />,
      title: "Quality Assurance",
      description: "We maintain the highest standards in accommodations, transportation, and services, ensuring exceptional quality in every aspect of your pilgrimage."
    },
    {
      icon: <Globe className="h-8 w-8 text-secondary" />,
      title: "Global Experience", 
      description: "With extensive experience serving pilgrims worldwide, we understand diverse needs and cultural considerations for a truly inclusive experience."
    }
  ];

  const milestones = [
    {
      year: "2008",
      title: "Company Founded",
      description: "Started as a small family business with a vision to serve the Muslim community"
    },
    {
      year: "2012", 
      title: "1,000 Pilgrims Served",
      description: "Reached our first major milestone of serving 1,000 satisfied pilgrims"
    },
    {
      year: "2016",
      title: "International Expansion", 
      description: "Expanded services to serve pilgrims from multiple countries across North America and Europe"
    },
    {
      year: "2020",
      title: "Digital Innovation",
      description: "Launched comprehensive digital platform for seamless booking and customer support"
    },
    {
      year: "2024",
      title: "10,000+ Pilgrims",
      description: "Proudly serving over 10,000 pilgrims with continued commitment to excellence"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-elegant">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-up">
            About Sacred Journey
          </h1>
          <p className="text-xl opacity-90 animate-fade-up" style={{animationDelay: '0.2s'}}>
            For over 15 years, we have been dedicated to facilitating meaningful and comfortable 
            spiritual journeys for Muslims worldwide, helping them fulfill one of Islam's most 
            sacred obligations.
          </p>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
                To provide exceptional Hajj and Umrah services that combine spiritual fulfillment 
                with premium comfort, ensuring every pilgrim can focus entirely on their worship 
                and connection with Allah while we handle all the practical arrangements.
              </p>
              <p className="text-lg text-muted-foreground">
                We believe that the journey to the holy cities should be transformative, peaceful, 
                and free from worldly concerns, allowing pilgrims to immerse themselves completely 
                in the spiritual significance of their pilgrimage.
              </p>
            </div>
            <div className="bg-white rounded-xl p-8 shadow-card">
              <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
              <p className="text-muted-foreground text-lg">
                To be the most trusted and respected Hajj and Umrah service provider globally, 
                recognized for our unwavering commitment to spiritual excellence, customer satisfaction, 
                and Islamic values in everything we do.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Values</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              These core values guide every decision we make and every service we provide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="card-premium">
                <CardContent className="pt-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-3">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gradient-elegant">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Journey</h2>
            <p className="text-xl text-muted-foreground">
              Milestones that mark our continued growth and commitment to excellence.
            </p>
          </div>

          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className="flex-shrink-0 w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {milestone.year}
                </div>
                <div className="flex-grow pt-2">
                  <h3 className="text-xl font-semibold text-primary mb-2">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Meet Our Leadership</h2>
          <p className="text-xl opacity-90 mb-12">
            Our experienced team combines decades of travel expertise with deep Islamic knowledge 
            to provide you with unparalleled service and guidance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-primary">
                AH
              </div>
              <h3 className="text-xl font-semibold mb-2">Ahmed Hassan</h3>
              <p className="opacity-90 mb-2">Founder & CEO</p>
              <p className="text-sm opacity-75">15+ years in Islamic travel, Hajj & Umrah specialist</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-primary">
                FK
              </div>
              <h3 className="text-xl font-semibold mb-2">Fatima Khan</h3>
              <p className="opacity-90 mb-2">Operations Director</p>
              <p className="text-sm opacity-75">Expert in logistics and customer experience management</p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center text-4xl font-bold text-primary">
                MA
              </div>
              <h3 className="text-xl font-semibold mb-2">Mohammad Ali</h3>
              <p className="opacity-90 mb-2">Religious Advisor</p>
              <p className="text-sm opacity-75">Islamic scholar with extensive knowledge of Hajj & Umrah rituals</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;