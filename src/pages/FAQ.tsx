
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow container py-12">
        <h1 className="text-4xl font-bold mb-6">Frequently Asked Questions</h1>
        <p className="text-gray-700 mb-8">Find answers to commonly asked questions about our products, services, and policies.</p>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4">What types of electric bicycles do you offer?</AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                We offer a variety of electric bicycles including commuter e-bikes, folding e-bikes, mountain e-bikes, and cargo e-bikes. 
                Each category comes with different models suited for various needs and preferences. You can explore our full collection 
                in our Shop section.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4">How does the rental system work?</AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                Our rental system allows you to rent an e-cycle on a monthly basis for ₹1,500 per month. To rent, simply select 
                the bike you're interested in, choose the rental option, and complete the checkout process. You'll need to provide 
                a security deposit which is refundable when you return the bike in good condition.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4">What is the range of your electric bicycles?</AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                The range varies depending on the model, typically between 30-80 kilometers per charge. Factors like terrain, rider weight, 
                and level of pedal assistance will affect the actual range. Detailed specifications are provided on each product page.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4">Do you offer warranty on your products?</AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                Yes, all our electric bicycles come with a standard 1-year warranty on the frame and electrical components. 
                Extended warranty options are available for purchase. The warranty covers manufacturing defects but does not cover 
                normal wear and tear or damage due to accidents.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4">How long does it take to fully charge the battery?</AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                Most of our e-bike batteries take 3-5 hours to charge completely from empty. We recommend charging the battery 
                after each use for optimal battery life and performance.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4">Do you ship internationally?</AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                Currently, we only ship within India. We're working on expanding our shipping options to other countries in the future.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7" className="bg-white rounded-lg shadow-sm">
              <AccordionTrigger className="px-6 py-4">Can I test ride before purchasing?</AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                Yes! We encourage test rides so you can find the perfect e-bike for your needs. Visit our physical store in Saltlake, 
                Sector 4 to schedule a test ride. Please bring a valid ID and contact us beforehand to ensure the model you're interested 
                in is available.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQ;
