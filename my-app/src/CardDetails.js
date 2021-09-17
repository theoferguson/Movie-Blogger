import { useState } from "react"

function CardDetails ({issueRequest, setIssueRequest}){    
    const [formData, setFormData] = useState("");
    
    function fetchInformation(fixedWord){
        fetch(`http://www.omdbapi.com/?t=${fixedWord}&apikey=fcba9066`)
        .then(resp=>resp.json())
        .then(data => handleMoviePost(data))
    }
    const addCardForm = 
    <>
        <form>
        <input className="form-floating mb-3" value={formData} onChange={handleChange} type="text" name="addMovie" placeholder='name of movie'></input>
        <button className="btn btn-secondary" onClick={handleMovieSubmit} type="submit">Add Movie 🎥</button>
        </form>
    </>
    function handleChange (event){
        setFormData(event.target.value)
        
    }

    function handleMovieSubmit(event){
        event.preventDefault()
        handleMovieAdd(formData)
    }

    function handleMovieAdd(formData) {
    
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


        function handleMoviePost(data) {
            
            fetch(`http://localhost:3000/movies`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(res => res.json())
                .then(json => {
                    console.log(json)
                    setIssueRequest(!issueRequest)
                    setFormData("")
                })
        };







    return(
        <>
            {addCardForm}  
        </>
    )
}
export default CardDetails