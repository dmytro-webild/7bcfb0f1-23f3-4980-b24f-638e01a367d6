"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleCentered from '@/components/navbar/NavbarStyleCentered/NavbarStyleCentered';
import HeroLogoBillboard from '@/components/sections/hero/HeroLogoBillboard';
import InlineImageSplitTextAbout from '@/components/sections/about/InlineImageSplitTextAbout';
import ProductCardOne from '@/components/sections/product/ProductCardOne';
import FeatureBento from '@/components/sections/feature/FeatureBento';
import TestimonialCardFifteen from '@/components/sections/testimonial/TestimonialCardFifteen';
import FaqSplitMedia from '@/components/sections/faq/FaqSplitMedia';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import { BookOpen, BarChart3, Camera, Eye, Lightbulb, Layers, Orbit, Sparkles, Globe, Mail, HelpCircle, RotateCcw, Zap, ZoomIn, ZoomOut, Move } from 'lucide-react';

export default function SolarExplorerPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="small"
      sizing="largeSmallSizeLargeTitles"
      background="aurora"
      cardStyle="gradient-bordered"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="solid"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleCentered
          navItems={[
            { name: "Explorer", id: "explorer" },
            { name: "Planets", id: "planets" },
            { name: "Learn", id: "learn" },
            { name: "FAQ", id: "faq" }
          ]}
          button={{ text: "Start Exploring", href: "#explorer" }}
          brandName="Solar Explorer"
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroLogoBillboard
          logoText="Solar Explorer"
          description="Discover the cosmos through immersive 3D visualization. Explore planets, moons, and celestial phenomena with interactive controls and comprehensive educational data. Begin your journey through our solar system today."
          buttons={[
            { text: "Start Exploring", href: "#planets" },
            { text: "Learn More", href: "#about" }
          ]}
          buttonAnimation="slide-up"
          background={{ variant: "aurora" }}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B4OIPc67qHuCTwEeieayWOrCFc/a-stunning-3d-rendered-scene-of-the-sola-1773744888485-ae2512b7.png"
          imageAlt="3D Solar System with Rotating Planets"
          mediaAnimation="slide-up"
          frameStyle="card"
        />
      </div>

      <div id="about" data-section="about">
        <InlineImageSplitTextAbout
          heading={[
            { type: "text", content: "Explore Our Solar System" }
          ]}
          buttons={[
            { text: "Discover Now", href: "#planets" }
          ]}
          buttonAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="planets" data-section="planets">
        <ProductCardOne
          title="Explore Our Planets"
          description="Click on any planet to zoom in and view detailed information including diameter, mass, orbital period, moons, and fascinating facts about each celestial body."
          products={[
            {
              id: "earth",              name: "Earth",              price: "Our Home",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B4OIPc67qHuCTwEeieayWOrCFc/detailed-3d-model-of-planet-earth-with-r-1773744890342-ffa3d9d7.png",              imageAlt: "Planet Earth"
            },
            {
              id: "mars",              name: "Mars",              price: "The Red Planet",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B4OIPc67qHuCTwEeieayWOrCFc/3d-rendered-mars-planet-with-distinctive-1773744889735-9409c6fd.png",              imageAlt: "Planet Mars"
            },
            {
              id: "jupiter",              name: "Jupiter",              price: "Gas Giant",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B4OIPc67qHuCTwEeieayWOrCFc/massive-3d-jupiter-with-prominent-great--1773744889747-844a9c8f.png",              imageAlt: "Planet Jupiter"
            },
            {
              id: "saturn",              name: "Saturn",              price: "Ringed Wonder",              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B4OIPc67qHuCTwEeieayWOrCFc/beautiful-3d-saturn-with-prominent-rings-1773744891165-b73bd6b0.png",              imageAlt: "Planet Saturn"
            }
          ]}
          gridVariant="bento-grid"
          animationType="slide-up"
          tag="Interactive 3D Models"
          tagIcon={Globe}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
        />
      </div>

      <div id="features" data-section="features">
        <FeatureBento
          title="Powerful Exploration Features"
          description="Experience the solar system with advanced interactive tools designed for education and discovery."
          tag="Advanced Technology"
          tagIcon={Sparkles}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          animationType="slide-up"
          features={[
            {
              title: "3D Rotation",              description: "Rotate and examine each planet from every angle with smooth, intuitive controls.",              bentoComponent: "icon-info-cards",              items: [
                { icon: RotateCcw, label: "Full Rotation", value: "360°" },
                { icon: Zap, label: "Smooth Motion", value: "60 FPS" },
                { icon: Eye, label: "Live Details", value: "Always" }
              ]
            },
            {
              title: "Zoom & Pan",              description: "Smoothly zoom in to examine surface details or zoom out for system-wide perspective.",              bentoComponent: "icon-info-cards",              items: [
                { icon: ZoomIn, label: "Zoom In", value: "100x+" },
                { icon: ZoomOut, label: "Zoom Out", value: "1:1M" },
                { icon: Move, label: "Pan View", value: "Smooth" }
              ]
            },
            {
              title: "Camera Transitions",              description: "Experience smooth animated transitions as you move between different planets and viewing angles.",              bentoComponent: "icon-info-cards",              items: [
                { icon: Camera, label: "Smooth Flow", value: "Fluid" },
                { icon: Layers, label: "Multi-view", value: "Enabled" },
                { icon: Orbit, label: "Orbital Path", value: "Visible" }
              ]
            },
            {
              title: "Educational Data",              description: "Access comprehensive information about each planet including composition, atmosphere, and discovery facts.",              bentoComponent: "icon-info-cards",              items: [
                { icon: BookOpen, label: "Full Data", value: "Complete" },
                { icon: BarChart3, label: "Comparisons", value: "Real-time" },
                { icon: Lightbulb, label: "Fun Facts", value: "Included" }
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardFifteen
          testimonial="Solar Explorer transformed how I teach astronomy. My students are completely engaged, and the interactive 3D models make complex concepts instantly understandable. The zoom and rotation features are intuitive, and I've seen dramatic improvement in student comprehension and excitement about space science."
          rating={5}
          author="Dr. Sarah Mitchell"
          avatars={[
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B4OIPc67qHuCTwEeieayWOrCFc/professional-headshot-of-an-educator-or--1773744888771-2d8145f4.png",              alt: "Dr. Sarah Mitchell, Astronomy Educator"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B4OIPc67qHuCTwEeieayWOrCFc/young-student-portrait-with-engaged-curi-1773744889298-d17bd581.png",              alt: "Student using Solar Explorer"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B4OIPc67qHuCTwEeieayWOrCFc/research-scientist-or-planetarium-direct-1773744889315-36035ff9.png",              alt: "Research Scientist"
            },
            {
              src: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B4OIPc67qHuCTwEeieayWOrCFc/parent-or-guardian-portrait-with-warm-sa-1773744888888-3645f7c5.png",              alt: "Parent testimonial"
            }
          ]}
          ratingAnimation="slide-up"
          avatarsAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitMedia
          title="Frequently Asked Questions"
          description="Find answers to common questions about Solar Explorer and how to make the most of your cosmic journey."
          tag="Help & Support"
          tagIcon={HelpCircle}
          tagAnimation="slide-up"
          textboxLayout="default"
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          faqsAnimation="slide-up"
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3B4OIPc67qHuCTwEeieayWOrCFc/modern-faq-or-q-a-interface-showing-expa-1773744889711-be534c40.png"
          imageAlt="FAQ Interface"
          faqs={[
            {
              id: "faq-1",              title: "How do I zoom in on a planet?",              content: "Use the scroll wheel on your mouse or pinch gesture on touch devices to zoom in and out. You can also use the on-screen zoom buttons for precise control. The zoom smoothly transitions to keep you oriented in space."
            },
            {
              id: "faq-2",              title: "Can I rotate the planets freely?",              content: "Yes! Click and drag on any planet to rotate it 360 degrees. The rotation is smooth and responsive, allowing you to examine all surface features from every angle. You can also enable automatic rotation for a continuous view."
            },
            {
              id: "faq-3",              title: "What information is available for each planet?",              content: "Each planet includes diameter, mass, orbital period, number of moons, surface temperature, atmosphere composition, discovery date, and fascinating educational facts. Click on any planet to see a detailed information card."
            },
            {
              id: "faq-4",              title: "Are the planet models scientifically accurate?",              content: "Yes, our 3D models are based on NASA data and scientific research. Planetary sizes, orbits, and surface features are accurately represented relative to real astronomical data, though viewing distances are adjusted for visualization purposes."
            },
            {
              id: "faq-5",              title: "Can I use this for educational purposes?",              content: "Absolutely! Solar Explorer is designed for educators and students. Teachers can use the platform for classroom presentations, while students can explore independently. All content is educationally sound and curriculum-aligned."
            },
            {
              id: "faq-6",              title: "What devices are supported?",              content: "Solar Explorer works on desktop computers, tablets, and smartphones. The interface automatically adapts to your device. For the best 3D experience with smooth animations, we recommend using a modern browser on a desktop or tablet."
            }
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Connected"
          title="Join Our Cosmic Community"
          description="Subscribe to receive educational updates, new planet data, and exclusive features as we expand the solar system explorer."
          tagIcon={Mail}
          tagAnimation="slide-up"
          background={{ variant: "aurora" }}
          useInvertedBackground={false}
          inputPlaceholder="your@email.com"
          buttonText="Explore Together"
          termsText="By subscribing, you agree to receive educational content and updates about Solar Explorer. We respect your privacy and will never share your information."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBaseCard
          logoText="Solar Explorer"
          columns={[
            {
              title: "Navigation",              items: [
                { label: "Explorer", href: "#explorer" },
                { label: "Planets", href: "#planets" },
                { label: "Features", href: "#features" },
                { label: "FAQ", href: "#faq" }
              ]
            },
            {
              title: "Educational",              items: [
                { label: "For Teachers", href: "#" },
                { label: "Curriculum Guide", href: "#" },
                { label: "Learning Resources", href: "#" },
                { label: "Science Articles", href: "#" }
              ]
            },
            {
              title: "Company",              items: [
                { label: "About Us", href: "#" },
                { label: "Contact", href: "#" },
                { label: "Blog", href: "#" },
                { label: "Careers", href: "#" }
              ]
            },
            {
              title: "Legal",              items: [
                { label: "Privacy Policy", href: "#" },
                { label: "Terms of Service", href: "#" },
                { label: "Cookie Policy", href: "#" },
                { label: "Data Rights", href: "#" }
              ]
            }
          ]}
          copyrightText="© 2025 Solar Explorer | Educational Technology for Cosmic Discovery"
        />
      </div>
    </ThemeProvider>
  );
}