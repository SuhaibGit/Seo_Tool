import '../styling/App.css';
import website from '../assets/images/2.png';
import tier from '../assets/images/1.png';
import entity from '../assets/images/3.png';
import pr from '../assets/images/5.png';
import keyword from '../assets/images/4.png';
import { useEffect, useRef, useState } from 'react';
const steps = [
    "visualize website",
    "analyze hierarchy",
    "find keywords",
    "extract entities",
    "use pagerank"
];

const text = [
    "Instantly understand how pages are connected and how content flows — perfect for audits, planning internal links, or just getting your bearings on any domain.", "Quickly understand how a website is organized — from top-level pages to deep content silos. Great for technical SEO audits, content planning, or assessing UX and crawlability.", "With a single crawl, our tool pulls important keywords from any website’s content. See what topics are being targeted — and what’s missing — to uncover gaps, opportunities, and competitor strategies.", "Crawl any website and extract the key entities that search engines associate with it — people, places, products, and more. Use this data to optimize your content for relevance and authority in the eyes of Google.", "Get insight into your site’s internal linking power. Our PageRank simulation shows which pages are carrying the most authority — so you can optimize your structure and prioritize the content that really matters."
]

export default function DataSEO() {
    const sectionsRef = useRef([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const dataDivRef = useRef(null);
    const [dotTop, setDotTop] = useState(0);

    useEffect(() => {
        const observer = new IntersectionObserver(
            entries => {
                const visible = entries
                    .filter(entry => entry.isIntersecting)
                    .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
                if (visible.length > 0) {
                    const index = Number(visible[0].target.dataset.index);
                    setActiveIndex(index);
                }
            },
            { threshold: 0.5 }
        );
    
        sectionsRef.current.forEach((el) => {
            if (el) observer.observe(el);
        });
    
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const updateDotPosition = () => {
            if (!dataDivRef.current || !sectionsRef.current[activeIndex]) return;
    
            const containerRect = dataDivRef.current.getBoundingClientRect();
            const sectionRect = sectionsRef.current[activeIndex].getBoundingClientRect();
    
            const relativeTop = sectionRect.top - containerRect.top;
            const containerHeight = containerRect.height;
    
            const dotTopPosition = (relativeTop / containerHeight) * containerHeight;
    
            setDotTop(dotTopPosition - 5);
        };
    
        updateDotPosition();
    
        window.addEventListener('scroll', updateDotPosition);
        window.addEventListener('resize', updateDotPosition);
    
        return () => {
            window.removeEventListener('scroll', updateDotPosition);
            window.removeEventListener('resize', updateDotPosition);
        };
    }, [activeIndex]);
    
    return (
        <div className="data-seo-container">
            <div className="data-seo">
                <h2>drive your seo growth with actual data</h2>
                <div className="data-div" ref={dataDivRef}>
                    <div className="scroll-line">
                        <div className="scroll-track"></div>
                        <div className="scroll-dot" style={{ top: `${dotTop}px` }}>
                            <span>{activeIndex + 1}</span>
                        </div>
                    </div>
                    {steps.map((title, index) => (
                        <section
                            key={index}
                            data-index={index}
                            ref={el => sectionsRef.current[index] = el}
                            className="one-feature"
                        >
                            {index % 2 === 0 ? (
                                <>
                                    <div className="feature-text">
                                        <h3>{title}</h3>
                                        <p>{text[index]}</p>
                                    </div>
                                    <div className="feature-img">
                                        <img src={[website, tier, keyword, entity, pr][index]} alt="" />
                                    </div>
                                </>
                            ) : (
                                <>
                                    <div className="feature-img">
                                        <img src={[website, tier, keyword, entity, pr][index]} alt="" />
                                    </div>
                                    <div className="feature-text">
                                        <h3>{title}</h3>
                                        <p>{text[index]}</p>
                                    </div>
                                </>
                            )}
                        </section>
                    ))}
                </div>
            </div>
        </div>
    );
}