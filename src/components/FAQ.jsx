import { useState } from 'react';

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const faqs = [
        {
            question: "When do you come out to clear snow?",
            answer: "For seasonal contract holders, we dispatch our team automatically when snowfall reaches 5cm (2 inches). For one-time calls, we schedule correctly based on availability, prioritizing our contract clients first."
        },
        {
            question: "How does your contract pricing work?",
            answer: "Our seasonal contracts are a flat rate for the entire winter (Nov 1 - Apr 1). This covers unlimited clearings for any snow event over 5cm. You pay once and enjoy a worry-free winter, regardless of how much it snows."
        },
        {
            question: "Do you shovel walkways and steps?",
            answer: "Yes! We offer walkway and stair shoveling as an add-on to our driveway clearing service. We use plastic shovels to prevent damage to your concrete or deck surfaces."
        },
        {
            question: "What areas of Thunder Bay do you serve?",
            answer: "We serve the entire Thunder Bay city area, including Port Arthur, Fort William, Current River, Westfort, and arguably some surrounding rural areas (please contact us to confirm for rural properties)."
        },
        {
            question: "Are you insured?",
            answer: "Absolutely. KH Contracting is fully licensed and carries comprehensive liability insurance for both snow removal and general contracting work. Your property is safe with us."
        }
    ];

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="faq-section section-padding" style={{ backgroundColor: 'var(--white)' }}>
            <div className="container" style={{ maxWidth: '800px' }}>
                <div className="section-header">
                    <span>Common Questions</span>
                    <h2>Frequently Asked Questions</h2>
                </div>

                <div className="accordion">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className={`accordion-item ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleAccordion(index)}
                        >
                            <div className="accordion-header">
                                <h3>{faq.question}</h3>
                                <i className={`fa-solid fa-chevron-down ${activeIndex === index ? 'rotate' : ''}`}></i>
                            </div>
                            <div className="accordion-body" style={{ maxHeight: activeIndex === index ? '200px' : '0' }}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQ;
