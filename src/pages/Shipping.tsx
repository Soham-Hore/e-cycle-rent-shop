
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Shipping = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container py-12">
        <h1 className="text-4xl font-bold mb-6">Shipping & Returns</h1>
        
        <div className="space-y-8 max-w-4xl">
          <section>
            <h2 className="text-2xl font-semibold mb-4">Shipping Policy</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                At EcoCycle, we strive to deliver your electric bicycle as quickly and safely as possible. 
                Please review our shipping policies below:
              </p>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Processing Time</h3>
                <p>
                  Orders are typically processed within 1-2 business days. During peak seasons or promotional periods, 
                  processing might take up to 3 business days.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Shipping Methods & Timeframes</h3>
                <p>
                  We offer standard shipping across India. Delivery typically takes 5-7 business days once your order has been processed.
                </p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Metro cities: 3-5 business days</li>
                  <li>Other major cities: 5-7 business days</li>
                  <li>Remote areas: 7-10 business days</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Shipping Costs</h3>
                <p>
                  Free shipping is available for all orders above ₹30,000. For orders below this amount, 
                  a flat shipping fee of ₹1,500 will be applied at checkout.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Order Tracking</h3>
                <p>
                  Once your order has been shipped, you'll receive a confirmation email with tracking information. 
                  You can track your order status through the link provided in the email.
                </p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold mb-4">Returns Policy</h2>
            <div className="space-y-4 text-gray-700">
              <p>
                We want you to be completely satisfied with your purchase. If for any reason you're not happy with your electric bicycle, 
                please review our return policy below:
              </p>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Return Eligibility</h3>
                <p>
                  You may return your product within 7 days of delivery if:
                </p>
                <ul className="list-disc pl-5 mt-2">
                  <li>The product is unused and in its original condition</li>
                  <li>The product is in its original packaging with all accessories and documentation</li>
                  <li>You have the original receipt or proof of purchase</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Non-Returnable Items</h3>
                <p>
                  The following items cannot be returned:
                </p>
                <ul className="list-disc pl-5 mt-2">
                  <li>Products that have been used or assembled</li>
                  <li>Products with missing parts or packaging</li>
                  <li>Sale or clearance items (unless defective)</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Return Process</h3>
                <p>
                  To initiate a return:
                </p>
                <ol className="list-decimal pl-5 mt-2">
                  <li>Contact our customer service at sohamhore122@gmail.com with your order number and reason for return</li>
                  <li>Our team will review your request and provide instructions for returning the product</li>
                  <li>Package the product securely in its original packaging</li>
                  <li>Ship the product back using the provided return shipping label</li>
                </ol>
                <p className="mt-2">
                  Return shipping costs are the responsibility of the customer unless the return is due to our error or a defective product.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-medium mb-2">Refunds</h3>
                <p>
                  Once we receive and inspect the returned product, we'll process your refund. The refund will be credited to your original 
                  payment method within 7-10 business days. Shipping costs are non-refundable unless the return is due to our error.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Shipping;
