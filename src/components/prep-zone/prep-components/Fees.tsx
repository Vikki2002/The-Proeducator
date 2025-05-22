

interface FeeItem {
  title?: string;
  titleText?: string[];
}

const Fees = ({fees}: {fees: (string | FeeItem)[]}) => {
    return (<>
        <div className="p-6 shadow-md rounded-lg">
            <ul className="list-none space-y-4">
                {fees.map((item, index) => (
                    typeof item === "string" ? (
                        <li key={index} className="bg-base-100 p-4 rounded-lg shadow-sm">
                            {item}
                        </li>
                    ) : (
                        <li key={index} className="bg-base-200 p-4 rounded-lg shadow-md">
                            <h3 className="text-xl font-semibold text-secondary-content">{item.title}</h3>
                            <ul className="list-disc pl-6 mt-2 text-gray-700">
                                {(item.titleText ?? []).map((text, i) => (
                                    <li key={i} className="mt-1">{text}</li>
                                ))}
                            </ul>
                        </li>
                    )
                ))}
            </ul>
        </div>
    </>)
}

export default Fees