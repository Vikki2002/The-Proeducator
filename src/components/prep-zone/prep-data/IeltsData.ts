export const overview = [
    { label: "Name of the Exam", value: "IELTS" },
    { label: "IELTS Full Form", value: "International English Language Testing System" },
    { label: "Official Website", value: "https://www.ielts.org/" },
    { label: "Purpose", value: "Study, Work, Relocation" },
    { label: "Accepted By", value: "Universities in: The USA, The UK, Australia, Canada, Germany, New Zealand, and more" },
    { label: "Conducted By", value: "IDP Education Ltd." },
    { label: "IELTS Test Format", value: "IELTS Academic and IELTS General Training" },
    { label: "Mode of Exam", value: "Computer-Based, Paper-Based" },
    { label: "IELTS Exam Fees", value: "INR 17,000" },
    { label: "Score Range", value: "Band Score of 1 to 9" },
]


export const eligiblity1 = [
    { university: "University of Toronto", undergraduate: "6.5", postgraduate: "7.0" },
    { university: "University of Alberta", undergraduate: "6.5", postgraduate: "6.5" },
    { university: "University of British Columbia", undergraduate: "6.5", postgraduate: "6.5" },
    { university: "McGill University", undergraduate: "6.5", postgraduate: "6.5" },
    { university: "McMaster University", undergraduate: "6.5", postgraduate: "6.5" },
]

export const eligiblity2 = [
    { university: "Massachusetts Institute of Technology", undergraduate: "7.0", postgraduate: "7.0" },
    { university: "Yale University", undergraduate: "7.0", postgraduate: "7.0" },
    { university: "California Institute of Technology", undergraduate: "7.0", postgraduate: "7.0" },
    { university: "Princeton University", undergraduate: "7.0", postgraduate: "7.0" },
]


export const australianUniversityData = [
    { university: "Australian National University", undergraduate: "6.5", postgraduate: "6.5" },
    { university: "The University of Sydney", undergraduate: "6.5", postgraduate: "6.5" },
    { university: "Monash University", undergraduate: "6.0", postgraduate: "6.0" },
    { university: "University of New South Wales", undergraduate: "6.5", postgraduate: "6.5" },
    { university: "University of Melbourne", undergraduate: "6.5", postgraduate: "6.5" },
    { university: "University of Western Australia", undergraduate: "6.5", postgraduate: "6.5" },
]

export const newZealandUniversityData = [
    { university: "Massey University", undergraduate: "6.0", postgraduate: "6.5" },
    { university: "University of Otago", undergraduate: "6.5", postgraduate: "6.5" },
    { university: "University of Waikato", undergraduate: "6.5", postgraduate: "6.5" },
    { university: "University of Auckland", undergraduate: "6.0", postgraduate: "6.5" },
    { university: "Victoria University of Wellington", undergraduate: "6.0", postgraduate: "6.5" },
]

export const eligiblity3 = [
    { university: "University of Melbourne", undergraduate: "6.5", postgraduate: "6" },
    { university: "University of New South Wales", undergraduate: "6.5", postgraduate: "6" },
    { university: "University of South Wales", undergraduate: "6.5", postgraduate: "6" },
    { university: "University of Queensland", undergraduate: "6.5", postgraduate: "6" },
    { university: "University of Sydney", undergraduate: "6.5", postgraduate: "6" },
]




// fees related 

interface PolicyDetail {
    title: string;
    titleText: string[];
}

export const ieltsFee: (string | PolicyDetail)[] = [
    "Test-takers who wish to cancel their paper-based IELTS exam must submit their applications for cancellation and refund to the centre.",
    "Individuals are required to do so by using the Transfer & Cancellation/Refund Application Form along with the original receipt of payment of the test fee.",
    "Candidates are also required to pay a cancellation fee of INR 4,250 in such a case.",
    {
        title: "The IELTS exam cancellation policy adheres to a strict timeframe.",
        titleText: [
            "To be eligible for a refund of the test fee (Rs. 12,750 inclusive of all taxes), a cancellation request must be submitted at least nine days before the scheduled test date.",
            "Requests received less than nine days before the test will not be accepted, and no refund will be issued.",
            "The refunded amount will be processed and returned to the applicant within 10-12 working days from the date of the application."
        ]
    }
]

