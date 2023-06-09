let userData: any;

async function createAccount(createdUser: object) {
    const res = await fetch('Https://pillpalapi.azurewebsites.net/user/AddUser', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(createdUser)
    });
    if (!res.ok) {
        const message = `An error has occurred ${res.status}`;
        throw new Error(message);
    }
    let data = await res.json();
    console.log(data);
    return data;
}

async function login(loginUser: object){
    const res = await fetch('Https://pillpalapi.azurewebsites.net/User/login',{
        method:"POST",
        headers:{
            'Content-Type': "application/json"
        },
        body: JSON.stringify(loginUser)
    });
    if (!res.ok) {
        const message = `An error has occurred ${res.status}`;
        throw new Error(message);
    }
    let data = await res.json();
    console.log(data);
    return data;
}


//Create endpoint for this
async function GetLoggedInUserData(username: string){
    let res= await fetch(`https://pillpalapi.azurewebsites.net/User/UserSearch/${username}`)
    let data = await res.json();
    userData = data;
    console.log(userData);
}

async function GetIdByUserData(username: string){
    let res = await fetch(`https://pillpalapi.azurewebsites.net/User/IdUserSearch/${username}`)
    return res;
}

async function GetNewId(){
    let res = await fetch(`https://pillpalapi.azurewebsites.net/User/HighestId`)
    let data = await res.json();
    return data;
}

async function GetLoggedInUserDataById(UserId: number){
    let res = await fetch(`https://pillpalapi.azurewebsites.net/User/IdSearch/${UserId}`)
    let data = await res.json();
    return data;
}

async function GetPublishedBlogItems() {
    let res = await fetch('Https://pillpalapi.azurewebsites.net/blog/GetPublishedItems');
    let data = await res.json();
    return data;
}

function checkToken() {
    let result = false;
    let lsData = localStorage.getItem('Token');
    if (lsData != null) {
        result = true;
    }
    return result;
}

function loggedInData() {
    return userData;
}

async function addBlogItem(blogItem: string) {
    const res = await fetch('Https://pillpalapi.azurewebsites.net/blog/addblogitem', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(blogItem)
    });
    if (!res.ok) {
        const message = `An error has occurred ${res.status}`;
        throw new Error(message);
    }
    let data = await res.json();
    console.log(data);
    return data;
}

async function getBlogItemsByUserId(userId: number) {
    const res = await fetch(`Https://pillpalapi.azurewebsites.net/blog/GetItemsByUserId/${userId}`);
    let data = await res.json();
    return data;
}

async function updateBlogItem(blogItem: string) {
    const res = await fetch('Https://pillpalapi..azurewebsites.net/blog/UpdateBlogItem', {
        method: "POST",
        headers: {
            'Content-Type': "application/json"
        },
        body: JSON.stringify(blogItem)
    });
    if (!res.ok) {
        const message = `An error has occurred ${res.status}`;
        throw new Error(message);
    }
    let data = await res.json();
    console.log(data);
    return data;
}


export {createAccount, login, GetLoggedInUserData, GetPublishedBlogItems, checkToken, loggedInData, addBlogItem, getBlogItemsByUserId, updateBlogItem, GetLoggedInUserDataById, GetIdByUserData, GetNewId};

