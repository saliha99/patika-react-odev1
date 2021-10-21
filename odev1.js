import fetch from "node-fetch"

async function getData(userid) {
    const users=await(
        await fetch("https://jsonplaceholder.typicode.com/users/"+userid)
    ).json()

    const post=await(
        await fetch("https://jsonplaceholder.typicode.com/posts?"+userid)
    ).json()

    console.log("users",users)
    console.log("post",post)
}
getData(1);