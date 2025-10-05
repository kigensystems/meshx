'use client';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is MeshX?",
    answer: "MeshX is a decentralized perpetual futures exchange built for emerging memecoins on Solana. Trade with up to 20x leverage with minimal fees and instant execution."
  },
  {
    question: "How do I get started?",
    answer: "Simply connect your Solana wallet, deposit USDC as collateral, and start trading your favorite memecoin pairs. No KYC required."
  },
  {
    question: "What pairs can I trade?",
    answer: "We support the most popular and emerging memecoins including $BONK, $WIF, $PEPE, $MYRO, $POPCAT, and more. New pairs are added based on community demand."
  },
  {
    question: "What are the fees?",
    answer: "MeshX charges a competitive 0.05% trading fee. There are no deposit or withdrawal fees. Funding rates are determined by market conditions."
  },
  {
    question: "Is MeshX safe?",
    answer: "Our smart contracts are audited by leading security firms. All funds are held in non-custodial smart contracts, giving you full control of your assets."
  },
  {
    question: "What is the maximum leverage?",
    answer: "You can trade with up to 20x leverage on all supported pairs. Higher leverage means higher potential returns, but also higher risk of liquidation."
  }
];

export function FAQ() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-mesh-text-secondary">
            Everything you need to know about trading on MeshX
          </p>
        </div>

        <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                <AccordionTrigger className="text-white hover:text-mesh-gradient-red text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-mesh-text-secondary">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
