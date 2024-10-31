import React from 'react';

function FAQs() {
    return (
        <main className="h-full flex flex-col mt-[5em] items-center justify-center p-[6em]">
            <h1 className="flex flex-col font-[Poppins] text-[8em] font-medium leading-[1em]">
                Frequently Asked Questions (FAQs)
            </h1>
            <div className="w-full items-start justify-start text-[1.5rem] mt-20">
                Effective Date: 24-10-2024
            </div>
            <div className="space-y-6 text-white font-[Poppins]">
                {[
                    { question: "1. What services does Nityasha provide?", answer: "Nityasha provides advertising and consulting services designed to help businesses improve brand presence and visibility." },
                    { question: "2. How can I contact Nityasha?", answer: "You can contact us via email at info@nityasha.com or call us at [9302035251]." },
                    { question: "3. What are your payment terms?", answer: "Payment terms and fees are defined in a separate agreement or invoice. Payments must be made in full and on time, as specified in the agreement." },
                    { question: "4. Can I cancel a service after I’ve booked it?", answer: "Yes, you can cancel a service up to [insert number of days] days before the scheduled date without any penalty. Please refer to our Refund and Cancellation Policy for more details." },
                    { question: "5. Do you offer refunds?", answer: "Refunds are available only for services canceled in accordance with our Cancellation Policy. Refunds will not be issued for completed services." },
                    { question: "6. What is your confidentiality policy?", answer: "Both Nityasha and the Client agree to keep all shared information confidential, including business plans and proprietary information." },
                    { question: "7. How do I provide feedback or file a complaint?", answer: "You can provide feedback or file a complaint by contacting us via email at info@nityasha.com or using the contact form on our website." },
                ].map((item, index) => (
                    <section key={index} className="mt-10">
                        <h2 className="text-xl font-semibold mb-2 text-[2.5rem] py-10">{item.question}</h2>
                        <p className='font-normal text-[1.5rem]'>{item.answer}</p>
                    </section>
                ))}
            </div>
        </main>
    );
}

export default FAQs;
