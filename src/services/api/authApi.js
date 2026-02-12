// import axios from "axios";
// const API = process.env.NEXT_PUBLIC_API_BASE;

// // ✅ Get Nonce
// export const signUpApi = async (walletAddress) => {
//     try {
//         const res = await axios.post(`${API}/api/auth/nonce`, {
//             walletAddress
//         });
//         return { data: res?.data, error: null };
//     } catch (err) {
//         return { data: null, error: err.response?.data?.message ?? "error try again." };
//     }
// };