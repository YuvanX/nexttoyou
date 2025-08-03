'use client'

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'

export default function FAQsTwo() {
    const faqItems = [
  {
    id: 'item-1',
    question: 'How do I find hostels or PGs near my college?',
    answer:
      'Simply area in the search bar. You can filter results by budget, amenities, and distance to find the best match for your needs.',
  },
  {
    id: 'item-2',
    question: 'Is it safe to contact property owners through nexttoyou?',
    answer:
      'Yes, we verify property owners and listings to ensure a safe experience. You can also view ratings and reviews left by other students before making a decision.',
  },
  {
    id: 'item-3',
    question: 'Can I find a roommate using nexttoyou?',
    answer:
      'Absolutely! You can create a roommate profile, set your preferences, and match with other students who are looking for shared accommodations near your campus.',
  },
  {
    id: 'item-4',
    question: 'How do I list my hostel or PG on nexttoyou?',
    answer:
      'Click on the “List Your Property” button on the homepage. Fill in the details, add photos, and submit your listing. Once verified, it will be visible to students nearby.',
  },
  {
    id: 'item-5',
    question: 'Does nexttoyou charge any commission?',
    answer:
      'No, nexttoyou is completely free for students. We do not charge any commission on bookings. Property owners may opt for premium listing features if needed.',
  },
];


    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mx-auto max-w-7xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl">Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mt-4 text-balance">Discover quick and comprehensive answers to common questions about our platform, services, and features.</p>
                </div>

                <div className="mx-auto mt-12 max-w-7xl">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0">
                        {faqItems.map((item) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-dashed">
                                <AccordionTrigger className="cursor-pointer text-base hover:no-underline">{item.question}</AccordionTrigger>
                                <AccordionContent>
                                    <p className="text-base">{item.answer}</p>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    
                </div>
            </div>
        </section>
    )
}