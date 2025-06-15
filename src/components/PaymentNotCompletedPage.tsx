import React from 'react';
import { X, ArrowLeft, Shield, RefreshCw, Sparkles, Star, Moon, Heart, Users, Award, CreditCard } from 'lucide-react';

interface PaymentNotCompletedPageProps {
  onBack: () => void;
  onRetry: () => void;
}

const PaymentNotCompletedPage: React.FC<PaymentNotCompletedPageProps> = ({ onBack, onRetry }) => {
  const handleRetryPayment = () => {
    // Clear any stored data and retry
    localStorage.removeItem('paymentCancelled');
    onRetry();
  };

  return (
    <div className="max-w-3xl mx-auto relative z-10">
      <div className="cosmic-card rounded-3xl aurora-glow overflow-hidden">
        {/* Header with Trust-Building Design */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-indigo-500/90 to-purple-500/90"></div>
          <div className="relative px-4 sm:px-8 py-6 sm:py-8">
            <div className="flex items-center space-x-4 mb-4">
              <button
                onClick={onBack}
                className="p-3 hover:bg-white/20 rounded-xl transition-all duration-300 group"
              >
                <ArrowLeft className="h-6 w-6 text-white group-hover:text-blue-200" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                  <CreditCard className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-white">Payment Not Completed</h1>
                  <p className="text-blue-100 flex items-center space-x-2">
                    <X className="h-4 w-4" />
                    <span>Your cosmic reading is still waiting for you</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-4 sm:p-8 space-y-8">
          {/* Main Message - Customer-Centric */}
          <div className="text-center space-y-6">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="p-6 bg-blue-600/20 rounded-full backdrop-blur-sm border border-blue-500/30">
                  <X className="h-16 w-16 text-blue-400" />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600/20 via-indigo-500/20 to-purple-500/20 opacity-60 blur-xl animate-pulse"></div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Your payment was not completed
              </h2>
              <p className="text-lg text-blue-200 leading-relaxed max-w-2xl mx-auto">
                It looks like you closed the payment window. Don't worry - your cosmic reading is still available! 
                Complete your payment to unlock your personalized Kundali report.
              </p>
            </div>
          </div>

          {/* Special Offer Reminder */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 via-red-500/20 to-pink-500/20"></div>
            <div className="relative p-6 backdrop-blur-sm border border-orange-500/30 rounded-2xl">
              <div className="text-center space-y-4">
                <div className="flex justify-center mb-4">
                  <div className="p-4 bg-gradient-to-br from-orange-600 via-red-500 to-pink-500 rounded-xl cosmic-pulse">
                    <Sparkles className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white">Limited Time Offer Still Active!</h3>
                <div className="flex items-center justify-center space-x-4">
                  <span className="text-lg text-orange-300 line-through">₹3999</span>
                  <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-lg text-sm font-bold">
                    90% OFF
                  </div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">₹399</span>
                </div>
                <p className="text-orange-200 text-sm">
                  Your special pricing is still reserved! Complete your payment now to secure this incredible deal.
                </p>
              </div>
            </div>
          </div>

          {/* Trust Building Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
            <div className="cosmic-card rounded-xl p-4 sm:p-6 text-center border border-green-500/20">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-gradient-to-br from-green-600 to-emerald-500 rounded-lg">
                  <Shield className="h-6 w-6 text-white" />
                </div>
              </div>
              <h4 className="font-bold text-white mb-2">100% Secure Payment</h4>
              <p className="text-green-200 text-sm">Bank-grade security protects all transactions</p>
            </div>
            
            <div className="cosmic-card rounded-xl p-4 sm:p-6 text-center border border-blue-500/20">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-lg">
                  <Users className="h-6 w-6 text-white" />
                </div>
              </div>
              <h4 className="font-bold text-white mb-2">50,000+ Happy Customers</h4>
              <p className="text-blue-200 text-sm">Trusted by thousands for accurate readings</p>
            </div>
            
            <div className="cosmic-card rounded-xl p-4 sm:p-6 text-center border border-purple-500/20">
              <div className="flex justify-center mb-3">
                <div className="p-3 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg">
                  <Award className="h-6 w-6 text-white" />
                </div>
              </div>
              <h4 className="font-bold text-white mb-2">15+ Years Experience</h4>
              <p className="text-purple-200 text-sm">Expert astrologers you can trust</p>
            </div>
          </div>

          {/* What You'll Get Reminder */}
          <div className="cosmic-card rounded-2xl p-6 border border-cyan-500/20">
            <h3 className="font-bold text-white text-lg mb-4 flex items-center space-x-2">
              <Star className="h-5 w-5 text-cyan-400" />
              <span>Your Cosmic Reading Includes:</span>
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'Complete Vedic birth chart analysis',
                'Personality traits & characteristics',
                'Career & financial guidance',
                'Love & relationship insights',
                'Health & wellness predictions',
                'Lucky numbers, colors & gemstones',
                'Favorable time periods',
                'Detailed remedies & solutions'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"></div>
                  <span className="text-purple-200 text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4">
            <button
              onClick={handleRetryPayment}
              className="w-full mystical-btn text-white font-bold py-4 sm:py-5 rounded-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-3 text-lg"
            >
              <CreditCard className="h-6 w-6" />
              <span>Complete Payment - ₹399</span>
              <Sparkles className="h-6 w-6" />
            </button>

            <div className="text-center">
              <button
                onClick={onBack}
                className="text-purple-300 hover:text-white transition-colors text-sm underline"
              >
                ← Go back to form
              </button>
            </div>
          </div>

          {/* Support Information */}
          <div className="cosmic-card rounded-2xl p-6 border border-cyan-500/20">
            <h3 className="font-bold text-white text-lg mb-4 flex items-center space-x-2">
              <Heart className="h-5 w-5 text-pink-400" />
              <span>Need Help? We're Here for You</span>
            </h3>
            
            <div className="space-y-4">
              <div className="bg-purple-600/10 rounded-lg border border-purple-500/20 p-4">
                <p className="text-purple-200 text-center text-sm">
                  If you're experiencing any issues with the payment process, our support team is ready to assist you. 
                  Your cosmic reading is waiting - let us help you complete your order!
                </p>
              </div>
            </div>
          </div>

          {/* Reassurance Footer */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 text-cyan-300">
              <Moon className="h-5 w-5" />
              <span className="text-sm">Your cosmic destiny awaits - complete your payment to unlock it</span>
              <Moon className="h-5 w-5" />
            </div>
            
            <p className="text-xs text-purple-400">
              🔒 Secure payment gateway • 💫 Instant order confirmation • 📧 Report delivered within 24-48 hours
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentNotCompletedPage;