// import React, { useState } from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';

let userData: any;

async function createAccount(createdUser: string){
    const res = await fetch('griffinblogapi.azurewebsites.net/AddUser',{
        method:"POST",
        headers:{
            'Content-Type': "application/json"
        },
        body:JSON.stringify(createdUser)
    });   
    if(!res.ok){
        const message = `An error has occurred ${res.status}`;
        throw new Error(message);
    }
    let data = await res.json();
    console.log(data);
}
async function login(loginUser: any){
    const res = await fetch('griffinblogapi.azurewebsites.net/User/AddUser',{
        method:"POST",
        headers:{
            'Content-Type': "application/json"
        },
        body:JSON.stringify(loginUser)
    });   
    if(!res.ok){
        const message = `An error has occurred ${res.status}`;
        throw new Error(message);
    }
    let data = await res.json();
    console.log(data);
    return data;
}


//Create endpoint for this
async function GetLoggedInUserData(username: string){
    let res= await fetch(`pillpalapi.azurewebsites.net/User/userbyusername/${username}`)
    let data = await res.json();
    userData = data;
    console.log(userData);
}

async function GetPublishedBlogItems(){
    let res = await fetch('pillpalapi.azurewebsites.net/blog/GetPublishedItems');
    let data = await res.json();
    return data;
}

function checkToken(){
    let result = false;
    let lsData = localStorage.getItem('Token');
    if(lsData !=null){
        result = true;
    }
    return result;
}

function loggedInData(){
    return userData;
}

async function addBlogItem(blogItem: string){
    const res = await fetch('pillpalapi.azurewebsites.net/blog/addblogitem',{
        method:"POST",
        headers:{
            'Content-Type': "application/json"
        },
        body:JSON.stringify(blogItem)
    });   
    if(!res.ok){
        const message = `An error has occurred ${res.status}`;
        throw new Error(message);
    }
    let data = await res.json();
    console.log(data);
    return data;
}

async function getBlogItemsByUserId(userId: number){
    const res = await fetch(`pillpalapi.azurewebsites.net/blog/GetItemsByUserId/${userId}`);
    let data = await res.json();
    return data;
}

async function updateBlogItem(blogItem: string){
    const res = await fetch('pillpalapi.azurewebsites.net/blog/UpdateBlogItem',{
        method:"POST",
        headers:{
            'Content-Type': "application/json"
        },
        body:JSON.stringify(blogItem)
    });   
    if(!res.ok){
        const message = `An error has occurred ${res.status}`;
        throw new Error(message);
    }
    let data = await res.json();
    console.log(data);
    return data;
}


export {createAccount, login, GetLoggedInUserData, GetPublishedBlogItems, checkToken, loggedInData, addBlogItem, getBlogItemsByUserId, updateBlogItem};




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

<></>