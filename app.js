function getTime() {
    try {
        const time = async () => {
            const res = await axios.get("https://timeapi.io/api/Time/current/zone?timeZone=America/Chicago");
        };
    } catch (error) {
        console.log("Error:", error);
    }
}
