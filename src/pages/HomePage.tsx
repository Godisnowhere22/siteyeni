import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Bell, FileText, CreditCard, 
         PlayCircle, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import HeroSection from '../components/home/HeroSection';
import PackagePreviewSection from '../components/home/PackagePreviewSection';
import TestimonialsSection from '../components/home/TestimonialsSection';

const HomePage = () => {
  return (
    <div className="pt-16">
      <HeroSection />
      <PackagePreviewSection />
    </div>
  );
};

export default HomePage;