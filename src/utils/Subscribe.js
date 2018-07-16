const SUBSCRIBE_URL =
    "https://arlku5gotf.execute-api.us-east-1.amazonaws.com/production/subscribe-list";
const GROUP_ID = "8863726";

export default function Subscribe(email) {
    return fetch(SUBSCRIBE_URL, {
        body: JSON.stringify({
            email,
            groupId: GROUP_ID,
        }),
        cache: "no-cache",
        headers: {
            "content-type": "application/json",
        },
        method: "POST",
        mode: "cors",
        redirect: "follow",
        referrer: "no-referrer",
    }).then(response => response.json());
}
