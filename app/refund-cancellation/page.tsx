import React from 'react';

function RefundAndCancellationPolicy() {
    return (
        <main className="h-full flex flex-col mt-[5em] items-center justify-center p-[6em]">
            <h1 className="flex flex-col font-[Poppins] text-[8em] font-medium leading-[1em]">
                Refund and Cancellation Policy
            </h1>
            <div className="w-full items-start justify-start text-[1.5rem] mt-20">
                Effective Date: 24-10-2024
            </div>
            <div className="space-y-6 text-white font-[Poppins]">
                {[
                    { title: "1. Cancellation of Services", content: "Customers may cancel services up to [insert number of days] days before the scheduled date without any penalty. Cancellations made within [insert number of days] days of the scheduled date may incur a cancellation fee of [insert percentage or amount]." },
                    { title: "2. How to Cancel", content: "To cancel a service, please contact us via email at info@nityasha.com or call us at [9302035251]. Please provide your order number and the reason for cancellation." },
                    { title: "3. Eligibility for Refunds", content: "Refunds are available only for services canceled in accordance with our Cancellation Policy. Refunds will not be issued for services that have been completed." },
                    { title: "4. Refund Process", content: "If you are eligible for a refund, please allow up to [insert number of days] business days for the refund to be processed. Refunds will be issued to the original payment method used during the transaction." },
                    { title: "5. Non-Refundable Services", content: "Certain services are non-refundable, including: [List any non-refundable services or fees]." },
                    { title: "6. Changes to This Policy", content: "Nityasha PVT LTD reserves the right to update this Refund and Cancellation Policy at any time. Any changes will be posted on this page with an updated effective date." },
                    { title: "7. Contact Us", content: "If you have any questions regarding this policy, please contact us via email at info@nityasha.com or call us at [9302035251]." },
                ].map((section, index) => (
                    <section key={index} className="mt-10">
                        <h2 className="text-xl font-semibold mb-2 text-[2.5rem] py-10">{section.title}</h2>
                        <p className='font-normal text-[1.5rem]'>{section.content}</p>
                    </section>
                ))}
                <p className="text-center mt-8">
                    By engaging with Nityasha PVT LTD, you acknowledge that you have read, understood,
                    and agree to abide by this Refund and Cancellation Policy.
                </p>
            </div>
        </main>
    );
}

export default RefundAndCancellationPolicy;
