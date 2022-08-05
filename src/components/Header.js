import email from '../images/email.png'

export const Header = () => {
    return(  <div
        style={{
          width: "100vw",
          height: "15vh",
          background: "white",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <div
          style={{
            width: "30vw",
            height: "100%",
            background: "white",
            display: "flex",
            alignItems: "center",
            paddingLeft: "30px",
          }}
        >
          Logo
        </div>
        <div
          style={{
            width: "40vw",
            height: "100%",
            background: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{ display: "flex", gap: "40px" }}>
            <a style={{ textDecoration: "none", color: "black" }} href="">
              {" "}
              home
            </a>
            <a style={{ textDecoration: "none", color: "black" }} href="">
              {" "}
              about
            </a>
            <a style={{ textDecoration: "none", color: "black" }} href="">
              {" "}
              portfolio
            </a>
            <a style={{ textDecoration: "none", color: "black" }} href="">
              {" "}
              pages{" "}
            </a>
          </div>
        </div>
        <div
          style={{
            width: "30vw",
            height: "100%",
            background: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div style={{display:'flex',gap:'5px'}}> 
            <div><img src={email}/></div>
            <div style={{display: 'flex',alignItems: 'center'}}>
              <p style={{padding: 0,margin: 0,display:'flex',alignItems: 'center'}}>
                oktawia_k@wp.pl
              </p>
            </div>
          </div>
        </div>
      </div>)
}