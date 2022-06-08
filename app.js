// const getTime = async () => {
//     const res = await axios.get("http://worldclockapi.com/api/json/cst/now");
//     console.log(res.data);
// };

async function getTime() {
    const res = await axios.get("http://worldclockapi.com/api/json/cst/now");
    console.log(res.data);
}
