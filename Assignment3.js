import {FaUser} from "react-icons/fa"

export const HeaderComponent = () => {


    return (
        <div id="header" key="header" style={{display: 'flex', alignItems:'center', justifyContent: "space-between"}}>
            <img src="https://img.freepik.com/free-vector/cute-astronaut-standing-with-folding-hand-cartoon-vector-icon-illustration-science-technology-icon_138676-5893.jpg?size=338&ext=jpg" 
            style={{
                width: '50px',
                heigh: '20px',
                marginLeft: '30px'
            }} 
            alt="namsthe_logo"/>
            <input type="text" style={{width: '350px', height: '15px'}}></input>
            <FaUser style={{marginRight: '25px'}}/>
        </div>
    )

};