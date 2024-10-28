import React from 'react';

function Page() {
    return (
        <main className="h-full flex flex-col mt-[5em] items-center justify-center p-[6em]">
            <h1 className="flex flex-col font-[Poppins] text-[8em] font-medium leading-[1em]">
                Terms and Conditions
            </h1>
            <div className="w-full items-start justify-start text-[1.5rem] mt-20">
                Effective Date: 24-10-2024
            </div>
            <div className="space-y-6 text-white font-[Poppins]">
                {[
                    { title: "1. Services", content: "Nityasha Consulting provides advertising and consulting services (\"Services\") designed to help businesses improve brand presence and visibility. Service specifics, including timelines and deliverables, will be outlined in a separate agreement or proposal." },
                    { title: "2. Client Responsibilities", content: "Clients are responsible for providing accurate and timely information required to fulfill the Services and for collaborating effectively with the Nityasha Consulting team." },
                    { title: "3. Fees and Payments", content: "Payment terms and fees are defined in a separate agreement or invoice. Payments must be made in full and on time, as specified in the agreement." },
                    { title: "4. Confidentiality", content: "Both Nityasha Consulting and the Client agree to keep all shared information confidential, including but not limited to business plans, strategies, and proprietary information, except as required by law or with prior written consent." },
                    { title: "5. Intellectual Property", content: "Nityasha Consulting retains all rights to any intellectual property created during the provision of Services, unless otherwise stated in the agreement. Clients may use delivered materials solely for the purpose intended in the agreement." },
                    { title: "6. Limitation of Liability", content: "Nityasha Consulting is not liable for any indirect, incidental, or consequential damages arising from the use of our Services. Our liability is limited to the amount paid by the Client for the Services provided." },
                    { title: "7. Termination", content: "Either party may terminate the agreement with written notice if there is a breach of the Terms or other unforeseen circumstances. Upon termination, all outstanding fees become immediately payable." },
                    { title: "8. Governing Law", content: "These Terms are governed by and construed in accordance with the laws of [Insert Jurisdiction], without regard to its conflict of law provisions." },
                    { title: "9. Changes to Terms", content: "Nityasha Consulting reserves the right to modify these Terms at any time. Clients will be notified of any significant changes." },
                ].map((section, index) => (
                    <section key={index} className="mt-10">
                        <h2 className="text-xl font-semibold mb-2 text-[2.5rem] py-10">{section.title}</h2>
                        <p className='font-normal text-[1.5rem]'>{section.content}</p>
                    </section>
                ))}
                <p className="text-center mt-8">
                    By engaging with Nityasha Consulting, you acknowledge that you have read, understood,
                    and agree to abide by these Terms and Conditions.
                </p>
            </div>
        </main>
    );
}

export default Page;
