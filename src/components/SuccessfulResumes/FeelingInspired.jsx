import React from "react";
import classnames from "classnames";
import Track from "utils/Track";
import StoreService from "utils/StoreService";

export default class FeelingInspired extends React.PureComponent {
    state = {
        emotion: null
    };

    componentDidMount() {
        this.setState({
            emotion: StoreService.getItem(`Feeling-${this.props.name}`)
        });
    }

    onClick(emotion) {
        this.setState({
            emotion
        });

        StoreService.setItem(`Feeling-${this.props.name}`, emotion);

        Track(
            "Successful Resumes",
            "Reaction",
            `${this.props.name} ${emotion}`
        );
    }

    render() {
        const { name, dark } = this.props;
        const { emotion } = this.state;

        return (
            <div
             className={classnames(
                "component--feeling m-md-top-13 m-sm-top-4 m-sm-right-2",
                {
                    "feeling-box-dark": dark,
                    "feeling-box-light": !dark
                }
             )}
            >
                <span className="m-right-1 m-left-1">Feeling inspired?</span>
                <span
                 onClick={() => this.onClick("smilling")}
                 className={classnames(
                    "component--feeling-emotion emotion-smiling",
                    {
                        active: emotion === "smilling"
                    }
                 )}
                />
                <span
                 onClick={() => this.onClick("neutral")}
                 className={classnames(
                    "component--feeling-emotion emotion-neutral",
                    {
                        active: emotion === "neutral"
                    }
                 )}
                />
                <span
                 onClick={() => this.onClick("happy")}
                 className={classnames(
                    "component--feeling-emotion emotion-happy",
                    {
                        active: emotion === "happy"
                    }
                 )}
                />
            </div>
        );
    }
}
