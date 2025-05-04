
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container py-12">
        <h1 className="text-4xl font-bold mb-6">Terms & Conditions</h1>
        <p className="text-gray-700 mb-8">Please read these terms and conditions carefully before using our website or services.</p>
        
        <div className="space-y-8 max-w-4xl">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
            <p className="text-gray-700">
              Welcome to EcoCycle. These terms and conditions govern your use of our website and the purchase or rental of products 
              from our store. By accessing our website or purchasing/renting our products, you agree to be bound by these terms and conditions.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">2. Definitions</h2>
            <div className="text-gray-700">
              <p>In these terms and conditions, the following definitions apply:</p>
              <ul className="list-disc pl-5 mt-2">
                <li>"Company", "we", "us", or "our" refers to EcoCycle.</li>
                <li>"Website" refers to ecocycle.com and all related subdomains.</li>
                <li>"Products" refers to the electric bicycles and related accessories sold or rented through our website or physical store.</li>
                <li>"Customer", "you", or "your" refers to the person accessing the website or purchasing/renting products.</li>
              </ul>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Product Information</h2>
            <p className="text-gray-700">
              We make every effort to display as accurately as possible the colors, features, and specifications of our products. 
              However, we cannot guarantee that your computer or mobile device's display accurately reflects the actual color of products. 
              Product specifications, prices, and availability are subject to change without notice.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Purchase and Payment</h2>
            <div className="text-gray-700">
              <p>
                By placing an order, you agree to purchase the product at the price stated at the time of your order. Payment must be made in full 
                at the time of order. We accept various payment methods as indicated on our checkout page.
              </p>
              <p className="mt-2">
                All prices are in Indian Rupees (₹) and include applicable taxes unless otherwise stated. Shipping costs are calculated and 
                displayed during the checkout process.
              </p>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Rental Terms</h2>
            <div className="text-gray-700">
              <p>
                For rental products, the following additional terms apply:
              </p>
              <ul className="list-disc pl-5 mt-2">
                <li>Rental periods are calculated in one-month increments at ₹1,500 per month.</li>
                <li>A security deposit is required at the time of rental, which will be refunded upon return of the product in good condition.</li>
                <li>You are responsible for any damage beyond normal wear and tear.</li>
                <li>Late returns will incur additional charges at the daily rate.</li>
                <li>Identification and proof of address are required for all rentals.</li>
              </ul>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
            <p className="text-gray-700">
              All content on this website, including text, graphics, logos, images, and software, is the property of EcoCycle and is protected 
              by copyright and other intellectual property laws. You may not use, reproduce, distribute, or create derivative works from this content 
              without our express written permission.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Limitation of Liability</h2>
            <p className="text-gray-700">
              EcoCycle will not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use 
              our products or services. Our total liability for any claim arising from or related to our products or services will not exceed the 
              amount paid by you for the specific product or service that is the subject of the claim.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Governing Law</h2>
            <p className="text-gray-700">
              These terms and conditions are governed by and construed in accordance with the laws of India. Any disputes relating to these terms 
              and conditions will be subject to the exclusive jurisdiction of the courts in Kolkata, India.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Changes to Terms</h2>
            <p className="text-gray-700">
              We reserve the right to modify these terms and conditions at any time. Changes will be effective immediately upon posting on the website. 
              Your continued use of the website or purchase/rental of products after any modifications indicates your acceptance of the modified terms.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">10. Contact Information</h2>
            <p className="text-gray-700">
              If you have any questions about these terms and conditions, please contact us at:
            </p>
            <div className="mt-2 text-gray-700">
              <p>Email: sohamhore122@gmail.com</p>
              <p>Phone: +91 9382607143</p>
              <p>Address: B55, Sukantanagar, Saltlake, Sector 4</p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Terms;
