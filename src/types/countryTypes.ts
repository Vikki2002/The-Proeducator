interface fastFacts {
    title: string;
    value: string;
}

interface WhyWeStudyItem {
    description: string;
}

interface Trending {
    imageUrl: string;
    content: string;
}

interface EducationSystem {
    study: string;
    duration: string;
    PSWR: string;
};

interface AdmissionRequirements {
    requirement: string;
}

interface AdmissionTimeline {
    After12thOrUG: string;
    Masters: string;
    MBA: string;
}

interface Scholarship {
    name: string;
}

export interface IVisaFlow {
    step: number;
    title: string;
    description: string;
}

interface VisaType {
    title: string;
    cost: string;
    type: string;
    description: string;
}

interface MonthlyLivingExpenses{
    Rent: string;
    Food: string;
    Transportation: string;
    Miscellaneous: string;
}

interface FAQS  {
    title: string;
    content: string;
}

export interface ICountryTypes {
    _id: string;
    country_name: string;
    country_code: string;
    bentoItems: fastFacts[];
    whyWeStudy: WhyWeStudyItem[];
    whatIsTrending: Trending[];
    educationSystem: EducationSystem[];
    admissionRequirements: AdmissionRequirements[];
    admissionTimeline: AdmissionTimeline;
    scholarship: Scholarship[];
    visaFlow: IVisaFlow[];
    visaType: VisaType[];
    monthlyLivingExpenses: MonthlyLivingExpenses;
    FAQs: FAQS[];
    status: "active" | "inactive";
    isDeleted: boolean;
}