export const ieltsExamFees = [
    { test_type: "IELTS Academic Test", fees: "INR 17,000" },
    { test_type: "IELTS General Training Test", fees: "INR 17,000" },
    { test_type: "Computer-delivered IELTS", fees: "INR 17,000" },
    { test_type: "Computer-delivered IELTS for UKVI", fees: "INR 17,250" },
    { test_type: "Pen and paper-based IELTS", fees: "INR 17,000" },
    { test_type: "IELTS Life Skills (A1 and B1)", fees: "INR 16,050" },
    { test_type: "IELTS for UK Visas and Immigration", fees: "INR 17,250" },
];


export const ieltsCityFees = [
    { city: "Delhi", fees: "INR 17,000" },
    { city: "Bangalore", fees: "INR 17,000" },
    { city: "Chennai", fees: "INR 17,000" },
    { city: "Kerala", fees: "INR 17,000" },
    { city: "Coimbatore", fees: "INR 17,000" },
    { city: "Pune", fees: "INR 17,000" },
    { city: "Chandigarh", fees: "INR 17,000" },
    { city: "Kolkata", fees: "INR 17,000" },
    { city: "Surat", fees: "INR 17,000" },
    { city: "Nagpur", fees: "INR 17,000" },
    { city: "Thane", fees: "INR 17,000" },
    { city: "Lucknow", fees: "INR 17,000" },
    { city: "Kochi", fees: "INR 17,000" },
    { city: "Bhubaneshwar", fees: "INR 17,000" },
    { city: "Jaipur", fees: "INR 17,000" },
    { city: "Ludhiana", fees: "INR 17,000" },
    { city: "Vijayawada", fees: "INR 17,000" },
];




// exam centers 

