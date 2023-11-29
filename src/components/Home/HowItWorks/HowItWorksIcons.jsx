import HowItWorksIcon from "./HowItWorksIcon";
import { nanoid } from 'nanoid';

export default function HowItWorksIcons({ icons }) {

    return (
        <div className="HowItWorksIcons">
            {icons.map((icon) => {
                return (
                    <HowItWorksIcon key={nanoid()} icon={icon} />
                )
            })}
        </div>
    )
};
