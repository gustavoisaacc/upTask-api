const generateId = () => {
    const random = Math.random().toString(32).substring(2)
    const data = Date.now().toString(32)
    return random + data;
}
 
export default generateId;