import ReactGA from "react-ga";

export default function Track(category, action, label) {
    ReactGA.event({
        category,
        action,
        label,
    });
}
