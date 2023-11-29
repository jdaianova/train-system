export default function HowItWorksIcon({icon}) {
    return (
        <div className="HowItWorksIcon">
            <a href='#0' className="HowItWorksIcon-pic">{icon.icon}</a>
            <p>{icon.text}</p>
        </div>
    )
};
