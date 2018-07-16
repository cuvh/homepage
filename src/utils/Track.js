export default function Track(category, action, label, value) {
    window.dataLayer.push({
        event: "UAEvent",
        eventCategory: category,
        eventAction: action,
        eventLabel: label,
        eventValue: value,
    });
}
