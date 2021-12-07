import IdCard from "./IdCard";

const idData = [
    {lastName: "Phillips",
    firstName: "Terrance",
    gender: "Male",
    height: 125,
    birth: new Date('January 7, 1987'),
    picture: "https://randomuser.me/api/portraits/men/26.jpg"
    },
    {lastName: "Vernon",
    firstName: "Thompson",
    gender: "Male",
    height: 75,
    birth: new Date('December 19, 1995'),
    picture: "https://randomuser.me/api/portraits/men/0.jpg"
    },
]

export default function IdList () {
    return(
        <div className="list">
            <h1>idCard</h1>
            {idData.map((person, idx) => (
                <IdCard key={idx} person={person} />
            ))}
        </div>
    )
}