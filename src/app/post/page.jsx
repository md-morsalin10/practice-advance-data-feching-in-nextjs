
//2. simple functional data fetching
// const getPost =async ()=>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     return res.json()
// }



//3. try catch data fetching 
// const getPost =async ()=>{
//     try{
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//     return res.json()
//     }
//     catch(err){
//         throw new Error ('failed to fetch data')
//     }
// }

const getPost =async ()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if(!res.ok){
        throw new Error ('Failed to fetch data')
    }
    return res.json()
}

const PostPage =async() => {
    // 1.Simple way o fetching

    // const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    // const data = await res.json();

    const data = await getPost();

    return (
        <div>
            <p>Total Post: {data.length}</p>
        </div>
    );
};

export default PostPage;