import React, { useState, useEffect } from 'react';
import { ArrowLeft, FileText, Check, Sparkles, Star, Moon } from 'lucide-react';

interface CartPageProps {
  onBack: () => void;
  onSuccess: () => void;
}

interface FormData {
  name: string;
  email: string;
  gender: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
  language: string;
  chartStyle: string;
}

const CartPage: React.FC<CartPageProps> = ({ onBack, onSuccess }) => {
  const [formData, setFormData] = useState<FormData | null>(null);

  useEffect(() => {
    const savedData = localStorage.getItem('astrologyForm');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  if (!formData) {
    return (
      <div className="max-w-2xl mx-auto relative z-10">
        <div className="cosmic-card rounded-3xl aurora-glow p-8 text-center">
          <Moon className="h-16 w-16 text-purple-400 mx-auto mb-4" />
          <p className="text-purple-200 mb-6">No cosmic data found. Please return and share your celestial coordinates.</p>
          <button
            onClick={onBack}
            className="mystical-btn text-white px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105"
          >
            Return to Portal
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto relative z-10">
      <div className="cosmic-card rounded-3xl aurora-glow overflow-hidden">
        {/* Mystical Header */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 via-pink-500/90 to-cyan-500/90"></div>
          <div className="relative px-8 py-6">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="p-3 hover:bg-white/20 rounded-xl transition-all duration-300 group"
              >
                <ArrowLeft className="h-6 w-6 text-white group-hover:text-cyan-200" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                  <Star className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-white">Order Summary</h2>
                  <p className="text-purple-100 flex items-center space-x-2">
                    <Sparkles className="h-4 w-4" />
                    <span>Your cosmic reading details</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Order Details */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-cyan-500/20"></div>
            <div className="relative p-6 backdrop-blur-sm border border-purple-500/30 rounded-2xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-gradient-to-br from-purple-600 via-pink-500 to-cyan-400 rounded-xl cosmic-pulse">
                    <FileText className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1">Personalized Kundali Report</h3>
                    <p className="text-purple-200">Complete Vedic astrology analysis delivered digitally</p>
                  </div>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-lg text-purple-300 line-through">₹3550</span>
                    <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-2 py-1 rounded text-xs font-bold">
                      90% OFF
                    </div>
                  </div>
                  <p className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">₹399</p>
                  <p className="text-sm text-purple-300">One-time cosmic unlock</p>
                </div>
              </div>
            </div>
          </div>

          {/* Customer Details */}
          <div className="cosmic-card rounded-2xl p-6 border border-purple-500/20">
            <h4 className="font-bold text-white mb-6 flex items-center space-x-2">
              <Sparkles className="h-5 w-5 text-cyan-400" />
              <span>Your Cosmic Coordinates</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex justify-between">
                <span className="text-purple-300">Name:</span>
                <span className="text-white font-medium">{formData.name}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-300">Email:</span>
                <span className="text-white font-medium">{formData.email}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-300">Gender:</span>
                <span className="text-white font-medium">{formData.gender}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-300">Language:</span>
                <span className="text-white font-medium">{formData.language}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-300">Birth Date:</span>
                <span className="text-white font-medium">{new Date(formData.birthDate).toLocaleDateString()}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-300">Birth Time:</span>
                <span className="text-white font-medium">{formData.birthTime}</span>
              </div>
              <div className="md:col-span-2 flex justify-between">
                <span className="text-purple-300">Birth Place:</span>
                <span className="text-white font-medium">{formData.birthPlace}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-purple-300">Chart Style:</span>
                <span className="text-white font-medium">{formData.chartStyle}</span>
              </div>
            </div>
          </div>

          {/* Success Message */}
          <div className="text-center space-y-4">
            <div className="flex justify-center mb-4">
              <div className="p-6 bg-green-600/20 rounded-full backdrop-blur-sm border border-green-500/30">
                <Check className="h-12 w-12 text-green-400" />
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white">Payment Successful!</h3>
            <p className="text-purple-200 leading-relaxed">
              Your cosmic reading order has been confirmed. You will receive your personalized Kundali report 
              within 24-48 hours at your registered email address.
            </p>
          </div>

          {/* Continue Button */}
          <button
            onClick={onSuccess}
            className="w-full mystical-btn text-white font-bold py-5 rounded-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-3 text-lg"
          >
            <Sparkles className="h-6 w-6" />
            <span>Continue to Success Page</span>
            <Sparkles className="h-6 w-6" />
          </button>

          <p className="text-center text-sm text-purple-300 flex items-center justify-center space-x-2">
            <Star className="h-4 w-4" />
            <span>Your cosmic reading will be delivered digitally within 24-48 hours</span>
            <Star className="h-4 w-4" />
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartPage;