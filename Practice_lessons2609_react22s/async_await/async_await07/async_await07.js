'use strict';

/*
Complete the getTweetDetails function such that it fetches the following endpoint
https://programmingjs-90a13-default-rtdb.europe-west1.firebasedatabase.app/tweet.json
and then calls the showAuthorName function with the full name of tweet author
(the full name should contain a space character  between the first name and the last name).
You should use async/await */

const getTweetDetails = async () => {
    // TODO using async/await
   const response = await fetch("https://programmingjs-90a13-default-rtdb.europe-west1.firebasedatabase.app/tweet/author.json")
   const data = await response.json()
   const fullName = `${data.details.firstName} ${data.details.lastName}`;
   showAuthorName(fullName);
    // const data = await response.json()
    // console.log(data.details.firstName +" " + data.details.lastName);
};

// do NOT modify this function
function showAuthorName(fullName) {
    console.log(fullName);
}

// Sample usage - do not modify
getTweetDetails();
