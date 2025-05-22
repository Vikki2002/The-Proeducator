

interface TabItem {
    name: string;
    id: string;
}

interface TabsProps {
    tabs: TabItem[];
    activeTab: string;
    setActiveTab: (tab: string) => void; // Add setActiveTab prop
    sectionRefs: React.RefObject<Record<string, HTMLDivElement | null>>;
}

const PrepTabs: React.FC<TabsProps> = ({ tabs, activeTab, setActiveTab, sectionRefs }) => {
    const handleScroll = (id: string) => {
        const section = sectionRefs.current?.[id];
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
            setActiveTab(tabs.find(tab => tab.id === id)?.name || ""); // Update activeTab
        }
    };
    return (
        <div className="bg-base-300 shadow sticky top-0 z-50">
            <div className="w-full px-4 py-3 sm:py-4 flex justify-center">
                <ul className="flex flex-wrap justify-center space-x-4 sm:space-x-6 text-gray-800 text-sm sm:text-base font-medium">
                    {tabs.map((tab) => (
                        <li
                            key={tab.name}
                            className={`cursor-pointer transition ${activeTab === tab.name ? "text-base-100 font-bold" : "hover:text-base-200"
                                }`}
                            onClick={() => handleScroll(tab.id)}
                        >
                            {tab.name}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default PrepTabs;