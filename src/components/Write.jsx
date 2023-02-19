import '../style/write.css'
const Write = () => {
  return (
    <div className='write'>
     <img
        className="writeImg"
        src="https://images.squarespace-cdn.com/content/v1/5fe4caeadae61a2f19719512/1610912652422-5DB14EV6QR7GBFBE9U2W/41.jpg"
        alt=""
      />
    <form className='writeForm'>
        <div className='writeFormGroup'>
        <label htmlFor='fileInput'>
            <i className='writeIcon fas fa-plus'></i>
        </label>
            <input type='file' id='fileInput' style={{display:"none"}}/>
            <input type='text' placeholder='Title' className='writeInput' autoFocus={true}/>
        </div>
        <div className='writeFormGroup'>
            <textarea placeholder='Tell your story....' type="text" className='writeInput writeText' ></textarea>
        </div>
        <button className='writeSubmit' type="submit" >Publish</button>
    </form>
      
    </div>
  )
}

export default Write
