import photo from "../images/photo_left.png";
import { Header } from "../components/Header";
export const Home = () => {
  return (
    <>
      <Header />
      <div
        style={{
          width: "100vw",
          height: "85vh",
          background: "black",
          display: "flex",
        }}
      >
        <div
          style={{
            width: "50%",
            height: "100%",
            background: "white",
            display: "flex",
            alignItems: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              height: "70%",
              background: "white",
              paddingLeft: "30px",
              justifyContent: "center",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <p
              style={{
                fontSize: "20px",
                padding: "0px",
                margin: "0px",
                marginBottom: "20px",
                fontWeight: "500",
              }}
            >
              Hi I'm Oktawia Kustra{" "}
            </p>
            <p
              style={{
                fontSize: "50px",
                padding: "0px",
                margin: "0px",
                fontWeight: "600",
              }}
            >
              I enjoy designing
            </p>
            <p
              style={{
                fontSize: "50px",
                padding: "0px",
                margin: "0px",
                fontWeight: "600",
              }}
            >
              tech websites and
            </p>{" "}
            <p
              style={{
                fontSize: "50px",
                padding: "0px",
                margin: "0",
                fontWeight: "600",
              }}
            >
              digital products
            </p>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                marginTop: "20px",
              }}
            >
              <button
                style={{
                  minWidth: "150px",
                  padding: "20px",
                  borderRadius: "30px",
                  borderColor: "transparent",
                  color: "white",
                  backgroundColor: "black",
                }}
              >
                Get in touch
              </button>
            </div>
          </div>
        </div>
        <div
          style={{
            width: "50%",
            height: "100%",
            background: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={photo} />
        </div>
      </div>
    </>
  );
};
