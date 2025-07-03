"use client";

import type React from "react";

import { useState } from "react";
import {
  Building2,
  Calendar,
  CheckCircle,
  Mail,
  MapPin,
  Phone,
  Users,
} from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import logo from "@/public/ChatGPT Image Jul 3, 2025, 08_04_10 AM.png";
export default function ComingSoonProperty() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Image src={logo} alt="logo" height={80} width={80} />
          </div>
          <nav className="hidden md:flex space-x-6">
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4 text-sm px-4 py-2">
              <Calendar className="w-4 h-4 mr-2" />
              Expected Completion: Q2 2025
            </Badge>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Coming Soon
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Luxury waterfront living in the heart of downtown.
              <br className="hidden md:block" />
              Experience modern elegance with breathtaking city views.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg px-8 py-6">
                Register Interest
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-6 bg-transparent"
              >
                View Gallery
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Property Preview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Redefining Urban Living
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Skyline Residences offers an unparalleled living experience with
                state-of-the-art amenities, premium finishes, and panoramic
                views of the city skyline and waterfront.
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">42 Stories</h3>
                    <p className="text-sm text-muted-foreground">
                      Premium high-rise
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold">280 Units</h3>
                    <p className="text-sm text-muted-foreground">
                      1-3 bedroom options
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="Skyline Residences Rendering"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-xl shadow-lg border">
                <p className="text-sm text-muted-foreground mb-1">
                  Starting from
                </p>
                <p className="text-2xl font-bold">$2,850/mo</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Premium Amenities
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every detail has been carefully crafted to provide residents with
              an exceptional living experience.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Rooftop Pool & Deck",
                description:
                  "Infinity pool with panoramic city views and outdoor lounge areas",
                icon: "🏊‍♂️",
              },
              {
                title: "Fitness Center",
                description:
                  "State-of-the-art gym with personal training and yoga studio",
                icon: "💪",
              },
              {
                title: "Concierge Service",
                description:
                  "24/7 concierge and doorman service for your convenience",
                icon: "🛎️",
              },
              {
                title: "Sky Lounge",
                description:
                  "Private resident lounge on the 40th floor with city views",
                icon: "🥂",
              },
              {
                title: "Pet Spa",
                description:
                  "Full-service pet grooming and play area for your furry friends",
                icon: "🐕",
              },
              {
                title: "Smart Home Tech",
                description:
                  "Integrated smart home systems and high-speed fiber internet",
                icon: "📱",
              },
            ].map((feature, index) => (
              <Card
                key={index}
                className="text-center hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Preview Gallery
            </h2>
            <p className="text-lg text-muted-foreground">
              Get a glimpse of your future home
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Living Room",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Kitchen",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Bedroom",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Bathroom",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Balcony View",
                image: "/placeholder.svg?height=400&width=600",
              },
              {
                title: "Building Exterior",
                image: "/placeholder.svg?height=400&width=600",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative group cursor-pointer overflow-hidden rounded-xl"
              >
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  width={600}
                  height={400}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <p className="text-white font-semibold text-lg">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interest Form */}
      <section id="contact" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Register Your Interest
              </h2>
              <p className="text-lg text-muted-foreground">
                Be the first to know when units become available and receive
                exclusive updates.
              </p>
            </div>
            <Card>
              <CardContent className="p-8">
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                    <p className="text-muted-foreground">
                      We've received your information and will be in touch soon.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Enter your full name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Enter your email"
                          required
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Message (Optional)</Label>
                      <Textarea
                        id="message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Tell us about your housing needs or any questions you have"
                        rows={4}
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      Register Interest
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <MapPin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">
                123 Waterfront Drive
                <br />
                Downtown District
                <br />
                New York, NY 10001
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Phone className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-muted-foreground">
                Sales: (555) 123-4567
                <br />
                Leasing: (555) 123-4568
              </p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-muted-foreground">
                info@skylineresidences.com
                <br />
                leasing@skylineresidences.com
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Image src={logo} alt="logo" height={80} width={80} />
            </div>
            <p className="text-muted-foreground text-sm">
              © 2024 Skyline Residences. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
