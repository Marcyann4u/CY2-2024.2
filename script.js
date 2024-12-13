function fetchJSONData() {
    fetch("./alunos.json")
        .then((res) => {
            if (!res.ok) {
                throw new Error
                    (`HTTP error! Status: ${res.status}`);
            }
            return res.json();
        })
        .then((data) => 
              console.log(data["name"])
    
    )
        .catch((error) => 
               console.error("Unable to fetch data:", error));
}
fetchJSONData();