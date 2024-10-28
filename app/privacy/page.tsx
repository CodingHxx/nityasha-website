import React from 'react';

function PrivacyPolicy() {
    return (
        <main className="h-full flex flex-col mt-[5em] items-center justify-center p-[6em]">
            <h1 className="flex flex-col font-[Poppins] text-[8em] font-medium leading-[1em]">
                Privacy Policy
            </h1>
            <div className="w-full items-start justify-start text-[1.5rem] mt-20">
                Effective Date: 24-10-2024
            </div>
            <div className="space-y-6 text-white font-[Poppins]">
                {[
                    { 
                        title: "1. Information Collection", 
                        content: "We collect personal information that you provide to us, such as your name, email address, and phone number, as well as data on your usage of our services to improve and tailor your experience with Nityasha Consulting." 
                    },
                    { 
                        title: "2. Use of Information", 
                        content: "Nityasha Consulting uses the information collected to provide, maintain, and improve our services, including personalizing the experience for each client, sending updates, and responding to inquiries." 
                    },
                    { 
                        title: "3. Sharing of Information", 
                        content: "We do not share your personal information with third parties except as required by law, to fulfill our services, or with your explicit consent. All third-party service providers used are required to uphold confidentiality and security of personal information." 
                    },
                    { 
                        title: "4. Data Security", 
                        content: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, or disclosure. However, no method of transmission or storage is fully secure." 
                    },
                    { 
                        title: "5. Cookies and Tracking", 
                        content: "Nityasha Consulting may use cookies and similar tracking technologies to enhance user experience and analyze usage patterns. You may modify your browser settings to reject cookies if desired." 
                    },
                    { 
                        title: "6. Your Rights", 
                        content: "Depending on your jurisdiction, you may have the right to access, update, or delete your personal information. Contact us if you wish to exercise these rights." 
                    },
                    { 
                        title: "7. Changes to Policy", 
                        content: "We may update this Privacy Policy periodically. Any significant changes will be communicated through our website or other direct channels." 
                    },
                ].map((section, index) => (
                    <section key={index} className="mt-10">
                        <h2 className="text-xl font-semibold mb-2 text-[2.5rem] py-10">{section.title}</h2>
                        <p className='font-normal text-[1.5rem]'>{section.content}</p>
                    </section>
                ))}
                <p className="text-center mt-8">
                    By using Nityasha Consulting’s services, you agree to the terms outlined in this Privacy Policy.
                </p>
            </div>
        </main>
    );
}

export default PrivacyPolicy;
