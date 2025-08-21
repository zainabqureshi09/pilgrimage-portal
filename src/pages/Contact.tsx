import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple form validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message Sent Successfully!",
      description: "Thank you for contacting us. We'll get back to you within 24 hours."
    });

    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6 text-secondary" />,
      title: "Phone",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
      action: "Call us for immediate assistance"
    },
    {
      icon: <Mail className="h-6 w-6 text-secondary" />,
      title: "Email", 
      details: ["info@sacredjourney.com", "support@sacredjourney.com"],
      action: "Send us an email anytime"
    },
    {
      icon: <MapPin className="h-6 w-6 text-secondary" />,
      title: "Office Address",
      details: ["123 Islamic Center Street", "New York, NY 10001, USA"],
      action: "Visit our office for consultation"
    },
    {
      icon: <Clock className="h-6 w-6 text-secondary" />,
      title: "Office Hours",
      details: ["Mon - Fri: 9:00 AM - 7:00 PM", "Sat - Sun: 10:00 AM - 5:00 PM"],
      action: "24/7 emergency support available"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-elegant">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold mb-6 animate-fade-up">
            Contact Us
          </h1>
          <p className="text-xl opacity-90 animate-fade-up" style={{animationDelay: '0.2s'}}>
            Ready to begin your spiritual journey? Get in touch with our expert team 
            for personalized guidance and consultation.
          </p>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => (
              <Card key={index} className="card-premium text-center">
                <CardContent className="pt-8">
                  <div className="flex justify-center mb-4">
                    {info.icon}
                  </div>
                  <h3 className="font-semibold text-primary mb-3">{info.title}</h3>
                  {info.details.map((detail, detailIndex) => (
                    <p key={detailIndex} className="text-muted-foreground text-sm mb-1">
                      {detail}
                    </p>
                  ))}
                  <p className="text-xs text-muted-foreground mt-2 italic">
                    {info.action}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form and Quick Contact */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <Card className="card-premium">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-primary">
                    Send Us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as possible.
                  </p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                          Full Name *
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                          placeholder="Enter your full name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                          Email Address *
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-primary mb-2">
                        Phone Number
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={6}
                        className="w-full"
                        placeholder="Tell us about your travel plans, questions, or how we can help you..."
                      />
                    </div>

                    <Button type="submit" className="w-full btn-hero" size="lg">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Quick Contact Options */}
            <div className="space-y-6">
              {/* WhatsApp Contact */}
              <Card className="card-premium">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <MessageCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                    <h3 className="font-semibold text-primary mb-2">WhatsApp Chat</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Get instant responses to your questions via WhatsApp
                    </p>
                    <Button className="w-full bg-green-500 hover:bg-green-600 text-white">
                      Chat on WhatsApp
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Emergency Contact */}
              <Card className="card-premium">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <Phone className="h-12 w-12 text-red-500 mx-auto mb-4" />
                    <h3 className="font-semibold text-primary mb-2">Emergency Support</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      24/7 emergency assistance for our travelers
                    </p>
                    <Button variant="outline" className="w-full border-red-500 text-red-500 hover:bg-red-50">
                      Call Emergency Line
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Office Visit */}
              <Card className="card-premium">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-semibold text-primary mb-2">Visit Our Office</h3>
                    <p className="text-muted-foreground text-sm mb-4">
                      Schedule a face-to-face consultation with our experts
                    </p>
                    <Button variant="outline" className="w-full btn-outline-premium">
                      Book Appointment
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Find Our Office</h2>
            <p className="text-muted-foreground">
              Located in the heart of New York City, easily accessible by public transport
            </p>
          </div>
          
          {/* Google Maps Embed Placeholder */}
          <div className="bg-muted rounded-xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-primary mx-auto mb-4" />
              <p className="text-lg font-semibold text-primary mb-2">Interactive Map</p>
              <p className="text-muted-foreground">
                123 Islamic Center Street, New York, NY 10001
              </p>
              <Button className="mt-4" variant="outline">
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;