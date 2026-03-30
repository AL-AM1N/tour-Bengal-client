export const fetchMultipleApi = async() => {
    try{
        const response1 = fetch('http://localhost:3000/packages');
        const response2 = fetch('http://localhost:3000/bookings');
        const response3 = fetch('http://localhost:3000/contactMessages');

        const [packagesRes, bookingsRes, contactMessagesRes] = await Promise.all([
            response1,response2, response3,
        ])

        const allPackages = await packagesRes.json();
        const bookings = await bookingsRes.json();
        const contactMessages = await contactMessagesRes.json();

        return {allPackages, bookings, contactMessages}
    }catch (error){
        console.log(error);
        throw new Error("Failed to fetch data");
    }
}