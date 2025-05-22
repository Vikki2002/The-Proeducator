import cssClasses from "./prep.module.css"

const Registration = ({registration_Data}: {registration_Data: string[]}) => {
    return(<>
        <div className="flex flex-col justify-start gap-2.5">
            <ol id={`${cssClasses.order}`}>
                {registration_Data.map((reg, id) => (
                    <li key={id}>{reg}</li>
                ))}
            </ol>
        </div>
    </>)
}

export default Registration