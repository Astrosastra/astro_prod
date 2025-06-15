import React, { useState, useEffect } from 'react';
import { Calendar, MapPin, User, Mail, Clock, Globe, FileText, Sparkles, Moon, Phone, Shield, Users, Timer, Megaphone, Zap, TrendingUp, CreditCard } from 'lucide-react';
import PlaceAutocomplete from './PlaceAutocomplete';
import FeaturesCarousel from './FeaturesCarousel';

// Custom Target with Arrow Component
const TargetAccuracyIcon: React.FC<{ className?: string }> = ({ className = "h-6 w-6" }) => (
  <svg viewBox="0 0 80 80" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Target rings - exact design from image */}
    <circle cx="40" cy="40" r="35" fill="#FF6B35" stroke="none" />
    <circle cx="40" cy="40" r="26" fill="white" stroke="none" />
    <circle cx="40" cy="40" r="17" fill="#FF6B35" stroke="none" />
    <circle cx="40" cy="40" r="8" fill="white" stroke="none" />
    <circle cx="40" cy="40" r="4" fill="#FF6B35" stroke="none" />
    
    {/* Arrow pointing to center - exact design from image */}
    <g transform="rotate(-45 40 40)">
      {/* Arrow shaft */}
      <rect x="8" y="38" width="28" height="4" fill="#4A5568" rx="2" />
      
      {/* Arrow head */}
      <path d="M36 34 L48 40 L36 46 Z" fill="#4A5568" />
      
      {/* Arrow fletching */}
      <path d="M5 36 L11 38 L11 42 L5 44 Z" fill="#06B6D4" />
    </g>
  </svg>
);

interface FormData {
  name: string;
  email: string;
  phone: string;
  gender: string;
  birthDate: string;
  birthTime: string;
  birthPlace: string;
  language: string;
  chartStyle: string;
}

interface FormPageProps {
  onNext: () => void;
  onTerms: () => void;
  onVerificationFailed?: () => void;
  onPaymentNotCompleted?: () => void;
}

declare global {
  interface Window {
    Razorpay: any;
  }
}

