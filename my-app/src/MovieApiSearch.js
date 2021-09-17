import React, {useState} from "react";
import OneMore from "./OneMore";
function MovieApiSearch(){
    const [formData, setFormData] = useState("")
    const [searchMovieData, setSearchMovieData] = useState("")

    function handleChange(event){
        setFormData(event.target.value)
        handleInputFix(formData)
    }

    function handleInputFix(formData) {
    
        let fixedWord = "";
        let artistInput = formData
        for (let i = 0; i < artistInput.length; i++) {
            if (artistInput[i] === ' '){
                fixedWord += '_';
            } 
            else {
            fixedWord += artistInput[i];
            } }
          // console.log(fixedWord)
            fetchInformation(fixedWord)
        }

        function fetchInformation(fixedWord){
            fetch(`http://www.omdbapi.com/?s=${fixedWord}&apikey=fcba9066`)
            .then(resp=>resp.json())
            .then(data =>{
                setSearchMovieData(data)
                console.log(data)})
        }
      

    return(
        <div>
        <input className="form-floating mb-3" value={formData} onChange={handleChange} type="text" name="searchMovieApi" placeholder='name of movie'></input>
        {searchMovieData.Response === 'True'? <OneMore searchMovieData={searchMovieData}/>:null}
        </div>
        

    )
}


export default MovieApiSearch;