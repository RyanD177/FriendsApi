
async function getFriendsApi (){ 
const API_URL = "http://api.tvmaze.com/shows/431?embed[]=episodes&embed[]=cast"
const response =  await fetch (API_URL);
const data = await response.json();

//Choose an array method to implement for each of the incomplete functions.
//You MUST only use a combination of MAP, FILTER, and REDUCE array functions in order to accomplish your goal.
//No use of for loops of any kind or the forEach function is permitted.
console.log(`Gunther Count: ${getGuntherCount(data)}`);


}
	// COMPLETE THE FOLLOWING FUNCTIONS BY IMPLEMENTING MAP, REDUCE, OR FILTER 
	// (or a combination) ON THE PROVIDED JSON DATA
  //1 - Implement the function called getGuntherCount which returns the total number of episodes 
	        // where the character Gunther is mentioned in the episode summary.
 function getGuntherCount(data) { // <- you may or may not need to define parameters for your function
		
const episodes = data._embedded.episodes;
console.log(episodes);
const getGuntherCount = episodes.reduce((count,episode) => {
if(episode.summary.includes("Gunther")){
  return   count + 1 
}
return count
},0);

return getGuntherCount;
}


getFriendsApi();








