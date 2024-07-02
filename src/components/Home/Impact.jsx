import React, { useEffect, useRef } from "react";

const Impact = () => {
    const impactContainerRef = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            if (impactContainerRef.current) {
                const rect = impactContainerRef.current.getBoundingClientRect();
                const inView = rect.top >= 0 && rect.bottom <= window.innerHeight;

                if (inView) {
                    impactContainerRef.current.querySelectorAll("h3").forEach(el => {
                        el.classList.add("gradient-text");
                    });
                } else {
                    impactContainerRef.current.querySelectorAll("h3").forEach(el => {
                        el.classList.remove("gradient-text");
                    });
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div style={{
            width: "100%",
            display: "flex",
            height: "auto",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "white",
        }}>
            <div style={{ width: "80%", marginTop: "80px" }}>
                <div>
                    <p className="sectionHeading" style={{
                        color: "black",
                    }}>
                        IMPACT
                    </p>
                    <p    className='gradient-text' style={{
                        fontFamily: 'Syne, sans-serif',
                        fontSize: "24px",
                        fontWeight: "600",
                        lineHeight: "28.8px",
                        letterSpacing: "0.06em",
                        textAlign: "center",
                    }}>
                        Of our efforts
                    </p>
                </div>
            </div>

            <div ref={impactContainerRef} className="impactContainer" style={{
                marginTop: "3rem",
                width: "80%",
                display: "flex",
                padding: "2rem",
                justifyContent: "space-between",
            }}>
                <div>
                    <p style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        lineHeight: "30.07px",
                        letterSpacing: "0.06em",
                        textAlign: "center",
                        color: "rgba(0,0,0,0.7)"
                    }}>
                        ANIMAL CONSERVED
                    </p>
                    <h3 style={{
                        fontSize: "52px",
                        fontWeight: "700",
                        lineHeight: "78px",
                        letterSpacing: "0.06em",
                        textAlign: "center",
                        color: "rgba(0,0,0,0.8)"
                    }}>
                        435
                    </h3>
                </div>

                <div>
                    <p style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        lineHeight: "30.07px",
                        letterSpacing: "0.06em",
                        textAlign: "center",
                        color: "rgba(0,0,0,0.7)"
                    }}>
                        TREE PLANTED
                    </p>
                    <h3 style={{
                        fontSize: "52px",
                        fontWeight: "700",
                        lineHeight: "78px",
                        letterSpacing: "0.06em",
                        textAlign: "center",
                        color: "rgba(0,0,0,0.8)"
                    }}>
                        2342
                    </h3>
                </div>
                <div>
                    <p style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        lineHeight: "30.07px",
                        letterSpacing: "0.06em",
                        textAlign: "center",
                        color: "rgba(0,0,0,0.7)"
                    }}>
                        WOMEN BENEFITED
                    </p>
                    <h3 style={{
                        fontSize: "52px",
                        fontWeight: "700",
                        lineHeight: "78px",
                        letterSpacing: "0.06em",
                        textAlign: "center",
                        color: "rgba(0,0,0,0.8)"
                    }}>
                        138
                    </h3>
                </div>
                <div>
                    <p style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        lineHeight: "30.07px",
                        letterSpacing: "0.06em",
                        textAlign: "center",
                        color: "rgba(0,0,0,0.7)"
                    }}>
                        CHILDREN BENEFITED
                    </p>
                    <h3 style={{
                        fontSize: "52px",
                        fontWeight: "700",
                        lineHeight: "78px",
                        letterSpacing: "0.06em",
                        textAlign: "center",
                        color: "rgba(0,0,0,0.8)"
                    }}>
                        241
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default Impact;