const FormPage: React.FC<FormPageProps> = ({ onNext, onTerms, onVerificationFailed, onPaymentNotCompleted }) => {
  // State for the countdown timer
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    gender: '',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    language: 'English',
    chartStyle: 'North Indian'
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Get today's date in YYYY-MM-DD format for max date restriction
  const getTodayDate = () => {
    const today = new Date();
    return today.toISOString().split('T')[0];
  };

  // Function to calculate time remaining until the end of the current day
  const calculateTimeLeft = () => {
    const now = new Date();
    const endOfDay = new Date();
    endOfDay.setHours(23, 59, 59, 999); // Set to end of today

    const difference = endOfDay.getTime() - now.getTime();

    if (difference > 0) {
      const hours = Math.floor(difference / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { hours, minutes, seconds };
    }

    return { hours: 0, minutes: 0, seconds: 0 };
  };

  // Effect hook to update the timer every second
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Set initial time immediately
    setTimeLeft(calculateTimeLeft());

    // Cleanup the interval when the component unmounts
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const savedData = localStorage.getItem('astrologyForm');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.birthDate) {
      newErrors.birthDate = 'Birth date is required';
    } else {
      // Additional validation to ensure birth date is not in the future
      const selectedDate = new Date(formData.birthDate);
      const today = new Date();
      today.setHours(23, 59, 59, 999); // Set to end of today
      
      if (selectedDate > today) {
        newErrors.birthDate = 'Birth date cannot be in the future';
      }
    }
    if (!formData.birthTime) newErrors.birthTime = 'Birth time is required';
    if (!formData.birthPlace.trim()) newErrors.birthPlace = 'Birth place is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const verifyPayment = async (paymentData: any, orderId: string) => {
    try {
      console.log('🔍 Starting payment verification...');
      console.log('💳 Payment data received:', paymentData);
      console.log('🆔 Using order_id for verification:', orderId);

      if (!orderId) {
        console.error('❌ No order_id available for verification!');
        alert('Payment verification failed: Missing order ID. Please contact support.');
        setIsSubmitting(false);
        return;
      }

      // Extract the Razorpay signature from payment data
      const razorpaySignature = paymentData.razorpay_signature;
      
      if (!razorpaySignature) {
        console.error('❌ No Razorpay signature received from payment!');
        localStorage.setItem('verificationError', JSON.stringify({
          type: 'missing_signature',
          message: 'Payment signature missing',
          paymentData,
          orderId
        }));
        if (onVerificationFailed) {
          onVerificationFailed();
        }
        setIsSubmitting(false);
        return;
      }

      console.log('🔐 Razorpay signature to verify:', razorpaySignature);

      // Call verification API
      const verificationPayload = {
        razorpay_payment_id: paymentData.razorpay_payment_id,
        razorpay_order_id: paymentData.razorpay_order_id,
        razorpay_signature: razorpaySignature,
        order_id: orderId,
        ...formData
      };

      console.log('📤 Verification payload being sent:', verificationPayload);

      const response = await fetch('/api/verify-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(verificationPayload)
      });

      console.log('📥 Verification response status:', response.status);

      if (!response.ok) {
        throw new Error(`Verification API returned status ${response.status}`);
      }

      const verificationResult = await response.json();
      console.log('✅ Verification result:', verificationResult);

      // Extract the generated signature from verification response
      const generatedSignature = verificationResult.generated_signature;
      
      if (!generatedSignature) {
        console.error('❌ No generated_signature received from verification API!');
        localStorage.setItem('verificationError', JSON.stringify({
          type: 'missing_generated_signature',
          message: 'Verification API did not return generated signature',
          verificationResult,
          paymentData,
          orderId
        }));
        if (onVerificationFailed) {
          onVerificationFailed();
        }
        setIsSubmitting(false);
        return;
      }

      console.log('🔐 Generated signature from API:', generatedSignature);
      console.log('🔐 Razorpay signature from payment:', razorpaySignature);

      // Compare signatures
      const signaturesMatch = generatedSignature === razorpaySignature;
      
      console.log('🔍 Signature comparison result:', signaturesMatch ? '✅ MATCH' : '❌ NO MATCH');

      if (signaturesMatch) {
        // ✅ VERIFICATION SUCCESSFUL
        console.log('🎉 Payment verification successful! Signatures match.');
        
        // Store successful payment data
        localStorage.setItem('paymentSuccess', 'true');
        localStorage.setItem('paymentDetails', JSON.stringify({
          ...paymentData,
          orderId,
          verificationResult,
          verifiedAt: new Date().toISOString()
        }));
        
        // Navigate to success page
        onNext();
      } else {
        // ❌ VERIFICATION FAILED
        console.error('❌ Payment verification failed! Signatures do not match.');
        
        // Store verification failure data for support
        localStorage.setItem('verificationError', JSON.stringify({
          type: 'signature_mismatch',
          message: 'Payment signatures do not match',
          razorpaySignature,
          generatedSignature,
          paymentData,
          orderId,
          verificationResult,
          failedAt: new Date().toISOString()
        }));
        
        // Navigate to verification failed page
        if (onVerificationFailed) {
          onVerificationFailed();
        }
      }
      
      setIsSubmitting(false);
    } catch (error) {
      console.error('💥 Payment verification error:', error);
      
      // Store error details for support
      localStorage.setItem('verificationError', JSON.stringify({
        type: 'verification_api_error',
        message: error instanceof Error ? error.message : 'Unknown verification error',
        paymentData,
        orderId,
        errorAt: new Date().toISOString()
      }));
      
      // Navigate to verification failed page
      if (onVerificationFailed) {
        onVerificationFailed();
      }
      
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Save form data to localStorage
      localStorage.setItem('astrologyForm', JSON.stringify(formData));

      const orderData = {
        ...formData,
        currency: 'INR',
        amount: 39900, // ₹399.00 in paise
        consent: true
      };

      console.log('🚀 Initializing payment with order data:', orderData);

      // Initialize payment
      const paymentsResponse = await fetch('/api/astrology-payments', {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(orderData)
      });

      console.log('📡 Payments response status:', paymentsResponse.status);
      console.log('📡 Payments response ok:', paymentsResponse.ok);

      // Handle different error status codes
      if (!paymentsResponse.ok) {
        let errorMessage = `Payment initialization failed with status ${paymentsResponse.status}`;
        
        try {
          const errorText = await paymentsResponse.text();
          console.log('❌ Error response body:', errorText);
          
          if (paymentsResponse.status === 401) {
            errorMessage = 'Authentication failed. Please contact support.';
          } else if (paymentsResponse.status === 403) {
            errorMessage = 'Access denied. Please contact support.';
          } else if (paymentsResponse.status === 500) {
            errorMessage = 'Server error. Please try again later.';
          } else if (errorText) {
            try {
              const errorData = JSON.parse(errorText);
              errorMessage = errorData.message || errorData.error || errorMessage;
            } catch {
              errorMessage = errorText.substring(0, 100) + '...';
            }
          }
        } catch (textError) {
          console.error('Failed to read error response:', textError);
        }
        
        throw new Error(errorMessage);
      }

      const paymentsText = await paymentsResponse.text();
      console.log('📄 Raw payments response text:', paymentsText);

      if (!paymentsText.trim()) {
        throw new Error('Payments endpoint returned empty response');
      }

      let paymentsData;
      try {
        paymentsData = JSON.parse(paymentsText);
        console.log('✅ Parsed payments response data:', paymentsData);
      } catch (jsonError) {
        console.error('❌ Failed to parse payments response as JSON:', paymentsText);
        console.error('❌ JSON parse error:', jsonError);
        throw new Error('Payments endpoint returned invalid JSON');
      }

      // Extract order_id and key with detailed logging
      console.log('🔍 Extracting order_id...');
      const order_id = paymentsData.order_id || paymentsData.orderId || paymentsData.id;
      
      console.log('🔍 Extracting razorpay_key...');
      const razorpay_key = paymentsData.razorpay_key || paymentsData.key || paymentsData.razorpay_key_id || paymentsData.key_id;

      console.log('🎯 Final extracted order_id:', order_id);
      console.log('🎯 Final extracted razorpay_key:', razorpay_key);

      if (!order_id) {
        console.error('❌ No order ID found in response');
        console.error('❌ Full payments response data:', JSON.stringify(paymentsData, null, 2));
        throw new Error('No order ID received from payments endpoint');
      }

      if (!razorpay_key) {
        console.error('❌ No Razorpay key found in response');
        console.error('❌ Full payments response data:', JSON.stringify(paymentsData, null, 2));
        throw new Error('No Razorpay key received from payments endpoint');
      }

      console.log('🔑 Initializing Razorpay with:');
      console.log('🔑 order_id:', order_id);
      console.log('🔑 razorpay_key:', razorpay_key);
      
      // Check if Razorpay is loaded
      if (!window.Razorpay) {
        throw new Error('Razorpay SDK not loaded. Please refresh the page and try again.');
      }

      const razorpayOptions = {
        key: razorpay_key,
        amount: 39900, // ₹399.00 in paise
        currency: 'INR',
        order_id: order_id,
        name: 'Astrosastra',
        description: 'Personalized Kundali Report',
        image: '/favicon.ico', // Add a logo if available
        handler: function (response: any) {
          console.log('💳 Payment completed, processing...', response);
          console.log('🆔 Will use order_id for verification:', order_id);
          verifyPayment(response, order_id); // Pass order_id directly
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        notes: {
          address: formData.birthPlace,
          birth_date: formData.birthDate,
          birth_time: formData.birthTime
        },
        theme: {
          color: '#8B5CF6'
        },
        modal: {
          ondismiss: function() {
            console.log('❌ Razorpay modal dismissed');
            // Navigate to payment not completed page when modal is dismissed
            if (onPaymentNotCompleted) {
              onPaymentNotCompleted();
            }
            setIsSubmitting(false);
          }
        }
      };

      console.log('🎛️ Final Razorpay options:', razorpayOptions);

      const razorpay = new window.Razorpay(razorpayOptions);

      console.log('🚀 Opening Razorpay modal...');
      razorpay.open();
    } catch (error) {
      console.error('💥 Payment initialization error:', error);
      setIsSubmitting(false);
      
      if (error instanceof Error) {
        alert(`Payment initialization failed: ${error.message}`);
      } else {
        alert('Payment initialization failed. Please try again.');
      }
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <>
      {/* Announcement Banner - Mobile Responsive */}
      <div className="w-screen -mx-4 mb-6 sm:mb-8 relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw]">
        <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 shadow-2xl">
          {/* Animated background elements */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-pulse"></div>
            <div className="absolute top-0 right-0 w-6 sm:w-12 h-6 sm:h-12 bg-white/10 rounded-full blur-xl animate-bounce"></div>
            <div className="absolute bottom-0 left-0 w-4 sm:w-8 h-4 sm:h-8 bg-yellow-300/20 rounded-full blur-lg animate-pulse"></div>
          </div>
          
          <div className="relative px-2 sm:px-4 py-2 sm:py-3">
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-3 sm:space-y-0 sm:space-x-4">
              {/* Main Content */}
              <div className="flex flex-col items-center space-y-1 order-2 sm:order-none">
                {/* Megaphone Icon */}
                <div className="flex-shrink-0">
                  <div className="p-1 sm:p-1.5 bg-white/20 rounded-full backdrop-blur-sm animate-bounce">
                    <Megaphone className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                  </div>
                </div>
                
                {/* Announcement Text */}
                <div className="text-center">
                  <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                    <Zap className="h-2 w-2 sm:h-3 sm:w-3 text-yellow-300 animate-pulse" />
                    <span className="text-white font-bold text-xs sm:text-sm uppercase tracking-wider">
                      🚨 MEGA SALE ALERT 🚨
                    </span>
                    <Zap className="h-2 w-2 sm:h-3 sm:w-3 text-yellow-300 animate-pulse" />
                  </div>
                </div>
                
                {/* Countdown Timer */}
                <div className="flex items-center justify-center space-x-1">
                  <Clock className="h-3 w-3 sm:h-4 sm:w-4 text-yellow-300" />
                  <span className="text-white font-bold text-sm sm:text-base bg-black/30 px-2 py-1 rounded backdrop-blur-sm">
                    {String(timeLeft.hours).padStart(2, '0')}:
                    {String(timeLeft.minutes).padStart(2, '0')}:
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-white/90 text-xs font-medium">
                    LEFT!
                  </span>
                </div>
                
                {/* Limited Time Offer Text */}
                <p className="text-white/90 text-xs font-medium">
                  Limited Time Offer - Ends Today!
                </p>
                
                {/* Price Section */}
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <div className="flex items-center space-x-1 sm:space-x-2">
                    <span className="text-sm sm:text-base font-bold text-white/80 line-through">₹3999</span>
                    <div className="relative">
                      <div className="bg-yellow-400 text-red-600 px-1.5 sm:px-2 py-0.5 rounded text-xs font-black uppercase shadow-lg transform rotate-2 animate-pulse">
                        90% OFF
                      </div>
                      <div className="absolute -top-0.5 -right-0.5 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full animate-ping"></div>
                    </div>
                    <span className="text-lg sm:text-xl font-black text-white drop-shadow-lg">₹399</span>
                  </div>
                  
                  {/* Trending Icon */}
                  <div className="flex-shrink-0">
                    <div className="p-1 sm:p-1.5 bg-green-500/80 rounded-full animate-pulse">
                      <TrendingUp className="h-3 w-3 sm:h-4 sm:w-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Bottom ticker - Mobile Responsive */}
            <div className="mt-1 sm:mt-2 text-center">
              <div className="inline-flex items-center space-x-1 bg-white/10 rounded-full px-2 sm:px-3 py-0.5 backdrop-blur-sm">
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-white text-xs font-semibold">
                  <span className="hidden sm:inline">🔥 50,000+ Reports Delivered | ⭐ 4.9/5 Rating | 🚀 Report Delivery within 48 hours</span>
                  <span className="sm:hidden">🔥 50K+ Reports | ⭐ 4.9/5 | 🚀 48hr Delivery</span>
                </span>
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
          
          {/* Animated border */}
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 animate-pulse"></div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Trust Indicators - Mobile Responsive */}
        <div className="mb-6 sm:mb-8">
          <div className="text-center mb-4 sm:mb-6">
            <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">India's Most Trusted Vedic Astrology Service</h2>
            <p className="text-sm sm:text-base text-purple-200">Get Personalized Kundali Report Delivered Digitally in 24-48 hours!</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="cosmic-card rounded-xl p-3 sm:p-4 text-center border border-purple-500/20">
              <div className="flex justify-center mb-2">
                <div className="p-1.5 sm:p-2 bg-gradient-to-br from-purple-600 to-pink-500 rounded-lg">
                  <Sparkles className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                </div>
              </div>
              <div className="text-lg sm:text-xl font-bold text-white">15+ Years</div>
              <div className="text-xs sm:text-sm text-purple-200">Expert Experience</div>
            </div>
            
            <div className="cosmic-card rounded-xl p-3 sm:p-4 text-center border border-purple-500/20">
              <div className="flex justify-center mb-2">
                <div className="p-1.5 sm:p-2 bg-gradient-to-br from-cyan-600 to-blue-500 rounded-lg">
                  <TargetAccuracyIcon className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                </div>
              </div>
              <div className="text-lg sm:text-xl font-bold text-white">100%</div>
              <div className="text-xs sm:text-sm text-purple-200">Accurate Analysis</div>
            </div>
            
            <div className="cosmic-card rounded-xl p-3 sm:p-4 text-center border border-purple-500/20">
              <div className="flex justify-center mb-2">
                <div className="p-1.5 sm:p-2 bg-gradient-to-br from-pink-600 to-purple-500 rounded-lg">
                  <Users className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                </div>
              </div>
              <div className="text-lg sm:text-xl font-bold text-white">50,000+</div>
              <div className="text-xs sm:text-sm text-purple-200">Satisfied Clients</div>
            </div>
            
            <div className="cosmic-card rounded-xl p-3 sm:p-4 text-center border border-purple-500/20">
              <div className="flex justify-center mb-2">
                <div className="p-1.5 sm:p-2 bg-gradient-to-br from-green-600 to-emerald-500 rounded-lg">
                  <Timer className="h-4 w-4 sm:h-6 sm:w-6 text-white" />
                </div>
              </div>
              <div className="text-lg sm:text-xl font-bold text-white">48 Hours</div>
              <div className="text-xs sm:text-sm text-purple-200">Quick Delivery</div>
            </div>
          </div>
        </div>

        <div className="cosmic-card rounded-3xl aurora-glow overflow-hidden">
          {/* Mystical Header - Mobile Responsive */}
          <div className="relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 via-pink-500/90 to-cyan-500/90"></div>
            <div className="relative px-4 sm:px-8 py-6 sm:py-8">
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-4 mb-4">
                <div className="p-2 sm:p-3 bg-white/20 rounded-full backdrop-blur-sm">
                  <Moon className="h-6 w-6 sm:h-8 sm:w-8 text-white" />
                </div>
                <div className="text-center sm:text-left">
                  <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">Personal Details</h2>
                  <p className="text-purple-100 flex items-center justify-center sm:justify-start space-x-2">
                    <Sparkles className="h-4 w-4" />
                    <span className="text-sm sm:text-base">Share your celestial coordinates to unlock your destiny</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="p-4 sm:p-8 space-y-6 sm:space-y-8">
            {/* Name and Email Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-purple-200 mb-3">
                  <User className="inline h-5 w-5 mr-2 text-cyan-400" />
                  Full Name <span className="text-pink-400">*</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className={`w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl cosmic-input text-white placeholder-purple-300 transition-all duration-300 ${
                    errors.name ? 'border-pink-400 bg-pink-900/20' : ''
                  }`}
                  placeholder="Full Name"
                />
                {errors.name && <p className="text-pink-400 text-sm mt-2 flex items-center space-x-1">
                  <span>✦</span><span>{errors.name}</span>
                </p>}
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-semibold text-purple-200 mb-3">
                  <Mail className="inline h-5 w-5 mr-2 text-cyan-400" />
                  Email Address <span className="text-pink-400">*</span>
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl cosmic-input text-white placeholder-purple-300 transition-all duration-300 ${
                    errors.email ? 'border-pink-400 bg-pink-900/20' : ''
                  }`}
                  placeholder="Email Address"
                />
                {errors.email && <p className="text-pink-400 text-sm mt-2 flex items-center space-x-1">
                  <span>✦</span><span>{errors.email}</span>
                </p>}
              </div>
            </div>

            {/* Phone and Gender Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-purple-200 mb-3">
                  <Phone className="inline h-5 w-5 mr-2 text-cyan-400" />
                  Phone Number <span className="text-pink-400">*</span>
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className={`w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl cosmic-input text-white placeholder-purple-300 transition-all duration-300 ${
                    errors.phone ? 'border-pink-400 bg-pink-900/20' : ''
                  }`}
                  placeholder="Phone Number"
                />
                {errors.phone && <p className="text-pink-400 text-sm mt-2 flex items-center space-x-1">
                  <span>✦</span><span>{errors.phone}</span>
                </p>}
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-semibold text-purple-200 mb-3">
                  <Sparkles className="inline h-5 w-5 mr-2 text-cyan-400" />
                  Gender <span className="text-pink-400">*</span>
                </label>
                <select
                  value={formData.gender}
                  onChange={(e) => handleInputChange('gender', e.target.value)}
                  className={`w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl cosmic-input text-white transition-all duration-300 ${
                    errors.gender ? 'border-pink-400 bg-pink-900/20' : ''
                  }`}
                >
                  <option value="" className="bg-slate-800">Select Gender</option>
                  <option value="Male" className="bg-slate-800">Male</option>
                  <option value="Female" className="bg-slate-800">Female</option>
                </select>
                {errors.gender && <p className="text-pink-400 text-sm mt-2 flex items-center space-x-1">
                  <span>✦</span><span>{errors.gender}</span>
                </p>}
              </div>
            </div>

            {/* Birth Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-purple-200 mb-3">
                  <Calendar className="inline h-5 w-5 mr-2 text-white" />
                  Date of Birth <span className="text-pink-400">*</span>
                </label>
                <input
                  type="date"
                  value={formData.birthDate}
                  onChange={(e) => handleInputChange('birthDate', e.target.value)}
                  max={getTodayDate()}
                  className={`w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl cosmic-input text-white transition-all duration-300 ${
                    errors.birthDate ? 'border-pink-400 bg-pink-900/20' : ''
                  }`}
                />
                {errors.birthDate && <p className="text-pink-400 text-sm mt-2 flex items-center space-x-1">
                  <span>✦</span><span>{errors.birthDate}</span>
                </p>}
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-semibold text-purple-200 mb-3">
                  <Clock className="inline h-5 w-5 mr-2 text-white" />
                  Birth Time <span className="text-pink-400">*</span>
                </label>
                <input
                  type="time"
                  value={formData.birthTime}
                  onChange={(e) => handleInputChange('birthTime', e.target.value)}
                  className={`w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl cosmic-input text-white transition-all duration-300 ${
                    errors.birthTime ? 'border-pink-400 bg-pink-900/20' : ''
                  }`}
                />
                {errors.birthTime && <p className="text-pink-400 text-sm mt-2 flex items-center space-x-1">
                  <span>✦</span><span>{errors.birthTime}</span>
                </p>}
              </div>
            </div>

            {/* Birth Place */}
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-purple-200 mb-3">
                <MapPin className="inline h-5 w-5 mr-2 text-cyan-400" />
                Birth Place <span className="text-pink-400">*</span>
              </label>
              <PlaceAutocomplete
                value={formData.birthPlace}
                onChange={(value) => handleInputChange('birthPlace', value)}
                error={errors.birthPlace}
              />
              {errors.birthPlace && <p className="text-pink-400 text-sm mt-2 flex items-center space-x-1">
                <span>✦</span><span>{errors.birthPlace}</span>
              </p>}
            </div>

            {/* Language and Chart Style */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-3">
                <label className="block text-sm font-semibold text-purple-200 mb-3">
                  <Globe className="inline h-5 w-5 mr-2 text-cyan-400" />
                  Language
                </label>
                <select
                  value={formData.language}
                  onChange={(e) => handleInputChange('language', e.target.value)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl cosmic-input text-white transition-all duration-300"
                >
                  <option value="English" className="bg-slate-800">English</option>
                  <option value="Hindi" className="bg-slate-800">Hindi</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="block text-sm font-semibold text-purple-200 mb-3">
                  <FileText className="inline h-5 w-5 mr-2 text-cyan-400" />
                  Chart Style
                </label>
                <select
                  value={formData.chartStyle}
                  onChange={(e) => handleInputChange('chartStyle', e.target.value)}
                  className="w-full px-4 sm:px-6 py-3 sm:py-4 rounded-xl cosmic-input text-white transition-all duration-300"
                >
                  <option value="North Indian" className="bg-slate-800">North Indian</option>
                  <option value="South Indian" className="bg-slate-800">South Indian</option>
                </select>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="max-w-md mx-auto mystical-btn text-white font-bold py-4 sm:py-5 px-8 sm:px-12 rounded-full transition-all duration-300 transform hover:scale-[1.05] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center space-x-2 sm:space-x-3 text-base sm:text-lg shadow-2xl"
            >
              <CreditCard className="h-5 w-5 sm:h-6 sm:w-6" />
              <span className="text-sm sm:text-base">{isSubmitting ? 'Channeling cosmic energy...' : 'Get Your Kundali Report - ₹399'}</span>
              <Sparkles className="h-5 w-5 sm:h-6 sm:w-6" />
            </button>

            {/* Trust Footer */}
            <div className="text-center pt-4">
              <p className="text-xs sm:text-sm text-purple-300 flex items-center justify-center space-x-2 mb-2">
                <Shield className="h-4 w-4" />
                <span>🔒 Protected & Safe Payment Gateway</span>
              </p>
              <p className="text-xs text-purple-400">
                By proceeding, you agree to our{' '}
                <button
                  type="button"
                  onClick={onTerms}
                  className="text-cyan-400 hover:text-cyan-300 underline transition-colors"
                >
                  Terms & Conditions
                </button>
              </p>
            </div>
          </form>
        </div>

        {/* Features Carousel */}
        <FeaturesCarousel />
      </div>
    </>
  );
};

export default FormPage;
