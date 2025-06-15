import React, { useState, useEffect } from 'react';
import { AlertTriangle, ArrowLeft, Shield, RefreshCw, Sparkles, Star, Moon, Heart, Users, Award, Copy, Check } from 'lucide-react';

interface VerificationFailedPageProps {
  onBack: () => void;
  onRetry: () => void;
}

interface VerificationError {
  type: string;
  message: string;
  razorpaySignature?: string;
  generatedSignature?: string;
  paymentData?: any;
  orderId?: string;
  failedAt?: string;
}

const VerificationFailedPage: React.FC<VerificationFailedPageProps> = ({ onBack, onRetry }) => {
  const [errorDetails, setErrorDetails] = useState<VerificationError | null>(null);
  const [copiedPaymentId, setCopiedPaymentId] = useState(false);
  const [paymentId, setPaymentId] = useState<string | null>(null);

  useEffect(() => {
    const savedError = localStorage.getItem('verificationError');
    if (savedError) {
      try {
        const errorData = JSON.parse(savedError);
        setErrorDetails(errorData);
        
        // Extract payment ID from error details
        if (errorData.paymentData?.razorpay_payment_id) {
          setPaymentId(errorData.paymentData.razorpay_payment_id);
        }
      } catch (error) {
        console.error('Failed to parse verification error:', error);
      }
    }
  }, []);

  const copyPaymentId = async () => {
    if (paymentId) {
      try {
        await navigator.clipboard.writeText(paymentId);
        setCopiedPaymentId(true);
        setTimeout(() => setCopiedPaymentId(false), 2000);
      } catch (error) {
        console.error('Failed to copy payment ID:', error);
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = paymentId;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopiedPaymentId(true);
        setTimeout(() => setCopiedPaymentId(false), 2000);
      }
    }
  };

  const handleRetryPayment = () => {
    // Clear error data and retry
    localStorage.removeItem('verificationError');
    onRetry();
  };

  return (
    <div className="max-w-3xl mx-auto relative z-10">
      <div className="cosmic-card rounded-3xl aurora-glow overflow-hidden">
        {/* Header with Trust-Building Design */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-orange-600/90 via-red-500/90 to-pink-500/90"></div>
          <div className="relative px-4 sm:px-8 py-6 sm:py-8">
            <div className="flex items-center space-x-4 mb-4">
              <button
                onClick={onBack}
                className="p-3 hover:bg-white/20 rounded-xl transition-all duration-300 group"
              >
                <ArrowLeft className="h-6 w-6 text-white group-hover:text-orange-200" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-white">Payment Failed</h1>
                  <p className="text-orange-100 flex items-center space-x-2">
                    <AlertTriangle className="h-4 w-4" />
                    <span>We're here to help resolve this quickly</span>
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
                <div className="p-6 bg-orange-600/20 rounded-full backdrop-blur-sm border border-orange-500/30">
                  <AlertTriangle className="h-16 w-16 text-orange-400" />
                </div>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-orange-600/20 via-red-500/20 to-pink-500/20 opacity-60 blur-xl animate-pulse"></div>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-2xl sm:text-3xl font-bold text-white">
                Your payment could not be processed
              </h2>
              
              {/* Payment ID Display */}
              {paymentId && (
                <div className="flex items-center justify-center mt-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                    <div className="flex items-center space-x-3">
                      <span className="text-orange-200 text-sm font-mono">
                        Payment ID: {paymentId}
                      </span>
                      <button
                        onClick={copyPaymentId}
                        className="p-1.5 hover:bg-white/20 rounded-md transition-all duration-200 group"
                        title="Copy Payment ID"
                      >
                        {copiedPaymentId ? (
                          <Check className="h-4 w-4 text-green-300" />
                        ) : (
                          <Copy className="h-4 w-4 text-white/70 group-hover:text-white" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              )}
              
              <p className="text-lg text-orange-200 leading-relaxed max-w-2xl mx-auto">
                Please try again or contact our support team for assistance.
              </p>
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
              <h4 className="font-bold text-white mb-2">Your Money is Safe</h4>
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

          {/* Action Buttons */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleRetryPayment}
                className="flex-1 mystical-btn text-white font-bold py-4 rounded-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center justify-center space-x-3"
              >
                <RefreshCw className="h-5 w-5" />
                <span>Try Payment Again</span>
                <Sparkles className="h-5 w-5" />
              </button>
            </div>

            {/* Support Information */}
            <div className="cosmic-card rounded-2xl p-6 border border-cyan-500/20">
              <h3 className="font-bold text-white text-lg mb-4 flex items-center space-x-2">
                <Heart className="h-5 w-5 text-pink-400" />
                <span>Need Help? Contact Our Support Team</span>
              </h3>
              
              <div className="space-y-4">
                <div className="bg-purple-600/10 rounded-lg border border-purple-500/20 p-4">
                  <p className="text-purple-200 text-center">
                    If you continue to experience issues, please reach out to our support team. 
                    They will be happy to assist you with your cosmic reading order.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Reassurance Footer */}
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2 text-cyan-300">
              <Moon className="h-5 w-5" />
              <span className="text-sm">Your cosmic reading is waiting</span>
              <Moon className="h-5 w-5" />
            </div>
            
            <p className="text-xs text-purple-400">
              If payment was deducted, it will be automatically refunded within 12-15 business days if the order cannot be processed.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationFailedPage;