import React from 'react';
import { TransactionProvider } from './context/TransactionContext';
import Header from './components/Header';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import FinancialSummary from './components/FinancialSummary';
import CategorySummary from './components/CategorySummary';
import CategoryChart from './components/CategoryChart';

function App() {
  return (
    <TransactionProvider>
      <div className="min-h-screen bg-gray-100">
        <Header />
        
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <FinancialSummary />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1">
              <TransactionForm />
              <CategorySummary />
              <div className="mt-8">
                <CategoryChart />
              </div>
            </div>
            
            <div className="lg:col-span-2">
              <TransactionList />
            </div>
          </div>
        </main>
        
        <footer className="bg-white border-t border-gray-200 py-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-gray-500 text-sm">
              ExpenseTracker © {new Date().getFullYear()} | Your Financial Partner
            </p>
          </div>
        </footer>
      </div>
    </TransactionProvider>
  );
}

export default App;