export const examCenters = [
    {
        "IELTS_Test_Centres": {
            "Andhra_Pradesh": [
                {
                    "Address": "IDP Education India Pvt. Ltd 2nd Floor, Santhi Plaza, Gayathri Nagar, Near Benz Circle, Vijayawada (Landmark: SBI NRI Branch)."
                },
                {
                    "Address": "IDP Education India Pvt. Ltd. Door No 10-1-9/4, Vinay Ghar Heights, Asilmetta, Waltair Uplands, Near Sampat Vinayaka Temple, Visakhapatnam, Andhra Pradesh."
                }
            ],
            "Delhi_NCR": [
                {
                    "Address": "IDP Education India Pvt. Ltd. Unit No. 313, 3rd Floor, F-Block, International Trade Tower, Nehru Place, New Delhi."
                },
                {
                    "Address": "14th Floor, Aggarwal Millennium Tower 2, Netaji Subash Place, Pitampura."
                },
                {
                    "Address": "IDP Education India Pvt. Ltd. A-1/6, Ring Road, Above NEXA Showroom, Rajouri Garden, New Delhi."
                },
                {
                    "Address": "IDP Education India Pvt. Ltd. Global Gateway Towers, Tower B, 5th Floor Sikanderpur Ghosi, Sector 26, M.G. Road, Gurgaon."
                },
                {
                    "Address": "IDP Education India Pvt. Ltd. 602 (Right Side), K-2, Som Datt Tower, Sector 18, Noida."
                }
            ],
            "Chandigarh": [
                {
                    "Address": "IDP Education India Pvt. Ltd. SCO 40-41, 1st Floor, near Fabindia & Tdi Cinepolis, Sector 17, Chandigarh, 160017."
                },
                {
                    "Address": "SCO 224-225, 3rd Floor, Dakshin Marg, near Virdi Eye Hospital, Opp. Pathania Petrol Pump, Sector 34A, Chandigarh, 160022."
                }
            ],
            "Kerala": [
                {
                    "Address": "IDP Education India Pvt. Ltd. 2nd Floor, Dream Flower, Opp. Little Church, Sahodaran Ayyappan Road, Kadavantra, Kochi."
                },
                {
                    "Address": "IDP Education India Pvt. Ltd. TC 15/4241 Daniels Tower LIC Junction Road near St. Marys Church, P.O, Pattom, Thiruvananthapuram."
                }
            ],
            "Gujarat": [
                {
                    "Address": "IDP Education India Pvt. Ltd.Office No. 105-106, First Floor, Addor Aspire, Beside Jhanvi Restaurant, Near L.D Engineer College, Gujarat University Area, Gulbai Tekra, Ahmedabad – 380015."
                },
                {
                    "Address": "103-104, Block A, OM Decora 9 Square Nana Mauva Main Road, Beside Marwardi Shares and Stocks, Circle, nr."
                },
                {
                    "Address": "IDP Education India Pvt. Ltd. 3rd Floor, Solaris The Address, Opp. Big Bazar, Piplod, Dummas Road, Surat."
                },
                {
                    "Address": "IDP Education India Pvt. Ltd. 304, 3rd Floor, Golden Icon, Chakli Circle, Vadodara."
                }
            ],
            "Maharashtra": [
                {
                    "Address": "IDP IELTS Andheri, Unit No 003, Ground Floor, A wing, Kanakia Wall Street, Next to Western Express Highway, Chakala Andheri-Kurla Road, Hanuman Nagar, Andheri East Mumbai."
                },
                {
                    "Address": "IDP Education India Pvt. Ltd. Office No 116, First Floor, Lodha Supremus Tower 2, Wagale Estate, Thane (W)."
                },
                {
                    "Address": "IDP Education India Pvt. Ltd. PLOT NO.- 88, Goodwill Excellency 10th 2, above Tanishq showroom, Sector 17, Navi Mumbai."
                },
                {
                    "Address": "IDP Education India Pvt. Ltd. 5th Floor, City Point Building, Above Mainland China, Dhole Patil Road, Near Boat Club, Pune."
                }
            ],
            "Madhya_Pradesh": [
                {
                    "Address": "Hall No. 203, Vijay Stambh, BDA Complex, MP Nagar Zone 1, Bhopal (front of Axis Bank)."
                }
            ],
            "Punjab": [
                {
                    "Address": "IDP Education India Pvt. Ltd. SCO-57, 3rd Floor, District Shopping Complex, Opposite BSNL Office, B-Block, Ranjit Avenue, Amritsar."
                },
                {
                    "Address": "IDP Education India Pvt. Ltd. 1st Floor, Darshan Singh Complex, GT Rd, Moga, Punjab 142001."
                },
                {
                    "Address": "IDP Education India Pvt. Ltd. SCF 29-30, Ground Floor Leela Bhawan Market, next to Madame Showroom, Patiala, Punjab 147001."
                },
                {
                    "Address": "IDP Education India Pvt. Ltd. 984/2, Tej Complex, Opp. Passport Office, Link Road, Ludhiana."
                },
                {
                    "Address": "IDP Education India Pvt. Ltd. 2nd Floor, Above Planet Fashion, Adjoining Sagar Ratna, Near Brar Eye Hospital, Opposite Mittal Mall, Goniana Road, Bathinda."
                },
                {
                    "Address": "IDP Education India Pvt. Ltd. SCO 66-67, Chotti Baradari Part-2 Opposite PIMS Hospital, Jalandhar."
                }
            ],
            "Telangana": [
                {
                    "Address": "IDP Education India Pvt. 1-8-368 to 382, G. Floor, Gowra Trinity, SP Road, Chiran Fort Club Lane, Opp. US Consulate, Begumpet Secunderabad, Hyderabad."
                },
                {
                    "Address": "IDP IELTS Kukatpally 205-207, 2nd Floor, Vijaya Sai Towers, Opp. BJP Office, Above Reliance Digital, Vivek Nagar, Kukatpally, Hyderabad."
                },
                {
                    "Address": "4th Floor, S.L.Jubilee, Plot no-1202 and 1215A, Road No. 36, Jubilee Hills, Hyderabad, Telangana."
                }
            ],
            "West_Bengal": [
                {
                    "Address": "IDP Education India Pvt. Ltd. 4th Floor, ‘The Regency’, 6 Picasso Bithi Sarani (Hungerford Street), Kolkata, West Bengal."
                }
            ],
            "Rajasthan": [
                {
                    "Address": "IDP Education India Pvt. Ltd. 402, 4th Floor, Jaipur Center Mall, Tonk Road & B2 Bypass Junction, Sector B4, Jaipur."
                }
            ],
            "Uttar_Pradesh": [
                {
                    "Address": "Plot No.5, opposite Kendriya Bhawan, near Purania Chauraha, Sector H, Sector-A, Sector E, Aliganj, Lucknow."
                }
            ],
            "Karnataka": [
                {
                    "Address": "Office No. 30, 1st Floor, Above Axis Bank, Times Point, Doddanekkundi Industrial Estate, Graphite India, Main Road, KEB Colony, Industrial Area, Hoodi, Bangalore - 560048."
                },
                {
                    "Address": "Unit No. 206, 2nd Floor, 8, Excellency Building, Papanna Street, Off St. Marks Road, Bangalore - 560001."
                },
                {
                    "Address": "IDP Education India Pvt. Ltd. 207 Inland Ornet, 2nd Floor, Navabharath Cir, Opposite The Ocean Pearl Hotel, Kodailbail; Mangalore, Karnataka 575003."
                }
            ]
        }
    }

]