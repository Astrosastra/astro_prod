import React from 'react';
import { CheckCircle, Mail, Clock, Sparkles, Star, Moon, Zap, Copy, Check } from 'lucide-react';

interface SuccessPageProps {
  onNewOrder: () => void;
}

const SuccessPage: React.FC<SuccessPageProps> = ({ onNewOrder }) => {
  const [copiedPaymentId, setCopiedPaymentId] = React.useState(false);
  const [paymentId, setPaymentId] = React.useState<string | null>(null);

  React.useEffect(() => {
    // Get payment details from localStorage
    const paymentDetails = localStorage.getItem('paymentDetails');
    if (paymentDetails) {
      try {
        const details = JSON.parse(paymentDetails);
        setPaymentId(details.razorpay_payment_id);
      } catch (error) {
        console.error('Failed to parse payment details:', error);
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

  return (
    <div className="max-w-2xl mx-auto relative z-10">
      <div className="cosmic-card rounded-3xl aurora-glow overflow-hidden">
        {/* Mystical Success Header */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-green-500/90 via-emerald-400/90 to-cyan-500/90"></div>
          <div className="relative px-8 py-12 text-center">
            <div className="flex justify-center mb-6">
              <div className="relative">
                <div className="p-6 bg-white/20 rounded-full backdrop-blur-sm cosmic-pulse">
                  <CheckCircle className="h-20 w-20 text-white" />
                </div>
                <Sparkles className="absolute -top-2 -right-2 h-8 w-8 text-cyan-200 animate-pulse" />
                <Star className="absolute -bottom-2 -left-2 h-6 w-6 text-green-200 animate-pulse" />
              </div>
            </div>
            <h2 className="text-4xl font-bold text-white mb-3">Cosmic Energy Channeled!</h2>
            <p className="text-green-100 text-lg flex items-center justify-center space-x-2">
              <Moon className="h-5 w-5" />
              <span>Your celestial reading is being woven by the universe</span>
              <Moon className="h-5 w-5" />
            </p>
            
            {/* Payment ID Display */}
            {paymentId && (
              <div className="mt-6 flex items-center justify-center">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2 border border-white/20">
                  <div className="flex items-center space-x-3">
                    <span className="text-green-200 text-sm font-mono">
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
          </div>
        </div>

        <div className="p-8 space-y-8">
          {/* Success Message */}
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center justify-center space-x-2">
              <Zap className="h-6 w-6 text-cyan-400" />
              <span>Thank you, cosmic seeker!</span>
              <Zap className="h-6 w-6 text-cyan-400" />
            </h3>
            <p className="text-purple-200 leading-relaxed">
              The cosmic energies have received your celestial coordinates and your personalized astrology reading is now being 
              channeled by our expert cosmic interpreters. You will receive profound insights about your soul's journey, 
              destiny patterns, relationship harmonies, and future cosmic alignments.
            </p>
          </div>

          {/* Delivery Information */}
          <div className="relative overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-500/20 to-pink-500/20"></div>
            <div className="relative p-6 backdrop-blur-sm border border-blue-500/30 rounded-2xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-4 bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 rounded-xl cosmic-pulse">
                  <Clock className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg">Cosmic Manifestation Timeline</h4>
                  <p className="text-cyan-300 font-semibold text-lg">Within 24 to 48 celestial hours</p>
                </div>
              </div>
              <p className="text-purple-200 text-sm">
                Your complete cosmic reading will materialize in your email realm. 
                Please check both your primary inbox and the mystical spam dimensions.
              </p>
            </div>
          </div>

          {/* What's Included */}
          <div className="cosmic-card rounded-2xl p-6 border border-purple-500/20">
            <h4 className="font-bold text-white mb-6 flex items-center space-x-2">
              <Star className="h-6 w-6 text-cyan-400" />
              <span>Your Cosmic Reading Includes:</span>
            </h4>
            <div className="space-y-4">
              {[
                'Detailed celestial birth chart interpretation',
                'Soul personality traits and cosmic characteristics',
                'Career and abundance manifestation insights',
                'Love and relationship cosmic harmonies',
                'Health and wellness cosmic guidance',
                'Lucky cosmic numbers, colors, and mystical gemstones',
                'Favorable cosmic time periods and future predictions'
              ].map((feature, index) => (
                <div key={index} className="flex items-center space-x-4 group">
                  <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 group-hover:text-cyan-400 transition-colors" />
                  <span className="text-purple-200 group-hover:text-white transition-colors">{feature}</span>
                  <Sparkles className="h-4 w-4 text-purple-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>

          {/* Contact Support */}
          <div className="relative overflow-hidden rounded-xl">
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-600/20 to-orange-500/20"></div>
            <div className="relative p-4 border border-yellow-500/30 rounded-xl backdrop-blur-sm">
              <div className="flex items-center space-x-3 mb-2">
                <Mail className="h-6 w-6 text-yellow-400" />
                <span className="text-sm font-bold text-yellow-300">Need Cosmic Assistance?</span>
              </div>
              <p className="text-sm text-yellow-200">
                If your cosmic reading doesn't manifest within 24 to 48 celestial hours or you need guidance, 
                please contact our cosmic support guardians.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;