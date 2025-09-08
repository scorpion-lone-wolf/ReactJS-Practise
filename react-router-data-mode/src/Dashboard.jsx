import { NavLink } from "react-router-dom";

const Dashboard = () => {
  return (
    <div
      style={{
        background:
          "linear-gradient(90deg,rgba(42, 87, 155, 1) 0%, rgba(113, 87, 199, 1) 50%, rgba(168, 83, 237, 1) 100%)",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center",
      }}
    >
      <h2 style={{}}>Welcome to dashboard </h2>
      <p
        style={{
          width: "80%",
        }}
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur dolor eveniet sunt qui
        debitis, reiciendis iusto deleniti exercitationem repudiandae molestiae ab aut dolores
        possimus nulla enim ea delectus vitae repellendus. Lorem ipsum dolor, sit amet consectetur
        adipisicing elit. Aspernatur dolor eveniet sunt qui debitis, reiciendis iusto deleniti
        exercitationem repudiandae molestiae ab aut dolores possimus nulla enim ea delectus vitae
        repellendus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur dolor
        eveniet sunt qui debitis, reiciendis iusto deleniti exercitationem repudiandae molestiae ab
        aut dolores possimus nulla enim ea delectus vitae repellendus. Lorem ipsum dolor, sit amet
        consectetur adipisicing elit. Aspernatur dolor eveniet sunt qui debitis, reiciendis iusto
        deleniti exercitationem repudiandae molestiae ab aut dolores possimus nulla enim ea delectus
        vitae repellendus. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
        dolor eveniet sunt qui debitis, reiciendis iusto deleniti exercitationem repudiandae
        molestiae ab aut dolores possimus nulla enim ea delectus vitae repellendus.
      </p>
      <NavLink to={"/login"}>
        <button
          style={{
            background: "violet",
            width: "7rem",
            height: "3rem",
            borderRadius: "1rem",
          }}
          title="login"
        >
          Click to Login
        </button>
      </NavLink>
    </div>
  );
};

export default Dashboard;
