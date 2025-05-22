const WhyWork = () => {
    const benefits = [
        {
            title: "Make direct impact",
            description: "Create massive and direct impact on the lives of people across the globe!"
        },
        {
            title: "Industry-leading projects",
            description: "Opportunity to work on cutting edge technologies, and lead teams"
        },
        {
            title: "Young and enthusiastic colleagues",
            description: "Work alongside super young & enthusiastic colleagues across functions"
        },
        {
            title: "Room to grow",
            description: "A phenomenal work environment, with high ownership and immense growth opportunities"
        },
        {
            title: "Everyone has a voice",
            description: "Innovation doesn’t know hierarchy! We make sure everyone is heard, considered and respected"
        },
        {
            title: "Wear multiple hats",
            description: "Explore roles across multiple fields in a short span of time"
        }
    ];

    return (
        <main className="container mx-auto py-16">
            <h1 className="text-center text-2xl font-bold mb-8">Why Work @ <span className="text-3xl text-info font-sans">The Pro Educator</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {benefits.map((benefit, index) => (
                    <div key={index}>
                        <h2 className="text-lg font-bold">{benefit.title}</h2>
                        <p>{benefit.description}</p>
                    </div>
                ))}
            </div>
        </main>
    );
};

export default WhyWork;
