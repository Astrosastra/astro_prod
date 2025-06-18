import React, { useState } from 'react';
import FormPage from './components/FormPage';
import SuccessPage from './components/SuccessPage';
import TermsAndConditions from './components/TermsAndConditions';
import VerificationFailedPage from './components/VerificationFailedPage';
import PaymentNotCompletedPage from './components/PaymentNotCompletedPage';
import Header from './components/Header';
import CosmicBackground from './components/CosmicBackground';

type Page = 'form' | 'success' | 'terms' | 'verification-failed' | 'payment-not-completed';

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('form');

  const navigateToPage = (page: Page) => {
    setCurrentPage(page);
    // Update URL for test routes
    if (page === 'verification-failed') {
      window.history.pushState({}, '', '?page=verification-failed');
    } else if (page === 'payment-not-completed') {
      window.history.pushState({}, '', '?page=payment-not-completed');
    } else {
      window.history.pushState({}, '', '/');
    }
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'form':
        return (
          <FormPage 
            onNext={() => navigateToPage('success')} 
            onTerms={() => navigateToPage('terms')}
            onVerificationFailed={() => navigateToPage('verification-failed')}
            onPaymentNotCompleted={() => navigateToPage('payment-not-completed')}
          />
        );
      case 'success':
        return <SuccessPage onNewOrder={() => navigateToPage('form')} />;
      case 'terms':
        return <TermsAndConditions onBack={() => navigateToPage('form')} />;
      case 'verification-failed':
        return (
          <VerificationFailedPage 
            onBack={() => navigateToPage('form')}
            onRetry={() => navigateToPage('form')}
          />
        );
      case 'payment-not-completed':
        return (
          <PaymentNotCompletedPage 
            onBack={() => navigateToPage('form')}
            onRetry={() => navigateToPage('form')}
          />
        );
      default:
        return (
          <FormPage 
            onNext={() => navigateToPage('success')} 
            onTerms={() => navigateToPage('terms')}
            onVerificationFailed={() => navigateToPage('verification-failed')}
            onPaymentNotCompleted={() => navigateToPage('payment-not-completed')}
          />
        );
    }
  };

  return (
    <div className="min-h-screen cosmic-bg relative overflow-hidden">
      <CosmicBackground />
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 py-8">
          {renderCurrentPage()}
        </main>
      </div>
    </div>
  );
}

export default App;