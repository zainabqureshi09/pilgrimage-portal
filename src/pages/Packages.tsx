import { Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Packages = () => {
  const packages = [
    {
      id: 'economy',
      name: 'Economy Package',
      type: 'Umrah',
      price: '$2,999',
      duration: '10 Days',
      popular: false,
      features: [
        '4-Star Hotel in Makkah (Walking Distance)',
        '4-Star Hotel in Madinah',
        'Round Trip Flights',
        'Visa Processing',
        'Ground Transportation',
        'Ziyarat Tours',
        'Group Religious Guidance',
        '24/7 Support'
      ],
      description: 'Perfect for first-time pilgrims seeking quality service at an affordable price.'
    },
    {
      id: 'standard',
      name: 'Standard Package',
      type: 'Umrah',
      price: '$4,499',
      duration: '12 Days',
      popular: true,
      features: [
        '5-Star Hotel in Makkah (Haram View)',
        '5-Star Hotel in Madinah',
        'Premium Round Trip Flights',
        'Fast-Track Visa Processing',
        'Private Ground Transportation',
        'Comprehensive Ziyarat Tours',
        'Personal Religious Guide',
        'Welcome & Farewell Dinner',
        'Laundry Service',
        '24/7 VIP Support'
      ],
      description: 'Our most popular package combining comfort, convenience, and spiritual fulfillment.'
    },
    {
      id: 'vip',
      name: 'VIP Luxury Package',
      type: 'Umrah',
      price: '$7,999',
      duration: '15 Days',
      popular: false,
      features: [
        'Luxury 5-Star Hotel in Makkah (Haram Front)',
        'Luxury 5-Star Hotel in Madinah',
        'Business Class Flights',
        'VIP Visa Processing',
        'Private Luxury Transportation',
        'Exclusive Ziyarat with Scholar',
        'Personal Religious Scholar',
        'Fine Dining Experiences',
        'Shopping Tours',
        'Spa & Wellness Access',
        'Private Airport Lounge Access',
        'Dedicated Concierge Service'
      ],
      description: 'Ultimate luxury experience with premium accommodations and exclusive services.'
    },
    {
      id: 'family',
      name: 'Family Package',
      type: 'Umrah',
      price: '$3,799',
      duration: '14 Days',
      popular: false,
      features: [
        '4-Star Family Rooms in Makkah',
        '4-Star Family Rooms in Madinah',
        'Round Trip Flights (Family Seats)',
        'Visa Processing for All',
        'Family-Friendly Transportation',
        'Child-Friendly Ziyarat Tours',
        'Family Religious Guidance',
        'Kids Entertainment Programs',
        'Family Dining Arrangements',
        '24/7 Family Support'
      ],
      description: 'Specially designed for families with children, ensuring comfort for all ages.'
    },
    {
      id: 'hajj-standard',
      name: 'Hajj Standard',
      type: 'Hajj',
      price: '$8,999',
      duration: '21 Days',
      popular: false,
      features: [
        'Makkah Hotel (Close to Haram)',
        'Madinah Hotel (Near Masjid Nabawi)',
        'Mina Premium Tents',
        'Arafat Air-Conditioned Tents',
        'Round Trip Flights',
        'Complete Visa Processing',
        'Hajj Transportation Package',
        'Experienced Hajj Guide',
        'Medical Support Team',
        'All Meals Included',
        'Hajj Training Sessions',
        '24/7 Hajj Support'
      ],
      description: 'Complete Hajj experience with all rituals guidance and premium accommodations.'
    },
    {
      id: 'custom',
      name: 'Custom Package',
      type: 'Both',
      price: 'Quote',
      duration: 'Flexible',
      popular: false,
      features: [
        'Tailored Itinerary',
        'Choice of Hotels & Airlines',
        'Flexible Duration',
        'Personalized Services',
        'Special Dietary Requirements',
        'Accessibility Accommodations',
        'Private Group Arrangements',
        'Customized Ziyarat Tours'
      ],
      description: 'Fully customizable package designed according to your specific needs and preferences.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-elegant">
      {/* Header Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-up">
            Hajj & Umrah Packages
          </h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto animate-fade-up" style={{animationDelay: '0.2s'}}>
            Choose from our carefully crafted packages designed to provide you with 
            the most meaningful and comfortable pilgrimage experience.
          </p>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card key={pkg.id} className={`card-premium relative ${pkg.popular ? 'ring-2 ring-secondary' : ''}`}>
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-secondary text-secondary-foreground px-4 py-1 text-sm font-semibold">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center pb-4">
                  <div className="flex justify-center items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-primary border-primary">
                      {pkg.type}
                    </Badge>
                  </div>
                  <CardTitle className="text-2xl font-bold text-primary mb-2">
                    {pkg.name}
                  </CardTitle>
                  <div className="text-4xl font-bold text-secondary mb-2">
                    {pkg.price}
                    {pkg.price !== 'Quote' && <span className="text-lg text-muted-foreground">/person</span>}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {pkg.duration}
                  </div>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground mb-6 text-center">
                    {pkg.description}
                  </p>

                  <div className="space-y-3 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-secondary flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button 
                    className={`w-full ${pkg.popular ? 'btn-hero' : 'btn-outline-premium'}`}
                    size="lg"
                  >
                    {pkg.price === 'Quote' ? 'Get Custom Quote' : 'Book Now'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Information */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">What's Included in All Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            <div className="flex items-start gap-3">
              <Check className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Complete Documentation</h3>
                <p className="text-sm opacity-90">Visa processing, travel insurance, and all required documentation</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Religious Guidance</h3>
                <p className="text-sm opacity-90">Experienced Islamic scholars and guides throughout your journey</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Group Coordination</h3>
                <p className="text-sm opacity-90">Well-organized group management for smooth travel experience</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Check className="h-6 w-6 text-secondary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold mb-1">Emergency Support</h3>
                <p className="text-sm opacity-90">24/7 emergency assistance and medical support when needed</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Contact Us for More Information
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Packages;