import { Outlet, useLoaderData, useNavigate, useSubmit } from "react-router-dom";

const AppLayout = () => {
  const { userName } = useLoaderData();
  const submit = useSubmit();
  const navigate = useNavigate();
  const headerFooterStyle = {
    height: "100%",
    background:
      "linear-gradient(90deg,rgba(42, 87, 155, 1) 0%, rgba(113, 87, 199, 1) 50%, rgba(168, 83, 237, 1) 100%)",
    textAlign: "center",
    fontSize: "3rem",
    border: "1px solid",
    position: "relative",
  };
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <header style={{ height: "10%" }}>
        <div
          style={headerFooterStyle}
          onClick={() => {
            navigate("/");
          }}
        >
          I am a header
        </div>
        {userName && (
          <button
            style={{
              position: "absolute",
              right: "10px",
              top: "20px",
              backgroundColor: "white",
              borderRadius: "5px",
              padding: ".2rem",
            }}
            onClick={() => {
              submit(null, { method: "post", action: "/logout" });
            }}
          >
            Logout
          </button>
        )}
      </header>
      {/* renders the children component of this Applayout route */}
      {<Outlet />}
      <footer style={{ ...headerFooterStyle, height: "10%" }}>I am a footer</footer>
    </div>
  );
};

export default AppLayout;
