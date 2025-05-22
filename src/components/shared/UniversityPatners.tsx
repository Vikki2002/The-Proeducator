import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

export default function UniversityPartners() {
    const universities = [
        "HEho8SXnn9avhBhc2ZKiaa8u942qBdqiwUQq0_3Llso.jpg",
        "smPJYPnbXm0BiNZL6oROUL7xYfrA4XV-3_SL_M-AHkI.jpg",
        "tyyjAZyZaz3vq1yWb5d5JKtSv6rtJhji92R-AxtMkXw.jpg",
        "3-Ob5VaRUIvp-lIpvIlbxwsaqU_KQlbM0guhpJlImjU.jpg",
        "yX-bIDCRu7HaLTMPI35quHCS7nVSODc5mjmagFo9Da4.jpg",
        "XYtAkBnuw235V3LBCAASb5oLh2EJGbFtRpcrJ5mCn7U.jpg",
        "dY_jJLxyeUqkPr2HqfSWk99LLxkIAB7W3yT15oTfIlI.jpg",
        "NV2C6qkvZn-vTWZDePN1SbVfmY7OMJ1hRpArQ1KxS_w.jpg",
        "SsaOetrMFcClWuhM0LxAsKFvV6h4hlUWSM6xSvwHWZ4.jpg",
        "VF944s0SNudsanzOnIK6hQF7QFAmALxHmZa_TFxKKDQ.jpg",
        "1vfaybEh0eitesMLvx4X0iiHJI5Sl0GRuX0BCwrIFsk.jpg",
        "KAAYYCBUAiZ1fePhZWh9Psrfi7GjZPUIF4EihlvjFqo.jpg",
        "4oxj3Xz9zM8FKGTnUNBK1UDVa48eutOc1K0K3ZS0mK4.jpg",
        "TjzNSbj5olFdmo9JbyIN9jESgVg1GKnyPTYMhNMbsYU.jpg",
        "DudMkC9Q2UO4V-xGJNt3kAh07CEkRlQcieysLtCeunc.jpg",
    ];

    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-6 mt-6">
            <Head>
                <title>University Partners</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
                />
            </Head>

            {/* Title Section */}
            <main className="container mx-auto py-12 text-center">
                <h2 className="text-gray-500 text-lg">University Partners</h2>
                <h1 className="text-4xl font-bold text-blue-600 mt-1">
                    850+ <span className="text-gray-800">and growing</span>
                </h1>

                {/* University Logos */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mt-10">
                    {universities.map((src, index) => (
                        <div key={index} className="flex justify-center">
                            <Image
                                src={`https://storage.googleapis.com/a1aa/image/${src}`}
                                alt="University Logo"
                                width={150}
                                height={100}
                                className="rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
                            />
                        </div>
                    ))}
                </div>

                {/* Information Section */}
                <div className="mt-10 text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto px-4">
                    <p>
                        Admissions counseling services for these universities are <span className="font-semibold text-blue-600">FREE</span> for students.
                    </p>
                    <p>
                        As their official partners, we receive a student advisory fee from universities.
                    </p>

                    <Link
                        href="/country"
                        className="mt-6 inline-block px-6 py-3 border border-blue-600 text-blue-600 font-medium rounded-lg transition-all duration-300 hover:bg-blue-600 hover:text-white"
                    >
                        View All Universities
                    </Link>
                </div>
            </main>

            {/* Floating WhatsApp Button */}
        </div>
    );
}
