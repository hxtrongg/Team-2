import React from 'react'

const Upload = () => {
  return (
    <>
    <form action="http://localhost:3000/upload" encType="multipart/form-data" method="POST"> 
       <input type="file" name="myFile" />
       <input type="submit" value="Upload a file"/>
    </form>
    </>
    
  )
}

export default Upload
 

 

