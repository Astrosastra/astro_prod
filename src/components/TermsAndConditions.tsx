import React, { useState, useEffect } from 'react';
import { ArrowLeft, FileText, Sparkles, Star, Moon, Shield, AlertCircle, Loader } from 'lucide-react';

interface TermsAndConditionsProps {
  onBack: () => void;
}

const TermsAndConditions: React.FC<TermsAndConditionsProps> = ({ onBack }) => {
  const [content, setContent] = useState<string>('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTermsContent = async () => {
      try {
        setIsLoading(true);
        setError(null);
        
        // Using a CORS proxy to fetch the content
        const response = await fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://astrosastra.com/termsandconditions'));
        
        if (!response.ok) {
          throw new Error('Failed to fetch terms and conditions');
        }
        
        const data = await response.json();
        
        // Extract text content from HTML
        const parser = new DOMParser();
        const doc = parser.parseFromString(data.contents, 'text/html');
        
        // Remove script tags and other unwanted elements
        const scripts = doc.querySelectorAll('script, style, nav, header, footer');
        scripts.forEach(script => script.remove());
        
        // Get the main content
        const mainContent = doc.querySelector('main') || doc.querySelector('.content') || doc.body;
        const textContent = mainContent?.textContent || data.contents;
        
        // Clean up the content
        const cleanContent = textContent
          .replace(/\s+/g, ' ')
          .replace(/\n\s*\n/g, '\n\n')
          .trim();
        
        setContent(cleanContent);
      } catch (err) {
        console.error('Error fetching terms:', err);
        setError('Unable to load terms and conditions. Please try again later.');
        
        // Fallback content
        setContent(`
TERMS AND CONDITIONS

Welcome to Astrosastra! These terms and conditions outline the rules and regulations for the use of our astrology services.

By accessing and using our services, you accept these terms and conditions in full. If you disagree with any part of these terms, please do not use our services.

1. SERVICE DESCRIPTION
Astrosastra provides personalized Vedic astrology readings and Kundali reports based on the birth details you provide.

2. USER RESPONSIBILITIES
- Provide accurate birth information
- Use services for personal guidance only
- Respect intellectual property rights

3. PAYMENT TERMS
- All payments are processed securely
- Digital reports are delivered within 24-48 hours
- Refunds are subject to our refund policy

4. PRIVACY POLICY
We protect your personal information and use it solely for providing astrology services.

5. LIMITATION OF LIABILITY
Astrology readings are for guidance purposes only and should not replace professional advice.

6. CONTACT INFORMATION
For questions about these terms, please contact our support team.

Last updated: ${new Date().toLocaleDateString()}
        `);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTermsContent();
  }, []);

  const formatContent = (text: string) => {
    // Split content into paragraphs and format
    const paragraphs = text.split('\n\n').filter(p => p.trim());
    
    return paragraphs.map((paragraph, index) => {
      const trimmed = paragraph.trim();
      
      // Check if it's a main heading (all caps or starts with "TERMS")
      if (trimmed.match(/^(TERMS|WELCOME|INTRODUCTION)/i) || (trimmed.match(/^[A-Z\s\d\.]+$/) && trimmed.length < 100 && !trimmed.match(/^\d+\./))) {
        return (
          <h2 key={index} className="text-2xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent mb-6 flex items-center space-x-3">
            <Star className="h-6 w-6 text-cyan-400" />
            <span>{trimmed}</span>
          </h2>
        );
      }
      
      // Check if it's a numbered section
      if (trimmed.match(/^\d+\./)) {
        return (
          <div key={index} className="mb-6">
            <h3 className="text-lg font-semibold text-white mb-3 flex items-center space-x-2">
              <div className="w-6 h-6 bg-gradient-to-br from-purple-600 to-pink-500 rounded-full flex items-center justify-center text-xs font-bold text-white">
                {trimmed.match(/^(\d+)/)?.[1]}
              </div>
              <span>{trimmed.replace(/^\d+\.\s*/, '')}</span>
            </h3>
          </div>
        );
      }
      
      // Check if it's a bullet point
      if (trimmed.startsWith('-') || trimmed.startsWith('•')) {
        return (
          <div key={index} className="flex items-start space-x-3 mb-3 ml-8">
            <Sparkles className="h-4 w-4 text-pink-400 mt-1 flex-shrink-0" />
            <span className="text-purple-200">{trimmed.replace(/^[-•]\s*/, '')}</span>
          </div>
        );
      }
      
      // Regular paragraph
      return (
        <p key={index} className="text-purple-200 mb-4 leading-relaxed">
          {trimmed}
        </p>
      );
    });
  };

  return (
    <div className="max-w-4xl mx-auto relative z-10">
      <div className="cosmic-card rounded-3xl aurora-glow overflow-hidden">
        {/* Mystical Header */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/90 via-pink-500/90 to-cyan-500/90"></div>
          <div className="relative px-4 sm:px-8 py-6 sm:py-8">
            <div className="flex items-center space-x-4">
              <button
                onClick={onBack}
                className="p-3 hover:bg-white/20 rounded-xl transition-all duration-300 group"
              >
                <ArrowLeft className="h-6 w-6 text-white group-hover:text-cyan-200" />
              </button>
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm cosmic-pulse">
                  <FileText className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h1 className="text-2xl sm:text-3xl font-bold text-white">Terms & Conditions</h1>
                  <p className="text-purple-100 flex items-center space-x-2">
                    <Shield className="h-4 w-4" />
                    <span>Cosmic guidelines for our celestial services</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-8">
          {isLoading ? (
            <div className="text-center py-12">
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <div className="p-6 bg-purple-600/20 rounded-full backdrop-blur-sm">
                    <Loader className="h-12 w-12 text-purple-400 animate-spin" />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-cyan-500/20 opacity-60 blur-xl animate-pulse"></div>
                </div>
              </div>
              <p className="text-purple-200 text-lg">Channeling cosmic legal wisdom...</p>
            </div>
          ) : error ? (
            <div className="text-center py-12">
              <div className="flex justify-center mb-6">
                <div className="p-6 bg-red-600/20 rounded-full backdrop-blur-sm border border-red-500/30">
                  <AlertCircle className="h-12 w-12 text-red-400" />
                </div>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Unable to Load Terms</h3>
              <p className="text-red-200 mb-6">{error}</p>
              <button
                onClick={() => window.location.reload()}
                className="mystical-btn text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105"
              >
                Try Again
              </button>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Terms Content */}
              <div className="cosmic-card rounded-2xl p-6 sm:p-8 border border-purple-500/20">
                <div className="space-y-6">
                  {formatContent(content)}
                </div>
              </div>

              {/* Footer Notice */}
              <div className="relative overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-emerald-500/20"></div>
                <div className="relative p-4 border border-green-500/30 rounded-xl backdrop-blur-sm">
                  <div className="flex items-center space-x-3 mb-2">
                    <Shield className="h-5 w-5 text-green-400" />
                    <span className="text-sm font-bold text-green-300">Legal Protection</span>
                  </div>
                  <p className="text-sm text-green-200">
                    These terms and conditions are effective immediately and govern your use of our astrology services. 
                    By proceeding with any service, you acknowledge that you have read, understood, and agree to be bound by these terms.
                  </p>
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex justify-center pt-6">
                <button
                  onClick={onBack}
                  className="mystical-btn text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-[1.02] flex items-center space-x-3"
                >
                  <ArrowLeft className="h-5 w-5" />
                  <span>Return to Portal</span>
                  <Sparkles className="h-5 w-5" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;