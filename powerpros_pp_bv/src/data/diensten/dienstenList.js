// const fetchDienstenFromStrapi = async () => {
//   try {
//     const res = await fetch("http://localhost:1337/api/dienstens", {
//       headers: {
//         Authorization: "Bearer YOUR_API_TOKEN", // Vervang met je eigen Strapi API-token
//       },
//     });
//     const data = await res.json();

//     console.log("Opgehaalde data:", data);
    
//     return data.data; // Strapi geeft een object met een 'data' array terug
//   } catch (error) {
//     console.error("Fout bij het ophalen van de diensten:", error);
//     return [];
//   }
// };

// // Roep de functie aan
// fetchDienstenFromStrapi().then((diensten) => {
//   console.log("Verwerkte diensten:", diensten);
// });


// src/data/diensten/dienstenList.js

// export const fetchDienstenFromStrapi = async () => {
//   try {
//     const res = await fetch("http://localhost:1337/api/diensten", {
//       headers: {
//         Authorization: "Bearer YOUR_API_TOKEN", // Vervang met je Strapi API-token
//       },
//     });
//     const data = await res.json();

//     console.log("Opgehaalde data:", data);

//     return data.data; // Strapi geeft een object met een 'data' array terug
//   } catch (error) {
//     console.error("Fout bij het ophalen van de diensten:", error);
//     return [];
//   }
// };
