import Count from '@/src/common/count';
import React from 'react';


// support data  
const support_content = [
    {
        id: 1, 
        count: 7, 
        symbol: "yr",
        cls: "fadeLeft",
        title: "Creative Solutions",
        info: <>Time taken to deliver <br /> creative content and designs.</>
    },
    {
        id: 2, 
        count: 20, 
        symbol: "+",
        cls: "",
        title: "Expert Team",
        info: <>Our team members bring <br /> years of experience in design.</>
    },
    {
        id: 3, 
        count: 50, 
        symbol: "%",
        cls: "fadeRight",
        title: "Successful Projects",
        info: <>Projects completed with <br /> exceptional client satisfaction.</>
    },
]

const SupportArea = () => {
    return (
        <>
            <section className="tp-support-feature-area pb-100">
            <div className="container container-large">
               <div className="row">
                {support_content.map((item, i) =>
                    <div key={i} className="col-lg-4">
                        <div className="tp-support-feature-item d-flex p-relative fadeRight">
                        <div className="tp-support-feature-counter">
                            <div className="tp-support-feature-thumb">
                                <img src="/assets/img/brand/shape-2.png" alt="theme-pure" />
                            </div>
                            <h3 className="support-feature-title"><span data-purecounter-duration="4" className="purecounter">
                                <Count number={item.count}  text={item.symbol}  />
                            </span></h3>
                        </div>
                        <div className="tp-support-feature-content">
                            <h4 className="tp-support-feature-content-title">{item.title}</h4>
                            <p>{item.info}</p>
                        </div>
                        </div>
                    </div>                
                )}  
               </div>
            </div>
         </section>
        </>
    );
};

export default SupportArea;
