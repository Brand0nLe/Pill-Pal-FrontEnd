// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

// const DrugSearch = () => {
//   const [drugName, setDrugName] = useState('');
//   const [drugOptions, setDrugOptions] = useState([]);

//   const handleInputChange = async (event) => {
//     const searchTerm = event.target.value;

//     setDrugName(searchTerm);

//     if (searchTerm.length >= 3) {
//       const response = await fetch(`https://api.fda.gov/drug/label.json?search=openfda.brand_name:${searchTerm}&limit=10`);
//       const data = await response.json();

//       setDrugOptions(data.results);
//     } else {
//       setDrugOptions([]);
//     }
//   };

//   const handleOptionClick = (option) => {
//     setDrugName(option.openfda.brand_name[0]);
//     setDrugOptions([]);
//   };

//   return (
//     <div className="container">
//       <h1>Pill Pal</h1>
//       <div className="form-group">
//         <label htmlFor="drug-search">Search for a drug:</label>
//         <div className="row">
//           <div className="col-md-8">
//             <input
//               type="text"
//               id="drug-search"
//               className="form-control"
//               placeholder="Enter a drug name"
//               value={drugName}
//               onChange={handleInputChange}
//             />
//           </div>
//         </div>
//         {drugOptions.length > 0 && (
//           <div className="dropdown-menu show" aria-labelledby="dropdownMenuButton">
//             {drugOptions.map((option) => (
//               <button
//                 key={option.id}
//                 type="button"
//                 className="dropdown-item"
//                 onClick={() => handleOptionClick(option)}
//               >
//                 {option.openfda.brand_name[0]} - {option.openfda.manufacturer_name[0]}
//               </button>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default DrugSearch;

